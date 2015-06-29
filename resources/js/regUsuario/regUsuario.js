/**
 * Definifición del módulo controlador para la vista Asietos
 */

'use strict';

angular.module('Prototipo.regUsuario', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/regUsuario', {
            templateUrl: 'resources/js/regUsuario/regUsuario.html',
            controller: 'regUsuarioCtrl'
        });
    }])

.controller('regUsuarioCtrl', ['$scope', function($scope) {

}]);
