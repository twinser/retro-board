'use strict';

angular.module('superRetroBoardApp')
  .directive('board', () => ({
    templateUrl: 'components/board/board.html',
    restrict: 'E',
    controller: 'BoardController',
    controllerAs: 'board'
  }));