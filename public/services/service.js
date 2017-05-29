angular.module('app')
    .service('mainSvc', function ($http) {
        this.test1 = 'service works';
        this.readProduct = function (id) {
                //  console.log(id);
                return $http.get('/product/' + id)
            },
            this.readProducts = function () {
                return $http.get('/products').then(function (resp) {
                    // console.log("Service: " + resp);
                    return resp;
                })
            }
    })