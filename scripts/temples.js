// temples.js

(function () {
  // Actualizar año en el footer
  var yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    var now = new Date();
    yearSpan.textContent = now.getFullYear();
  }

  // Actualizar fecha de última modificación
  var lm = document.getElementById('lastModified');
  if (lm) {
    lm.textContent = 'Last Modified: ' + document.lastModified;
  }

  // Hamburger Menu (solo móvil)
  // Assumimos una estructura básica:
  // <button id="hamburger" aria-label="Menú" class="hamburger" aria-expanded="false" aria-controls="navlinks">☰</button>
  // <nav id="navlinks" class="nav-links">...</nav>

  var hamburgerBtn = document.getElementById('hamburger');
  var navLinks = document.getElementById('navlinks');

  // Si no existen elementos, no hacer nada
  if (hamburgerBtn && navLinks) {
    // Crear el botón si no existe (opcional, ya podría estar en HTML)
    function showMobileHamburger() {
      // Mostrar/ocultar por tamaño usando CSS; aquí solo aseguramos el comportamiento
      // Comprobamos ancho para decidir estado inicial
      var isMobile = window.matchMedia('(max-width: 599px)').matches;
      if (isMobile) {
        hamburgerBtn.style.display = 'inline-block';
        // Ocultar el menú por defecto en mobile
        navLinks.style.display = 'none';
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.textContent = '☰'; // hamburger icono
      } else {
        hamburgerBtn.style.display = 'none';
        navLinks.style.display = 'block';
      }
    }

    // Listener de toggling
    function toggleMenu() {
      var open = navLinks.style.display === 'block';
      navLinks.style.display = open ? 'none' : 'block';
      hamburgerBtn.setAttribute('aria-expanded', String(!open));
      hamburgerBtn.textContent = open ? '☰' : '✖';
    }

    // Cambiar al tamaño de ventana
    function handleResize() {
      showMobileHamburger();
    }

    // Inicial
    showMobileHamburger();

    // Eventos
    hamburgerBtn.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);
  }
})();