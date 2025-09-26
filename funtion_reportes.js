let productos = [
  { id: "P1", nombre: "Hamburguesa", precio: 15000, categoria: "comida" },
  { id: "P2", nombre: "Gaseosa", precio: 5000, categoria: "bebida" },
  { id: "P3", nombre: "Helado", precio: 7000, categoria: "postre" }
];

let pedidos = [
  { idPedido: "O1", nombreCliente: "Carlos", items: [productos[0], productos[1]], total: 20000, estado: "pendiente" },
  { idPedido: "O2", nombreCliente: "Ana", items: [productos[2]], total: 7000, estado: "entregado" },
  { idPedido: "O3", nombreCliente: "Luis", items: [productos[0], productos[2]], total: 22000, estado: "preparando" },
  { idPedido: "O4", nombreCliente: "Sofia", items: [productos[1], productos[2]], total: 12000, estado: "entregado" }
];
// ==== Reportes ====

function pedidosPorEstado() {
  let conteo = { pendiente: 0, preparando: 0, entregado: 0 };
  pedidos.forEach(p => conteo[p.estado]++);
  console.log("\n=== PEDIDOS POR ESTADO ===");
  console.log(conteo);
}

function ventasTotales() {
  let totalVentas = pedidos
    .filter(p => p.estado === "entregado")
    .reduce((suma, p) => suma + p.total, 0);
  console.log(`\n=== VENTAS TOTALES ===\n$${totalVentas}`);
}

function mostrarEstadoActual() {
  console.log("\n=== MENÚ DE PRODUCTOS ===");
  productos.forEach(p =>
    console.log(`${p.id} - ${p.nombre} ($${p.precio}) [${p.categoria}]`)
  );

  console.log("\n=== PEDIDOS ===");
  pedidos.forEach(p =>
    console.log(
      `Pedido ${p.idPedido} - Cliente: ${p.nombreCliente}, Total: $${p.total}, Estado: ${p.estado}`
    )
  );
}

// ==== Exportar funciones ====
module.exports = { pedidosPorEstado, ventasTotales, mostrarEstadoActual };
