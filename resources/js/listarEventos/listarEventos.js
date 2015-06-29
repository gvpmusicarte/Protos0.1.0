/**
 * Definifición del módulo controlador para la vista Login
 */

'use strict';

angular.module('Prototipo.listarEventos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/listarEventos', {
            templateUrl: 'resources/js/listarEventos/listarEventos.html',
            controller: 'listarEventosCtrl'
        });
    }])
    
.controller('listarEventosCtrl', ['$scope', '$location', function ($scope, $location) { 

	$scope.init = function(){
	};

	$scope.verEvento = function() {
		$location.path("/mostrarEvento");
	}
	
	$scope.init();

}]);
