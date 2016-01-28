import 'script!jquery/dist/jquery';
import {gauge} from './gauge';

describe('Gauge page', () => {
  let $compile;
  let element;


  beforeEach(window.module('ui.router'));
  beforeEach(window.module(gauge.name));

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
    return angular.element("<gauge></gauge>");
  };
});
