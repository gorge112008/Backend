const express = require("express");
const app = express();
const { productManager } = require("./ProductManager.js");

//setear todo el servidor

//endpoint
app.get("/products", async function (req, res) {
  try {
    let productos = await productManager.getProducts();
    const limite = req.query.limite;
    if (limite && !isNaN(Number(limite))) {
        productos= productos.slice(0,limite);
    }
    res.send(productos);
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/:pid", async function (req, res) {
  try {
    const pid = req.params.pid;
    const productos = await productManager.getProductById(pid);
    res.send(productos);
  } catch (error) {
    console.log(error);
  }
});

//levantar el servidor
app.listen(3000, () => {
  console.log("Servidor levantado en el puerto", 3000);
});
