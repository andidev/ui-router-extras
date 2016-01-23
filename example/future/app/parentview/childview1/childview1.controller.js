console.log("lazy loaded childview1.controller.js");
define(['angular', 'app/parentview/childview1/childview1.module'], function (angular, view1Module) {
    "use strict";
    //view1Module.controller('view1Controller', ['$scope', '$state', function ($scope, $state) {
    //    $scope.somedata = ['foo', 'bar', 'baz'];
    //}]);
    return ['$scope', '$state', function ($scope, $state) {
        console.log("childview1.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded childview1.module.js, childview1.state.js, childview1.controller.js and childview1.html';
    }];
});