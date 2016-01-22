console.log("lazy loaded view1.controller.js");
define(['angular', 'app/view1/view1.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("view1.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded view1.module.js, view1.state.js, view1.controller.js and view1.html';
    }];
});