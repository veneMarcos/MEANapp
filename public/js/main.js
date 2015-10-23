//public/js/main.js

//module ngRoute (Gerenciador de rotas do AngularJS).


angular.module('contatooh', ['ngRoute', 'ngResource'])
	.config(function($routeProvider){

	//$routeProvider
	//Configração das rotas no app. Propriedade que recebe e trata a rota.
	$routeProvider.when('/contatos', {
		templateUrl:'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	//Rota padrão, caso a rota informada não exista redirecina para uma padrão
	$routeProvider.otherwise({redirectTo : 'contatos'});
});