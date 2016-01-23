console.log("lazy loaded childview2.controller.js");
define(['angular', 'app/parentview/childview2/childview2.module'], function (angular, childview2Module) {
    "use strict";
    childview2Module.controller('childview2Controller', childview2Controller);
    childview2Controller.$inject = ['$scope', '$state'];
    return childview2Controller;

    function childview2Controller($scope, $state) {
        console.log("childview2.controller created");
        $scope.lazyLoadDescription = 'Lazy loaded childview2.module.js, childview2.state.js, childview2.controller.js and childview2.html';
    }
});