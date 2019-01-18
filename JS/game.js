//FUNCIONES
let numeroAletorio = function(size){
	return Math.floor(Math.random() * size);
};

let distanciaDelTesoro = function(event, tsr){
	let diffX = event.offsetX - tsr.x;
	let diffY = event.offsetY - tsr.y;
	return Math.sqrt((diffX*diffX) + (diffY*diffY));
};

let pistas = function (distancia) {
	if(distancia < 40){
		return '¡Demasiado cerca!'
	}else if (distancia < 80) {
		return 'Muy cerca'
	}else if (distancia < 120) {
		return 'Cerca'
	}else if (distancia < 160) {
		return 'Un poco lejos'
	}else if (distancia < 200) {
		return 'Lejos'
	}else if (distancia < 240) {
		return 'Muy lejos'
	}else if (distancia < 280) {
		return 'Demasiado Lejos'
	}else{
		return '¡Demasiado Lejos!'
	};
};
let encontrarTesoro = function(event, tsr) {
	clicks++
	let distancia = distanciaDelTesoro(event, coordenadasTesoro);
	$pista_text.innerHTML = pistas(distancia);

	if (distancia < 20) {
		alert(`¡Haz encontrado el tesoro en ${clicks} clicks!`);
		location.reload();
	};
};


//VARIABLES
const ancho = 624;
const largo = 400;

let coordenadasTesoro = {
	x: numeroAletorio(ancho),
	y: numeroAletorio(largo),
};

const $mapa = document.getElementById('mapa');
const $pista_text = document.getElementById('pista');
let clicks = 0;

//EVENTOS
$mapa.addEventListener('click', encontrarTesoro);







