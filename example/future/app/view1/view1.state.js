console.log("lazy loaded view1.state.js");
define(['angular', 'view1.module', 'view1.controller'], function (angular, view1Module) {
    "use strict";
    return {state: 'some state'};
});