var AM = {
  data : {},
  start : function(){
    AM.Launchers.main();
    AM.Launchers.navbar();
    AM.Launchers.adList();
    /*
    //TODO this needs to be grabed from the database
    $.get('/get_ads')
    .done(function(data){
        console.log(data);
        AM.data.ads = data;

    });
    //This doesn't need to be loaded until data is gotten from the database
    */
  },

  testSave : function(){
    $.post("/save_ad",{
        "name":"My Favorite ad",
        "id":"g3ro7DVwYtY1NENA",
        "titleParts":[
            {"id":"123234234-234","text":"Home Weekly"},
            {"id":"34543545-34534","text":"Drivers Wanted"},
            {"id":"5630345344","text":"Only 6 Month expereince"}
        ],
        "bodyParts":[
            {"id":"2342342342","type":"list", "listItems":[
                {"id":"342346","text":"Great pay"},
                {"id":"345455236","text":"Home Weekly"},
                {"id":"5667683453","text":"Regional Runs"}
            ]},
            {"id":"58054645","type":"paragraph","text":"If you want to work for a job where you are home every week then this one is for you"}
        ]
    })
    .done(function(data){
        alert(data.id);
        console.log('it was sent');
        console.log(data);
    });
  }
};

$uid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

function $shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
