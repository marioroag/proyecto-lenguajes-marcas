// [ Constantes ]
const botonesDetalle = document.querySelectorAll(".btn-detalle");
const botonesFavoritos = document.querySelectorAll(".btn-favo");
const tarjetasPersonaje = document.querySelectorAll(".card");
const contadorFavoritos = document.getElementById("contador-favoritos")
const botonEsconder = document.getElementById("boton_esconder")
const infoPersonaje = document.querySelector(".detail__info")
const detail = document.querySelector(".detail")
const container = document.querySelector(".container")


// [ Asigna eventos ]
// BOTON ESCONDER
if (botonEsconder) {
    botonEsconder.addEventListener("click", function () {
        infoPersonaje.classList.toggle("detail__esconder");
        detail.classList.toggle("detail__encogido")
        container.classList.toggle("container__encogido")
    });
}

// BOTONES DETALLES
botonesDetalle.forEach((boton) => {
    boton.addEventListener("click", () => {
        event.preventDefault();
        const idPersonaje = boton.dataset.id;
        window.location.href = `detalle.html?id=${idPersonaje}`;
    });
});

// BOTONES FAVORITO
botonesFavoritos.forEach((boton) => engancharClickBoton(boton));

for (const tarjeta of tarjetasPersonaje) {
    tarjeta.classList.add("tarjeta-no-favorito")
}

function engancharClickBoton(boton) {
    boton.addEventListener("click", function () {
        const tarjetaBoton = boton.closest(".card");
        alternarFavorito(tarjetaBoton, boton);
    });
}

function alternarFavorito(tarjetaSeleccionada, boton) {
    console.log("HOLA");

    if (tarjetaSeleccionada) {
        if (!tarjetaSeleccionada.classList.contains("tarjeta-favorito")) {
            tarjetaSeleccionada.classList.add("tarjeta-favorito")
            boton.style.backgroundImage = "url(../media/fav-icon-full.png)";
        } else {
            tarjetaSeleccionada.classList.remove("tarjeta-favorito")
            boton.style.backgroundImage = "url(../media/fav-icon.png)";
        }

        actualizarContadorGeneral()
    }
}

// CONTADOR FAVORITOS
function calcularPersonajesFavoritos() {
    let contador = 0

    for (const tarjeta of tarjetasPersonaje) {
        if (tarjeta.classList.contains("tarjeta-favorito")) {
            contador++
        }
    }

    return contador
}

function actualizarContadorGeneral() {
    let contador = calcularPersonajesFavoritos()
    contadorFavoritos.textContent = contador
}

// [ Objetos informacion ]
const personajes = [
    {
        id: "1",
        nombre: "Rick Sanchez",
        imagen: "../media/1.jpeg",
        especie: "Humano",
        estado: "Vivo",
        descripcion: "Científico brillante pero alcohólico y cínico, Rick es el abuelo de Morty. Viaja por el multiverso viviendo aventuras peligrosas mientras desprecia muchas normas sociales."
    },
    {
        id: "2",
        nombre: "Morty Smith",
        imagen: "../media/2.png",
        especie: "Humano",
        estado: "Vivo",
        descripcion: "Nieto de Rick, Morty es un chico inseguro pero con buen corazón. A menudo acompaña a su abuelo en sus locas aventuras, aunque suele ser quien sufre las consecuencias."
    },
    {
        id: "3",
        nombre: "Summer Smith",
        imagen: "../media/3.jpeg",
        especie: "Humana",
        estado: "Viva",
        descripcion: "Hermana mayor de Morty, Summer es más independiente y segura de sí misma. Aunque al principio parece superficial, demuestra ser valiente y adaptarse bien a situaciones extremas."
    },
    {
        id: "4",
        nombre: "Beth Smith",
        imagen: "../media/4.jpeg",
        especie: "Humana",
        estado: "Viva",
        descripcion: "Madre de Morty y Summer, Beth es una cirujana de caballos inteligente pero emocionalmente compleja. Tiene una relación complicada con Rick, marcada por admiración y conflictos."
    },
    {
        id: "5",
        nombre: "Jerry Smith",
        imagen: "../media/5.png",
        especie: "Humano",
        estado: "Vivo",
        descripcion: "Padre de familia inseguro y algo torpe, Jerry suele ser el blanco de burlas. A pesar de ello, intenta hacer lo correcto y mantener a su familia unida."
    },
    {
        id: "6",
        nombre: "Sr. Ojete Sucio",
        imagen: "../media/6.jpg",
        especie: "Desconocido",
        estado: "Muerto",
        descripcion: "Personaje misterioso que aparece brevemente en la serie. Su origen y naturaleza no están claros, lo que lo convierte en una figura curiosa dentro del universo de la historia."
    }
];

const parametros = new URLSearchParams(window.location.search);
const idPersonaje = parametros.get("id");
const personajeEncontrado = personajes.find((personaje) => personaje.id === idPersonaje);

if (personajeEncontrado) {
    document.querySelector("#nombre-personaje").textContent = personajeEncontrado.nombre;
    document.querySelector("#imagen-personaje").src = personajeEncontrado.imagen;
    document.querySelector("#imagen-personaje").alt = personajeEncontrado.nombre;
    document.querySelector("#especie-personaje").textContent = personajeEncontrado.especie;
    document.querySelector("#estado-personaje").textContent = personajeEncontrado.estado;
    document.querySelector("#descripcion-personaje").textContent = personajeEncontrado.descripcion;
}

