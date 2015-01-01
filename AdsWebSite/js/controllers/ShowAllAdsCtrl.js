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
        //alert(JSON.stringify(data));
        $scope.allAds=data;
    });

    categoryData.getCategories().then(function(data){
       //alert(JSON.stringify(data));
        $scope.categories=data;
    });

    townsData.getTowns().then(function(data){
           //  alert(JSON.stringify(data));
     $scope.towns=data;
     });


    $scope.goTo= function(stringPath){

   $location.path(stringPath);
    }

     $scope.putCategoryId=function($event,catId){
           // alert(catId);
            $scope.catId=catId;
       //  alert($scope.catId+ '----' +$scope.townsId);
         $('.current-selection-cat').removeClass('current-selection-cat');
         $($event.target).addClass('current-selection-cat');
     }

      $scope.putTownId=function($event,townId){

          $scope.townsId=townId;
      //    alert($scope.catId+ '----' +$scope.townsId);
          $('.current-selection-tow').removeClass('current-selection-tow');
          $($event.target).addClass('current-selection-tow');
      }


}]);