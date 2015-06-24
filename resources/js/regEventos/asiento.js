/**
 * Definifición del módulo controlador para la vista Asietos
 */

'use strict';

angular.module('Cinema.asiento', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/asiento', {
            templateUrl: 'assets/js/asiento/asiento.html',
            controller: 'asientoCtrl'
        });
    }])

.controller('asientoCtrl', ['$scope', function($scope) {

        $scope.cantidadAsientos = 0;
        $scope.cantSelecionada = 0;
        $scope.cantSelectPre = 0;
    
        $scope.asientosFilaAA = [
                {numero:"A1"},
                {numero:"A2"},
                {numero:"A3"}
        ];
      
        $scope.asientosFilaAB = [
                {numero:"A4"},
                {numero:"A5"},
                {numero:"A6"}
        ];
        
        
        $scope.asientosFilaBA = [
                {numero:"B1" },
                {numero:"B2" },
                {numero:"B3"}
        ];
            
        $scope.asientosFilaBB = [          
                {numero:"B4" },
                {numero:"B5" },
                {numero:"B6"}
        ];
        
        
        $scope.asientosFilaPA = [
                {numero:"P1"}
        ];
            
        $scope.asientosFilaPB = [            
                {numero:"P2"}
        ];
        
        $scope.isSelected = function(asiento){
			if(asiento.target.className ==="no_selected"){
				$scope.checkCant(asiento);
			}else if(asiento.target.className ==="selected"){
                asiento.target.className = "no_selected";
                $scope.cantidadAsientos= $scope.cantidadAsientos+1;
                $scope.cantSelecionada = $scope.cantSelecionada-1;
            }else{
                
            }
        };
    
        $scope.checkCant = function(asiento){
            if($scope.cantidadAsientos>0){
                asiento.target.className = "selected";
                $scope.cantidadAsientos= $scope.cantidadAsientos-1;
                $scope.cantSelecionada = $scope.cantSelecionada+1;
            }
        }
    
    
        $scope.isViPSelected = function(asiento){
            if(asiento.target.className ==="no_selected"){
				$scope.cantViP(asiento);
			}else if(asiento.target.className ==="selected"){
                asiento.target.className = "no_selected";
                $scope.cantidadAsientos= $scope.cantidadAsientos+1;
                $scope.cantSelectPre = $scope.cantSelectPre-1;
            }else{
                
            }
        }
        
        $scope.cantViP = function(asiento){
            if($scope.cantidadAsientos>0){
                asiento.target.className = "selected";
                $scope.cantidadAsientos= $scope.cantidadAsientos-1;
                $scope.cantSelectPre = $scope.cantSelectPre+1;
            }
        }
}]);


