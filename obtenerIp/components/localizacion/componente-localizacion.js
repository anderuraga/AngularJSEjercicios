angular.
  module('componentesApp').  // nombre App
  component('componenteLocalizacion', {   // etiqueta para html <componente-localizacion>
    templateUrl: './components/localizacion/template.html',
    controller: function LocalizacionController($http, $sce) {

      console.trace('LocalizacionController');  

      this.SERVICE_URL = $sce.trustAsResourceUrl( "http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK" );
      this.ip = 'x.x.x.x';
      this.region = "";

      //funciones
      this.geolocalizar = function(){

        console.trace('click boton para geolocalizar');

        $http.jsonp( this.SERVICE_URL )
          .success(function(data){

              console.trace('llamada jsonp');

              this.ip = "192.x.x.x";
              this.ciudad = "BAraka";
              this.region = "EH";

          });

        


      };

    }// controller
  });