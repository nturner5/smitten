angular.module('app')
.controller('cartCtrl', function($scope, mainSvc, $state){
    mainSvc.readProducts().then(function(resp){
        $scope.products = resp.data;
        // console.log
    })
})