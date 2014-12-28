AM.Launchers.adList = function(){
    var callback = function(data){
        AM.data.ads = data;
        console.log(data);
        AM.Launchers.launch('list_ads','#container',AM.data,true);

        //get the list and make them clickable here
        var viewAd = function(){
            AM.Launchers.viewAd($(this).attr('data'));
        };

        var setupClick = function(){
            $(this).on('click',viewAd);
        };

        $('.adItem').each(setupClick);
    };

    AM.Actions.getAds(callback);
};
