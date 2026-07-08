/* Lazy-load de YouTube: evita cargar scripts de terceros hasta que el usuario pulse reproducir. */
function loadLazyYouTube(el) {
  const videoId = el.dataset.videoId;
  const title = el.dataset.videoTitle || "Vídeo";
  if (!videoId) return;

  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  iframe.title = title;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.loading = "lazy";
  iframe.style.border = "0";

  el.replaceChildren(iframe);
  el.classList.remove("youtube-lazy");
  el.removeAttribute("role");
  el.removeAttribute("tabindex");
  el.removeAttribute("aria-label");
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".youtube-lazy").forEach((el) => {
    el.addEventListener("click", () => loadLazyYouTube(el));
    el.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        loadLazyYouTube(el);
      }
    });
  });
});
