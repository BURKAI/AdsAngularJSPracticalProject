/**
 * Created by Poullo on 1/2/2015.
 */
AdsApp.factory('newAdsData',['$http','$q','$location',function($http,$q,$location){

    return {
        postNewAd:function(newAdData){

            var defer=$q.defer();
            $http({
                method:'POST',
                url:'http://softuni-ads.azurewebsites.net/api/user/Ads',
                data:newAdData})
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    swal("Dear, "+data.username+' your ad is sent for approval!', "It's cool, isn't it?");
                   $location.path('/user/addAd');
                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //"Something went wrong! Try again!"
                    sweetAlert("Oops...", JSON.stringify(data), "error");
                });
            return defer.promise;
        }
    }

}]);