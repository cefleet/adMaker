var AM = {
  data : {
    ads: [
      {
        id :"23456-4534t23543-345435345",
        name : "Clint's amazing Ad"
      },
      {
        id : "342543543-34534543-5435-345345",
        name : 'I like hot butter on my face'
      }
      ]
  },
  start : function(){
    console.log(this);
    AM.Launchers.main();
    AM.Launchers.navbar();
    //TODO this needs to be grabed from the database

    //This doesn't need to be loaded until data is gotten from the database
    AM.Launchers.adList();
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
  },
  testGet : function(){
    $.get('/get_ads')
    .done(function(data){
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
