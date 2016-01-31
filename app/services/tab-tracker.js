(function() {
	'use strict';

	angular
	    .module('tabActive')
	    .service('tabActive', tabActive);

	function tabActive(){
		var vm = this;
		vm.activeTab = 0;

		vm.getActiveTab = function() {
		    return vm.activeTab;
		};

		vm.setActiveTab = function(num) {
            vm.activeTab = num; 
		};
	}
})();