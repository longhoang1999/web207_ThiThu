window.AddPhoneController = function($scope, $http, $location){
    var apiURL = "http://localhost:3000/phone";
    $scope.init = function(){
        $scope.inputValue = {
            ma: "",
            ten: "",
            hang: "Samsung",
            gia: ""
        }
    }
    $scope.init();


    $scope.validate = function() {
        $scope.checkEmpty = {
            ma: false,
            ten: false,
            hang: false,
            gia: false
        }
        $scope.checkDuong = {
            gia: false
        }
    }

    $scope.onCreate = function(){
        $scope.validate();
        let check = true
        // validate
        if($scope.inputValue.ma == ""){
            check = false
            $scope.checkEmpty.ma = true
        }
        if($scope.inputValue.ten == ""){
            check = false
            $scope.checkEmpty.ten = true
        }
        if($scope.inputValue.hang == ""){
            check = false
            $scope.checkEmpty.hang = true
        }
        if($scope.inputValue.gia == ""){
            check = false
            $scope.checkEmpty.gia = true
        }
        if(Number($scope.inputValue.gia) < 100){
            check = false
            $scope.checkDuong.gia = true
        }

        if(check){
            var newItem = {
                ma: $scope.inputValue.ma,
                ten: $scope.inputValue.ten,
                hang: $scope.inputValue.hang,
                gia: $scope.inputValue.gia,
            }
            $http.post(apiURL, newItem)
                .then(response => {
                    $location.path('/list-phone')
                })
        }
    }
}