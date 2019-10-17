app.controller('detalleController', ['$scope', '$routeParams',
                                      function($scope,$routeParams){


    console.trace('detalleController');    

    $scope.id = $routeParams.id;

}]);
