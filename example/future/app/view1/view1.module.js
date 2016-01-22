console.log("lazy loaded view1.module.js");
define(['angular'], function (angular) {
    "use strict";
    return angular.module('view1Module', []);
});