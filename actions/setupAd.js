AM.Actions.setupAd = function(){

  var ad = {};

  ad.name = AM.data.activeAd.name || null;
  ad.id = AM.data.activeAd.id || null;
  ad.titleParts = AM.data.activeAd.titleParts || [];
  ad.bodyParts = AM.data.activeAd.bodyParts ||[];

   console.log(ad);
  //callback for saved items
  saveCallback = function(data){
    if(data.status == 'new'){
        //apply the id
        $('#adId').val(data.id);
    }
  };
  
 //TODO need the object
 //Each one of these needs to manipulate the data in it's own way every time it changes

  $('#adName').focusout(function(){

    ad.name = $('#adName').val();
    AM.Actions.saveAd(ad, saveCallback);
    
  });

  $('#addTitlePart').on('click',function(){
    AM.Launchers.titlePart();
  });

  //TODO need a degelate the next two because they are dynamic
    //$('.titleItemForm').
  //$('.removeTitleItem') //has attr.value that is the id of the title item

  //$('.addBodyPart').each(); //need to get attr data

  //TODO delegate these as well
  //$('.removeBodyPart') //remove button to the side
  //$('.bodyPartItemForm') //on unfocus save

  //$('.addListItem') // will have attr.data as the id to add to
  //$('.removeListItem') // will have the id to remove form as well
  //$('.bodyPartListItemForm') // on unfocus save need to

  //do the generate action here
  //$('#generate')
};
