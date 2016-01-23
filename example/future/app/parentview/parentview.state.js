console.log("lazy loaded parentview.state.js");
define(['app/parentview/parentview.controller'], function (parentviewController) {
    "use strict";
    return {
        name: 'parentview',
        url: '/parentview',
        controller: parentviewController,
        templateUrl: "app/parentview/parentview.html",
        onEnter: function(){console.log("Entering parentview state");},
        onExit: function(){console.log("Exiting parentview state");}
    };
});