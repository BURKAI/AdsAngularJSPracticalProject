/**
 * Created by Poullo on 12/21/2014.
 */

var AdsApp = angular
    .module('AdsApp', ['ngRoute'])
    .config(function($routeProvider){
            $routeProvider.when('/route',{
                templateUrl:'templates/views/home.html',
                controller:'ShowAllAdsCtrl'
            })
            .when('/register',{
                    templateUrl:'templates/views/register.html',
                    controller:'RegisterCtrl'
                })
            .otherwise({redirectTo:'/route'});
        })
    .constant('autor','Poullo Oconne');
