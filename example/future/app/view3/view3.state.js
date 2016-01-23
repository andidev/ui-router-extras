console.log("lazy loaded view3.state.js");
define(['app/view3/view3.controller'], function (view3Controller) {
    "use strict";
    console.log("view3Controller = ", view3Controller);
    return {
        name: 'view3',
        url: '/view3',
        controller: view3Controller,
        templateUrl: "app/view3/view3.html",
        onEnter: function(){console.log("Entering view3 state");},
        onExit: function(){console.log("Exiting view3 state");}
    };
});