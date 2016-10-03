(function() {
  "use strict";

  angular.module("app").controller("list", function($scope){

    $scope.list = [
      {
        text: "Bring the beer",
        complete: false,
      }
    ];

    $scope.addTask = function(task){
      if ($scope.task){
        task.complete = false;
        $scope.list.push(task);
        true_count();
      }
      else {
        alert ("Please put in text.") ;
      }
      $scope.task = "";
     };

    $scope.isPositive = function(task){
      return task.text.indexOf("stupid") === -1;
    };

    $scope.toggleTask = function(task) {
      task.complete = !task.complete;
      true_count();
    };

    var true_count = function(){
      console.log('print');
      var count = 0 ;
      for (var i = 0; i < $scope.list.length; i++)
      if(!$scope.list[i].complete){
      count++;
      }
      $scope.count = count;
    };
    true_count();

    $scope.clear = function(){
    for (var i = 0; i < $scope.list.length; i++)
      if ($scope.list[i].complete === true){
        $scope.list.splice(i, 1);
      }
    };

  });
})();
