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



     //$('.console').text(JSON.stringify( newAdsData.getAllMyAds()));

        newAdsData.getAllMyAds().then(function(data){
            $scope.allMyAds=data;
        });



    }]);