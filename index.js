// index.js
const readline = require("readline");
const { pedidosPorEstado, ventasTotales, mostrarEstadoActual } = require("./funtion_reportes");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log(`
========= MENÚ REPORTES =========
1. Mostrar pedidos por estado
2. Calcular ventas totales
3. Mostrar estado actual (productos + pedidos)
0. Salir
`);
  rl.question("Elige una opción: ", opcion => {
    switch (opcion) {
      case "1":
        pedidosPorEstado();
        mostrarMenu();
        break;
      case "2":
        ventasTotales();
        mostrarMenu();
        break;
      case "3":
        mostrarEstadoActual();
        mostrarMenu();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("❌ Opción no válida");
        mostrarMenu();
    }
  });
}

// ==== Iniciar programa ====
mostrarMenu();