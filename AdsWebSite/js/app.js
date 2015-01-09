/**
 * Created by Poullo on 12/21/2014.
 */

var AdsApp = angular
    .module('AdsApp', ['ngRoute','ngCookies'])
    .config(function($routeProvider){
            $routeProvider
                .when('/route',{
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
                    templateUrl:'templates/views/addAd.html',
                    controller:'NewAdCtrl'
                })
                .when('/user/myAds',{
                    templateUrl:'templates/views/MyAds.html',
                    controller:'ShowAllMyAdsCtrl'
                })
                .when('/user/Profile',{
                    templateUrl:'templates/views/editProfile.html',
                    controller:'ProfileCtrl'
                })
                .when('/user/editAd',{
                    templateUrl:'templates/views/editAd.html',
                    controller:'EditAdCtrl'
                })
            .otherwise({redirectTo:'/route'});
        })
    .constant('autor','Poullo Oconne')
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api')
    .constant('pageSize', 3);
    ;
