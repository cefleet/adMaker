var AM = {
    start : function(){

      $('body').append(UI.Views.navbar())
        .append(UI.Views.main());
    }
};

$(document).ready(AM.start);
