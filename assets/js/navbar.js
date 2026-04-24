    // Sticky navbar: añade sombra cuando el usuario hace scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Ajusta dinámicamente el top del nav y el padding-top del main
    // según la altura real del header en cada tamaño de pantalla
    function adjustLayout() {
      const header = document.querySelector('header');
      const nav    = document.querySelector('nav');
      const main   = document.querySelector('main');

      const headerH = header.offsetHeight;
      const navH    = nav.offsetHeight;

      // En escritorio (>1024px) mantenemos el valor original del CSS (80px / 129px)
      // En el resto lo calculamos dinámicamente
      if (window.innerWidth <= 1024) {
        nav.style.top        = headerH + 'px';
        main.style.paddingTop = (headerH + navH + 16) + 'px';
      } else {
        nav.style.top        = '';
        main.style.paddingTop = '';
      }
    }

    // Ejecutar al cargar y al redimensionar
    window.addEventListener('DOMContentLoaded', adjustLayout);
    window.addEventListener('resize', adjustLayout);
