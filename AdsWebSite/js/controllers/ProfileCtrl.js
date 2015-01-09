/**
 * Created by Poullo on 1/6/2015.
 */
AdsApp.controller('ProfileCtrl',[
    '$location',
    '$scope',
    'newAdsData',
    'townsData',
    function(
        $location,
        $scope,
        newAdsData,
        townsData) {

        var profileData={
            "name": "",
            "email": "",
            "phoneNumber": "",
            "townId":0
        }

        var userData={
            "oldPassword": "",
            "newPassword": "",
            "confirmPassword": ""
        }

        $scope.profileData=profileData;
        $scope.userData=userData;


        newAdsData.getUserProfile().then(function(data){
            $scope.profileData.name=data.name;
            $scope.profileData.phoneNumber=data.phoneNumber;
            $scope.profileData.email=data.email;
            $scope.profileData.townId=data.townId;
        });

        $scope.updateProfile=function(){
            newAdsData.editUserProfile($scope.profileData)
        }

        $scope.updatePassword=function(){
            newAdsData.changePassword($scope.userData)
        }


        $scope.goTo= function(stringPath){

            $location.path(stringPath);
        }

        townsData.getTowns().then(function(data){
            //  alert(JSON.stringify(data));
            $scope.towns=data;
        });

    }]);