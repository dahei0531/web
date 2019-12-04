define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event){
		window.system="XS";	//XS.JS.ALL
	};	
	return Model;
});