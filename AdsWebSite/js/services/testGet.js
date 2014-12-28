/**
 * Created by Poullo on 12/27/2014.
 */

AdsApp.factory('testData',['$http',function($http){

    return {
        getTestData:function(successcb){
            $http({method:'GET',url:'http://softuni-ads.azurewebsites.net/api/Towns'})
                .success(function(data, status, headers, config){
                    successcb(data);
                })
                .error(function(data, status, headers, config){

                });

        }
    }

}]);
