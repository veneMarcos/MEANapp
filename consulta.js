// contatooh/consulta.js

var MongoClient = require('mongodb').MongoClient
	, format = require('util').format;

//var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente
//var _idProcurado = new ObjectID('56324e727b1691655089f87c');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(err, db) {
		if (err) {
			throw err;
		} else {
			console.log("sucesso");
		}
		/*db.collection('contatos').findOne({_id : _idProcurado},
			function(erro, contato) {
				if(erro) throw err;
				console.log(contato);
			}
		);*/
	db.close();
	}
);