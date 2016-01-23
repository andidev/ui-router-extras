console.log("lazy loaded view1.state.js");
define(['app/view1/view1.controller'], function (view1Controller) {
    "use strict";
    console.log("view1Controller = ", view1Controller);
    return {
        name: 'view1',
        url: '/view1',
        controller: view1Controller,
        templateUrl: "app/view1/view1.html",
        onEnter: function(){console.log("Entering view1 state");},
        onExit: function(){console.log("Exiting view1 state");}
    };
});