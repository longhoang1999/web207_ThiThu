window.ListPhoneController = function($scope, $http){
    var apiURL = "http://localhost:3000/phone";
    $http.get(apiURL)
        .then(response => {
            $scope.data = response.data
        })


    $scope.confirm = function(id) {
        $scope.idDelete = id
    }

    $scope.onDelete = function(){
        $http.delete(`${apiURL}/${$scope.idDelete}`)
            .then(response => {
                
            })
    }
}