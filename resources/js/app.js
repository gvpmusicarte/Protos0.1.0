'use strict';

/**
 * Registra el módulo principal de la aplicación y todas las dependiencias.
 * El módulo para cargar rutas se llama ngRoute, también se hace referencia a cada
 * ruta para que se pueda inyectar en el código.
 */
angular.module('Prototipo', [
    'ngRoute',
    'Prototipo.regEventos',
    'Prototipo.regUsuario',
    'Prototipo.listarEventos',
    'Prototipo.mostrarEvento',
    'Prototipo.modEventos',
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/listarEventos'});
}]);
