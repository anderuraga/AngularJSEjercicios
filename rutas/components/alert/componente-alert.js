angular.
  module('angularApp').  // nombre App
  component('componenteAlert', {   
    templateUrl: './components/alert/template-alert.html',
    bindings: {
        clase: '@',
        texto: '@'
    },
    controller: function AlertController() {

      console.trace('AlertController');   
      
      $self = this;
      $self.alerta = {};

      this.$onInit = function() {

        console.trace('AlertController onInit');   
        $self.alerta = {
            "texto" : $self.texto,
            "clase" : $self.clase
          };
    
      }//onInit  
    
    }
  });