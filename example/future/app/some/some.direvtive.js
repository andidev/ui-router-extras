console.log("lazy loaded some.controller.js");
define(['angular', 'app/view1/some.module'], function (angular, view1Module) {
    "use strict";
    return ['$scope', '$state', function ($scope, $state) {
        console.log("some.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded some.module.js, some.state.js, some.controller.js and some.html';
    }];
});