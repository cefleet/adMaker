AM.Launchers = {
  launch : function(view,into,data,clear){
    var html = AM.Views[view](data);
    var e = $(into);
    if(clear){
      e.empty();
    }
    e.append(html);
  }
};
