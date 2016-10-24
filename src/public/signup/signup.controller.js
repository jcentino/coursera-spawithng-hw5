(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService', 'MenuService']
function SignupController(SignupService, MenuService) {
  var signupCtrl = this;
  signupCtrl.message = '';

  signupCtrl.submit = function () {
    signupCtrl.completed = true;
    var user = {};

    var promise = MenuService.getItem(regForm.dish.value);
    promise.then(function (response) {
      console.log(response.data);
      user.firstname = regForm.firstname.value;
      user.lastname = regForm.lastname.value;
      user.email = regForm.email.value;
      user.phone = regForm.phone.value;
      user.dish = response.data;

      console.log("form submitted. user: ", user);

      SignupService.storeUserData(user);
      signupCtrl.message = 'Your information has been saved.';
    })
    .catch(function (error) {
      console.log(error);
      signupCtrl.message = 'No such menu number exists.';
    });
  };
}

})();
