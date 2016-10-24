(function(){
  angular.module('public')
  .service('SignupService', SignupService);

  function SignupService() {
    var service = this;
    service.user = {};

    service.storeUserData = function(input) {
      var user = {};
      user.firstname = input.firstname;
      user.lastname = input.lastname;
      user.email = input.email;
      user.phone = input.phone;
      user.dish = input.dish;
      service.user = user;
    }

    service.getUserData = function() {
      return service.user;
    }
  }

})();
