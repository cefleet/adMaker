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