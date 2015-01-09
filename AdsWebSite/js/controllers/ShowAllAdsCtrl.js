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
    'pageSize',
     function(
         $location,
         $scope,
         adsData,
         categoryData,
         townsData,
         pageSize) {



     $scope.catId='';
     $scope.townsId='';

    $scope.requestParams = {startPage: 1, pageSize: pageSize};

//    adsData.getTestData(3).then(function(data){
//        $scope.allAds=data;
//
//    });

      $scope.getListedItems = function () {

          adsData.getTestData($scope.requestParams.startPage).then(function(data){
              $scope.allAds=data;
              $scope.pagesArr = new Array(4);
          });

       };

         $scope.getListedItems ();

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

      $scope.goToMyAds=function(){
          $location.path('/user/MyAds');
      }




}]);