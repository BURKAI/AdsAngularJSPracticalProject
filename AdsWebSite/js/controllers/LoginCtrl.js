AdsApp.controller('LoginCtrl',[
    '$location',
    '$scope',
    'loginData',
    'auth',
    'identity',
    function(
        $location,
        $scope,
        loginData,
        auth,
        identity) {

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
               // loginData.postLogination(logData);
                auth.login(logData).then(function(success) {
                    if (success) {

                        $location.path('/user/home');
                    }
                    else {

                    }
                });
            }
        }

        $scope.goTo= function(stringPath){

            $location.path(stringPath);
        }

    }]);