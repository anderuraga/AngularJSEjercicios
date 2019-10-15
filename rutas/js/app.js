var app = angular.module('angularApp',['ngRoute','ngSanitize']);


/**
 * Servicio para Constantes
 */

 app.constant("servicioConstantes", {
                                      "titulo": "AngularApp",
                                      "idioma": "es-Es",
                                      "version": "1.0",
                                      "autor": "Ander Uraga",
                                      "github": "https://github.com/anderuraga/AngularJSEjercicios"
                                    } );

/**
 *  Providers
 */

function CancionProvider($http){

  console.log('CancionProvider');
  const ENDPOINT = "http://localhost:8080/cancion/";

  this.listar = function(){    
    console.log('cancionProvider listar ' + ENDPOINT);
    return $http.get(ENDPOINT);

  }// listar

  this.detalle = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider detalle ' + url);
    
  }// detalle

  this.eliminar = function( idCancion ){    
    let url = ENDPOINT + idCancion;
    console.log('cancionProvider eliminar ' + url);
    
  }// eliminar


  this.crear = function( nombreCancion ){    
    let url = ENDPOINT;
    console.log('cancionProvider nombreCancion ' + url);
    
  }// crear

  this.modificar = function( idCancion, nombreCancion ){    
    let url = ENDPOINT  + idCancion;
    console.log('cancionProvider modificar %s  id=%s nombre=%s', url, idCancion, nombreCancion );
    
  }// modificar


}

 app.service("cancionProvider", CancionProvider );


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


