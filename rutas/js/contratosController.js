app.controller('contratosController', ['$scope', '$http', function($scope, $http){


    console.trace('contratosController');
    $scope.titulo = "Ejercicio Filter, Map etc";
    $scope.contratos = [];
    $scope.ejercicio1 = [];
    $scope.ejercicio2 = [];
    $scope.ejercicio3 = [];
    $scope.ejercicio4 = [];
    $scope.tiposProductos = [];

    this.$onInit = function(){
        console.trace('contratosController onInit'); 

        // CUIDADO llamada Asincrona !!!
        $http.get('../contratos.json').then(function (response) {
            console.trace('llamada correcta');
            $scope.contratos = response.data;            
            $scope.ejercicios();

        }).catch(function (response) {
            console.warn('ERROR llamda %o', response);
       });


    }; //onInit   


    /**
     * Hacemos esta funcion para calcular los datos del ejercicio
     */
    $scope.ejercicios = function(){
        console.trace('ejercicios....');

        //Tipos de Productos sin repeticiones
        $scope.tiposProductos = $scope.contratos.map(e=>e.TIPPRODUCT).filter((v,i,a) => {
             return a.indexOf(v) === i;
        });

        // Obtengan todos los contratos cuyo campo TIPPRODUCT tenga un valor determinado, por ejemplo “KT” (filter)
        $scope.ejercicio1 = $scope.contratos.filter(e=>e.TIPPRODUCT === "KT");
      

        //Obtengan un nuevo array en el que cada elemento contenga:
        // código de contrato concatenado con el digito de control (campos codContrat y digContrat)
        // saldo en euros (campo SALCONTRAT dividido entre 100) (map)
        $scope.ejercicio2 = $scope.contratos.map( e => {

            let codContrato = (e.codContrat == undefined) ? "" : e.codContrat.toString() ;
            let digContrat = (e.digContrat == undefined) ? "" : e.digContrat.toString() ;
            let cc = codContrato + digContrat;

            return {
                "codigoContrato" : cc,
                "saldo": (e.SALCONTRAT / 100)
            }

        }).filter( e => {
            return ( e.codigoContrato != "" && e.saldo > 0 ) ;
        });


        // Obtengan todos los contratos que en su campo acciones contengan 
        // la clave “SITUACION” (filter por la subestructura)
        $scope.ejercicio3 = $scope.contratos.filter( v =>{

           if ( v.ACCIONES != undefined ){

             return  v.ACCIONES.filter( e => e.clave == "SITUACION" ).length === 1 ;
                
           }else{
               return false;
           }
            
        });


        //Obtengan un array que contenga todas las acciones posibles (map y spread)

        /*
        $scope.ejercicio4 = $scope.contratos
            .filter( v => v.ACCIONES ) //filtrar elementos con Acciones
            .map( v => {
                
                let accion = v.ACCIONES[0];
                v.ACCIONES;
                return accion;

            });


        //TODO por resolver
       $scope.ejercicio4 =  $scope.contratos.map( e => {
            if (e.ACCIONES){
                return  [  ...new Set [ e.ACCIONES] ];
            }else{
                return  [ ...new Set[ {"titulo":"","clave":""} ]];
            }
          
        }); 
        */


            var test = [
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 2, PlaceRef: "*00022", Component: "BAXI10R", SubLocCode: "KIT", BarCode:""},
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 3, PlaceRef: "*00011", Component: "ANR190", SubLocCode: "B1", BarCode: ""}
              ]
             
              var uniq = [...new Set(test.map(({id}) => id))].map(e => test.find(({id}) => id == e));	
              console.log(uniq) 
            


            //https://overflowjs.com/posts/Map-Reduce-Filter-In-Javascript.html              
            const users = [
                {
                  id: 1,
                  name: "Jonathon Haley",
                  username: "Monte.Weber2",
                  email: "Daphne43@yahoo.com",
                  phone: "1-563-675-1857 x11708",
                  website: "carmela.net",
                  password: "hashed_password"
                },
                {
                  id: 2,
                  name: "Dean John",
                  username: "dd.1",
                  email: "deno@google.com",
                  phone: "1-123-543-1857 123212",
                  website: "dd.net",
                  password: "Dean_hashed_password"
                }];

           
                const hobbies = ['chess', 'pool'];
                const newUsers = users.map(u => ({...u, hobbies}))


                const contactInfo = users.map(({email, website, phone}) => ({email, website, phone}));

                newUsers = users.map(u => u.id == 2? ({...u, name: 'te'}): u);

                newUsers = users.map(
                    ({id, email, name, username, phone, password}) => 
                    ({id, email, username, email, phone, password})
                    );

                console.log('parar');

    };


}]);
