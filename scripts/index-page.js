function initIndexPage() {
  const sectionLinks = document.getElementById('sectionLinks');
  const heroPhotos = document.getElementById('heroPhotos');

  if (sectionLinks) {
    sectionLinks.innerHTML = '';
    sections.forEach((cat) => {
      const link = document.createElement('a');
      link.href = cat.href;
      link.textContent = cat.title;
      sectionLinks.appendChild(link);
    });
  }

  if (heroPhotos) {
    sections.forEach((cat) => {
      const coverUrl = `images/${encodeURIComponent(cat.folder)}/pic%201.jpg`;
      const card = document.createElement('a');
      card.href = cat.href;
      card.className = 'photo-card';
      card.innerHTML = `
        <img src="${coverUrl}" alt="${cat.title}" />
        <div class="photo-label">${cat.title}</div>
      `;
      heroPhotos.appendChild(card);
    });
  }
}

document.addEventListener('DOMContentLoaded', initIndexPage);
