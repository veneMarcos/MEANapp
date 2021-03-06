//config/database.js
var mongoose = require('mongoose');

module.exports = function(uri){
	
	mongoose.connect(uri, {server : {poolSize :15 }});
	mongoose.set('debug', false);

	mongoose.connection.on('connected', function() {
		console.log('Mongoose! Conectado em ' + uri);
	});

	mongoose.connection.on('disconnected', function() {		
		console.log('Mongoose! Desconectado de ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('Mongoose! Erro na conexão! Descrição' + erro);
	});

	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			process.exit(0);
		});
	});
}