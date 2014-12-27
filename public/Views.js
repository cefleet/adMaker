this["UI"] = this["UI"] || {};
this["UI"]["Views"] = this["UI"]["Views"] || {};

this["UI"]["Views"]["list_ad"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<a class='list-group-item' action='viewAd' data="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + ">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"useData":true});



this["UI"]["Views"]["list_ads"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.list_ads, '    ', 'list_ads', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class='list-group' id='ads_list'>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.ads : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});



this["UI"]["Views"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id='container' class='container-fluid'>\n  <div class='row' id='mainRow'>\n    <div id='mainPanel' class='col-md-12'></div>\n  </div>\n</div>\n";
  },"useData":true});



this["UI"]["Views"]["navbar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class='navbar navbar-default navbar-fixed-top' role='navigation' id='navigation'>\n  <div class='continaer-fluid'>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class='active'><a class='nav-link' action='listAds'>Ads</a></li>\n        <li><a class='nav-link' action='newAd'>New Ad</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
  },"useData":true});