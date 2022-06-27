function openSugerencia(evt, idContentSugerencia) {
    // oculta todos los contenidos de cada tab
    let menuContenido = document.getElementsByClassName("menu-contenido");
    for (let i = 0; i < menuContenido.length; i++) {
        menuContenido[i].style.display = "none";
    }

    // desactiva todos botones de los tabs (solo estilo, no desactiva su funcionalidad)
    // Les quita la clase activo
    let menuItems = document.getElementsByClassName("menu-sugerencia");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].className = menuItems[i].className.replace(" activo", "");
    }

    // Muestra el tab que dice el idContentSugerencia y le pone la clase activo al tab que se clickeo
    document.getElementById(idContentSugerencia).style.display = "block";
    evt.currentTarget.className += " activo";
}

// Para el menu-sugerencia que tiene el id "tab-default-open", lo activa de inmediato.
document.getElementById("tab-default-open").click();