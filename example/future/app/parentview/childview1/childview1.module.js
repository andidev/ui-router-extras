console.log("lazy loaded childview1.module.js");
define(['angular'], function (angular) {
    "use strict";
    return angular.module('childview1Module', []);
});