
var app = angular.module('componentesApp', []  );


app.controller('geoController', ['$http' , '$scope', function( $http, $scope){

        console.trace('geoController');
        $scope.data = {};
        $scope.SERVICE_URL = "http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK";

        $scope.geolocalizar = function(){
            console.trace('click boton');

            $http.jsonp($scope.SERVICE_URL).success(function(data){

                console.debug('response OK data = %o', data);
                $scope.data = data;

                $scope.initMap();

            });

        };// geolocalizar



        $scope.initMap = function() {

            console.trace('initMap');
            var myLatLng = { 
                                lat: +$scope.data.geoplugin_latitude, 
                                lng: +$scope.data.geoplugin_longitude
                            };
    
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 10,
              center: myLatLng
            });
    
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: "Estas en " + $scope.data.geoplugin_city
            });

        }; // initMap


} ]);