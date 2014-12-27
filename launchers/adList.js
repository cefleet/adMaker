AM.Launchers.adList = function(){
  var data = {
    ads : AM.data.ads
  };

  AM.Launchers.launch('list_ads','#container',data,true);

  //get the list and make them clickable here
  var viewAd = function(){
    AM.Launchers.viewAd($(this).attr('data'));
  };

  var setupClick = function(){
    $(this).on('click',viewAd);
  };

  $('.adItem').each(setupClick);
};
