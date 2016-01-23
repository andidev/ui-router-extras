console.log("lazy loaded view2.state.js");
define(['app/view2/view2.controller'], function (view2Controller) {
    "use strict";
    console.log("view2Controller = ", view2Controller);
    return {
        name: 'view2',
        url: '/view2',
        controller: view2Controller,
        templateUrl: "app/view2/view2.html",
        onEnter: function(){console.log("Entering");},
        onExit: function(){console.log("Exiting");}
    };
});