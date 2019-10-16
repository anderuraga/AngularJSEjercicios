app.controller('formularioController', ['$scope', 'servicioConstantes',
                                      function($scope, servicioConstantes){


    console.trace('formularioController');    

    $scope.titulo = "Formularios";
    $scope.fomulario = {
        "email" : servicioConstantes.email,
        "nombre" : servicioConstantes.autor
    };

    $scope.postear = ()=>{

        console.trace('formulario sumitado %o', $scope.fomulario );
    }

}]);
