/* javascript para nuestra App */

var app = angular.module(
                            'profesorApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 
 app.controller(
     'profesorController',      // nombre controlador
     function( $scope, $timeout ){                // la programacion del controlador


            // propiedades del modelo
            $scope.esVisble = false;
            $scope.animacion = "animated fadeInUp";
            $scope.editando = {};            
            $scope.profesor = {
                nombre: "Profesor Frink",
                bio: "Saludos estudiante, mi nombre es Frink, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
                edad: 67,
                foto: "images/profesor.png"
            };


            // funciones
            $scope.editar = function(){
                console.trace('click boton editar');
                $scope.esVisble = true;
                $scope.animacion = "animated fadeInUp";
                angular.copy( $scope.profesor, $scope.editando);
            }

            $scope.cancelar = function(){
                console.trace('click boton cancelar');
                $scope.animacion = "animated fadeOutDown";
                $timeout(function(){
                    console.debug('esVisible = false');
                    $scope.esVisble = false;                
                }, 1000);                

                $scope.editando = {};
            }

            $scope.guardar = function(){
                console.trace('click boton guardar');
                $scope.animacion = "animated fadeOutDown";
                $scope.esVisble = false;                
                angular.copy( $scope.editando, $scope.profesor);
            }


 });
 // end profesorController


 app.controller( 'videoController', function($scope, $timeout, $sce){  

           // variable del modelo
           $scope.animacion = "";
           $scope.video = {
               id: 3,
               nombre: "Fito & Fitipaldis - Acabo de llegar (videoclip oficial)",
               codigo: "WVvxcwp3v8Y",
               categoria: {
                    id: 3,
                    nombre: "Musica"
               },
               usuario: {
                   nombre: "Ramoncion",
                   id: 23
               },
               likes: 5
           };

           $scope.url = $sce.trustAsResourceUrl( "https://www.youtube.com/embed/" + $scope.video.codigo);

           //funciones
           $scope.sumarLike = function(){
                console.trace('click boton like');
                $scope.animacion = "animated pulse";
                $scope.video.likes++;
                $timeout(function(){
                    $scope.animacion = "";
                }, 1000);        
           }
           
           

});
// end videoController

/**
 * Controlador para gestionar Listado de frutas
 */
app.controller( 'frutasController', function($scope){  

    $scope.frutas = ["Manzana","Maracuya","Kiwi","Pera","Fresa"];
    $scope.frutaSeleccionada = "";
    $scope.frutasJson = {"frutas": [
                            {
                                "nombre": "Manzana",
                                "color": "roja"
                            },
                            {
                                "nombre": "Maracuya",
                                "color": "lila"
                            },
                            {
                                "nombre": "Kiwi",
                                "color": "verde"
                            }
                        ]};

    $scope.seleccionado = function( fruta ){
        console.log('click ' + fruta);
        $scope.frutaSeleccionada = fruta;        
    }

});
// end frutasController