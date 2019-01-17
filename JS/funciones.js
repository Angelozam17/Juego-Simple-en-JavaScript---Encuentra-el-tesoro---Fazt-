let numeroAletorio = function(size) {
	return Math.floor(Math.random() * size);
}

let obtenerDistancia = function(even, tesoro){
	let diffX = even.offsetX - tesoro.x;
	let diffY = even.offsetY - tesoro.y;
	return Math.sqrt((diffX*diffX) + (diffY*diffY));
}

let pista = function(distancia){
	if (distancia < 30) {
		return "Boling Hot"
	}else if (distancia < 40) {
		return "Really Hot"
	}else if (distancia < 60) {
		return "Hot"
	}else if (distancia < 100) {
		return "Warm"
	}else if (distancia < 180) {
		return "Cold"
	}else if (distancia < 360) {
		return "Really Cold"
	}else{
		return "Freezing"
	}
};