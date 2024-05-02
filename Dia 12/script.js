/*
function cartas(CartasBaraja) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1${CartasBaraja}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error');
            }
            return response.json();
        })
        .then(data => {
            const pokemonid = data.id;
            const pokemonName = capitalizeFirstLetter(data.name);
            const pokemonAnimatedSpriteUrl = data.sprites.versions['generation-v']['black-white'].animated.front_default;

            document.getElementById('pokemonid').textContent = `${pokemonid} - ${pokemonName}`;
            if (pokemonAnimatedSpriteUrl !== null) {
                document.getElementById('pokemonImage').src = pokemonAnimatedSpriteUrl;
            } else {
                document.getElementById('pokemonImage').src = imagen;
            }
        })
        .catch(error => {
            console.error('Ocurrió un problema con tu función: ', error);
        });
}

for (i = 0; i < 100; i++) {
	cartas.splice(Math.random() * 52, 0, cartas[0]);
	cartas.shift();
}


function DibujarCarta(DibujarCart) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2${DibujarCart}`;
}


function Reorganizar(ReorganizarCartas) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/
    https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true${ReorganizarCartas}`;
}



function BaraNueva(BarajaNueva) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/new/${BarajaNueva}`;
}


function Parcial(BarajaParcial) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH${BarajaParcial}`;
}

function Mezclar(MezclarBaraja) {
    const apiUrl = `https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/shuffle/${MezclarBaraja}`;
}
*/

//code
const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const hitButton = document.querySelector(".hit-button");
const cardsContainer = document.querySelector(".cards");
const main = document.querySelector("main");
const message = document.querySelector(".message");
const tryAgain = document.querySelector(".try-again");
let deckId;
let isGameOver = false;
let total = 0;

async function getDeck(){
  const response = await fetch(deckUrl);
  const deckDetails = await response.json();
  deckId = deckDetails.deck_id;
  isGameOver = false;
}

getDeck();

hitButton.onclick = async function(){
  const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
  const response = await fetch(cardUrl);
  const card = await response.json();
  const cardDetails = card.cards[0];
  cardsContainer.innerHTML += `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`
  if(cardDetails.value === "QUEEN" || cardDetails.value === "KING" || cardDetails.value === "JACK" ){
    total += 10;
  }
  else if(cardDetails.value === "ACE" && (total + 11) <= 21){
    total += 11;
  }
  else if(cardDetails.value === "ACE"){
    total += 1;
  }
  else {
    total += parseInt(cardDetails.value);
  }
  
  if(total > 21){
    main.style.filter = "blur(4px)";
    message.style.display = "block";
	message.textContent = "¡Te has pasado de 21! Has perdido.";
  }
  console.log(total);
}

tryAgain.onclick = function(){
  total = 0;
  cardsContainer.innerHTML = "";
  main.style.filter = "blur(0px)";
  message.style.display = "none";
  getDeck();
}













/*

// Función para barajar las cartas
async function barajarCartas() {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      return data.deck_id;
    } catch (error) {
      console.error('Error al barajar las cartas:', error);
      return null;
    }
  }
  
  // Función para obtener una carta del mazo
  async function obtenerCarta(deckId) {
    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      const data = await response.json();
      return data.cards[0];
    } catch (error) {
      console.error('Error al obtener una carta:', error);
      return null;
    }
  }
  
  // Función principal para barajar y mostrar las cartas
  async function barajarYMostrarCartas() {
    const deckId = await barajarCartas();
    if (deckId) {
      const carta1 = await obtenerCarta(deckId);
      const carta2 = await obtenerCarta(deckId);
      console.log('Carta 1:', carta1);
      console.log('Carta 2:', carta2);
      // Aquí puedes mostrar las cartas en tu interfaz de usuario o hacer lo que desees con ellas
    }
  }
  
  // Llamada a la función principal
  barajarYMostrarCartas();
*/  

























/*
// Montamos el canvas con alta resolución
var canvas = document.getElementById("canvas");
canvas.width = 1220 * 2;
canvas.height = 400 * 2;
canvas.style.width = 1220 + "px";
canvas.style.height = 400 + "px";
var ctx = canvas.getContext("2d");

// Classe carta
class carta {
	// las variables static pertenece a la clase
	static x = 50;
	static y = 50;

	constructor(valor, palo) {
		this.img = new Image();
		this.valor = valor;
		this.palo = palo;
	}
}

// Variables que vamos a usar
var cartas = [];
var cartasJugador = [];
var cartasCrupier = [];
var indiceCarta = 0;
var palos = ["S", "H", "D", "C"];
// Generamos las cartas. Con atributos valor y palo
for (i = 0; i < 4; i++) {
	for (j = 1; j <= 13; j++) {
		cartas.push(new carta(j, palos[i]));
	}
}

//Barajamos las cartas
for (i = 0; i < 100; i++) {
	cartas.splice(Math.random() * 52, 0, cartas[0]);
	cartas.shift();
}

function dibujarCarta(CJ) {
	// Tenemos que primero cargar la carta y luego añadir el src
	// Si no las cartas no cargan en la pagina
	CJ.img.onload = () => {
		ctx.drawImage(CJ.img, carta.x, carta.y, 239, 335);
		carta.x += 300;
	};
	// Para cargar la imagen correcta concatenamos el numero y el palo, que coincida con el nombre del fichero
	CJ.img.src = "imagenes/cartas/" + CJ.valor.toString() + CJ.palo + ".svg";
}

function pedirCarta() {
	// Ponemos un maximo de cartas que pueda sacar para que el crupier tambíen pueda sacar las suyas
	if (indiceCarta < 8) {
		let CJ = cartas[indiceCarta]; //Carta Jugada
		cartasJugador.push(CJ);
		dibujarCarta(CJ);
		indiceCarta++;
	}
}

function plantarme() {
	document.getElementById("pedir").disabled = true;
	document.getElementById("plantar").disabled = true;
	document.getElementById("reset").style.visibility = "visible";
	let pointsUser = 0;
	let pointsCrupier = 0;
	let info = document.getElementById("info");
	// Contamos e imprimimos los puntos del jugador
	for (i in cartasJugador) {
		pointsUser += cartasJugador[i].valor;
	}
	// Sacamos cartas al crupier y contamos sus puntos
	while (pointsCrupier < 17) {
		cartasCrupier.push(cartas[indiceCarta]);
		pointsCrupier += cartas[indiceCarta].valor;
		indiceCarta++;
	}
	// Putos de la partida se ponen en info
	info.innerHTML = "Puntuación jugador: " + pointsUser + "<br>Puntuación crupier: " + pointsCrupier;
	// Dibujamos las cartas del crupier
	carta.x = 50;
	carta.y = 400;
	for (i in cartasCrupier) {
		dibujarCarta(cartasCrupier[i]);
	}
	// Comprobamos ganador
	if (pointsUser == 21) {
		info.innerHTML +="<br><b>Blackjack!!! Has ganado!</b>";
	} else if (pointsUser > 21) {
		info.innerHTML +="<br><b>Has perdido... Te has pasado de puntos</b>";
	} else if (pointsCrupier > 21) {
		info.innerHTML +="<br><b>Has ganado!!! El croupier se ha pasado de puntos</b>";
	} else if (pointsCrupier >= pointsUser) {
		info.innerHTML += "<br><b>Ha ganado el croupier...</b>";
	} else {
		info.innerHTML += "<br><b>Has ganado!!!</b>";
	}
}

//Recarga la pagina cuando se presiona el botton
function playagain() {
	location.reload(true);
}
*/