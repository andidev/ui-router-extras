console.log("lazy loaded parentview.controller.js");
define(['angular', 'app/parentview/parentview.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("parentview.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded parentview.module.js, parentview.state.js, parentview.controller.js and parentview.html';
    }];
});