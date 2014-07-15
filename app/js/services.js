'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', [])
//    .value('version', '0.1');

var services = angular.module('myApp.services', []);

services.service('questionData', function() {
    return {};
});
