'use strict';

angular.module('superRetroBoardApp', [
  'superRetroBoardApp.constants',
  'ngCookies',
  'ngResource',
  'xeditable',
  'ngSanitize',
  'ui.router'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
