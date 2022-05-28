let menu = document.getElementById('menu');
let opciones = document.getElementById('opciones');
menu.addEventListener('click', mostrar);
let contador = 1;


function mostrar() {
    if (contador==1) {
        opciones.style.display = 'block';
        contador=0;
    }else{
        contador=1;
        opciones.style.display = 'none';
    }
}