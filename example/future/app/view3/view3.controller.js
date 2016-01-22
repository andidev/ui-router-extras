console.log("lazy loaded view3.controller.js");
define(['angular', 'app/view3/view3.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("view3.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded view3.module.js, view3.state.js, view3.controller.js and view3.html';
    }];
});