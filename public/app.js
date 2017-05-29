// angular.module('app', [])
angular.module('app', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){


$stateProvider
    .state('home', {
        url: '/',
        controller: 'mainCtrl',
        templateUrl: 'views/home.html'
        // template: '<h1>hello world</h1>'
    })

    .state('product', {
        url: '/product/:id',
        //change to :id
        controller: 'productCtrl',
        templateUrl: './views/product.html'
        // template: '<h1>Product works</h1>'
    })

    .state('checkout', {
        url: 'checkout',
        controller: 'checkoutCtrl',
        templateUrl: 'views/checkout.html'
    })

     .state('cart', {
        url: 'cart',
        controller: 'cartCtrl',
        templateUrl: 'views/cart.html'
    })
})
 