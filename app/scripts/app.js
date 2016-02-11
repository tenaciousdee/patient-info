'use strict';

/**
 * @ngdoc overview
 * @name patientInfoApp
 * @description
 * # patientInfoApp
 *
 * Main module of the application.
 */
angular
  .module('patientInfoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/patient.html',
        controller: 'PatientCtrl',
        controllerAs: 'patient'
      })
      .when('/patient', {
        templateUrl: 'views/patient.html',
        controller: 'PatientCtrl',
        controllerAs: 'patient'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
