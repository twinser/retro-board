'use strict';
var BoardController = function ($scope){
$scope.board = {
    title : 'Click here to edit this title'
};
};

angular.module('superRetroBoardApp')
  .controller('BoardController', BoardController);
