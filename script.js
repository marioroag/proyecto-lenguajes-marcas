const botonesDetalle = document.querySelectorAll(".btn-detalle");

botonesDetalle.forEach((boton) => {
    boton.addEventListener("click", () => {
        event.preventDefault();
        const idPersonaje = boton.dataset.id;
        window.location.href = `detalle.html?id=${idPersonaje}`;
        alert(window.location.href );
    });
});

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

