const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let almacen = require("./array");

app.get("/almacen", function (req, res) {
  res.send(almacen);
});

app.get("/almacen/:seccion", function (req, res) {
  let seccion = req.params.seccion;

  if (almacen[seccion] !== undefined) {
    res.send(almacen[seccion]);
  } else {
    res.send("El dato introducido no existe");
  }
});

app.post("/almacen", function (req, res) {
  let seccion = req.body.seccion;
  let nombre = req.body.nombre;
  let descripcion = req.body.descripcion;
  let img = req.body.img;
  let precio = req.body.precio;
  let producto = {
    seccion: seccion,
    nombre: nombre,
    descripcion: descripcion,
    img: img,
    precio: precio,
  };

  if (almacen[seccion] !== undefined) {
    almacen[seccion].push(producto);
    res.send(almacen);
  } else {
    res.send("El dato introducido no existe");
  }
});

app.put("/almacen", function (req, res) {
  let referencia = req.body.referencia;
  let seccion = req.body.seccion;
  let nombre = req.body.nombre;
  let descripcion = req.body.descripcion;
  let img = req.body.img;
  let precio = req.body.precio;

  let boolean = false
 if(almacen[seccion] !== undefined) {
  for (let i = 0; i < almacen[seccion].length; i++) {
    if (referencia === almacen[seccion].nombre) {
      almacen[seccion].descripcion = descripcion;
      almacen[seccion].img = img;
      almacen[seccion].precio = precio;
      boolean = true
    } 
    }
  }
 if (boolean) {
     res.send(almacen)
 } else {
  res.send("El dato introducido no existe");
}
})

app.delete("/almacen", function (req, res) {
    let seccion = req.body.seccion;
    let nombre = req.body.nombre;
    let boolean = false;
    for (i = 0; i < almacen[seccion].length; i++) {
      if (almacen[seccion][i].nombre === nombre) {
        almacen[seccion].splice(i,1)
        boolean = true
      }
    }
    boolean ? res.send(almacen) : res.send ({mensaje:"El dato introducido no existe"  })
  });
  


app.listen(3000)
