/* ═══════════════════════════════
  LIGHTBOX PARA IMÁGENES
═══════════════════════════════ */
function buildLightbox() {
  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Cerrar">&#x2715;</button>
    <img id="lightbox-img" src="" alt="">
    <p id="lightbox-caption"></p>
  `;
  document.body.appendChild(overlay);

  const lbImg = document.getElementById("lightbox-img");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lbCaption.textContent = alt || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(function () {
      lbImg.src = "";
    }, 200);
  }

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLightbox();
  });
  lbClose.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  document.querySelectorAll(".img-figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      var figure = img.closest("figure");
      var caption =
        figure && figure.querySelector("figcaption")
          ? figure.querySelector("figcaption").textContent
          : img.alt || "";
      openLightbox(img.src, caption);
    });
  });
}
