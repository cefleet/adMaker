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

Handlebars.registerPartial("body_list_item", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n  <div class='form-group col-md-10'>\n    <input class='form-control bodyListItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='List Item' value='"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "'>\n  </div>\n  <div class='col-md-2'>\n    <a class='btn btn-danger removeBodyListItemItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n  </div>\n</li>\n";
},"useData":true}));

Handlebars.registerPartial("body_part", Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <div class='form-group col-md-10'>\n    <textarea class='form-control formItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Title Text'>"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "</textarea>\n  </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "  <ul id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "-list' class='list-group col-md-10'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.listItems : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </ul>\n  <div class='col-md-2'>\n    <a class='btn btn-primary addBodyListItem' action='addBodyListItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n      <span class='glyphicon glyphicon-plus'></span>\n    </a>\n  </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.body_list_item, '      ', 'body_list_item', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n";
  stack1 = ((helpers.equal || (depth0 && depth0.equal) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "paragraph", {"name":"equal","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.equal || (depth0 && depth0.equal) || helperMissing).call(depth0, (depth0 != null ? depth0.type : depth0), "list", {"name":"equal","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  <div class=' col-md-offset-10 col-md-2'>\n    <a class='btn btn-danger removeBodyPart' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n  </div>\n</li>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("list_ad", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<a class='list-group-item adItem' action='viewAd' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true}));

Handlebars.registerPartial("title_part", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n    <div class='form-group col-md-10'>\n        <input class='form-control titleItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Title Text' value='"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "'>\n    </div>\n    <div class='col-md-2'>\n      <a class='btn btn-danger removeTitleItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n    </div>\n</li>\n";
},"useData":true}));

this["AM"] = this["AM"] || {};
this["AM"]["Views"] = this["AM"]["Views"] || {};

this["AM"]["Views"]["ad"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "value='"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "'";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.title_part, '      ', 'title_part', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.body_part, '      ', 'body_part', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " value='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id='adform' class='row'>\n<div class='col-md-12'>\n<div class='form-group'>\n  <label for='adName'>Ad Name</a>\n  <input class='form-control' id='adName' name='adName' placeholder='Name of Ad' ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n</div>\n<div id='titleParts' class='col-md-6'>\n  <h2>Title Parts</h2>\n  <ul id='listTitleParts' class='list-group col-md-12'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.titleParts : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n  <a class='btn btn-primary' id='addTitlePart' action='addTitlePart'>\n    <span class='glyphicon glyphicon-plus'></span>\n  </a>\n</div>\n<div id='bodyParts' class='col-md-6'>\n  <h2>Body Parts</h2>\n  <ul id='listBodyParts' class='list-group col-md-12'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.bodyParts : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n  <div class='btn-group'>\n    <button type='button' class='btn btn-primary' data-toggle='dropdown' aria-expanded='false'>\n      <span class='glyphicon glyphicon-plus'></span><span class=\"caret\"></span>\n    </button>\n    <ul class='dropdown-menu' role='menu'>\n      <li><a class='addBodyPart' action='addBodyPart' data='list'>List</a></li>\n      <li><a class='addBodyPart' action='addBodyPart' data='paragraph'>Paragraph</a></li>\n    </ul>\n  </div>\n</div>\n<input type='hidden' id='adId' ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.id : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n</div>\n<a class='btn btn-success pull-right' id='generate' action='generateAd'>Generate Ad <span class='glyphicon glyphicon-wrench'></span></a>\n</div>\n";
},"usePartial":true,"useData":true});



this["AM"]["Views"]["body_list_item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n  <div class='form-group col-md-10'>\n    <input class='form-control bodyListItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='List Item'>\n  </div>\n  <div class='col-md-2'>\n    <a class='btn btn-danger removeBodyListItemItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n  </div>\n</li>\n";
},"useData":true});



this["AM"]["Views"]["body_part_list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n  <ul id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "-list' class='list-group col-md-10'></ul>\n  <div class='col-md-2'>\n    <a class='btn btn-primary addBodyListItem' action='addBodyListItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n      <span class='glyphicon glyphicon-plus'></span>\n    </a>\n  </div>\n  <div class=' col-md-offset-10 col-md-2'>\n    <a class='btn btn-danger removeBodyPart' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n  </div>\n</li>\n";
},"useData":true});



this["AM"]["Views"]["body_part_paragraph"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n  <div class='form-group col-md-10'>\n    <textarea class='form-control paragraphBodyItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Body Section'></textarea>\n  </div>\n  <div class='col-md-2'>\n    <a class='btn btn-danger removeBodyPart' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n  </div>\n</li>\n";
},"useData":true});



this["AM"]["Views"]["list_ads"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.list_ad, '    ', 'list_ad', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h2>Current Ads</h2>\n<div class='list-group' id='ads_list'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.ads : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});



this["AM"]["Views"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id='container' class='container-fluid'>\n  <div class='row' id='mainRow'>\n    <div id='mainPanel' class='col-md-12'></div> \n  </div>\n</div>\n";
  },"useData":true});



this["AM"]["Views"]["modal"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"modal fade\" id=\"htmlModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"htmlModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Randomized ad HTML</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class='form-group'>\n          <label for='adTitle'>Ad Title</label>\n          <input class='form-control' value='"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "'></input>\n        </div>\n        <div class='form-group'>\n          <label for='adTitle'>Ad Body</label>\n          <textarea class='form-control'>"
    + escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper)))
    + "</textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"useData":true});



this["AM"]["Views"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='navbar navbar-default navbar-fixed-top' role='navigation' id='navigation'>\n  <div class='continaer-fluid'>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class='active nav-link' action='adList'><a>Ads</a></li>\n        <li class='nav-link' action='newAd'><a>New Ad</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  },"useData":true});



this["AM"]["Views"]["title_part"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item col-md-12' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n    <div class='form-group col-md-10'>\n        <input class='form-control titleItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Title Text'>\n    </div>\n    <div class='col-md-2'>\n      <a class='btn btn-danger removeTitleItem' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'><span class='glyphicon glyphicon-minus'></span></a>\n    </div>\n</li>\n";
},"useData":true});
Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
    throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

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

AM.Launchers.adList = function(){
    var callback = function(data){
        AM.data.ads = data;
        console.log(data);
        AM.Launchers.launch('list_ads','#container',AM.data,true);

        //get the list and make them clickable here
        var viewAd = function(){
            AM.Launchers.viewAd($(this).attr('data'));
        };

        var setupClick = function(){
            $(this).on('click',viewAd);
        };

        $('.adItem').each(setupClick);
    };

    AM.Actions.getAds(callback);
};

AM.Launchers.bodyListItem = function(id){
  AM.Launchers.launch('body_list_item','#'+id+'-list',{id:$uid()},false); 
};

AM.Launchers.bodyPart = function(type){
  AM.Launchers.launch('body_part_'+type,'#listBodyParts',{id:$uid()},false); 
};

AM.Launchers.main = function(){
  AM.Launchers.launch('main','body', null,false);
  console.log('added the main body');
};

AM.Launchers.navbar = function(){
  AM.Launchers.launch('navbar','body', null,false);

  var go = function(){
    AM.Launchers[$(this).attr('action')]();
    $('.nav-link').removeClass('active');
    $(this).addClass('active'); 
  };

  var setupClick = function(){
    $(this).on('click',go);
  };

  $('.nav-link').each(setupClick);
};

AM.Launchers.newAd = function(){
  //TODO collect information using the id
  AM.data.activeAd = {
    id : $uid()
  };
  AM.Launchers.launch('ad','#container',AM.data.activeAd,true); 

  AM.Actions.setupAd();
  //Setup the listeners
};

AM.Launchers.titlePart = function(){
    AM.Launchers.launch('title_part','#listTitleParts',{id:$uid()},false);
};
 

AM.Launchers.viewAd = function(id){
  //TODO collect information using the id
    for(var i = 0; i < AM.data.ads.length; i++){
        if(AM.data.ads[i].id == id){
            AM.data.activeAd = AM.data.ads[i];
            break;
        } 
    }
  AM.Launchers.launch('ad','#container',AM.data.activeAd,true);
  AM.Actions.setupAd();
  //Setup the listeners
};

AM.Actions = {

};

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

AM.Actions.getAds = function(callback){
    $.get('/get_ads', callback);
};

AM.Actions.saveAd = function(data, callback){
  $.post("/save_ad",data)
    .done(function(data){
        callback(data);
    }); 
};

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

//# sourceMappingURL=AM.js.map