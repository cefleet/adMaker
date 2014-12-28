AM.Launchers.viewAd = function(id){
  //TODO collect information using the id
    for(var i = 0; i < AM.data.ads.length; i++){
        if(AM.data.ads[i].id == id){
            AM.data.activeAd = AM.data.ads[i];
            break;
        } 
    }
  AM.Launchers.launch('ad','#container',AM.data.activeAd,true);
  AM.Actions.setupAd();
  //Setup the listeners
};
