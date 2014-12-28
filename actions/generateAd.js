AM.Actions.generateAd = function(){

  var titles = this.titleParts;
  var rTitle = $shuffle(titles);

  var bodies = this.bodyParts;
  var tBodies = $shuffle(bodies);

  for(var i = 0; i < tBodies.length; i++){
    if(tBodies[i].type === 'list'){
      tBodies[i].listItems = $shuffle(tBodies[i].listItems);
    }
  }

  var titleHTML = '';
  for(i = 0; i < rTitle.length; i++){
    if(i === 0){
      //add intro symbol
      titleHTML += ' '+rTitle[i].text;
    } else if (i === rTitle.length){
      //add random middle symbole in front and end symbol
      titleHTML += ' '+rTitle[i].text+' ';
    } else {
      //add random middle symbol in front
      titleHTML += ' '+rTitle[i].text;
    }
  }

  var bodyHTML = '';
  for(i = 0; i < tBodies.length; i++){
    if(tBodies[i].type === 'paragraph'){
      //TODO more options need to be added here
      bodyHTML += '<hr/><p>'+tBodies[i].text+'</p>';
    } else {
      var o = '<ul>';
      for(var k = 0; k < tBodies[i].listItems.length; k++){
        o += '<li>'+tBodies[i].listItems[k].text+'</li>';
      }
      o += '</ul>';
      bodyHTML += o;
    }
  }

  AM.Launchers.launch('modal','body',{title: titleHTML,body:bodyHTML}, false);
  $('#htmlModal').modal('show');
  $('#htmlModal').on('hidden.bs.modal', function (e) {
    $('#htmlModal').remove();
  });
};
