console.log("lazy loaded view2.controller.js");
define(['angular', 'app/view2/view2.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("view2.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded view2.module.js, view2.state.js, view2.controller.js and view2.html';
    }];
});