/**
 * Definifición del módulo controlador para la vista Pelicula
 */

'use strict';

angular.module('Cinema.pelicula', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/pelicula', {
            templateUrl: 'assets/js/pelicula/pelicula.html',
            controller: 'peliculaCtrl'
        });
    }])

.controller('peliculaCtrl', ['$scope', 'infoCompra', function($scope, infoCompra) {

	$scope.nombrePelicula = function() {
        return infoCompra.getNombrePelicula();
    };
	$scope.setNombrePelicula = infoCompra.setNombrePelicula;

	$scope.horaPelicula = function() {
        return infoCompra.getHoraPelicula();
    };
	$scope.setHoraPelicula = infoCompra.setHoraPelicula;
	
	$scope.peliculas = [
		{
			nombre: "Pulp Fiction",
			img: "assets/img/pulp_fiction.jpg",
			tandas: [
				{hora: "3:00 - 5:20 pm"},
				{hora: "6:30 - 8:50 pm"}
			]
		},
		{
			nombre: "Kill Bill",
			img: "assets/img/kill_bill.jpg",
			tandas: [
				{hora: "1:00 - 2:45 pm"},
				{hora: "4:00 - 5:45 pm"}
			]
		},
		{
			nombre: "Django",
			img: "assets/img/django.jpg",
			tandas: [
				{hora: "5:00 - 7:20 pm"},
				{hora: "7:30 - 9:50 pm"}
			]
		},
	];
	
	$scope.seleccionarPelicula = function(nombre, hora){
		$scope.setNombrePelicula(nombre);
		$scope.setHoraPelicula(hora);
	};

}]);

