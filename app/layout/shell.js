(function(){
	'use strict';
    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['tabActive'];

        function Shell(tabActive) {
        	var vm = this;
        	vm.serv = tabActive;
        };
})();