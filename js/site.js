/*global angular*/

var app = angular.module('app', []);
app.controller('ctrl', function($scope) {
    $scope.test="test";
});

$(document).ready(function(){
    console.log('loaded');
});