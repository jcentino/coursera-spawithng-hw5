(function() {

"use strict";

angular.module('public')
.component('userInfo', {
  templateUrl: 'src/public/userinfo/userinfo.html',
  bindings: {
    userItem: '<'
  },
  controller: UserInfoController
});

UserInfoController.$inject = ['ApiPath']
function UserInfoController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
