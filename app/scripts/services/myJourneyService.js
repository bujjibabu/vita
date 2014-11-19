'use strict';
angular.module('vita').factory('myJourneyService', function(logService,urlService,commonService,Base64,$q,$http){
	var myjouney = function(data) {
		angular.extend(this, data);
	};
	myjouney.processInstances = function() {
		var url = urlService.getService('processInstances');
		/*var headers = {
			"Authorization": "Basic " + Base64.encode("administrator" + ":" + "administrator")
		};*/
		var headers = {
		  "Authorization": "Basic " + window.btoa("administrator" + ":" + "administrator")
		};
		var deferred = $q.defer();
		$http.get(url,{header:headers}).success(function(response) {
			deferred.resolve({
				data: response,
				message: ''
			});
		}).error(function(response) {
			deferred.resolve({
				'error': 'ok',
				'message': 'Sorry, failed to get response',
				'response':response
			});
		});
		return deferred.promise;
	};
	myjouney.currentTaskId = function(id) {
		var url = urlService.getService('currentTaskid')+'/'+id;
		var headers = {
			"Authorization": "Basic " + Base64.encode("administrator" + ":" + "administrator")
		};
		var deferred = $q.defer();
		$http.get(url,{header:headers}).success(function(response) {
			deferred.resolve({
				data: response,
				message: ''
			});
		}).error(function(response) {
			deferred.resolve({
				'error': 'ok',
				'message': 'Sorry, failed to get response',
				'response':response
			});
		});
		return deferred.promise;
	};
	myjouney.getTaskVariables = function(id) {
		var url = urlService.getService('taskVariables')+id;
		var headers = {
			"Authorization": "Basic " + Base64.encode("administrator" + ":" + "administrator")
		};
		var deferred = $q.defer();
		$http.get(url,{header:headers}).success(function(response) {
			deferred.resolve({
				data: response,
				message: ''
			});
		}).error(function(response) {
			deferred.resolve({
				'error': 'ok',
				'message': 'Sorry, failed to get response',
				'response':response
			});
		});
		return deferred.promise;
	};
	return myjouney;
});