const miInfo = new estructura();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", e => {
  
  let codigo = document.getElementById("txtCodigo").value;
  let nombre = document.getElementById("txtNombre").value;
  let descripcion = document.getElementById("txtDescripcion").value;
  let cantidad = document.getElementById("txtCantidad").value;
  cantidad = parseInt(cantidad);
  let precio = parseInt(document.getElementById("txtPrecio").value);

  let product = new Producto(codigo, nombre, descripcion, cantidad, precio);

  let datos = document.getElementById("datos");
  datos.innerHTML += `
    <div class="p-3 mb-2 bg-secondary text-white">
      <p class="card-title"><strong>ID ${product.id} - </strong>${
    product.nombre
  }</p>
      <p class="card-text">Desc: ${product.descripcion}</p>
      <p class="card-text">${product.showTextInfo()}</p>
    </div>
  `;
  miInfo.agregar(product);
  console.log(miInfo.listar());
  console.log(product.showInfo());
});

const buscar = document.getElementById("btnBuscar");
buscar.addEventListener("click", e => {

  let dato = document.getElementById("txtNombre").value;
  let nodoR = miInfo.buscar(dato);
  let datos = document.getElementById("datos");
  if (nodoR === null) {
    datos.innerHTML +=
      "<div><p>Buscar</p><p>Producto no encontrado " + dato + "</p></div>";
  } else {
    datos.innerHTML +=
      "<div><p>Producto encontrado</p><p>" + nodoR.showTextInfo() + "</p></div>";
  }
});
const buscar = document.getElementById("btnBuscarCodigo");
buscar.addEventListener("click", e => {
  let dato = document.getElementById("txtCodigo").value;
  let nodoR = miInfo.buscar(dato);
  let datos = document.getElementById("datos");
  if (nodoR === null) {
    datos.innerHTML +=
      "<div><p>Buscar</p><p>Codigo no encontrado " + dato + "</p></div>";
  } else {
    datos.innerHTML +=
      "<div><p>Codigo encontrado</p><p>" + nodoR.showTextInfo() + "</p></div>";
  }
});
