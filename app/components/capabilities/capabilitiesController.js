'use strict';

/* Refstack Capabilities Controller */

var refstackApp = angular.module('refstackApp');

refstackApp.controller('capabilitiesController', ['$scope', '$http', function($scope, $http) {
    $scope.version = "2015.03";
    $scope.update = function() {
        // Rate-limiting is an issue with this URL. Using a local copy for now.
        // var content_url = 'https://api.github.com/repos/openstack/defcore/contents/'.concat($scope.version, '.json');
        var content_url = 'assets/capabilities/'.concat($scope.version, '.json');
        $http.get(content_url).success(function(data) {
            //$scope.data = data;
            //$scope.capabilities = JSON.parse(atob($scope.data.content.replace(/\s/g, '')));
            $scope.capabilities = data;
        }).error(function(error) {
            console.log(error);
            $scope.capabilities = "Error retrieving capabilities."; 
        });
    }
    $scope.update()
    $scope.status = {
        required: 'required',
        advisory: '',
        deprecated: '',
        removed: ''
    };
    
    $scope.filterStatus = function(capability){
        return capability.status === $scope.status.required || 
            capability.status === $scope.status.advisory ||
            capability.status === $scope.status.deprecated ||
            capability.status === $scope.status.removed;
    };

}]);

// Convert an object of objects to an array of objects to use with ng-repeat
// filters.
refstackApp.filter('arrayConverter', function() {
    return function(objects) {
        var array = [];
        angular.forEach(objects, function(object) {
            array.push(object);
        });
        return array;
    };
});


