AM.Actions.saveAd = function(data, callback){
  $.post("/save_ad",data)
    .done(function(data){
        callback(data);
    }); 
};
