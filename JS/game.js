const ancho = 400;
const alto = 400;

let tesoro = {
	x: numeroAletorio(ancho),
	y: numeroAletorio(alto),
};
console.log(tesoro);

let $mapa = document.getElementById('mapa');
let $pista_text = document.getElementById('distancia');
let clicks = 0;

$mapa.addEventListener('click', function(even){
	clicks++;
	let distancia = obtenerDistancia(even, tesoro);
	let distanciaHint = pista(distancia);
	console.log(distancia);
	$pista_text.innerHTML = distanciaHint;
	if (distancia < 20 ) {
		alert('Has encontrado el tesoro en '+clicks+' clicks!');
		location.reload();
	}
});