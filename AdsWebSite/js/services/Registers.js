/**
 * Created by Poullo on 1/1/2015.
 */

AdsApp.factory('registerData',['$http','$q',function($http,$q){

    return {
        postRegistration:function(regData){

            var defer=$q.defer();
            $http({
                   method:'POST',
                   url:'http://softuni-ads.azurewebsites.net/api/user/Register',
                   data:regData})
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                })
                .error(function(data, status, headers, config){
                    defer.reject(data);

                });
            return defer.promise;
        }
    }

}]);