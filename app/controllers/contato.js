// app/controllers/contato.js

var contatos = [
	{_id:1, nome : 'Contato exemplo 1', email: 'cont1@empresa.com.br'},
	{_id:2, nome : 'Contato exemplo 2', email: 'cont2@empresa.com.br'},
	{_id:3, nome : 'Contato exemplo 3', email: 'cont3@empresa.com.br'},
	{_id:4, nome : 'Contato exemplo 4', email: 'cont4@empresa.com.br'}	
];

module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};

	controller.removeContato = function(req, res){
		var idContato = req.params.id;

		contatos = contatos.filter(function(contato){
				return contato._id != idContato;
			}						
		);

		res.status(204).send();
	}

	controller.obtemContato = function(req, res){
		var idContato = req.params.id;
		
		var contato = contatos.filter(function(contato) {
			return contato._id == idContato;
		})[0];

		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	return controller;
}