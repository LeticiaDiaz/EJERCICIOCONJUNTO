function anyadir() {
  let nombre = document.getElementById("nombre").value.toUpperCase();
  let descripcion = document.getElementById("descripcion").value;
  let img = document.getElementById("img").value;
  let precio = parseInt(document.getElementById("precio").value);
  let tipo = document.getElementById("tipo").value;
  let producto = {
    nombre: nombre,
    descripcion: descripcion,
    img: img,
    precio: precio,
    seccion: tipo,
  };
  fetch("/almacen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(producto);
    });
}
