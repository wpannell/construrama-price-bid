import 'script!jquery/dist/jquery';
import {tabs} from './tabs';

describe('Main page', () => {
  let $compile;
  let element;

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(tabs.name));

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
    return angular.element("<tabs></tabs>");
  };
});
