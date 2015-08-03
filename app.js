var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  // $scope.name = 'World';
  $scope.emails = [];
  // $scope.onChangeText = function(e) {
  //   var target = e.target,
  //     text = target.value,
  //     regX = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{3,})$/;
  //   if (regX.test(text)) {
  //     $scope.emails.push(text);
  //     target.value = "";
  //   }
  // };
  $scope.remove = function(index) {
    $scope.emails.splice(index, 1);
  }
});

app.directive('emailCombo', function() {
  return function(scope, element, atts, cntrl) {
    scope.$watch(atts.inputVal, function(value) {
      var regX = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{3,})$/;
      if (regX.test(value)) {
        scope.emails.push(value);
        element[0].value = "";
      }
    });
  };
});
