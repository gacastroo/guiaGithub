    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.nav-link');
    const indicator = document.querySelector('.nav-indicator');
    function moveIndicator(el) {
      indicator.style.width = `${el.offsetWidth}px`;
      indicator.style.left = `${el.offsetLeft}px`;
    }
    // Posicionar en el elemento activo al cargar
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
      moveIndicator(activeLink);
    }
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        moveIndicator(this);
      });
      // Efecto hover: mover temporalmente el indicador
      link.addEventListener('mouseenter', function() {
        moveIndicator(this);
      });
      // Al salir, volver al activo
      link.addEventListener('mouseleave', function() {
        const current = document.querySelector('.nav-link.active');
        if (current) {
          moveIndicator(current);
        }
      });
    });
    // Recalcular en resize
    window.addEventListener('resize', () => {
      const current = document.querySelector('.nav-link.active');
      if (current) {
        moveIndicator(current);
      }
    });
