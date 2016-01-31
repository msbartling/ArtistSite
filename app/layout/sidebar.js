(function(){
	'use strict';
    angular
        .module("app.layout")
        .controller("Sidebar", Sidebar);

    Sidebar.$inject = ['tabActive'];

    function Sidebar(tabActive){
    	var vm = this;
    	vm.home = {
            categories: [
              "Welcome",
              "Recent News",
              "Previews",
              "Conclusion"
            ],
            active: true
        };
    	vm.shop = {
            categories: [
              "Meaning",
              "Fabrics",
              "Ceramics",
              "Acrylics"
            ],
            active: false
        };
    	vm.about = {
            categories: [
              "Story",
              "Newsfeed",
              "Process",
              "Contact"
            ],
            active: false
        };

      vm.isActive = function(num){
          vm.home.active = false;
          vm.shop.active = false;        
          vm.about.active = false;
          if(tabActive.activeTab === num){
              vm.home.active = true;              
              return vm.home.active;        
          } else if(tabActive.activeTab === num) {
              vm.shop.active = true;
              return vm.shop.active;
          } else if(tabActive.activeTab === num){
              vm.about.active = true;
              return vm.about.active;
          } else {
            return false;
          }

        };
    };
})();