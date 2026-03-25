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

        if (infoPersonaje.classList.contains("detail__esconder")) {
            this.textContent = "Mostrar ficha"
        } else {
            this.textContent = "Ocultar ficha"
        }
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

const parrafoError = document.getElementById("error-busqueda")

if (personajeEncontrado) {
    document.querySelector("#nombre-personaje").textContent = personajeEncontrado.nombre;
    document.querySelector("#imagen-personaje").src = personajeEncontrado.imagen;
    document.querySelector("#imagen-personaje").alt = personajeEncontrado.nombre;
    document.querySelector("#especie-personaje").textContent = personajeEncontrado.especie;
    document.querySelector("#estado-personaje").textContent = personajeEncontrado.estado;
    document.querySelector("#descripcion-personaje").textContent = personajeEncontrado.descripcion;
}

// [ API ]

const apiUrl = "https://rickandmortyapi.com/api/";

// TODO: ARREGLAR Mensaje error funciona al poner id no existente en vs pero no en el campo de busqueda
// Función para obtener datos de un personaje por su ID
async function obtenerPersonaje(id) {
    try {
        const respuesta = await fetch(`${apiUrl}/character/${id}`);
        if (!respuesta.ok) {
            parrafoError.textContent = "No se encontró el personaje:", error;
            throw new Error("No se encontró el personaje");
        }
        const datos = await respuesta.json();
        console.log(datos.origin);
        console.log(datos);
        mostrarPersonaje(datos);

    } catch (error) {
        parrafoError.textContent = "Error al obtener el personaje:", error;
    }
}

// Personaje que se muestra por defecto
obtenerPersonaje(1)

// TODO: Si da tiempo, mostrar episodios en una lista desplegable
// Función para mostrar los datos del Pokémon en la página
function mostrarPersonaje(datos) {
    const contenedor = document.getElementById("personaje-info");
    const contenedorEpisodios = document.getElementById("resultado-busqueda-episodios");
    let episodios = "";

    // Episodios
    for (const episodio of datos.episode) {
        episodios += episodio.name + " | " + episodio.air_date + "\n"
    }

    console.log(episodios);

    contenedor.innerHTML = `
        <h2 class="busqueda__titulo">${datos.name.toUpperCase()}</h2>
        <img class="busqueda__imagen" src="${datos.image}" alt="Imagen de ${datos.name}">
        <p><strong>Especie:</strong> ${datos.species}</p>
        <p><strong>Estado:</strong> ${datos.status}</p>
        <p><strong>Origen:</strong> ${datos.origin.name}</p>
    `

    contenedorEpisodios.innerHTML = `
        <h2 class="busqueda__titulo">${datos.name.toUpperCase()}</h2>
        <img class="busqueda__imagen" src="${datos.image}" alt="Imagen de ${datos.name}">
        <p><strong>Especie:</strong> ${datos.species}</p>
        <p><strong>Estado:</strong> ${datos.status}</p>
        <p><strong>Origen:</strong> ${datos.origin.name}</p>
    `


}

// Manejo del formulario de búsqueda
document.getElementById("busqueda-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("personaje-input").value.trim().toLowerCase();
    if (input) {
        obtenerPersonaje(input);
    }
});

const totalPersonajes = 826;
document.getElementById("btn-aleatorio").addEventListener("click", function (event) {
    const idAleatorio = Math.floor(Math.random() * 826) + 1;
    obtenerPersonaje(idAleatorio)
});