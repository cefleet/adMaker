Handlebars.registerPartial("body_part", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true}));

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
  return "<li class='list-group-item' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n    <div class='form-group'>\n        <input class='form-control titleItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Title Text' value='"
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "'>\n    </div> \n    <a class='btn btn-danger removeTitleItem'><span class='glyphicon glyphicon-minus'></span></a>\n</li> \n";
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
  var stack1, buffer = "<div id='adform'>\n<div class='form-group'>\n  <label for='adName'>Ad Name</a>\n  <input class='form-control' id='adName' name='adName' placeholder='Name of Ad' ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.name : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n</div>\n<h2>Title Parts</h2>\n<div id='titleParts'>\n  <ul id='listTitleParts' class='list-group'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.title_part : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n  <a class='btn btn-primary' id='addTitlePart' action='addTitlePart'>\n    <span class='glyphicon glyphicon-plus'></span>\n  </a>\n</div>\n<h2>Body Parts</h2>\n<div id='bodyParts'>\n  <ul id='listBodyParts' class='list-group'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.body_part : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n  <div class='btn-group'>\n    <button type='button' class='btn btn-primary' action='addBodyPart' data-toggle='dropdown' aria-expanded='false'>\n      <span class='glyphicon glyphicon-plus'></span><span class=\"caret\"></span>\n    </button>\n    <ul class='dropdown-menu' role='menu'>\n      <li><a action='addBodyPart' data='list'>List</a></li>\n      <li><a action='addBodyPart' data='paragraph'>Paragraph</a></li>\n    </ul>\n  </div>\n</div>\n<input type='hidden' id='adId' ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.id : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n</div>\n<a class='btn btn-success pull-right' id='generate' action='generateAd'>Generate Ad <span class='glyphicon glyphicon-wrench'></span></a>\n";
},"usePartial":true,"useData":true});



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



this["AM"]["Views"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='navbar navbar-default navbar-fixed-top' role='navigation' id='navigation'>\n  <div class='continaer-fluid'>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class='active nav-link' action='adList'><a>Ads</a></li>\n        <li class='nav-link' action='newAd'><a>New Ad</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  },"useData":true});



this["AM"]["Views"]["title_part"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class='list-group-item' id='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "'>\n    <div class='form-group'>\n        <input class='form-control titleItemForm' data='"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "' placeholder='Title Text'>\n    </div> \n    <a class='btn btn-danger removeTitleItem'><span class='glyphicon glyphicon-minus'></span></a>\n</li> \n";
},"useData":true});