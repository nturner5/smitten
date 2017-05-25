angular.module('app')
    .controller('productCtrl', function($scope, mainSvc){
        $scope.test = 'product controller working';
        // $scope.test1 = mainSvc.test1
    })