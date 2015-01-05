/**
 * Created by Poullo on 1/4/2015.
 */
'use strict';

AdsApp.factory('authorization', ['identity', function(identity) {
    var headers = {};
    var currentUser = identity.getCurrentUser();
    return {
        getAuthorizationHeader: function() {

            if (currentUser) {
                this.setAuthorizationHeader(currentUser['access_token']);
            }

            return headers;
        },
        setAuthorizationHeader: function(auth) {
            headers['Authorization'] = 'Bearer ' + auth;
        },
        removeAuthorizationHeader: function() {
            delete headers['Authorization'];
        },
        userName:currentUser['username']
    }
}]);