const paginaPortada = document.querySelector(".pagina-portada");
const paginaInicio = document.querySelector(".pagina-inicio");
const paginaLibro = document.querySelector(".pagina-libro");
const paginaMapa = document.querySelector(".pagina-mapa");

const paginaRuinas = document.querySelector(".pagina-ruinas");
const paginaOceano = document.querySelector(".pagina-oceano");
const paginaEspacio = document.querySelector(".pagina-espacio");
const paginaBosque = document.querySelector(".pagina-bosque");
const paginaMontanas = document.querySelector(".pagina-montanas");

const mapaContenedor = document.querySelector("#mapaContenedor");

const botonEntrar = document.querySelector("#entrarInicio");
const botonAbrir = document.querySelector("#abrirLibro");
const botonVolver = document.querySelector("#volverInicio");
const botonIrMapa = document.querySelector("#irMapa");
const botonVolverLibro = document.querySelector("#volverLibro");

const botonAbrirEspacio = document.querySelector("#abrirEspacio");
const botonAbrirOceano = document.querySelector("#abrirOceano");
const botonAbrirBosque = document.querySelector("#abrirBosque");
const botonAbrirMontanas = document.querySelector("#abrirMontanas");
const botonAbrirRuinas = document.querySelector("#abrirRuinas");

const botonVolverMapaRuinas = document.querySelector("#volverMapaRuinas");
const botonVolverMapaOceano = document.querySelector("#volverMapaOceano");
const botonVolverMapaEspacio = document.querySelector("#volverMapaEspacio");
const botonVolverMapaBosque = document.querySelector("#volverMapaBosque");
const botonVolverMapaMontanas = document.querySelector("#volverMapaMontanas");

function mostrarPagina(paginaActual, paginaNueva) {
  paginaActual.classList.remove("activa");
  paginaNueva.classList.add("activa");
}

function activarHoverBioma(boton, claseHover) {
  boton.addEventListener("mouseenter", function() {
    mapaContenedor.classList.add(claseHover);
  });

  boton.addEventListener("mouseleave", function() {
    mapaContenedor.classList.remove(claseHover);
  });
}

activarHoverBioma(botonAbrirEspacio, "hover-espacio");
activarHoverBioma(botonAbrirOceano, "hover-oceano");
activarHoverBioma(botonAbrirBosque, "hover-bosque");
activarHoverBioma(botonAbrirMontanas, "hover-montanas");
activarHoverBioma(botonAbrirRuinas, "hover-ruinas");

botonEntrar.addEventListener("click", function() {
  mostrarPagina(paginaPortada, paginaInicio);
});

botonAbrir.addEventListener("click", function() {
  mostrarPagina(paginaInicio, paginaLibro);
});

botonVolver.addEventListener("click", function() {
  mostrarPagina(paginaLibro, paginaInicio);
});

botonIrMapa.addEventListener("click", function() {
  mostrarPagina(paginaLibro, paginaMapa);
});

botonVolverLibro.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaLibro);
});

botonAbrirRuinas.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaRuinas);
});

botonAbrirOceano.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaOceano);
});

botonAbrirEspacio.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaEspacio);
});

botonAbrirBosque.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaBosque);
});

botonAbrirMontanas.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaMontanas);
});

botonVolverMapaRuinas.addEventListener("click", function() {
  mostrarPagina(paginaRuinas, paginaMapa);
});

botonVolverMapaOceano.addEventListener("click", function() {
  mostrarPagina(paginaOceano, paginaMapa);
});

botonVolverMapaEspacio.addEventListener("click", function() {
  mostrarPagina(paginaEspacio, paginaMapa);
});

botonVolverMapaBosque.addEventListener("click", function() {
  mostrarPagina(paginaBosque, paginaMapa);
});

botonVolverMapaMontanas.addEventListener("click", function() {
  mostrarPagina(paginaMontanas, paginaMapa);
});

/* DESCRIPCIONES DE CRIATURAS: clic en monstruo → página de descripción */
const paginaDescripcionReyAmarillo = document.querySelector(".pagina-descripcion-rey-amarillo");
const paginaDescripcionMadreHidra = document.querySelector(".pagina-descripcion-madre-hidra");
const paginaDescripcionAzathoth = document.querySelector(".pagina-descripcion-azathoth");
const paginaDescripcionShub = document.querySelector(".pagina-descripcion-shub");
const paginaDescripcionMigo = document.querySelector(".pagina-descripcion-migo");

const botonDescripcionReyAmarillo = document.querySelector("#abrirDescripcionReyAmarillo");
const botonDescripcionMadreHidra = document.querySelector("#abrirDescripcionMadreHidra");
const botonDescripcionAzathoth = document.querySelector("#abrirDescripcionAzathoth");
const botonDescripcionShub = document.querySelector("#abrirDescripcionShub");
const botonDescripcionMigo = document.querySelector("#abrirDescripcionMigo");

const botonVolverDescripcionReyAmarillo = document.querySelector("#volverDescripcionReyAmarillo");
const botonVolverDescripcionMadreHidra = document.querySelector("#volverDescripcionMadreHidra");
const botonVolverDescripcionAzathoth = document.querySelector("#volverDescripcionAzathoth");
const botonVolverDescripcionShub = document.querySelector("#volverDescripcionShub");
const botonVolverDescripcionMigo = document.querySelector("#volverDescripcionMigo");

botonDescripcionReyAmarillo.addEventListener("click", function() {
  mostrarPagina(paginaRuinas, paginaDescripcionReyAmarillo);
});

botonDescripcionMadreHidra.addEventListener("click", function() {
  mostrarPagina(paginaOceano, paginaDescripcionMadreHidra);
});

botonDescripcionAzathoth.addEventListener("click", function() {
  mostrarPagina(paginaEspacio, paginaDescripcionAzathoth);
});

botonDescripcionShub.addEventListener("click", function() {
  mostrarPagina(paginaBosque, paginaDescripcionShub);
});

botonDescripcionMigo.addEventListener("click", function() {
  mostrarPagina(paginaMontanas, paginaDescripcionMigo);
});

botonVolverDescripcionReyAmarillo.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionReyAmarillo, paginaRuinas);
});

botonVolverDescripcionMadreHidra.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionMadreHidra, paginaOceano);
});

botonVolverDescripcionAzathoth.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionAzathoth, paginaEspacio);
});

botonVolverDescripcionShub.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionShub, paginaBosque);
});

botonVolverDescripcionMigo.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionMigo, paginaMontanas);
});
