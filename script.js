function iniciarJuego() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

let vidasUsuario = 5;
let vidasPc = 5;

function jugar(eleccionUsuario) {
    const elecciones = ["manoPiedra", "manoPapel", "manoTijeras"];
    const eleccionPc = elecciones[Math.floor(Math.random() * 3)];

    document.getElementById("imagen-usuario").src = `img/${formatearNombre(eleccionUsuario)}.png`;
    document.getElementById("imagen-pc").src = `img/${formatearNombre(eleccionPc)}.png`;

    const resultado = determinarGanador(eleccionUsuario, eleccionPc);

    
    const vidasUsuarioAntes = vidasUsuario;
    const vidasPcAntes = vidasPc;

    
    if (resultado === "¡Ganaste!") {
        vidasPc--;
    } else if (resultado === "Perdiste...") {
        vidasUsuario--;
    }

    
    document.getElementById("resultado").innerHTML = resultado;

    
    document.getElementById("contador-vidas-us").textContent = vidasUsuario;
    document.getElementById("contador-vidas-pc").textContent = vidasPc;

    
    const anchoUsuario = (vidasUsuario / 5) * 430;
    const anchoPc = (vidasPc / 5) * 430;

    const barraUsuario = document.getElementById("barra-contadora-us");
    const barraPc = document.getElementById("barra-contadora-pc");

    barraUsuario.style.width = `${anchoUsuario}px`;
    barraPc.style.width = `${anchoPc}px`;

    
    if (vidasUsuario < vidasUsuarioAntes) {
        animarBarra("barra-contadora-us");
    }
    if (vidasPc < vidasPcAntes) {
        animarBarra("barra-contadora-pc");
    }

    
    if (vidasUsuario === 0 || vidasPc === 0) {
        finalizarJuego();
    }
}


function formatearNombre(nombre) {
    if (nombre === "tijera") return "Tijeras"; 
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function determinarGanador(usuario, pc) {
    if (usuario === pc) return "¡Empate!";
    if (
        (usuario === "manoPiedra" && pc === "manoTijeras") || 
        (usuario === "manoPapel" && pc === "manoPiedra") ||
        (usuario === "manoTijeras" && pc === "manoPapel")
    ) {
        return "¡Ganaste!";
    } else {
        return "Perdiste...";
    }
}

const maxVidas = 5;
const maxAncho = 430;
function animarBarra(barraId) {
    const barra = document.getElementById(barraId);
    barra.classList.remove("animar-daño"); 
    barra.offsetWidth; 
    barra.classList.add("animar-daño"); 
}

function actualizarBarrasDeVida() {
    const anchoUsuario = (vidasUsuario / 5) * 430;
    const anchoPc = (vidasPc / 5) * 430;

    const barraUsuario = document.getElementById("barra-contadora-us");
    const barraPc = document.getElementById("barra-contadora-pc");

    barraUsuario.style.width = `${anchoUsuario}px`;
    barraPc.style.width = `${anchoPc}px`;

    
    if (vidasUsuario < 5) {
        animarBarra("barra-contadora-us");
    }
    if (vidasPc < 5) {
        animarBarra("barra-contadora-pc");
    }
}

function volverAlInicio() {
    document.getElementById("juego").style.display = "none";
    document.getElementById("inicio").style.display = "flex"; 

    
    vidasUsuario = 5;
    vidasPc = 5;
    document.getElementById("contador-vidas-us").textContent = vidasUsuario;
    document.getElementById("contador-vidas-pc").textContent = vidasPc;
    actualizarBarrasDeVida();

    
    document.getElementById("piedra").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("tijera").disabled = false;

    
    document.getElementById("resultado").innerHTML = "";
}
function reiniciarJuego() {

    vidasUsuario = 5;
    vidasPc = 5;

    
    document.getElementById("contador-vidas-us").textContent = vidasUsuario;
    document.getElementById("contador-vidas-pc").textContent = vidasPc;

    
    actualizarBarrasDeVida();

    
    document.getElementById("imagen-usuario").src = "img/placeholder.png";
    document.getElementById("imagen-pc").src = "img/placeholder.png";

    
    document.getElementById("piedra").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("tijera").disabled = false;


    document.getElementById("resultado").innerHTML = "";
}

document.getElementById("btnReiniciar").addEventListener("click", reiniciarJuego);


function finalizarJuego() {
    let mensajeFinal = vidasUsuario === 0 ? "¡La computadora gana el juego! 😭" : "¡Ganaste el juego! 🎉";
    document.getElementById("resultado").innerHTML = mensajeFinal;

    
    document.getElementById("piedra").disabled = true;
    document.getElementById("papel").disabled = true;
    document.getElementById("tijera").disabled = true;
}
