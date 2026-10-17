# R&M Wiki

Wiki web sobre el universo de *Rick and Morty*, hecha con HTML, CSS y JavaScript sin frameworks. Combina fichas de personajes propias con un buscador que consulta en tiempo real la [Rick and Morty API](https://rickandmortyapi.com/).

Proyecto de la asignatura de Lenguajes de Marcas (2.º trimestre, 1.º DAW) en STEM Granada.

Para verlo en vivo visita: [rickymortywikimra.netlify.app](rickymortywikimra.netlify.app).


## Páginas

| Página | Qué hace |
|---|---|
| `index.html` | Portada con tarjetas de personajes destacados y un contador de favoritos |
| `detalle.html` | Ficha de un personaje (especie, estado, descripción), que se carga según el parámetro `?id=` de la URL |
| `buscar_personaje.html` | Buscador por nombre o ID conectado a la API, con botón de personaje aleatorio |
| `contribuir.html` | Formulario para proponer mejoras o artículos nuevos |
| `sobre_nosotros.html` | Información del proyecto, normas de contribución y equipo |

## Funcionalidades

- **Búsqueda con API REST.** Busca cualquier personaje por nombre o ID con `fetch` y `async/await`. Muestra imagen, especie, estado, origen y la lista de episodios en los que aparece, y gestiona el error si no se encuentra.
- **Personaje aleatorio.** Carga uno al azar entre los 826 de la API.
- **Favoritos.** Marca personajes como favoritos en la portada; las tarjetas cambian de estilo y un contador se actualiza en directo.
- **Fichas dinámicas.** Una sola página `detalle.html` rellena su contenido según el personaje elegido, a partir de los datos guardados en JavaScript.
- **Ficha plegable.** Botón para ocultar o mostrar la información del personaje.

## Tecnologías

- **HTML5** semántico
- **CSS3**: Flexbox, metodología BEM para los nombres de clases y Google Fonts
- **JavaScript** vanilla: manipulación del DOM, eventos, `URLSearchParams` y Fetch API
- **[Rick and Morty API](https://rickandmortyapi.com/)** como fuente de datos externa

## Estructura

```
├── index.html
├── detalle.html
├── buscar_personaje.html
├── contribuir.html
├── sobre_nosotros.html
├── script.js        # lógica de todas las páginas
├── css/
│   └── styles.css
└── media/           # imágenes e iconos
```

## Cómo verlo

No necesita instalación. Abre `index.html` en el navegador, o lánzalo con un servidor local (por ejemplo, la extensión *Live Server* de VS Code). El buscador necesita conexión a internet para consultar la API.

## Aviso

Proyecto educativo sin ánimo de lucro, no oficial. *Rick and Morty* y sus personajes pertenecen a sus respectivos propietarios.

## Autor

**Mario Rodríguez Aguado** · [GitHub](https://github.com/marioroag)
