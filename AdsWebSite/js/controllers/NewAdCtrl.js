/**
 * Created by Poullo on 1/1/2015.
 */

AdsApp.controller('NewAdCtrl',[
    '$location',
    '$scope',
    'newAdsData',
    'townsData',
    'categoryData',
    function(
        $location,
        $scope,
        newAdsData,
        townsData,
        categoryData) {

        $scope.buttonName = 'Browse...';



        var newAdData={
            "title": "",
            "text": "",
            "imageDataURL": "",
            "categoryId": 0,
            "townId": 0
        }

   //     $scope.getBase64 = function (base64String, attrs) {
   //         $scope.newAdData.imageDataURL = base64String;
    //    };

        $scope.newAdData=newAdData;

        townsData.getTowns().then(function(data){
            $scope.towns=data;
        });

        categoryData.getCategories().then(function(data){
            $scope.categories=data;
        });

        $scope.goTo= function(stringPath){
            $location.path(stringPath);
        }

        $scope.addAd=function(){
                newAdsData.postNewAd(newAdData);
        }




    }]);