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