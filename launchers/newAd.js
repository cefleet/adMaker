AM.Launchers.newAd = function(){
  //TODO collect information using the id
  AM.Launchers.launch('ad','#container',{},true);
  AM.Actions.setupAd();
  //Setup the listeners
};