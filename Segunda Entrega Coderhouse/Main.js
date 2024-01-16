
const container = document.getElementById("container");

allCamisetas.forEach((el, ) => {
    const card = document.createElement("div");
    card.className = "card";

    const Nombrecamiseta = document.createElement("h4");
    Nombrecamiseta.innerText = `${el.nombre}`;
    
    const preciocamiseta = document.createElement("h4");
    preciocamiseta.innerText = `${el.precio}`;


    

    const btnInfo = document.createElement("button");
    btnInfo.innerText = "Comprar Camiseta";
    btnInfo.onclick = () => alert("Agregaste al carrito" + el.nombre);

    card.appendChild(Nombrecamiseta);
    card.appendChild(preciocamiseta);
  
    card.appendChild(btnInfo);

    container.appendChild(card);

  
})

localStorage.setItem ("allCamisetas", JSON.stringify(allCamisetas));
let usuario;
let usuarioEnELS= JSON.parse (localStorage.getItem(allCamisetas))