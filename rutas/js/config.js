
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        templateUrl: 'parciales/frutas.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
