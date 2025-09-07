function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

const ele = document.getElementById("e1e1");

pintar(ele);

ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
