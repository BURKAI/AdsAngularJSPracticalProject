/**
 * Created by Poullo on 12/21/2014.
 */

var AdsApp = angular
    .module('AdsApp', ['ngRoute'])
    .config(function($routeProvider){
            $routeProvider.when('/route',{
                templateUrl:'templates/views/home.html',
                controller:'testCtrl'
            })
            .when('/next',{
                    templateUrl:'templates/views/next.html',
                    controller:'testCtrl'
                })
            .otherwise({redirectTo:'/route'});
        })
    .constant('autor','Poullo Oconne');
