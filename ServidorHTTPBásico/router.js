function route(handle, pathname, response){
	console.log('A punto de rutear un petición para ' + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname](response);
	}else{
		console.log('No se encontró manipulador para ' + pathname);
		response.writeHead(404,{'Content-Type':'text/html'});				
		response.write("Recurso no encontrado");
		response.end();
	}
}

exports.route = route;
