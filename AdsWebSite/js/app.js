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
                .when('/login',{
                    templateUrl:'templates/views/login.html',
                    controller:'LoginCtrl'
                })
                .when('/user/home',{
                    templateUrl:'templates/views/homeUser.html',
                    controller:'ShowAllAdsCtrl'
                })
                .when('/user/addAd',{
                    templateUrl:'templates/views/addAd.html'
                   // controller:'ShowAllAdsCtrl'
                })
            .otherwise({redirectTo:'/route'});
        })
    .constant('autor','Poullo Oconne');
