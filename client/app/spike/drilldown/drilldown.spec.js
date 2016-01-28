import 'script!jquery/dist/jquery';
import {drilldown} from './drilldown';

describe('Drilldown page', () => {
  let $compile;
  let element;


  beforeEach(window.module('ui.router'));
  beforeEach(window.module(drilldown.name));

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
    return angular.element("<drilldown></drilldown>");
  };
});
