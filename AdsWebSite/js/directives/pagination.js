/**
 * Created by Poullo on 1/6/2015.
 */
"use strict";
AdsApp.directive('pagination', [function () {

    return {
        restrict: 'A',
        templateUrl: './templates/directives/pagination.html',
        scope:true,
        link: function (scope) {

           scope.arr=[1,2,3,4,5];

            scope.firstPage = function () {
                scope.requestParams.startPage = 1;
                scope.arr=[1,2,3,4,5];
                scope.getListedItems();
            };
            scope.prevPage = function () {
                if (parseInt(scope.requestParams.startPage) > 1) {
                    for (scope.p = 0; scope.p < scope.arr.length; scope.p++) {
                        scope.arr[scope.p]--;
                    }
                    scope.requestParams.startPage -= 1;
                }
                scope.getListedItems();
            };

            scope.setStartPage = function (startPage) {
                scope.requestParams.startPage = startPage;
                scope.getListedItems();
            };

            scope.nextPage = function () {
                if (scope.requestParams.startPage < scope.numberOfPages) {
                    scope.requestParams.startPage += 1;
                for (scope.p = 0; scope.p < scope.arr.length; scope.p++) {
                    scope.arr[scope.p]++;
                }
                    scope.getListedItems();

                }


            };

            scope.lastPage = function () {
                scope.requestParams.startPage = scope.numberOfPages;
                for (scope.p = 0; scope.p < scope.arr.length; scope.p++) {
                    scope.arr[scope.p]=scope.numberOfPages-5+scope.p;
                }
                scope.getListedItems();
            };
        }
    }
}]);