angular.
  module('componentesApp').  // nombre App
  component('saludoUsuario', {   // nombre componente => para usarlo <saludo-usuario></saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'Mundo';
    }
  });