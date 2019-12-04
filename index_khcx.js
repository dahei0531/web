define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
	};
	//Yeal!!!!
	Model.prototype.modelLoad = function(event){
		window.system="XS";	//XS.JS.ALL
	};	
	return Model;
});