/**
 * Created by Poullo on 1/7/2015.
 */
AdsApp.controller('EditAdCtrl',[
    '$location',
    '$scope',
    'newAdsData',
    'townsData',
    'categoryData',
    'adID',
    function(
        $location,
        $scope,
        newAdsData,
        townsData,
        categoryData,
        adID) {

        $scope.buttonName = 'Browse...';
        $scope.param=adID.getAdID();

        var newAdData={
            "title": "",
            "text": "",
            "imageDataURL": "",
            "categoryId": 0,
            "townId": 0
        }

        $scope.newAdData=newAdData;

        newAdsData.getAdByID($scope.param).then(function(data){
            $scope.newAdData.title=data.title;
            $scope.newAdData.text=data.text;
            $scope.newAdData.imageDataURL=data.imageDataUrl;
            $scope.newAdData.categoryId=data.categoryId;
            $scope.newAdData.townId=data.townId;

        });



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
            newAdsData.editAdByID($scope.param,newAdData);

        }




    }]);