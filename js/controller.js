/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("kaizen",[]);
app.controller("productsController",function ($scope,$http) {
    $http.get("json/data.json")
    .success(function(response) {$scope.products = response;});
    $scope.count = 0;
    $scope.price = parseFloat(0);
    $scope.cart = [];
    $scope.add = function($product,$price, $quantity){
        $scope.count = $scope.count + $quantity;
        $scope.price = $scope.price +  parseFloat($price);
        $scope.cart.push($product);
        console.log($product);
    };
});
