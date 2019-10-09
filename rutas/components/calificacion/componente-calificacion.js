angular.
  module('componentesApp').  // nombre App
  component('componenteCalificacion', {   
    templateUrl: './components/calificacion/template.html',
    bindings: {
      pnota: '@'  // parametro de entrada 
    },
    controller: function CalificacionController() {

      console.trace('CalificacionController');  
      const NOTA_MIN = 0;
      const NOTA_MAX = 10;
      this.nota = 5;
      this.texto = "Suficiente";

      // Evento para cuando se inicia el controlador
      this.$onInit = function() {
        console.trace('CalificacionController Init');  
        this.nota = +this.pnota; // el + es para parseInt
        this.cambiarTexto();
      }  

      //funciones
      this.sumar = function(){
        console.trace('click sumar');
        if ( this.nota < NOTA_MAX ){
          this.nota++;
          this.cambiarTexto();
        }  
    
      };

      this.restar = function(){
        console.trace('click restar');
        if ( this.nota > NOTA_MIN ){
          this.nota--;
          this.cambiarTexto();
        }  
      };

      this.cambiarTexto = function(){
        console.trace('cambiarTexto');
        switch ( this.nota ) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:        
            this.texto = "Suspendido";
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:  
              this.texto = "Aprobado";
              break;
          case 10:    
              this.texto = "Sobresaliente";
              break;    
        }// switch

      }// cambiarTexto

    }// controlador

  });