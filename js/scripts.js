const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Mostrar el botón cuando el usuario se desplaza hacia abajo
window.onscroll = function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Desplazarse al inicio de la página cuando se hace clic en el botón
document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Rervaciones
document.addEventListener('DOMContentLoaded', function () {
    const formReserva = document.getElementById('form-reserva');
    formReserva.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('¡Reserva realizada con éxito!');
    });

    const formContacto = document.getElementById('form-contacto');
    formContacto.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('¡Mensaje enviado con éxito!');
    });

});