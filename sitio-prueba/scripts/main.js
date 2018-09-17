var Imagen = document.querySelector('img');

Imagen.onclick = function (){
    var src = Imagen.getAttribute('src');

    if (src === 'images/firefox-icon.png'){
        Imagen.setAttribute('src' ,'images/Google-icon.png');
    }
    else {
        Imagen.setAttribute('src' ,'images/firefox-icon.png');
    }
}

var Boton = document.querySelector('button');
var titulo = document.querySelector('h1');

function nuevousuario(){
    var nombre = prompt('Ingrese nombre del usario');
    localStorage.setItem('nombre',nombre);
    titulo.textContent='hola usuario '+ nombre;
}

if (!localStorage.getItem('nombre')){
    nuevousuario();
}
else{
    var NombreAlmacenado = localStorage.getItem('nombre');
    titulo.textContent = 'hola usuario '+NombreAlmacenado;

}

Boton.onclick = function(){
    nuevousuario();
}