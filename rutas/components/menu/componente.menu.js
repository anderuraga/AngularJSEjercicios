angular.
  module('angularApp').  
  component('componenteMenu', {   
    templateUrl: './components/menu/template.menu.html',
    controller: function MenuController($scope) {

      console.trace('MenuController');  
     
      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url": "#!/",
          "active": false
        },
        {
          "nombre": "Profesores",
          "url": "#!/profesores",
          "active": true
        },
        {
          "nombre": "Componentes",
          "url": "#!/componente1",
          "active": false
        },       
        {
          "nombre": "Creditos",
          "url": "#!/creditos",
          "active": false
        }
      ];
      
    
      $scope.cambiarActivo = function( ruta ){
        console.trace('click cambiarActivo %o', ruta);

        //desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        //activar solo sobre la hemos hecho click
        ruta.active = true;

      }//cambiarActivo



    }// controlador

  });