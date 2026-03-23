// [ Constantes ]
const botonesDetalle = document.querySelectorAll(".btn-detalle");
const botonesFavoritos = document.querySelectorAll(".btn-favo");
const tarjetasPersonaje = document.querySelectorAll(".card");
const contadorFavoritos = document.getElementById("contador-favoritos")

// [ Asigna eventos ]
// BOTONES DETALLES
botonesDetalle.forEach((boton) => {
    boton.addEventListener("click", () => {
        event.preventDefault();
        const idPersonaje = boton.dataset.id;
        window.location.href = `detalle.html?id=${idPersonaje}`;
        alert(window.location.href);
    });
});

// BOTONES FAVORITO
botonesFavoritos.forEach((boton) => engancharClickBoton(boton));

for (const tarjeta of tarjetasPersonaje) {
    tarjeta.classList.add("tarjeta-no-favorito")
}

function engancharClickBoton(boton) {
    boton.addEventListener("click", function () {
        tarjetaBoton = boton.parentElement.parentElement.parentElement
        alternarFavorito(tarjetaBoton, boton);
        console.log(boton.parentElement.parentElement.parentElement);
    });
}

function alternarFavorito(tarjetaSeleccionada, boton) {
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

// Contador favoritos
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
        estado: "Vivo"
    },
    {
        id: "2",
        nombre: "Morty Smith",
        imagen: "../media/2.png",
        especie: "Humano",
        estado: "Vivo"
    },
    {
        id: "3",
        nombre: "Summer Smith",
        imagen: "../media/3.jpeg",
        especie: "Humana",
        estado: "Viva"
    },
    {
        id: "4",
        nombre: "Beth Smith",
        imagen: "../media/4.jpeg",
        especie: "Humana",
        estado: "Viva"
    },
    {
        id: "5",
        nombre: "Jerry Smith",
        imagen: "../media/5.png",
        especie: "Humana",
        estado: "Viva"
    },
    {
        id: "6",
        nombre: "Sr. Ojete Sucio",
        imagen: "../media/6.jpg",
        especie: "Desconocido",
        estado: "Viva"
    }
];

const parametros = new URLSearchParams(window.location.search);
const idPersonaje = parametros.get("id");
const personajeEncontrado = personajes.find((personaje) => personaje.id === idPersonaje);
console.log(personajeEncontrado);

if (personajeEncontrado) {
    document.querySelector("#nombre-personaje").textContent = personajeEncontrado.nombre;
    document.querySelector("#imagen-personaje").src = personajeEncontrado.imagen;
    document.querySelector("#imagen-personaje").alt = personajeEncontrado.nombre;
    document.querySelector("#especie-personaje").textContent = personajeEncontrado.especie;
    document.querySelector("#estado-personaje").textContent = personajeEncontrado.estado;
}

