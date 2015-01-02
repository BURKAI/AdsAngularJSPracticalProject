/**
 * Created by Poullo on 1/1/2015.
 */

AdsApp.controller('RegisterCtrl',[
    '$location',
    '$scope',
    'registerData',
    'townsData',
    function(
        $location,
        $scope,
        registerData,
        townsData) {

        var regData={
            "username": "",
            "password": "",
            "confirmPassword": "",
            "name": "",
            "email": "",
            "phone": "",
            "townId":0
        }

        $scope.regData=regData;

        townsData.getTowns().then(function(data){
            //  alert(JSON.stringify(data));
            $scope.towns=data;
        });

        $scope.registerTo=function(){

            //swtch za prazni validacii i drugi raboti
            if(regData.password!=regData.confirmPassword){
                alert('Diftrent passwords');
            }
            else{
            registerData.postRegistration(regData);
           }
        }



        $scope.goTo= function(stringPath){

            $location.path(stringPath);
        }

    }]);