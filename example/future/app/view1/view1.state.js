console.log("lazy loaded view1.state.js");
define(['angular', 'app/view1/view1.module', 'app/view1/view1.controller'], function () {
    "use strict";
    return {
        templateUrl: "app/view1/view1.html"
    };
});