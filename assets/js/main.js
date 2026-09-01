/**
 * SSV Commercial Services & Infra Private Limited
 * Vanilla JavaScript Engine for Static Multi-Page Website
 * 100% Self-Contained, zero external runtime dependencies, works on file://, GitHub Pages, and HTTP/HTTPS
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
  const navDrawer = document.getElementById('mobile-menu') || document.getElementById('mobile-nav-panel');

  if (!toggleBtn || !navDrawer) return;

  const iconOpen = toggleBtn.querySelector('.icon-open');
  const iconClose = toggleBtn.querySelector('.icon-close');

  function openMenu() {
    navDrawer.classList.remove('hidden');
    navDrawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (iconOpen && iconClose) {
      iconOpen.style.display = 'none';
      iconClose.style.display = 'inline-block';
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navDrawer.classList.add('hidden');
    navDrawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (iconOpen && iconClose) {
      iconOpen.style.display = 'inline-block';
      iconClose.style.display = 'none';
    }
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navDrawer.classList.contains('open') || !navDrawer.classList.contains('hidden');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any link inside drawer
  const drawerLinks = navDrawer.querySelectorAll('a');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navDrawer.classList.contains('hidden') && !navDrawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

/**
 * 2. Services Dropdown Menu (Desktop Hover & Click Support)
 */
function initServicesDropdown() {
  const dropdownWrappers = document.querySelectorAll('.nav-dropdown-wrapper, .nav-dropdown, #services-dropdown-container');

  dropdownWrappers.forEach((wrapper) => {
    const trigger = wrapper.querySelector('.dropdown-trigger, .dropdown-toggle, a');
    if (!trigger) return;

    // Support click on touch devices
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) return; // on mobile, navigation is handled in drawer
      const menu = wrapper.querySelector('.dropdown-menu, .services-dropdown-panel');
      if (menu) {
        // Toggle on click
        const isOpen = wrapper.classList.contains('active-open');
        dropdownWrappers.forEach(w => w.classList.remove('active-open'));
        if (!isOpen) {
          wrapper.classList.add('active-open');
        }
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    dropdownWrappers.forEach((wrapper) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('active-open');
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownWrappers.forEach(w => w.classList.remove('active-open'));
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
  const cards = cardsGrid.querySelectorAll('.industry-card, .industry-detail-card');

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
          card.style.display = '';
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Header Scroll State
 */
function initHeaderScroll() {
  const header = document.getElementById('main-header') || document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}
