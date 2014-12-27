AM.Launchers.navbar = function(){
  AM.Launchers.launch('navbar','body', null,false);

  var go = function(){
    AM.Launchers[$(this).attr('action')]();
    $('.nav-link').removeClass('active');
    $(this).addClass('active'); 
  };

  var setupClick = function(){
    $(this).on('click',go);
  };

  $('.nav-link').each(setupClick);
};
