//app/routes/home.js
//var controller = require('../controllers/home')();

module.exports = function(app){
	var controller = app.controllers.home;
	app.get('/', controller.index);
	//app.get('/index', controller.index);
}