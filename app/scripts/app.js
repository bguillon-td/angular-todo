'use strict';

/**
 * @ngdoc overview
 * @name todo1App
 * @description
 * # todo1App
 *
 * Main module of the application.
 */
angular
  .module('todo1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

.service('MyService', function () {
  var tasks = [];
  this.insertTask = function (task) {
    console.log('saveTask');
    tasks.push({deadline:task.deadline, category:task.category, description:task.description});
  };
  this.displayTasks = function () {
    console.log('displayTasks');
    return tasks;
  };
})

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

