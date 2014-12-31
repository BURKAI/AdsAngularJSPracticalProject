/**
 * Created by Poullo on 12/22/2014.
 */
'use strict';

AdsApp.controller('ShowAllAdsCtrl',[ '$scope','testData', function($scope, testData) {

    testData.getTestData(function(data){

        //alert(JSON.stringify(data));

        $scope.allAds=data;

    });
    $scope.greeting = 'Hello World!';
}]);