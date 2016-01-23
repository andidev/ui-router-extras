console.log("lazy loaded parentview.state.js");
define(['angular', 'parentview.module', 'parentview.controller'], function (angular, view1Module) {
    "use strict";
    return {state: 'some state'};
});