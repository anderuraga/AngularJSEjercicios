app.controller('serviceController', ['$scope', '$log', 'servicioConstantes', 
                                      function($scope,  $log, servicioConstantes){


    console.trace('serviceController');    
    $log.info('serviceController con $log');    

    $scope.titulo = "Servicios" + servicioConstantes.titulo ;
    
}]);
