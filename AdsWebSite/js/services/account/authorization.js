/**
 * Created by Poullo on 1/4/2015.
 */
'use strict';

AdsApp.factory('authorization', ['identity', function(identity) {
    var headers = {};

    return {
        getAuthorizationHeader: function() {
            var currentUser = identity.getCurrentUser();
            if (currentUser) {
                this.setAuthorizationHeader(currentUser['access_token']);
            }

            return headers;
        },
        setAuthorizationHeader: function(auth) {
            headers['Authorization'] =  auth;
        },
        removeAuthorizationHeader: function() {
            delete headers['Authorization'];
        }
    }
}]);