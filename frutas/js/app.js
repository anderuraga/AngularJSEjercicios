var app = angular.module('fruteriaApp', [] );


 /* Controladores */    
 


app.controller( 'frutasController', function($scope){

    // propiedades
    $scope.total = 0;    
    $scope.frutasJson={"frutas":[
        {
            "img":"https://supermercado.eroski.es/images/2388676.jpg",
            "nombre":"Manzana",
            "color": "verde",
            "cantidad":1,
            "precio":2.96
        },
        {   
            "img":"https://supermercado.eroski.es/images/17210.jpg",
            "nombre":"Pera",
            "color": "verde",
            "cantidad":1,
            "precio":1.95
        },
        {   
            "img":"https://supermercado.eroski.es/images/12063319.jpg",
            "nombre":"Kiwi",
            "color": "marron",
            "cantidad":1,
            "precio":1.93
        }


    ]};

    // funciones

    $scope.incrementar = function(fruta){
        console.log("clik incrementar: %o ", fruta );
        fruta.cantidad++;
    }

    $scope.decrementar = function(fruta){
        console.log("clik decrementar: %o ", fruta );
        if ( fruta.cantidad > 0 ){
            fruta.cantidad--;
        }    
    }

    $scope.sumar = function(fruta){
        console.log("clik sumar: %o ", fruta );
        $scope.total += ( fruta.cantidad * fruta.precio );
    }

    $scope.resetear = function(){
        console.log("clik resetear " );
        $scope.total = 0;
    }


});
// end frutasController

