/**
 * Created by Poullo on 1/7/2015.
 */

AdsApp.directive('menageAd', ['newAdsData','$location','$window','adID',function (newAdsData,$location,$window,adID) {
    return {
        restrict: 'A',
        templateUrl: './templates/directives/menageAd.html',
        link: function (scope, elem, attrs) {

            if(scope.ad.status=='Inactive'){
                elem.find('button').show();
                elem.parent().find('.activation-button').hide();
            }else{
                elem.find('button').hide();
                elem.parent().find('.activation-button').show();
            }
          //  elem.parent().append('<div>'+scope.ad.status+'</div>')

            scope.deleteAd=function(){
               newAdsData.delete(scope.ad.id);
                elem.parent().parent().remove();
            }
            scope.publishAd=function(){
                newAdsData.publishAgain(scope.ad.id).then(function(){
                    $window.location.reload();
                })
            }

            scope.editAd=function(){

                $location.path('/user/editAd');
                adID.setAdID(scope.ad.id);
            }

        }
    };
}]);