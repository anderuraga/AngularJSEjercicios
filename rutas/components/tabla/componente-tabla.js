angular.
  module('angularApp').  // nombre App
  component('componenteTabla', {   
    templateUrl: './components/tabla/template-tabla.html',
    controller: function TablaController($scope,$http) {

      console.trace('TablaController');   

      $scope.frutas = [];
      $scope.colores = [];
      $scope.nombre2e = [];
      $scope.totalEuros = 0;
       
      this.$onInit = function() {
        console.trace('TablaController onInit');     
        let url = "http://localhost:3000/frutas";         
        $http.get(url).then(function (response) {
          
            console.trace('llamda correcta %o', response);
            $scope.frutas = response.data;
            //conseguir colores unicos del array
            $scope.colores = response.data.map(e=>e.color).filter((v,i,a)=>a.indexOf(v)===i);           
            $scope.totalEuros = response.data.map(e=>e.precio).reduce( (pv,cv)=> pv+cv );
        }).catch(function (response) {
             console.warn('ERROR llamda %o', response);
        });
        
      }

     
      

    }//controller
  });