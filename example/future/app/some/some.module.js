console.log("lazy loaded some.module.js");
define(['angular'], function (angular) {
    "use strict";
    return angular.module('someModule', []);
});