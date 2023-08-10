window.DetailPhoneController = function($scope, $routeParams, $http){
    var  apiURL = "http://localhost:3000/phone";
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
}