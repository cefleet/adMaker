AM.Actions.setupAd = function(){
  console.log('Setting up the ad Actions');
  //TODO need the object
 //Each one of these needs to manipulate the data in it's own way every time it changes

  $('#adName').focusout(function(){
    //save the entire ad instead of little parts its just eaiser
    console.log('I need to save the ad');
    //modify the name value of the ad object
    var name = $('#adName').val();

    //save the whole object
  });


  //$('.addTitlePart').each();

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
