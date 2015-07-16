;(function(){
	"use strict";

	var vueSelect2 = {};

	vueSelect2.install = function(Vue) {
		var directive = {
			update: function(value) {
				var _this = this;
				switch( _this.arg ) {
					case "options": $(_this.el).select2({ data: value });
						break;

					case "value":
						$(_this.el).off("select2:select").on("select2:select", function(e) { _this.vm.$data[_this.expression] = $(this).val() });
						break;
				}
			}
		}

		Vue.directive("select2", directive);
	}

	if (typeof exports === "object") module.exports = vueSelect2
	else if (typeof define === "function" && define.amd) define([], function(){ return vueSelect2 })
	else window.vueSelect2 = vueSelect2
})()
