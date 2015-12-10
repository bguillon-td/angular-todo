'use strict';

/**
 * @ngdoc function
 * @name todo1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todo1App
 */
angular.module('todo1App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

//Afficher les tasks
  .controller('DisplayTaskCtrl', ['$scope', function($scope, MyService) {

    //List tasks from service
    //MyService.displayTasks();

    $scope.tasks = [
      {'deadline': '01/01/2001',
        'description': 'Task1'
      },
      {'deadline': '01/01/2002',
        'description': 'Task2'
      },
    ];
  }])

//Inserer une tache
.controller('InsertTaskCtrl', ['$scope', 'MyService', function($scope, MyService) {
    //Save task in service
  $scope.save = function() {
    MyService.insertTask();
    //$scope.user = angular.copy($scope.master);
  };

}])


