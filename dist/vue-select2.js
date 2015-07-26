;(function(){
	"use strict";

	var vueSelect2 = {};

	vueSelect2.install = function(Vue) {
		Vue.directive("select2", function(value) {
			var vm = this.vm; 
			var params = value.options || {}; 
			params.data = value.data || [];

			$(this.el).select2( params );
			$(this.el).off("select2:select")
				.on("select2:select", function(e) {
					vm.$data[ value.value ] = params.multiple ? $(this).select2('data') : $(this).select2('data')[0];
				});
		});
	}

	if (typeof exports === "object") module.exports = vueSelect2
	else if (typeof define === "function" && define.amd) define([], function(){ return vueSelect2 })
	else window.vueSelect2 = vueSelect2
})()
