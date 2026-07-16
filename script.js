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

/* DESCRIPCIONES DE CRIATURAS */
const paginaDescripcionReyAmarillo = document.querySelector(".pagina-descripcion-rey-amarillo");
const paginaDescripcionMadreHidra = document.querySelector(".pagina-descripcion-madre-hidra");
const paginaDescripcionAzathoth = document.querySelector(".pagina-descripcion-azathoth");
const paginaDescripcionShub = document.querySelector(".pagina-descripcion-shub");
const paginaDescripcionMigo = document.querySelector(".pagina-descripcion-migo");
const paginaDescripcionNyarlathotep = document.querySelector(".pagina-descripcion-nyarlathotep");

const botonDescripcionReyAmarillo = document.querySelector("#abrirDescripcionReyAmarillo");
const botonDescripcionMadreHidra = document.querySelector("#abrirDescripcionMadreHidra");
const botonDescripcionAzathoth = document.querySelector("#abrirDescripcionAzathoth");
const botonDescripcionShub = document.querySelector("#abrirDescripcionShub");
const botonDescripcionMigo = document.querySelector("#abrirDescripcionMigo");
const botonDescripcionNyarlathotep = document.querySelector("#abrirDescripcionNyarlathotep");

const botonVolverDescripcionReyAmarillo = document.querySelector("#volverDescripcionReyAmarillo");
const botonVolverDescripcionMadreHidra = document.querySelector("#volverDescripcionMadreHidra");
const botonVolverDescripcionAzathoth = document.querySelector("#volverDescripcionAzathoth");
const botonVolverDescripcionShub = document.querySelector("#volverDescripcionShub");
const botonVolverDescripcionMigo = document.querySelector("#volverDescripcionMigo");
const botonVolverDescripcionNyarlathotep = document.querySelector("#volverDescripcionNyarlathotep");

/* SONIDOS */
const sonidoMapa = document.querySelector("#sonidoMapa");
const sonidoEspacio = document.querySelector("#sonidoEspacio");
const sonidoBosque = document.querySelector("#sonidoBosque");
const sonidoMontanas = document.querySelector("#sonidoMontanas");
const sonidoRuinas = document.querySelector("#sonidoRuinas");
const sonidoOceano = document.querySelector("#sonidoOceano");
const sonidoPapel = document.querySelector("#sonidoPapel");

/* IMPORTANTE:
   Aquí sí va sonidoMapa, para que se detenga cuando entres a otro bioma.
*/
const sonidosBiomas = [
  sonidoMapa,
  sonidoEspacio,
  sonidoBosque,
  sonidoMontanas,
  sonidoRuinas,
  sonidoOceano
];

function mostrarPagina(paginaActual, paginaNueva) {
  paginaActual.classList.remove("activa");
  paginaNueva.classList.add("activa");
}

function detenerSonidosBiomas() {
  sonidosBiomas.forEach(function(sonido) {
    if (sonido) {
      sonido.pause();
      sonido.currentTime = 0;
    }
  });
}

function reproducirSonidoBioma(sonido) {
  detenerSonidosBiomas();

  if (!sonido) return;

  sonido.volume = 0.35;
  sonido.currentTime = 0;

  sonido.play().catch(function(error) {
    console.log("El sonido no pudo reproducirse:", error);
  });
}

function reproducirPapel() {
  if (!sonidoPapel) return;

  sonidoPapel.volume = 0.55;
  sonidoPapel.currentTime = 0;

  sonidoPapel.play().catch(function(error) {
    console.log("El sonido de papel no pudo reproducirse:", error);
  });
}

function activarHoverBioma(boton, claseHover) {
  boton.addEventListener("mouseenter", function() {
    mapaContenedor.classList.add(claseHover);
  });

  boton.addEventListener("mouseleave", function() {
    mapaContenedor.classList.remove(claseHover);
  });
}

/* HOVER DEL MAPA */
activarHoverBioma(botonAbrirEspacio, "hover-espacio");
activarHoverBioma(botonAbrirOceano, "hover-oceano");
activarHoverBioma(botonAbrirBosque, "hover-bosque");
activarHoverBioma(botonAbrirMontanas, "hover-montanas");
activarHoverBioma(botonAbrirRuinas, "hover-ruinas");

/* NAVEGACIÓN PRINCIPAL */
botonEntrar.addEventListener("click", function() {
  mostrarPagina(paginaPortada, paginaInicio);
});

botonAbrir.addEventListener("click", function() {
  mostrarPagina(paginaInicio, paginaLibro);
  reproducirPapel();
});

botonVolver.addEventListener("click", function() {
  mostrarPagina(paginaLibro, paginaInicio);
});

botonIrMapa.addEventListener("click", function() {
  mostrarPagina(paginaLibro, paginaMapa);
  reproducirPapel();
  reproducirSonidoBioma(sonidoMapa);
});

botonVolverLibro.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaLibro);
  detenerSonidosBiomas();
});

/* ABRIR BIOMAS CON SONIDO */
botonAbrirRuinas.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaRuinas);
  reproducirSonidoBioma(sonidoRuinas);
});

botonAbrirOceano.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaOceano);
  reproducirSonidoBioma(sonidoOceano);
});

botonAbrirEspacio.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaEspacio);
  reproducirSonidoBioma(sonidoEspacio);
});

botonAbrirBosque.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaBosque);
  reproducirSonidoBioma(sonidoBosque);
});

botonAbrirMontanas.addEventListener("click", function() {
  mostrarPagina(paginaMapa, paginaMontanas);
  reproducirSonidoBioma(sonidoMontanas);
});

/* VOLVER AL MAPA Y REPRODUCIR SONIDO DEL MAPA */
botonVolverMapaRuinas.addEventListener("click", function() {
  mostrarPagina(paginaRuinas, paginaMapa);
  reproducirSonidoBioma(sonidoMapa);
});

botonVolverMapaOceano.addEventListener("click", function() {
  mostrarPagina(paginaOceano, paginaMapa);
  reproducirSonidoBioma(sonidoMapa);
});

botonVolverMapaEspacio.addEventListener("click", function() {
  mostrarPagina(paginaEspacio, paginaMapa);
  reproducirSonidoBioma(sonidoMapa);
});

botonVolverMapaBosque.addEventListener("click", function() {
  mostrarPagina(paginaBosque, paginaMapa);
  reproducirSonidoBioma(sonidoMapa);
});

botonVolverMapaMontanas.addEventListener("click", function() {
  mostrarPagina(paginaMontanas, paginaMapa);
  reproducirSonidoBioma(sonidoMapa);
});

/* ABRIR DESCRIPCIONES */
botonDescripcionReyAmarillo.addEventListener("click", function() {
  mostrarPagina(paginaRuinas, paginaDescripcionReyAmarillo);
  reproducirPapel();
});

botonDescripcionMadreHidra.addEventListener("click", function() {
  mostrarPagina(paginaOceano, paginaDescripcionMadreHidra);
  reproducirPapel();
});

botonDescripcionAzathoth.addEventListener("click", function() {
  mostrarPagina(paginaEspacio, paginaDescripcionAzathoth);
  reproducirPapel();
});

botonDescripcionShub.addEventListener("click", function() {
  mostrarPagina(paginaBosque, paginaDescripcionShub);
  reproducirPapel();
});

botonDescripcionMigo.addEventListener("click", function() {
  mostrarPagina(paginaMontanas, paginaDescripcionMigo);
  reproducirPapel();
});

botonDescripcionNyarlathotep.addEventListener("click", function() {
  mostrarPagina(paginaEspacio, paginaDescripcionNyarlathotep);
  reproducirPapel();
});

/* VOLVER DE DESCRIPCIONES */
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

botonVolverDescripcionNyarlathotep.addEventListener("click", function() {
  mostrarPagina(paginaDescripcionNyarlathotep, paginaEspacio);
});