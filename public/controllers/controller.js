angular.module('app')
    .controller('controller', function($scope, mainSvc){
        $scope.test = 'controller working';
        $scope.test1 = mainSvc.test1;
        $scope.testHome = 'controller works on home view'
        mainSvc.readProducts().then(function(resp){
        // console.log(resp.data)
        $scope.products = resp.data;
    });
    })