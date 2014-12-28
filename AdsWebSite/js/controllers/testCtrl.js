/**
 * Created by Poullo on 12/22/2014.
 */
'use strict';

AdsApp.controller('testCtrl',[ '$scope','testData', function($scope, testData) {

    testData.getTestData(function(data){

        $scope.testing=data;

    });
    $scope.greeting = 'Hello World!';
}]);