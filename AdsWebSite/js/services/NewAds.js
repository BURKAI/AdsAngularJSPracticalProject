/**
 * Created by Poullo on 1/2/2015.
 */
AdsApp.factory('newAdsData',['$http','$q','$location','authorization','baseUrl','identity',function($http,$q,$location,authorization,baseUrl,identity){


    var headers = authorization.getAuthorizationHeader();

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

                    swal('Your ad is sent for approval!', "It's good, isn't it?");

//                   $scope.newAdData={
//                       "title": "",
//                       "text": "",
//                       "imageDataURL": "",
//                       "categoryId": 0,
//                       "townId": 0
//                   };
                    $location.path('/user/addAd');
                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //"Something went wrong! Try again!"
                   sweetAlert("Oops...", "Something goes wrong!", "error");

                });

            return defer.promise;
        },
        getAllMyAds:function(){
            var defer=$q.defer();
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads',
                status: '',
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    sweetAlert("Oops...", "Something went wrong! Try again!", "error");

                });

            return defer.promise;
        },

        deactivate:function(id){

            var defer=$q.defer();
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/Deactivate/'+id,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    swal('Deactivation complete!', "Is that good?");
                    $location.path('/user/myAds');
                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    sweetAlert("Oops...","Something went wrong! Try again!" , "error");

                });

            return defer.promise;

        },

        editUserProfile:function(profileData){


            var defer=$q.defer();
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Profile',
                data: profileData,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                    swal('Your profile has been changed!', "It's good, isn't it?");


                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //""
                    sweetAlert("Oops...Something went wrong! Try again!", "error");

                });

            return defer.promise;
        },
        getUserProfile:function(){


            var defer=$q.defer();
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Profile',
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //""
                    sweetAlert("Oops...Something went wrong! Try again!", "error");
                });
            return defer.promise;
        },

        changePassword:function(userData){


            var defer=$q.defer();
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/ChangePassword',
                data: userData,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                    swal('Your password has been changed!', "It's good, isn't it?");


                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //""
                    sweetAlert("Oops...Something went wrong! Try again!", "error");

                });

            return defer.promise;
        } ,
        delete:function(id){

            var defer=$q.defer();
            $http({
                method: 'DELETE',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/'+id,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                    swal('Your ad has been remooved!');

                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    sweetAlert("Oops...","Something went wrong! Try again!" , "error");

                });

            return defer.promise;

        } ,
       publishAgain:function(id){

            var defer=$q.defer();
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/PublishAgain/'+id,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);



                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    alert('eror');
                    sweetAlert("Oops...","Something went wrong! Try again!" , "error");

                });

            return defer.promise;

        },
        getAdByID:function(id){

            var defer=$q.defer();
            $http({
                method: 'GET',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/'+id,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);

                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    alert('eror');
                    sweetAlert("Oops...","Something went wrong! Try again!" , "error");

                });

            return defer.promise;

        },
        editAdByID:function(id, editedData){

            var defer=$q.defer();
            $http({
                method: 'PUT',
                url: 'http://softuni-ads.azurewebsites.net/api/user/Ads/'+id,
                data:editedData,
                headers: headers
            })
                .success(function(data, status, headers, config){
                    defer.resolve(data);
                    swal('Your ad has been updated!');
                    $location.path('/user/myAds')
                })
                .error(function(data, status, headers, config){
                    defer.reject(data); //
                    alert('eror');
                    sweetAlert("Oops...","Something went wrong! Try again!" , "error");

                });

            return defer.promise;

        }

    }

}]);