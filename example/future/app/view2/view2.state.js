console.log("lazy loaded view2.state.js");
define(['angular', 'view2.module', 'view2.controller'], function (angular, view1Module) {
    "use strict";
    return {state: 'some state'};
});