app.controller('serviceController', ['$scope', 
                                     '$log', 
                                     'servicioConstantes', 
                                     'rectanguloService',
                                      function($scope,
                                               $log,
                                               servicioConstantes,
                                               rectanguloService){


    console.trace('serviceController');    
    $log.info('serviceController con $log');    

    $scope.titulo = "Servicios" + servicioConstantes.titulo ;

    //declarar esta variable para poder usarlo en HTML
    $scope.constantes = servicioConstantes;

    // usamos el servicio Rectangulo                                    
    rectanguloService.setAncho(2);
    rectanguloService.setAlto(3);
    $scope.area = rectanguloService.getArea();

    
}]);
