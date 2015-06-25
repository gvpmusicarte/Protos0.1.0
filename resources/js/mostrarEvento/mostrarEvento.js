/**
 * Definifición del módulo controlador para la vista Login
 */

'use strict';

angular.module('Prototipo.mostrarEvento', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mostrarEvento', {
            templateUrl: 'resources/js/mostrarEvento/mostrarEvento.html',
            controller: 'mostrarEventoCtrl'
        });
    }])
    
.controller('mostrarEventoCtrl', ['$scope', '$location', function ($scope, $location) { 

	$scope.init = function(){
	};
	
	$scope.init();

}]);
