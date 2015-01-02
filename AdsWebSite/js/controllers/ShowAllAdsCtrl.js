/**
 * Created by Poullo on 12/22/2014.
 */
'use strict';

AdsApp.controller('ShowAllAdsCtrl',[
    '$location',
    '$scope',
    'adsData',
    'categoryData',
    'townsData',
     function(
         $location,
         $scope,
         adsData,
         categoryData,
         townsData) {

     $scope.catId='';
     $scope.townsId='';

    adsData.getTestData().then(function(data){
        $scope.allAds=data;
    });

    categoryData.getCategories().then(function(data){
        $scope.categories=data;
    });

    townsData.getTowns().then(function(data){
     $scope.towns=data;
     });


    $scope.goTo= function(stringPath){

   $location.path(stringPath);
    }

     $scope.putCategoryId=function($event,catId){
         $scope.catId=catId;
         $('.current-selection-cat').removeClass('current-selection-cat');
         $($event.target).addClass('current-selection-cat');
     }

      $scope.putTownId=function($event,townId){
          $scope.townsId=townId;
          $('.current-selection-tow').removeClass('current-selection-tow');
          $($event.target).addClass('current-selection-tow');
      }


}]);