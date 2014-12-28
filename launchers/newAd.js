AM.Launchers.newAd = function(){
  //TODO collect information using the id
  AM.data.activeAd = {
    id : $uid()
  };
  AM.Launchers.launch('ad','#container',AM.data.activeAd,true);
  
  AM.Actions.setupAd();
  //Setup the listeners
}; 
