/**
 * Definifición del módulo controlador para la vista Asietos
 */

'use strict';

angular.module('Prototipo.regEventos', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/regEventos', {
            templateUrl: 'resources/js/regEventos/regEventos.html',
            controller: 'regEventosCtrl'
        });
    }])

.controller('regEventosCtrl', ['$scope', function($scope) {

}]);


