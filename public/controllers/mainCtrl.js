angular.module('app')
    .controller('mainCtrl', function($scope, mainSvc, $state){
        $scope.test = 'controller working';
        $scope.test1 = mainSvc.test1;
        $scope.testHome = 'controller works on home view'
        mainSvc.readProducts().then(function(resp){
        // console.log(resp.data)
        $scope.products = resp.data;
    });
    })