'use strict';

angular.module('todo1App')

.controller('MainCtrl', function($scope, MyService) {
  $scope.task = {};
  $scope.task.configs =  [
    {name: 'Category A', value: 'Category A'},
    {name: 'Category B', value: 'Category B'},
    {name: 'Category C', value: 'Category C'}
  ];

  $scope.task.category = $scope.task.configs[0].name;

  $scope.saveTask = function (task) {
    MyService.insertTask(task);
    $scope.tasks = MyService.displayTasks();
  };
})



