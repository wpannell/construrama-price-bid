function DrilldownController($scope, $state) {
  $scope.$on('$stateChangeSuccess', function (event, toState) {
    $scope.selectedTab = toState.selectedTab;
  });

  $scope.drilldown = function() {
    $state.go('cards');
  };
}

DrilldownController.$inject = ['$scope', '$state'];

export {DrilldownController};


