/**
 * Created by Poullo on 1/5/2015.
 */
'use strict';

AdsApp.controller('ShowAllMyAdsCtrl',[
    '$location',
    '$scope',
    'newAdsData',
    'categoryData',
    'townsData',
    function(
        $location,
        $scope,
        newAdsData,
        categoryData,
        townsData) {

//        $scope.publishet='';
//        $scope.waiting='';
//        $scope.inaktive='';
        $scope.status='';

     //$('.console').text(JSON.stringify( newAdsData.getAllMyAds()));

        newAdsData.getAllMyAds().then(function(data){
            $scope.allMyAds=data;
        });

        $scope.putStatus=function($event,status){
            $scope.status=status;
            $('.current-selection-ad-filt').removeClass('current-selection-ad-filt');
            $($event.target).addClass('current-selection-ad-filt');
        }

        $scope.goTo= function(stringPath){

            $location.path(stringPath);
        }

    }]);