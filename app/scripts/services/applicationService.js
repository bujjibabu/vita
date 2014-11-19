'use strict';

angular.module('vita').factory('applicationService', function(logService) {
	var application = function(data) {
		angular.extend(this, data);
	};
	application.pageNumberObject=null;
  application.DynamicPath=null;
	application.taskVariables={};
	application.activityId=null;
	application.safeApply = function(scopeObject) {
		try{
			logService.log('Before applying $apply');
			if(!scopeObject.$$phase) {
				logService.log('$apply not in progress');
				scopeObject.$apply();
				logService.log('$apply applied');
			}else{
				logService.log('$apply already in progress');
			}
		}catch(e){}
	};
	return application;
});