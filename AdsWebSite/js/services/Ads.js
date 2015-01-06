/**
 * Created by Poullo on 12/27/2014.
 */

AdsApp.factory('adsData',['$http','$q','pageSize',function($http,$q,pageSize){

    return {
        getTestData:function(page){
            var defer=$q.defer();
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/Ads?CategoryId=&TownId=&StartPage='+page+'&PageSize='+pageSize})
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
