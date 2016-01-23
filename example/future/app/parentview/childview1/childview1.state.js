console.log("lazy loaded childview1.state.js");
define(['app/parentview/childview1/childview1.controller'], function (childview1Controller) {
    "use strict";
    console.log("childview1Controller = ", childview1Controller);
    return {
        name: 'childview1',
        url: '/childview1',
        controller: childview1Controller,
        templateUrl: "app/parentview/childview1/childview1.html",
        onEnter: function(){console.log("Entering");},
        onExit: function(){console.log("Exiting");}
    };
});