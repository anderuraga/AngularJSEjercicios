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
          "nombre": "Componente Boton dentro de HTML",
          "url": "#!/componente1",
          "active": false
        },
        {
          "nombre": "Componente Boton sin html",
          "url": "#!/componente2",
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
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        ruta.active = true;
      }

    }// controlador

  });