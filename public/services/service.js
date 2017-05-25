angular.module('app')
    .service('mainSvc', function($http){
        this.test1 = 'service works'
    this.readProducts = function(){
        return $http.get('/products').then(function(resp){
            // console.log("Service: " + resp);
            return resp;
        })
    }
    })