// ...to test the popup's logic...

import 'script!jquery/dist/jquery';
import {popup} from './popup';

describe('Popup page', () => {
  let $compile;
  let element;


  beforeEach(window.module('ui.router'));
  beforeEach(window.module(popup.name));

  beforeEach(inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
    });
  });

  var buildTemplate = () => {
    return angular.element("<popup></popup>");
  };
});
