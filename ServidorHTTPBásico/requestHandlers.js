var exec = require("child_process").exec;

function iniciar(response){
	console.log('Manipulador de petición "iniciar" ha sido llamado.');
	
	/*exec('ls -lah', function (error,stdout,stderr){
		response.writeHead(200,{'Content-Type':'text/html'});				
		response.write(stdout);
		response.end();
	});*/
	
	exec('find /',
		{timeout: 10000, maxBuffer: 20000*1024},
		function(error, stdout, stderr){
			response.writeHead(200,{'Content-Type':'text/html'});				
			response.write(stdout);
			response.end();
		});
}

function subir(response){
	console.log('Manipulador de petición "subir" ha sido llamado.');	
	response.writeHead(200,{'Content-Type':'text/html'});				
	response.write("Hola Subir");
	response.end();
}

function buscarIcono(response){
	console.log('No se tiene icono');
	response.writeHead(404,{'Content-Type':'text/html'});				
	response.write('No hay icono');
	response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.icono = buscarIcono;
