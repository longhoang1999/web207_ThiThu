window.EditPhoneController = function($scope, $routeParams, $http, $location){
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

    $http.get(`${apiURL}/${$routeParams.id}`)
        .then(response => {
            $scope.inputValue.ma = response.data.ma
            $scope.inputValue.ten = response.data.ten
            $scope.inputValue.hang = response.data.hang
            $scope.inputValue.gia = response.data.gia
        })




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

    $scope.onUpdate = function(){
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
        if($scope.inputValue.gia == "" || $scope.inputValue.gia == null){
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
                ten:  $scope.inputValue.ten,
                hang: $scope.inputValue.hang,
                gia: $scope.inputValue.gia,
            }
            $http.put(`${apiURL}/${$routeParams.id}`, newItem)
                .then(response => {
                    $location.path("/list-phone")
                })
        }
    }
}