function funcionSaludo(){
    alert ("Hola!");
}
let btn = document.getElementById("btn");
let container = document.getElementById('container');

container.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

btn.addEventListener("click", function(event) {
    event.stopPropagation(); 
});