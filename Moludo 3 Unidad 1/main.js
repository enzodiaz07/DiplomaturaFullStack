let NombreDelComprador = prompt ("Bienvenido a Diaz Clothes' Ingrese Su nombre");
let EmailDelComprador = prompt ("Ingrese su email para generar su cuenta");

console.log ("El nombre del usuario es:"+ NombreDelComprador);
console.log ("El email del usuario es:" + EmailDelComprador );
alert ("El nombre del usuario es:" + NombreDelComprador);
alert ("El email del usuario es:"  + EmailDelComprador );

const RemeraDeRiver1 = {
    Nombre: "Remera titular de river",
    Precio: 20000,
    Talle: "S",
    Categoria: "Remeras de river"
}

const RemeraDeRiver2 = {
    Nombre: "Remera titular de river",
    Precio: 20000,
    Talle: "M",
    Categoria: "Remeras de river"
   }

   const RemeraDeRiver3 = {
    Nombre: "Remera titular de river",
    Precio: 20000,
    Talle: "XL",
    Categoria: "Remeras de river"
   }

   const RemeraDeRiver4 = {
    Nombre: "Remera titular de river",
    Precio: 20000,
    Talle: "XXL",
    Categoria: "Remeras de river"
   }

   
const RemeraDeBoca1 = {
    Nombre: "Remera titular de Boca",
    Precio: 19000,
    Talle: "S",
    Categoria: "Remeras de Boca"
}
const RemeraDeBoca2 = {
    Nombre: "Remera titular de Boca",
    Precio: 19000,
    Talle: "M",
    Categoria: "Remeras de Boca"
}
const RemeraDeBoca3 = {
    Nombre: "Remera titular de Boca",
    Precio: 19000,
    Talle: "L",
    Categoria: "Remeras de Boca"
}
const RemeraDeBoca4 = {
    Nombre: "Remera titular de Boca",
    Precio: 19000,
    Talle: "XXL",
    Categoria: "Remeras de Boca"
}
   
const RemeraDeArgentina1 = {
    Nombre: "Remera titular de Argentina",
    Precio: 21000,
    Talle: "S",
    Categoria: "Remeras de Argentina"
}
const RemeraDeArgentina2 = {
    Nombre: "Remera titular de Argentina",
    Precio: 21000,
    Talle: "M",
    Categoria: "Remeras de Argentina"
}
const RemeraDeArgentina3 = {
    Nombre: "Remera titular de Argentina",
    Precio: 21000,
    Talle: "L",
    Categoria: "Remeras de Argentina"
}
const RemeraDeArgentina4 = {
    Nombre: "Remera titular de Argentina",
    Precio: 21000,
    Talle: "XXL",
    Categoria: "Remeras de Argentina"
}


const ArrayDeProductos = [RemeraDeRiver1, RemeraDeRiver2, RemeraDeRiver3, RemeraDeArgentina4]
const ArrayDeProductos2 = [RemeraDeBoca1, RemeraDeBoca2, RemeraDeBoca3, RemeraDeBoca4]
const ArrayDeProductos3 = [RemeraDeArgentina1, RemeraDeArgentina2, RemeraDeArgentina3, RemeraDeArgentina4]

console.log ("La primer categoria de ropa es" + JSON.stringify (ArrayDeProductos));
console.log ("La primer categoria de ropa es" + JSON.stringify (ArrayDeProductos2));
console.log ("La primer categoria de ropa es" + JSON.stringify (ArrayDeProductos3));

let RemeraElegida = prompt ("Declarar si quiere adquirir remeradeRiver1, RemeraDeBoca1 o RemeraDeArgentina1.");

if (RemeraElegida == RemeraDeRiver1.Nombre ){
alert ("Usted Selecciono Remera de river");
}
else if (RemeraElegida == RemeraDeBoca1.Nombre ) {
alert ("Usted selecciono remera de boca");
}
else if (RemeraElegida == RemeraDeArgentina1.nombre ) {
    alert ("usted selecciono remera de Argentina");
}
else {
    alert ("Usted ha salido de la compra");
}

console.log ("la remera elegida es" + RemeraElegida);

let MetodoDePago = prompt ("Decidir si pagara en Tarjeta de credito o debito");
const Debito = {
    Nombre: "debito",
}
const Credito = {
    Nombre: "Credito",
}
if (MetodoDePago == Debito) {
    alert ("Ingresar Datos de su tarjeta de debito a continuacion")

}
else if (MetodoDePago == Credito) {
    alert ("Ingresar Datos de su tarjeta de credito a continuacion")
}

alert ("Muchas gracias por su compra, vuelva pronto.")