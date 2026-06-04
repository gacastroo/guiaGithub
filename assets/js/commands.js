function copyCmd(el) {
  const code = el.querySelector(".cmd-code").textContent.trim();
  const btn = el.querySelector(".cmd-copy");
  const copiedText = currentLang === "en" ? "Copied!" : "¡Copiado!";
  const copyText = currentLang === "en" ? "Copy" : "Copiar";

  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = copiedText;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = copyText;
      btn.classList.remove("copied");
    }, 1800);
  });
}
