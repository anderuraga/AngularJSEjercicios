app.controller('crudController', ['$scope', 'cancionProvider', 
                                 function($scope, cancionProvider){


    console.trace('crudController');

    // variables del scope del controlador
    $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
    $scope.mensaje = "";
    $scope.nombre = "";
    $scope.cancionEditar = {};
    $scope.canciones = [];

    // Eventos
    this.$onInit = function(){
        console.trace('crudController onInit'); 
        $scope.refrescar();

    };    
    // init


    // funciones
    ///////////////////////////////////////////////////////////////////////////
    $scope.refrescar = () => {
        console.trace('refrescar datos llamando al provider');
        let promesa = cancionProvider.listar();           
        promesa.then( 
            response=>{
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
            },
            response=>{
                console.warn('Llamada Rest ERROR %o', response);
            }
        );
    }


    $scope.nuevaCancion = ( nombre ) => {

        console.trace('click nuevaCancion nombre %s', nombre);

        let p = cancionProvider.crear( nombre);
        p.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.nombre = "";
                $scope.mensaje = "Canción Creada con éxito";

            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje = "Nombre de la canción ya existe";
            }
        );
    }
    //nuevaCancion

    $scope.eliminar = (c) =>{
        console.trace('click eliminar %o', c);
        if ( confirm('¿Estas Seguro?') ){

            cancionProvider.eliminar(c.id).then(
                (response)=>{
                    console.debug('llamada correcta %o', response);
                    $scope.refrescar();                   
                    $scope.mensaje = "Canción Eliminada, sahionara baby";
    
                },
                (response)=>{
                    console.warn('llamada INcorrecta %o', response);
                    $scope.mensaje = "Lo sentimos no se pudo eliminar";
                }
            );
        }// confirm
    }
    //eliminar

    $scope.editar = (c)=>{ $scope.cancionEditar = c };

    $scope.guardar = () => {

        console.trace('click guardar %o', $scope.cancionEditar );

        let p = cancionProvider.modificar( $scope.cancionEditar );
        p.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();
                $scope.nombre = "";
                $scope.mensaje = "Canción Modificada con éxito";

            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje = "Nombre de la canción ya existe";
            }
        );


    }
    //guardar

}]);
