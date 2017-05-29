angular.module('app')
    .controller('productCtrl', function($scope, mainSvc, $stateParams, $state){
        $scope.test = 'product controller working';
        // $scope.test1 = mainSvc.test1


        mainSvc.readProduct($stateParams.id).then(function (resp) {
            // console.log(resp)
            $scope.product = resp.data[0];
        });
    })