const sectionFolders = [
  { folder: 'flags', title: 'Flags', href: 'flags.html' },
  { folder: 'forest game', title: 'Forest Game', href: 'forest-game.html' },
  { folder: 'foundators', title: 'Foundators', href: 'foundators.html' },
  { folder: 'ghillie suit', title: 'Ghillie Suit', href: 'ghillie-suit.html' },
  { folder: 'miltec', title: 'Miltec', href: 'miltec.html' },
  { folder: 'night game', title: 'Night Game', href: 'night-game.html' },
  { folder: 'sniper rifle', title: 'Sniper Rifle', href: 'sniper-rifle.html' },
  { folder: 'SQB', title: 'SQB', href: 'sqb.html' },
  { folder: 'the best programmer', title: 'The Best Programmer', href: 'the-best-programmer.html' }
];

function initIndexPage() {
  const sectionLinks = document.getElementById('sectionLinks');
  const heroPhotos = document.getElementById('heroPhotos');

  if (sectionLinks) {
    sectionLinks.innerHTML = '';
    sectionFolders.forEach((cat) => {
      const link = document.createElement('a');
      link.href = cat.href;
      link.textContent = cat.title;
      sectionLinks.appendChild(link);
    });
  }

  if (heroPhotos) {
    sectionFolders.forEach((cat) => {
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
