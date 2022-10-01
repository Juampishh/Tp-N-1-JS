let Pizza = [
    {
        Id: 1,
        Nombre: "Pizza Especial",
        Ingredientes:["Ingredientes:"  ,"Jamon","Queso Muzarella","Aceitunas","Tomate"],
        Precio: 700
    }
,
    {
        Id:2,
        Nombre:"Pizza Muzarella",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate"],
        Precio:500
    }
,
    {
        Id:3,
        Nombre:"Pizza 4 Quesos",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Queso Parmesano","Queso Cremoso", "Queso Cheddar"],
        Precio:800
    }
,
    {
        Id:4,
        Nombre:"Pizza Rucula",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Rucula"],
        Precio:500
    }
,
    {  Id:5,
        Nombre:"Pizza Primavera",
        Ingredientes:["Ingredientes" ,"Queso Muzarella","Aceitunas","Tomate","Lechuga","Morron","Huevo"],
        Precio:800
    }
,
    {  Id:6,
        Nombre:"Pizza Capresse",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Salame"],
        Precio:900
    }
    ,
    {
        Id:7,
        Nombre:"Pizza de Anana",
        Ingredientes:["Ingredientes: " ,"Queso Muzarella","Aceitunas","Tomate","Anana"],
        Precio:900
    },
    {
        Id:9,
        Nombre:"Pizza de la Casa",
        Ingredientes:["Ingrediente:"  ,"Queso Muzarella","Queso Cheddar","Queso Parmesano","Rellena de JYQ"],
        Precio:900
    }
    ,
    {
        Id:10,
        Nombre:"HamburPizza",
        Ingredientes:["Ingredientes:"  ,"Hamburgesa paty","Queso Cheddar","Queso Parmesano","Rellena de JYQ","Huevo","Bacon"],
        Precio:2000
    }
]

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