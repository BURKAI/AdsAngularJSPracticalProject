/**
 * Created by Poullo on 1/2/2015.
 */
AdsApp.factory('newAdsData',['$http','$q','$location','authorization','baseUrl','identity',function($http,$q,$location,authorization,baseUrl,identity){

   // alert(sessionStorage.getItem('username')+'----'+sessionStorage.getItem('accessKey'))

    var headers = authorization.getAuthorizationHeader();

    alert(JSON.stringify(headers)+'-----------------'+JSON.stringify(identity.getCurrentUser()));
    return {
        postNewAd:function(newAdData){

            var defer=$q.defer();
            $http({
                method: 'POST',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                data: newAdData,
                isArray: false,
                headers: headers
                  })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    swal("Dear, "+data.username+' your ad is sent for approval!', "It's good, isn't it?");
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