  function show(id, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('visible'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('visible');
    btn.classList.add('active');
  }

  function copyCmd(el) {
    const code = el.querySelector('.cmd-code').textContent;
    const btn  = el.querySelector('.cmd-copy');
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = '¡Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 1800);
    });
  }