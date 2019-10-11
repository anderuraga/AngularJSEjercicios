angular.
    module('angularApp').
    component('componenteFmr', {  // <componente-fmr> </componente-fmr>
        templateUrl: './components/filter-map-reduce/template.html',
        controller: function FmrController($scope, $http) {

          console.trace('FmrController');

          $scope.frutas = [
            {
              "nombre": "Manzana",
              "precio": 7,
              "imagen": "manzana.png",
              "color": "rojo"
            },
            {
              "nombre": "Fresa",
              "precio": 5,
              "imagen": "fresa.png",
              "color": "rojo"
            },
            {
              "nombre": "Pera",
              "precio": 1,
              "imagen": "pera.png",
              "color": "verde"
            },
            {
              "nombre": "Kiwi",
              "precio": 2,
              "imagen": "kiwi.png",
              "color": "marron"
            },
            {
              "nombre": "Uva",
              "precio": 6,
              "imagen": "uva.png",
              "color": "morado"
            },
            {
              "nombre": "Sandía",
              "precio": 7,
              "imagen": "sandia.png",
              "color": "rojo"
            },
            {
              "nombre": "Naranja",
              "precio": 3,
              "imagen": "naranja.png",
              "color": "naranja"
            },
            {
              "nombre": "Piña",
              "precio": 3,
              "imagen": "pina.png",
              "color": "amarillo"
            },
            {
              "nombre": "Platano",
              "precio": 2,
              "imagen": "platano.png",
              "color": "amarillo"
            }
          ];

          $scope.frutasFilter = $scope.frutas.filter( elem => elem.color == 'rojo' );
          $scope.frutasMap = $scope.frutas.map( elem => elem.nombre );
          $scope.frutasMapNombreColor = $scope.frutas.map( elem => {
                                                              return {
                                                                "nombre": elem.nombre,
                                                                "color": elem.color
                                                                      }                                                            } );

          $scope.frutasReduce = $scope.frutas.map(elem=>elem.precio).reduce( (acum,cv) => acum+cv );
            
        } // FmrController
    });