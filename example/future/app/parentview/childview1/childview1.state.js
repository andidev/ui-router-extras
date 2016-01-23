console.log("lazy loaded childview1.state.js");
define(['app/parentview/childview1/childview1.controller'], function (childview1Controller) {
    "use strict";
    return {
        name: 'parentview.childview1',
        url: '/childview1',
        controller: childview1Controller,
        templateUrl: "app/parentview/childview1/childview1.html",
        onEnter: function(){console.log("Entering parentview.childview1 state");},
        onExit: function(){console.log("Exiting parentview.childview1 state");}
    };
});