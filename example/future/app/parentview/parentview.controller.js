console.log("lazy loaded parentview.controller.js");
define(['angular', 'app/parentview/parentview.module'], function (angular, parentviewModule) {
    "use strict";
    parentviewModule.controller('parentviewController', parentviewController);
    parentviewController.$inject = ['$scope', '$state'];
    return parentviewController;

    function parentviewController($scope, $state) {
        console.log("parentview.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded parentview.module.js, parentview.state.js, parentview.controller.js and parentview.html';
    }
});