// Precio base
precio = 400000;

// Elementos del DOM a manipular
precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
totalSpan = document.querySelector(".valor-total");
btnIncrementar = document.querySelector(".card button:first-of-type");
btnDecrementar = document.querySelector(".card button:last-of-type");

// Valores
precioSpan.innerHTML = precio;
cantidadSpan.innerHTML = 0;
totalSpan.innerHTML = 0;

// Actualizar el total
function actualizarTotal() {
  let cantidad = parseInt(cantidadSpan.innerHTML);
  let total = cantidad * precio;
  totalSpan.innerHTML = total;
}

// Botón de incrementar
btnIncrementar.addEventListener("click", function () {
  let cantidadActual = parseInt(cantidadSpan.innerHTML);
  cantidadSpan.innerHTML = cantidadActual + 1;
  actualizarTotal();
});

// Botón de decrementar
btnDecrementar.addEventListener("click", function () {
  let cantidadActual = parseInt(cantidadSpan.innerHTML);
  // No permitir valores negativos
  if (cantidadActual > 0) {
    cantidadSpan.innerHTML = cantidadActual - 1;
    actualizarTotal();
  }
});
