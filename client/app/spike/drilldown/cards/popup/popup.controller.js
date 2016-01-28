function PopupController($scope, $mdDialog) {
  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answerClicked = function answerClicked(answer) {
    $mdDialog.hide(answer);
  };
}

PopupController.$inject = ['$scope', '$mdDialog'];

export {PopupController};


