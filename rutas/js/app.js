var app = angular.module('angularApp',['ngRoute','ngSanitize']);


/**
 * Servicio para Constantes
 */

 app.constant("servicioConstantes", {
                                      "titulo": "AngularApp",
                                      "idioma": "es-Es",
                                      "version": "1.0",
                                      "autor": "Ander Uraga",
                                      "email": "auraga@ipartek.com",
                                      "github": "https://github.com/anderuraga/AngularJSEjercicios"
                                    } );

/**
 *  Servicio o Provider
 */

 app.service("cancionProvider", CancionProvider );
 app.service("pokemonProvider", pokemonProvider );


/**
 * Ejemplo Servicio a traves de una Clase
 */

 // Clase Rectangulo
 function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

//definir Servicio
app.service("rectanguloService",Rectangulo);



//definir filtro en la app
app.filter("capitalizar", function () {
  return function ( cadena ){
    if (cadena != undefined && typeof cadena == 'string'){      
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);      
    }else{
      return "";
    }      
  }
});




