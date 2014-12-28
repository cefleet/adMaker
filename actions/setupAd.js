AM.Actions.setupAd = function(){

  var ad = {};

  ad.name = AM.data.activeAd.name || null;
  ad.id = AM.data.activeAd.id || null;
  ad.titleParts = AM.data.activeAd.titleParts || [];
  ad.bodyParts = AM.data.activeAd.bodyParts ||[];

  //callback for saved items
  saveCallback = function(data){
    if(data.status == 'new'){
        $('#adId').val(data.id);
    }
  };

  $('#adName').focusout(function(){
    ad.name = $('#adName').val();
    AM.Actions.saveAd(ad, saveCallback);
  });

  $('#addTitlePart').on('click',function(){
    AM.Launchers.titlePart();
  });

  //TODO need a degelate the next two because they are dynamicly added
  $('#titleParts').on("focusout", '.titleItemForm', function(){
    var id = $(this).attr('data');
    var obj = {
      id : id,
      text : $(this).val()
    };
    var f = false;
    for(var i = 0; i < ad.titleParts.length; i++){
      if(ad.titleParts[i].id===id){
        f = true;
        ad.titleParts[i] = obj;
      }
    }
    //if it's not found add it
    if(!f){
      ad.titleParts.push(obj);
    }
    AM.Actions.saveAd(ad, saveCallback);
  });

  $('#titleParts').delegate(".removeTitleItem", "click", function(){
    var id = $(this).attr('data');
    $('#'+id).remove();
    for(var i=0; i < ad.titleParts.length; i++){
      if(ad.titleParts[i].id===id){
        //remove it from the object
        ad.titleParts.splice(i,1);
      }
    }
    //save object
    AM.Actions.saveAd(ad, saveCallback);
  });

  $('.addBodyPart').each(function(){
    var type = $(this).attr('data');
    $(this).on('click', function(){
      AM.Launchers.bodyPart(type);
    });
  });



  $('#bodyParts').on("focusout", '.paragraphBodyItemForm', function(){
    var id = $(this).attr('data');
    var obj = {
      id : id,
      type : 'paragraph',
      text : $(this).val()
    };
    var f = false;
    for(var i = 0; i < ad.bodyParts.length; i++){
      if(ad.bodyParts[i].id===id){
        f = true;
        ad.bodyParts[i] = obj;
      }
    }
    //if it's not found add it
    if(!f){
      ad.bodyParts.push(obj);
    }
    AM.Actions.saveAd(ad, saveCallback);
  });


  $('#bodyParts').delegate(".addBodyListItem", "click", function(){
    var id = $(this).attr('data');
    AM.Launchers.bodyListItem(id);
  });

  $('#bodyParts').delegate(".removeBodyPart", "click", function(){
    var id = $(this).attr('data');
    $('#'+id).remove();
    for(var i=0; i < ad.bodyParts.length; i++){
      if(ad.bodyParts[i].id===id){
        //remove it from the object
        ad.bodyParts.splice(i,1);
      }
    }
    AM.Actions.saveAd(ad, saveCallback);
  });

  $('#bodyParts').delegate(".removeBodyListItemItem",'click', function(){
    var id = $(this).attr('data');
    $('#'+id).remove();

    for(var i=0; i < ad.bodyParts.length; i++){
      if(ad.bodyParts[i].type == 'list'){
        for(var k = 0; k < ad.bodyParts[i].listItems.length; k++){
          if(ad.bodyParts[i].listItems[k].id === id){
            ad.bodyParts[i].listItems.splice(k,1);
          }
        }
      }
    }
    AM.Actions.saveAd(ad, saveCallback);
  });

  //todo i need the parent id
  $('#bodyParts').on("focusout", ".bodyListItemForm", function(){
    var id = $(this).attr('data');
    var parent = $(this).parent().parent().parent().parent().attr('id');
    var obj = {
      id : id,
      text : $(this).val()
    };
    var rp;
    //Look for parent. If not there add it
    var f = false;
    for(var i = 0; i < ad.bodyParts.length; i++){
      if(ad.bodyParts[i].id === parent){
        f = true;
        var t = false;
        for(var j = 0; j < ad.bodyParts[i].listItems.length; j++){
          if(ad.bodyParts[i].listItems[j].id === id){
            t = true;
            ad.bodyParts[i].listItems[j] = obj;
          }
        }
        if(!t){
          ad.bodyParts[i].listItems.push(obj);
        }
      }
    }
    //if it's not found add it
    if(!f){
      ad.bodyParts.push({id:parent,type:'list',listItems : [obj]});
    }

    AM.Actions.saveAd(ad, saveCallback);
  });

  $('#generate').on('click', AM.Actions.generateAd.bind(ad));
};
