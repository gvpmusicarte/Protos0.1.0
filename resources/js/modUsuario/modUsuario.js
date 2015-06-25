/**
 * Definifición del módulo controlador para la vista Asietos
 */

'use strict';

angular.module('Prototipo.modUsuario', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/modUsuario', {
            templateUrl: 'resources/js/modUsuario/modUsuario.html',
            controller: 'modUsuarioCtrl'
        });
    }])

.controller('modUsuarioCtrl', ['$scope', function($scope) {

}]);
