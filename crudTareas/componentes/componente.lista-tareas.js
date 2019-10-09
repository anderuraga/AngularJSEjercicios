angular.
  module('tareasApp').  
  component('listadoTareas', {   
    templateUrl: './componentes/template.lista-tareas.html',
    controller: function ListadoTareasController($http, $scope, $sce) {

      console.trace('ListadoTareasController');  
      
      // propiedades
      /////////////////////////////////////////////////////////////////     
      $scope.titulo = "Listado Tareas";
      $scope.descripcion = "";
      $scope.mensajeValidacion = "";
      $scope.tareas = [];
      $scope.ENDPOINT = "http://localhost:3000/tareas/";

      // eventos del controlador
      /////////////////////////////////////////////////////////////////

      this.$onInit = function(){
        console.trace('ListadoTareasController onInit');

        $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);
                $scope.mensajeValidacion = "Error de conexión con WebService";

            });

      };



      // funciones
      /////////////////////////////////////////////////////////////////

      $scope.crearTarea = function(){
          console.trace('click boton crearTarea con descripcion=' + $scope.descripcion );

          let descripcion = $scope.descripcion.trim();
          if ( descripcion.length <= 2 ){

             $scope.mensajeValidacion = 'Por favor escribe una descripción mas larga';

          }else{

            console.trace('llamada post');
            $scope.mensajeValidacion = '';

            let data = {            
                "completada": false,
                "descripcion": descripcion
            };

            $http.post($scope.ENDPOINT, data)
                .then(function(response){   // success antiguo

                    console.trace('reponse OK data=%o', $scope.ENDPOINT, response);
                   

                }, function(response){    // gestion del error

                    console.warn('Tenemos un ERROR response: %o' , response);

                });

          }

      } // crearTarea


      $scope.eliminarTarea = function( tarea ) {

            console.trace('click eliminarTarea %o', tarea);

            let url = $sce.trustAsResourceUrl( $scope.ENDPOINT + tarea.id );
            $http.delete( url ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });


      };// eliminarTarea


      $scope.completado = function(tarea){

            console.trace('Click completar tarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            let data = {            
                "completada": !tarea.completada                
            };
            $http.patch( url , data ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });

      }// completado


      
      
      $scope.modificarDescripcion = function( tarea ){

        console.trace('Click modificarDescripcion tarea %o', tarea);

        //ventana pop-up de confirmacion
        if ( confirm('¿Estas seguro que quieres Modificar?') ){

            let url = $scope.ENDPOINT + tarea.id;
            let data = {            
                "descripcion": tarea.descripcion
            };
            $http.patch( url , data ).then(function(response){   

                console.trace('reponse OK data=%o', response);               

            }, function(response){    

                console.warn('Tenemos un ERROR response: %o' , response);

            });
        }    

  }// modificarDescripcion


    }
  });