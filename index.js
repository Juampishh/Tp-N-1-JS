
// TP N° 1
/*
for (var i = 0 ; (i < Pizza.length) ; i++){
    if (Pizza[i].Id % 2 == 0){
        console.log("El id de la pizza es par");
    }
    else{

        console.log("El id de la pizza es impar");
    }
    if (Pizza[i].Precio < 600){

        console.log("El precio de la pizza es menor a 600");
    }
    else{

        console.log("El precio de la pizza supera los 600");
    }
    console.log(Pizza[i].Nombre);
    console.log(Pizza[i].Ingredientes);
    
}

*/

// Resolviendo TP N°2
let pizzas = [
    {
        Id: 1,
        nombre: "Pizza Especial",
        Ingredientes:["Ingredientes:"  ,"Jamon","Queso Muzarella","Aceitunas","Tomate"],
        Precio: 700
    }
,
    {
        Id:2,
        nombre:"Pizza Muzarella",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate"],
        Precio:500
    }
,
    {
        id:3,
        nombre:"Pizza 4 Quesos",
        ingredientes:["Ingredientes: " ,"Queso Muzarella","Queso Parmesano","Queso Cremoso", "Queso Cheddar"],
        precio:800
    }
,
    {
        Id:4,
        nombre:"Pizza Rucula",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Rucula"],
        Precio:500
    }
,
    {  Id:5,
        nombre:"Pizza Primavera",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Lechuga","Morron","Huevo"],
        Precio:800
    }
,
    {  Id:6,
        nombre:"Pizza Capresse",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Salame"],
        Precio:900
    }
    ,
    {
        Id:7,
        nombre:"Pizza de Anana",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Anana"],
        Precio:900
    },
    {
        Id:8,
        nombre:"Pizza de la Casa",
        Ingredientes:["Ingrediente:"  ,"Queso Muzarella","Queso Cheddar","Queso Parmesano","Rellena de JYQ"],
        Precio:900
    }
    ,
    {
        Id:9,
        nombre:"HamburPizza",
        Ingredientes:["Ingredientes:"  ,"Hamburgesa paty","Queso Cheddar","Queso Parmesano","Rellena de JYQ","Huevo","Bacon"],
        Precio:2000
    }
]

function mostrar_inputs(){
    let input = document.getElementById('input').value;
    let container = document.getElementById('content');
    if (input == 1){
        //Funcion para crear la informacion  
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Especial</h2>
             <h3>$700</h3>
             </div>
         `
        }
        createCard()
    }else if (input == 2){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Muzarella</h2>
                <h3>$500</h3>
             </div>
         `
        }
        createCard()
    }else if (input == 3){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza 4 Quesos</h2>
                <h3>$800</h3>
             </div>
         `
        }
        createCard()
    }
    else if (input == 4){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Rucula</h2>
                <h3>$500</h3>
             </div>
         `
        }
        createCard()
    }

    else if (input == 5){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Primavera</h2>
                <h3>$800</h3>
             </div>
         `
        }
        createCard()
    }

    else if (input == 6){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Caprese</h2>
                <h3>$900</h3>
             </div>
         `
        }
        createCard()
    }

    else if (input == 7){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza Anana</h2>
                <h3>$900</h3>
             </div>
         `
        }
        createCard()
    }

    else if (input == 8){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Pizza de la Casa</h2>
                <h3>$900</h3>
             </div>
         `
        }
        createCard()
    }
    else if (input == 9){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
             <h2>Hamburpizza</h2>
                <h3>$2000</h3>
             </div>
         `
        }
        createCard()
    }
    else if (input > 9){
        function createCard(input) {
            container.innerHTML = `
            <div class="pizza-info">
                <p>Error el numero ingresado no corresponde, ingrese un numero valido porfavor</p>
             </div>
         `
        }
        createCard()
    }




}










