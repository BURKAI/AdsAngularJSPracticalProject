/**
 * Created by Poullo on 1/7/2015.
 */

AdsApp.factory('adID',[function(){

    var ADID;
    return {
        getAdID:function(){
            return ADID;
        },
        setAdID:function(adID){
            ADID=adID;
        }
    }

}]);