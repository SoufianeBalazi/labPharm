
angular.module('app.controllers', [])

  .controller('loginCtrl', function($scope,$state) {

    $scope.login=function(){
      $state.go('tab.commandesParMois');
    };
  })

  .controller('chartCommandesParMoisCtrl', function($scope) {

  })

  .controller('chartCommandesCtrl', function($scope) {

  })

  .controller('gridFacturesNonPayeesCtrl', function($scope) {

  })


  .controller('gridFacturesNonPayeesCtrl', function($scope) {

  })


;


