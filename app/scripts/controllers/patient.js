'use strict';

/**
* @ngdoc function
* @name patientInfoApp.controller:PatientCtrl
* @description
* # PatientCtrl
* Controller of the patientInfoApp
*/
angular.module('patientInfoApp')
.controller('PatientCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('/data/person_payload.json').success(function(response) {
    $scope.patients = [response];
  });

  $scope.regex = "^[0-9]{3}$";

  window.$scope = $scope;
}]);
