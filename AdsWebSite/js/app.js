/**
 * Created by Poullo on 12/21/2014.
 */

var AdsApp = angular
    .module('AdsApp', ['ngRoute','testCtrl'])
    .config(['$routeProvider',function($routeProvider){
            $routeProvider.when('mmm','testCtrl',{
                templateUrl:'templates/views/home.html',
                controller:'testCtrl'
            })
            .otherwise({redirectTo:'/'});
        }])
    .constant('autor','Poullo Oconne');
