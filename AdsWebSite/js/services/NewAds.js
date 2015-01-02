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
                  //  swal("Welcome, "+data.username+'!', "It's pretty, isn't it?");
                  //  $location.path('/user/home');
                })
                .error(function(data, status, headers, config){
                    defer.reject(data);
                    sweetAlert("Oops...", "Something went wrong! Try again!", "error");
                });
            return defer.promise;
        }
    }

}]);