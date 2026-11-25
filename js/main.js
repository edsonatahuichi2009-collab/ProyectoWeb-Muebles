// Selecciona todos los enlaces de tu menú
const linksMenu = document.querySelectorAll('.menu-principal a');

// Revisa cada enlace para ver si coincide con la URL actual
linksMenu.forEach(link => {
    if (window.location.href === link.href) {
        // Le añade la clase 'activo' a la pestaña donde estás actualmente
        link.classList.add('activo');
    }
});