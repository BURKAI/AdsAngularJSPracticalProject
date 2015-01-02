AdsApp.controller('LoginCtrl',[
    '$location',
    '$scope',
    'loginData',
    function(
        $location,
        $scope,
        loginData) {

        var logData={
            "username": "",
            "password": ""
        }

        $scope.logData=logData;

        $scope.loginTo=function(){

            if(logData.username==="" ||logData.password==="")
            {
              swal('There is empty fields, pleasse fill all fields!')
            }else
            {
                loginData.postLogination(logData);

            }
        }

        $scope.goTo= function(stringPath){

            $location.path(stringPath);
        }

    }]);