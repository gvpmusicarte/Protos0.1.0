/**
 * Definifición del módulo controlador para modificar Eventos
 */

'use strict';

angular.module('Prototipo.modEventos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/modEventos', {
            templateUrl: 'resources/js/modEventos/modEventos.html',
            controller: 'modEventosCtrl'
        });
    }])

.controller('modEventosCtrl', ['$scope', function($scope) {

}]);

