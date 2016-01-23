console.log("lazy loaded childview2.module.js");
define(['angular'], function (angular) {
    "use strict";
    return angular.module('childview1Module', []);
});