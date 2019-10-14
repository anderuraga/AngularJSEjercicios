app.controller('contratosController', ['$scope', '$http', function($scope, $http){


    console.trace('contratosController');
    $scope.titulo = "Ejercicio Filter, Map etc";
    $scope.contratos = [];
    $scope.ejercicio1 = [];
    $scope.ejercicio2 = [];
    $scope.tiposProductos = [];

    this.$onInit = function(){
        console.trace('contratosController onInit'); 

        // CUIDADO llamada Asincrona !!!
        $http.get('../contratos.json').then(function (response) {
            console.trace('llamada correcta');
            $scope.contratos = response.data;            
            $scope.ejercicios();

        }).catch(function (response) {
            console.warn('ERROR llamda %o', response);
       });


    }; //onInit   


    /**
     * Hacemos esta funcion para calcular los datos del ejercicio
     */
    $scope.ejercicios = function(){
        console.trace('ejercicios....');

        //Tipos de Productos sin repeticiones
        $scope.tiposProductos = $scope.contratos.map(e=>e.TIPPRODUCT).filter((v,i,a) => {
             return a.indexOf(v) === i;
        });

        // Obtengan todos los contratos cuyo campo TIPPRODUCT tenga un valor determinado, por ejemplo “KT” (filter)
        $scope.ejercicio1 = $scope.contratos.filter(e=>e.TIPPRODUCT === "KT");
      

        //Obtengan un nuevo array en el que cada elemento contenga:
        // código de contrato concatenado con el digito de control (campos codCONTRAT y digContrat)
        // saldo en euros (campo SALCONTRAT dividido entre 100) (map)
        $scope.ejercicio2 = $scope.contratos.map( e => {

            let cc = e.codContrat.toString() + e.digContrat.toString();
            if ( cc != "-" ){
                cc = "";
            }

            return {
                "codigoContrato" : cc,
                "saldo": (e.SALCONTRAT / 100)
            }

        }).filter( e => {
            return ( e.codigoContrato != "" && e.saldo > 0 ) ;
        });

    

    };


}]);
