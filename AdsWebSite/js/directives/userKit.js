/**
 * Created by Poullo on 1/6/2015.
 */

AdsApp.directive('userKit', ['identity','auth','$location',function (identity,auth,$location) {
    return {
        restrict: 'A',
        templateUrl: './templates/directives/userKit.html',
        link: function (scope, elem, attrs) {

          // alert(JSON.stringify(identity.getCurrentUser().username));
         //   if(identity.isAuthenticated()){alert('kikii');}
         //   var userInfo = identity.getCurrentUser().userInfo;
         //   if(userInfo){ alert(identity.getCurrentUser().userInfo.username);}

         if(!identity.isAuthenticated()){
                 elem.hide();
          }
          else{
              elem.show();
              scope.user=identity.getCurrentUser().username;
              elem.find('button').on('click', function() {
                    auth.logout();
                    elem.hide();
                    $location.path('/rout');
            });
          }

        }
    };
}]);