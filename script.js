(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const zoomableImages = document.querySelectorAll('.zoomable');

  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Preview image';
    const figcaption = img.closest('figure')?.querySelector('figcaption');
    lightboxCaption.textContent = figcaption ? figcaption.textContent : (img.alt || '');
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  zoomableImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
})();
