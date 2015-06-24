'use strict';

/**
 * Registra el módulo principal de la aplicación y todas las dependiencias.
 * El módulo para cargar rutas se llama ngRoute, también se hace referencia a cada
 * ruta para que se pueda inyectar en el código.
 */
angular.module('Prototipo', [
    'ngRoute',
    'Prototipo.listarEventos',
    'Prototipo.regEventos'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/listarEventos'});
}]);

/*.service('infoCompra', function () {
        var nombrePelicula = "";
        var horaPelicula = "";
        return {
            getNombrePelicula:function () {
                return nombrePelicula;
            },
            setNombrePelicula:function (value) {
                nombrePelicula = value;
            },
            getHoraPelicula:function () {
                return horaPelicula;
            },
            setHoraPelicula:function (value) {
                horaPelicula = value;
            },
        };
    });*/