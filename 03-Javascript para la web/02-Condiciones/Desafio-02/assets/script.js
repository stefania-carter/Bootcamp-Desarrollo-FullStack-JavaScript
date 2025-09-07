// Ejercicio 1: Imagen con borde interactivo
const imagen = document.getElementById("imagen-borde");

imagen.addEventListener("click", function () {
  // Alternar la clase 'bordered' que define el borde rojo
  this.classList.toggle("bordered");
});

// Ejercicio 2: Contador de stickers
const verificarStickersBtn = document.getElementById("verificar-stickers");
const resultadoStickers = document.getElementById("resultado-stickers");

verificarStickersBtn.addEventListener("click", function () {
  // Obtener valores de los inputs y convertirlos a números
  const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  // Calcular el total de stickers
  const total = sticker1 + sticker2 + sticker3;

  // Verificar condiciones y mostrar el resultado
  if (total <= 10) {
    resultadoStickers.textContent = `Llevas ${total} stickers`;
    resultadoStickers.style.color = "green";
  } else {
    resultadoStickers.textContent = "Llevas demasiados stickers";
    resultadoStickers.style.color = "red";
  }
});

// Ejercicio 3: Verificación de password
const verificarPasswordBtn = document.getElementById("verificar-password");
const resultadoPassword = document.getElementById("resultado-password");

verificarPasswordBtn.addEventListener("click", function () {
  // Obtener valores de los selects
  const digito1 = document.getElementById("digito1").value;
  const digito2 = document.getElementById("digito2").value;
  const digito3 = document.getElementById("digito3").value;

  // Combinar los dígitos para formar el password
  const password = digito1 + digito2 + digito3;

  // Verificar el password y mostrar el resultado correspondiente
  if (password === "911") {
    resultadoPassword.textContent = "Password 1 correcto";
    resultadoPassword.style.color = "green";
  } else if (password === "714") {
    resultadoPassword.textContent = "Password 2 correcto";
    resultadoPassword.style.color = "green";
  } else {
    resultadoPassword.textContent = "Password incorrecto";
    resultadoPassword.style.color = "red";
  }
});
