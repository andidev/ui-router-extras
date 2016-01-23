console.log("lazy loaded childview2.state.js");
define(['app/parentview/childview2/childview2.controller'], function (childview2Controller) {
    "use strict";
    return {
        name: 'parentview.childview2',
        url: '/childview2',
        controller: childview2Controller,
        templateUrl: "app/parentview/childview2/childview2.html",
        onEnter: function(){console.log("Entering parentview.childview2 state");},
        onExit: function(){console.log("Exiting parentview.childview2 state");}
    };
});