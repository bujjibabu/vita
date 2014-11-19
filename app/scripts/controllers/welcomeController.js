'use strict';

/**
 * @ngdoc function
 * @name vita.controller:wcController
 * @description
 * # wcController
 * Controller of the vita
 */
angular.module('vita')
	.controller('welcomeController', function($scope, $location, applicationService, myJourneyService, alertService, data$workflow) {
		$scope.wc = {};
		$scope.wc.fnStartWorkflow = function(){
			var temp= angular.copy(data$workflow);
			var newTemp=temp.data.data[temp.data.data.length-1];
			applicationService.activityId = newTemp.activityId;
			$scope.wc.processInstanceId =newTemp.id;
			$scope.wc.getCurrentTaskid($scope.wc.processInstanceId);
		};
		$scope.wc.getCurrentTaskid = function(id){
			myJourneyService.currentTaskId(id).then(function(result){
				if (!result.hasOwnProperty('error')) {
					$scope.wc.currenttaskid=result.data.taskId;
					$scope.wc.geTtaskVariables($scope.wc.currenttaskid);
				} else {
					alertService.error(result.message);
				}
			});
		};
		$scope.wc.geTtaskVariables = function(id){
			myJourneyService.getTaskVariables(id).then(function(result) {
				if (!result.hasOwnProperty('error')) {
					applicationService.taskVariables=angular.copy(result);
					$location.path('/entryForm');
				} else {
					alertService.error(result.message);
				}
			});
		};
		$scope.wc.fnInit = function(){
			if(data$workflow.hasOwnProperty('error')){
				alertService.error(data$workflow.message);
			}
		};
		$scope.wc.fnInit();
	});