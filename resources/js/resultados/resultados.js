
/**
 * Definifición del módulo controlador para la vista que despliega los resultados finales
 */

'use strict';

angular.module('Cinema.resultado', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/resultado', {
            templateUrl: 'assets/js/resultados/resultados.html',
            controller: 'resultCtrl'
        });
    }])

.controller('resultCtrl', ['$scope', 'infoCompra', function($scope, infoCompra) {

	$scope.nombrePelicula = function() {
        return infoCompra.getNombrePelicula();
    };
	$scope.setNombrePelicula = infoCompra.setNombrePelicula;
	
	$scope.horaPelicula = function() {
        return infoCompra.getHoraPelicula();
    };
	$scope.setHoraPelicula = infoCompra.setHoraPelicula;
	
    $scope.cantTrad = 5;
    $scope.cantVIP = 2;	
    /**$scope.grandtotal = ($scope.cantTrad * 5000) + ($scope.cantVIP * 2500); */      

}]);