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

            scope.firstPage = function () {
                scope.requestParams.startPage = 1;
                scope.getListedItems();
            };
            scope.prevPage = function () {
                if (parseInt(scope.requestParams.startPage) > 1) {
                    scope.requestParams.startPage -= 1;
                }
                scope.getListedItems();
            };

            scope.setStartPage = function (startPage) {
                scope.requestParams.startPage = startPage;
                scope.getListedItems();
            };

            scope.nextPage = function () {
              //  if (scope.requestParams.startPage < length) {
                    scope.requestParams.startPage += 1;
              //  }

                scope.getListedItems();
            };

            scope.lastPage = function () {
             //   scope.requestParams.startPage = length;
               // scope.requestParams.startPage=scope.pageSize.length-1;
                scope.getListedItems();
            };
        }
    }
}]);