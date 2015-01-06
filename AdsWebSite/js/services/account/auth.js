/**
 * Created by Poullo on 1/4/2015.
 */
'use strict';

AdsApp.factory('auth', ['$http',
                        '$q',
                        'identity',
                        'authorization',
                        'baseUrl',
                        '$location', function(
                            $http,
                            $q,
                            identity,
                            authorization,
                            baseUrl,
                            $location) {

     var usersApi = baseUrl + '/user'

    return {
        signup: function(user) {
            var deferred = $q.defer();

            $http({
                method:'POST',
                url: baseUrl+'/user/Register',
                data:user})
                .success(function() {
                    deferred.resolve();
                    swal("Congratulations your registration was successfull!/t Please login!", "It's cool, isn't it?");
                    $location.path('/login');
                })
                .error(function(data){
                deferred.reject(data);

                    sweetAlert("Oops...", "Something went wrong! Try again!", "error");
               });




            return deferred.promise;
        },
        login: function(user){
            var deferred = $q.defer();
            user['grant_type'] = 'password';
            $http({
                method:'POST',
                url:baseUrl+'/user/Login',
                data:user})
                .success(function(response) {
                    if (response['access_token']) {
                        identity.setCurrentUser(response);
                        authorization.setAuthorizationHeader(response['access_token']);
                        deferred.resolve(true);
                    }

                })
                .error(function(response){
                    deferred.reject(response);

                })

            return deferred.promise;
        },

        logout: function() {
            var deferred = $q.defer();

            var headers = authorization.getAuthorizationHeader();
            $http.post(baseUrl+'/user/Logout', {}, { headers: headers })
                .success(function() {
                    identity.setCurrentUser(undefined);
                    authorization.removeAuthorizationHeader();
                    deferred.resolve();
                });

            return deferred.promise;
        },
        userInfo: function() {
            var deferred = $q.defer();

            var userInfo = identity.getCurrentUser().userInfo;
            if (userInfo) {
                deferred.resolve(userInfo);
            }
            else {
                var headers = authorization.getAuthorizationHeader();
                $http.get(usersApi + '/userInfo', { headers: headers })
                    .success(function(response) {
                        var currentUser = identity.getCurrentUser();
                        angular.extend(currentUser, { userInfo : response });
                        identity.setCurrentUser(currentUser);
                        deferred.resolve(response);
                    });
            }

            return deferred.promise;
        },
        isAuthenticated: function() {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }
    }
}]);