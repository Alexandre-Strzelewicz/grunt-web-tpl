
/* global angular */

/**
 * @doc module
 * @id UserModule
 * @description UserModule
 *
 * @author Alexandre Strzelewicz <as@unitech.io>
 */

var UserModule = angular.module('UserModule', []);

UserModule.constant('version', '0.1');

UserModule.config(function() { 
});

UserModule.run(function() { 
});

/**
 * @doc service
 * @id UserModule:User
 * 
 * @description User model
 * @author Alexandre Strzelewicz <as@unitech.io>
 */
UserModule.factory('User', ['$http', function($http) {
  var User = {};
  
  User.init = function() {
    
  };
  
  return User;
}]);
