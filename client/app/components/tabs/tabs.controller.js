function TabsController($scope) {
  $scope.$on('$stateChangeSuccess', function (event, toState) {
    $scope.selectedTab = toState.selectedTab;
  });
}

TabsController.$inject = ['$scope'];

export {TabsController};


