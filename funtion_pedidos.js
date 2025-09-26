let Fastandtasty = [
    {id:"p1", nombre:  "almuerzo ejecutivo",
    precios: 15000, categoria:"lomo de cerdo"},
    {id:"p2", nombre: "almuerzo corriente",
    precios: 13000, categoria: "pechuga",},
    {id:"p3", nombre: "almuerzo especiale",
    precios: 20000, categoria: "mojarra frita"}
    
    
];
//---crear productos---
function crearProductos (nombre ,precio,
    categoria){
    const id = "p" + (Fastandtasty.length + 1);
    const nuevoproducto = {id,nombre, precios,categoria};
    Fastandtasty.push(nuevoproducto);
    return nuevoproducto;
    }
// ejemplo de uso
const productoCreado =
crearproducto("comida rapida",22000,"hamburguesa");
console.log("Producto creado:", productoCreado);
console.log("menu actualizado:", Fastandtasty);
//---calcular total---
function calcularTotal (menu){
    return menu.reduce((total, producto) => total + producto.precios, 0);
}

let total = calcularTotal(Fastandtasty);
console.log("total del pedido: $" + total);
//---cambiar estado---
function cambiarEstadopedido (estado) {
    const estadosValidos = ["pendiente", "en preparacion", "listo para servir", "entregado"];
    if (estadosValidos.includes(estado)) {
        console.log("El estado del pedido ha sido cambiado a:", estado);
    } else {
        console.log("estado no valido. los estados validos son:", estadosValidos.join(","));
    
    }
}
cambiarEstadopedido("en preparacion");
