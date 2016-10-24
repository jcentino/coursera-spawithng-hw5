(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = SignupService.getUserData();
}

})();
