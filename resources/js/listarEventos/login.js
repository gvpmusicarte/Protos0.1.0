/**
 * Definifición del módulo controlador para la vista Login
 */

'use strict';

angular.module('Cinema.login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'assets/js/login/login.html',
            controller: 'loginCtrl'
        });
    }])
    
    .controller('loginCtrl', ['$scope', function ($scope) { 
    	//var nextPage = '/pelicula';
        $('.logLink').bind('click', false);

        $scope.userLogin = function(){     		    	
        	if($scope.usuario == "admin" && $scope.password == "admin"){   
	    		$('.logLink').unbind('click', false);
	    	}
    	}
    	// Analisis de usuario y password no permitidos
	
    }]);