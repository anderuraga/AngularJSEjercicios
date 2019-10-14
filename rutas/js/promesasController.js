app.controller('promesasController', ['$scope', '$http', '$q', '$timeout', function($scope, $http, $q, $timeout){


    console.trace('promesasController');
    $scope.titulo = "Promesas - Ejercicio";
    $scope.sumar1 = 0;
  
    /**
     * funcion Asincrona que retorna una promesa y sumar dos enteros
     * usamos $q para el asincronismo, puesto que javascript es sincrono
     * 
     * @param numero1: entero a sumar
     * @param numero2: entero para su,ar
     * @param fallo: boolean para hacer que fucione o falle la promesa
     * @param espera: timepo en milisegundos para que termine la funcion
     * 
     */
    $scope.sumar = function( numero1, numero2 , fallo , espera){

        console.trace('sumar');
        var q = $q.defer();

        $timeout( function(){

            if ( !fallo ){
                let num = numero1 + numero2;
                q.resolve( num );   // Se cumple o se resuelve la promesa => then
            }else{
                q.reject('Lo sentimos pero fallo'); // falla
            }

        },  espera ); 

        return q.promise;

    }// sumar


    // vamos a llamar a la funcion asincrona 
    $scope.sumar( 2, 3 , false, 2000 ).then(function (result) {
        console.debug('promesa cumplida resultado %o', result);

    }).catch(function (result) {
        console.debug('promesa rejectada %o', result);

    });

    // volvemos a llamar
    $scope.p2 = $scope.sumar( 5, 5 , false, 5000 );
    $scope.p2.then(function (result) {
        console.debug('promesa cumplida resultado %o', result);

    }).catch(function (result) {
        console.debug('promesa rejectada %o', result);

    });





}]);
