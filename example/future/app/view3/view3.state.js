console.log("lazy loaded view3.state.js");
define(['angular', 'view3.module', 'view3.controller'], function (angular, view1Module) {
    "use strict";
    return {state: 'some state'};
});