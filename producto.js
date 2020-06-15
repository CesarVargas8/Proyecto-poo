class producto {
    static cont = 0;
    constructor(codigo, nombre, descripcion, cantidad, precio) {
      this.id = ++producto.cont;
      this.codigo = codigo;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
      this.siguiente = null;
      this.anterior = null;
    }
    showTextInfo() {
      return (
        "id: " +
        this.id +
        " Nombre: " +
        this.codigo +
        " Codigo " +
        this.nombre +
        " precio: " +
        this.precio +
        " $ "
      );
    }
    showInfo() {
      return {
        id: this.id,
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        precio: this.precio
      };
    }
  }
  