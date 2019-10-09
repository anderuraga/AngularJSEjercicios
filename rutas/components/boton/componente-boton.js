angular.
  module('angularApp').  // nombre App
  component('componenteBoton', {   
    templateUrl: './components/boton/template.html',
    controller: function BotonController() {

      console.trace('BotonController');  
      this.nombre = 'Mundo';
      this.contador = 0;

      //funciones
      this.sumar = function(){
        console.trace('click sumar');
        this.contador++;
      };

    }
  });