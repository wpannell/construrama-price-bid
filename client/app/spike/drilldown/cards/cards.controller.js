import './popup/popup.styl';
import template from './popup/popup.html';
import {PopupController as controller} from './popup/popup.controller.js';

function CardsController($scope, $element, $mdDialog) {
  const NUMBER_OF_TABS = 5;
  const FIRST_TAB_INDEX = 0;
  const LAST_TAB_INDEX = NUMBER_OF_TABS - 1;

  configureNavigator();
  configurePopup();
  configureGauge();

  function configureNavigator() {
    $scope.selectedTab = FIRST_TAB_INDEX;
    $scope.isPreviousDisabled = true;

    $scope.onPrevious = function previous() {
      $scope.selectedTab = ($scope.selectedTab - 1) % NUMBER_OF_TABS;
      $scope.isPreviousDisabled = ($scope.selectedTab === FIRST_TAB_INDEX);
      $scope.isNextDisabled = false;
    };

    $scope.onNext = function next() {
      $scope.selectedTab = ($scope.selectedTab + 1) % NUMBER_OF_TABS;
      $scope.isNextDisabled = ($scope.selectedTab === LAST_TAB_INDEX);
      $scope.isPreviousDisabled = false;
    };
  }

  function configurePopup() {
    $scope.showPopup = function showPopup(event) {
      $mdDialog.show({
        controller,
        template,
        parent: $element,
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: false
      }).then(function (answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
    };
  }

  function configureGauge() {
    $scope.bounds = '100';
    $scope.cx = '50';
    $scope.cy = '50';
    $scope.radius = '40';
    $scope.completed = '50';
  }
}

CardsController.$inject = ['$scope', '$element', '$mdDialog'];

export {CardsController};


