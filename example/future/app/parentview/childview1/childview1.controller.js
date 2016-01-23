console.log("lazy loaded childview1.controller.js");
define(['angular', 'app/parentview/childview1/childview1.module'], function (angular, childview1Module) {
    "use strict";
    childview1Module.controller('childview1Controller', childview1Controller);
    childview1Controller.$inject = ['$scope', '$state'];
    return childview1Controller;

    function childview1Controller($scope, $state) {
        console.log("childview1.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded childview1.module.js, childview1.state.js, childview1.controller.js and childview1.html';
    }
});