var exec = require("child_process").exec;

function start(response){
	console.log('Manipulador de petición "iniciar" ha sido llamado.');
	
	exec('find /',
		{timeout: 10000, maxBuffer: 20000*1024},
		function(error, stdout, stderr){
			response.writeHead(200,{'Content-Type':'text/html'});				
			response.write(stdout);
			response.end();
		});
}

function upload(response){
	console.log('Manipulador de petición "subir" ha sido llamado.');	
	response.writeHead(200,{'Content-Type':'text/html'});				
	response.write("Hola Subir");
	response.end();
}

function searchIcon(response){
	console.log('No se tiene icono');
	response.writeHead(404,{'Content-Type':'text/html'});				
	response.write('No hay icono');
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.searchIcon = searchIcon;
