const container = document.getElementById("container");
const btn = document.querySelector ("button")


function saludar () {
    alert ("Hola! Soy el div")
}

container.addEventListener("click", saludar);

btn.addEventListener("click", function(saludar) {
    saludar.stopPropagation();
});