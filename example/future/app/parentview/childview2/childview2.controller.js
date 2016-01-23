console.log("lazy loaded childview2.controller.js");
define(['angular', 'app/parentview/childview2/childview2.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("childview2.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded childview2.module.js, childview2.state.js, childview2.controller.js and childview2.html';
    }];
});