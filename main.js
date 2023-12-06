class ProductManager {
  // Verificamos una variable estatica para asignar un id unico a cada producto
  static ultId = 0;

  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Verificamos que todos los campos esten completos
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Completa todos los campos por favor");
      return;
    }

    // Verificamos que el codigo del producto sea único
    if (this.products.some((item) => item.code === code)) {
      console.log("El código debe ser único");
      return;
    }

    // Creamos un nuevo producto con un id unico y lo agregamos al array de productos
    const newProduct = {
      id: ++ProductManager.ultId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
  }

  getProductById(id) {
    // Buscamos el producto en el array por su id
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      console.log("El id no fue encontrado");
    } else {
      console.log(product);
    }
  }
}

// Creamos una instancia de ProductManager
const manager = new ProductManager();

// Imprimimos la lista de productos (vacia)
manager.getProducts();

// Agregamos algunos productos de ejemplo
manager.addProduct(
  "teclado",
  "un teclado fabuloso",
  1200,
  "imagen.png",
  "tec324",
  22
);

manager.addProduct(
  "PlayStation 5",
  "Consola de videojuegos de última generación",
  5000,
  "imagen.png",
  "ps567",
  8
);

manager.addProduct(
  "Computadora de Escritorio",
  "Potente computadora para tareas intensivas",
  3000,
  "imagen.png",
  "pc789",
  5
);

manager.getProducts();

//Repetimos el mismo codigo de producto asi arroja error
manager.addProduct(
  "Computadora de Escritorio",
  "Potente computadora para tareas intensivas",
  3000,
  "imagen.png",
  "pc789",
  5
);

// Imprimimos producto por su id o en su defecto no se encuentra
manager.getProductById(2);
manager.getProductById(222);
