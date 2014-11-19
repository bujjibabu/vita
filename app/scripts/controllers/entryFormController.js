'use strict';

/**
 * @ngdoc function
 * @name vita.controller:entryFormController
 * @description
 * # entryFormController
 * Controller of the vita
 */
angular.module('vita')
	.controller('entryFormController', function($scope,$http,applicationService) {
		$scope.efc = {taskVariables:applicationService.taskVariables};
		$scope.efc.pageNumber = applicationService.activityId;
		$scope.efc.citizenShip=$scope.efc.taskVariables.data.formProperties[0].enumValues[0];
		$scope.efc.relationShip=$scope.efc.taskVariables.data.formProperties[1].enumValues[0];
	});