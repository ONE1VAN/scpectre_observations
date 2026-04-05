function createHeader() {
  return `
    <a href="index.html" class="brand">
      <img src="styles/images/logo.png" alt="Spectre Observations" class="logo-image" />
      <div>
        <div class="brand-title">Spectre</div>
        <div class="brand-subtitle">Observations</div>
      </div>
    </a>
    <button class="burger-button" type="button" aria-label="Відкрити меню">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class="top-nav" id="topNav"></nav>
  `;
}

function createFooter() {
  return `
    <button class="back-to-top" type="button" aria-label="На початок">
      <span class="arrow">↑</span> Back to top
    </button>
    <div class="social-links">
      <a class="social-link" href="https://www.instagram.com/spectre_observations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2H17C20.3137 2 23 4.68629 23 8V16C23 19.3137 20.3137 22 17 22H7C3.68629 22 1 19.3137 1 16V8C1 4.68629 3.68629 2 7 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15.5C14.4853 15.5 16.5 13.4853 16.5 11C16.5 8.51472 14.4853 6.5 12 6.5C9.51472 6.5 7.5 8.51472 7.5 11C7.5 13.4853 9.51472 15.5 12 15.5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.5 6.5H17.51" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a class="social-link" href="https://www.linkedin.com/in/ivan-likanov-77638b34b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  `;
}

function getSectionCategories() {
  return sections.filter((cat) => cat.id !== 'index');
}

function initNavigation() {
  const topNav = document.getElementById('topNav');
  const burgerButton = document.querySelector('.burger-button');

  if (topNav) {
    topNav.innerHTML = '';
    getSectionCategories().forEach((cat) => {
      const link = document.createElement('a');
      link.href = cat.href;
      link.textContent = cat.title;
      link.addEventListener('click', () => {
        if (topNav.classList.contains('open')) {
          topNav.classList.remove('open');
          burgerButton.classList.remove('active');
          document.body.classList.remove('nav-open');
        }
      });
      topNav.appendChild(link);
    });
  }

  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      if (!topNav) return;
      const isOpen = topNav.classList.toggle('open');
      burgerButton.classList.toggle('active', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
    });
  }

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function populateSectionLinks() {
  const sectionLinks = document.getElementById('sectionLinks');
  if (!sectionLinks) return;

  sectionLinks.innerHTML = '';
  getSectionCategories().forEach((cat) => {
    const link = document.createElement('a');
    link.href = cat.href;
    link.textContent = cat.title;
    sectionLinks.appendChild(link);
  });
}

function initPage() {
  const headerEl = document.getElementById('header');
  const footerEl = document.getElementById('footer');

  if (headerEl) {
    headerEl.innerHTML = createHeader();
  }

  if (footerEl) {
    footerEl.innerHTML = createFooter();
  }

  initNavigation();
  populateSectionLinks();
}

document.addEventListener('DOMContentLoaded', initPage);
