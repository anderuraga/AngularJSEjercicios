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
       
      this.$onInit = function() {
        console.trace('AlertController onInit');              
      }

      this.$onChanges = function (changes) {
          console.log('onChanges %o', changes);        
      }  
      

    }//controller
  });