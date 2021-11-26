let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');
let body = document.querySelector('body');

let nombreUsuario = prompt("Ingrese su nombre");
h2.style.textTransform = "uppercase"
a.style.color = "#E51B3E"

if(!nombreUsuario){
    h2.innerHTML += "Invitado";
} else {
    h2.innerHTML += nombreUsuario;
}

prompt("¿Desea colocar un fondo de pantalla?");
if(confirm){
    body.classList.add("fondo");
} else {
    body.classList.remove("fondo")
}

for (let i = 0; i < p.length; i++) {
    p[0].classList.add("destacadoPar")
    p[1].classList.add("destacadoImpar")
    p[2].classList.add("destacadoPar")
    p[3].classList.add("destacadoImpar")
}