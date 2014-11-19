'use strict';
angular.module('vita').factory('urlService', function(configService) {
	var url = function(data) {
		angular.extend(this, data);
	};
	url.fixtures = {
		//'getAllProducts':'fixtures/newProductCatalog.json',
	};
	url.partials = {
		//'A_HEADER': 'views/auth/header.html',
	};

	url.services = {
		'processInstances':'http://192.168.208.40:8081/vita/service/runtime/process-instances',
		'currentTaskid':'http://192.168.208.40:8081/vita/home/currentTask',
		'taskVariables':'http://192.168.208.40:8081/vita/service/form/form-data?taskId='
	};

	url.getService = function(urlKey) {
		return angular.copy(url.services[urlKey]);
	};
	url.getView = function(partialkey) {
		return angular.copy(url.partials[partialkey]);
	};
	url.getFixture = function(fixtureKey) {
		return angular.copy(url.fixtures[fixtureKey]);
	};
	return url;
});
