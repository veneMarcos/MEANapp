// public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController' , function($scope, $routeParams, $resource){
	//$scope.mensagem = {texto : ''};

	var Contato = $resource('/contatos/:id');

	Contato.get({id : $routeParams.contatoId},
		function(contato){
			$scope.contato = contato;
		},
		function(erro){
			$scope.mensagem = {texto : 'Não foi possivel obter o contato'};
			console.log(erro);
		}
	);

	console.log($routeParams.contatoId);
});