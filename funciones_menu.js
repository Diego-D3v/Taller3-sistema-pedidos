let productos = [
  { id: "ID 1", nombre: "Laptop", precio: 1500000, categoria: 4 },
  { id: "ID 2", nombre: "Monitor", precio: 80000, categoria: 6 },
  { id: "ID 3", nombre: "Teclado", precio: 120000, categoria: 2 }
];

let ventas = [];

//Generar ID producto
function generateNewID() {
  return "ID " + (productos.length + 1);
}

// agregar producto
function agregarProducto(id, nombre, precio, categoria) {
  productos.push({ id, nombre, precio, categoria });
}


// Listar productos
function listarProductos() {
  console.log("\n=== MENÚ DE PRODUCTOS ===");
  productos.forEach(p => {
    console.log(`${p.id} - ${p.nombre} ($${p.precio}) [${p.categoria}]`);
  });
}



// buscar productos
function buscar(termino) {
    const index = lista.findIndex(item => item.toLowerCase().includes(terminoMin));
    if (index !== -1) {
        console.log(`Elemento encontrado en la posición ${index + 1}: ${lista[index]}`);
    } else {
        console.log("No se encontró ningún elemento que coincida.");
    }
}











// Lista global de productos
const menu = [];

//  Agregar producto
function agregarProducto(idProducto, nombre, precio, categoria) {
    const producto = {
        idProducto,
        nombre,
        precio,
        categoria
    };
    menu.push(producto);
    console.log(` Producto "${nombre}" agregado con ID ${idProducto}.`);
}

//  Listar todos los productos
function listarProductos() {
    if (menu.length === 0) {
        console.log("El menú está vacío.");
        return;
    }

    console.log(" Lista de productos:");
    menu.forEach(p => {
        console.log(`- [${p.idProducto}] ${p.nombre} | $${p.precio} | Categoría: ${p.categoria}`);
    });
}

//  Buscar por nombre o categoría
function buscarProductos(termino) {
    const terminoMin = termino.toLowerCase();
    const encontrados = menu.filter(p =>
        p.nombre.toLowerCase().includes(terminoMin) ||
        p.categoria.toLowerCase().includes(terminoMin)
    );

    if (encontrados.length === 0) {
        console.log(` No se encontraron productos con el término "${termino}".`);
    } else {
        console.log(` Resultados para "${termino}":`);
        encontrados.forEach(p => {
            console.log(`- ${p.nombre} | $${p.precio} | Categoría: ${p.categoria}`);
        });
    }
}

// Agregar productos
agregarProducto(1, "hambruguesa", 8000, "hamburguesa");
agregarProducto(2, "pepsi", 2000, "bebida");
agregarProducto(3, "Helado", 4000, "postre");

// Listar productos
listarProductos();

// Buscar productos
buscarProductos("postre");     // Por nombre
buscarProductos("bebida");      // Por categoría
buscarProductos("pizza");       // Sin coincidencias
