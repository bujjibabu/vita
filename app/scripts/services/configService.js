'use strict';
angular.module('vita').factory('configService', function() {
	var configuration = function(data) {
		angular.extend(this, data);
	};
	configuration.LANGUAGE = 'en_US';
	configuration.LOGGER = {
		'ENABLED': true,
		'LEVEL': 'LOG'
	};
	// configuration.IP_ADDRESS = '/';
	// configuration.CONTEXT = 'mrc-core/';
	return configuration;
});