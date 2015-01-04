/**
 * Created by Poullo on 1/2/2015.
 */

AdsApp.factory('loginData',['$http','$q','$location','baseUrl',function($http,$q,$location,baseUrl){

    var userInfo={};

    return {
        postLogination:function(logData){

            var defer=$q.defer();
            $http({
                method:'POST',
                url:baseUrl+'/user/Login',
                data:logData})
                .success(function(data, status, headers, config){

                    defer.resolve(data);

                    sessionStorage["username"] = data.username;
                    sessionStorage["accessKey"] = JSON.stringify(data.access_token);

                    swal("Welcome, "+data.username+'!', "It's pretty, isn't it?");
                    $location.path('/user/home');

                })
                .error(function(data, status, headers, config){
                    defer.reject(data);
                    sweetAlert("Oops...", "Something went wrong! Try again!", "error");
                });
            return defer.promise;
        }
    }

}]);