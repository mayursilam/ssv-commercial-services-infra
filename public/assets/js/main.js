/**
 * SSV Commercial Services & Infra Private Limited
 * Vanilla JavaScript Engine for Static Multi-Page Website
 * 100% Self-Contained, zero external runtime dependencies, works on file://
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initServicesDropdown();
  initIndustryFilters();
  initHeaderScroll();
});

/**
 * 1. Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navPanel = document.getElementById('mobile-nav-panel');

  if (!toggleBtn || !navPanel) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navPanel.classList.contains('open');
    if (isOpen) {
      navPanel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      navPanel.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if (navPanel.classList.contains('open') && !navPanel.contains(e.target) && !toggleBtn.contains(e.target)) {
      navPanel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 2. Services Dropdown (Desktop Hover & Click)
 */
function initServicesDropdown() {
  const dropdownContainers = document.querySelectorAll('.nav-dropdown');

  dropdownContainers.forEach((container) => {
    const toggle = container.querySelector('.dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isActive = container.classList.contains('active-open');
      
      // Close other dropdowns
      dropdownContainers.forEach(c => c.classList.remove('active-open'));

      if (!isActive) {
        container.classList.add('active-open');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    dropdownContainers.forEach((container) => {
      if (!container.contains(e.target)) {
        container.classList.remove('active-open');
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownContainers.forEach(c => c.classList.remove('active-open'));
      const mobileNav = document.getElementById('mobile-nav-panel');
      if (mobileNav) mobileNav.classList.remove('open');
    }
  });
}

/**
 * 3. Industry Category Tabs Filtering
 */
function initIndustryFilters() {
  const filterBar = document.getElementById('industry-filter-bar');
  const cardsGrid = document.getElementById('industry-cards-grid');

  if (!filterBar || !cardsGrid) return;

  const buttons = filterBar.querySelectorAll('.tab-btn');
  const cards = cardsGrid.querySelectorAll('.industry-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * 4. Header Scroll State
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
