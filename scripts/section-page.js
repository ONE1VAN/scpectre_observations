function getPhotoUrl(folder, index) {
  return `images/${encodeURIComponent(folder)}/pic%20${index}.jpg`;
}

function getCurrentSection() {
  const fileName = window.location.pathname.split('/').pop().replace('.html', '');
  return sections.find(s => s.id === fileName);
}

function setupModal() {
  if (document.getElementById('imageModal')) return;

  const modalHTML = `
    <div class="modal" id="imageModal">
      <button class="modal-close" id="closeModal">&times;</button>
      <div class="modal-content">
        <img id="modalImage" src="" alt="" />
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const closeButton = document.getElementById('closeModal');
  const modal = document.getElementById('imageModal');

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  if (!modal || !modalImg) return;

  modalImg.src = imageSrc;
  modal.classList.add('active');
}

function renderGallery() {
  const currentSection = getCurrentSection();
  if (!currentSection) return;

  const section = currentSection;
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  let html = '';

  for (let i = 1; i <= section.count; i++) {
    const url = getPhotoUrl(section.folder, i);
    html += `
      <div class="gallery-item">
        <img src="${url}" alt="${section.title}" loading="lazy" />
      </div>
    `;
  }

  gallery.innerHTML = html;

  document.querySelectorAll('.gallery-item img').forEach((img) => {
    img.addEventListener('click', () => openModal(img.src));
  });
}

function renderPageTitle() {
  const currentSection = getCurrentSection();
  if (!currentSection) return;

  const titleElement = document.querySelector('.section-title');
  if (titleElement) {
    titleElement.textContent = currentSection.title;
  }

  document.title = `${currentSection.title} - Spectre Observations`;
}

function initSectionPage() {
  setupModal();
  renderPageTitle();
  renderGallery();
}

document.addEventListener('DOMContentLoaded', initSectionPage);
