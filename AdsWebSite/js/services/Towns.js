/**
 * Created by Poullo on 1/1/2015.
 */
AdsApp.factory('townsData',['$http','$q',function($http,$q){

    return {
        getTowns:function(){

            var defer=$q.defer();
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/Towns'})
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