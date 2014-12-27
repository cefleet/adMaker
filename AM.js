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
  }
};
