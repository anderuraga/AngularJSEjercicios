
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
    .when('/profesores',{
        templateUrl: 'parciales/profesores.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
