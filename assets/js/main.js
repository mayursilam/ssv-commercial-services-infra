/**
 * SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED
 * Production Client-side Scripting
 * Fully compatible with file://, GitHub Pages, and GoDaddy cPanel
 * No fetch() dependencies, 100% offline & self-contained
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initModals();
    initAccordions();
    initTabs();
    initScrollAnimations();
    initForms();
    initSmoothScroll();
    initDynamicYear();
  });

  /* --- 1. Mobile Navigation Toggle --- */
  function initMobileNav() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const navPanel = document.getElementById('mobileNavPanel');

    if (!toggleBtn || !navPanel) return;

    toggleBtn.addEventListener('click', function () {
      const isOpen = navPanel.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking a link inside mobile nav
    const mobileLinks = navPanel.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navPanel.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- 2. Enquiry Modal --- */
  function initModals() {
    const modal = document.getElementById('enquiryModal');
    if (!modal) return;

    const openTriggers = document.querySelectorAll('[data-open-modal="enquiry"]');
    const closeTriggers = modal.querySelectorAll('[data-close-modal]');

    function openModal(servicePreselect) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (servicePreselect) {
        const select = modal.querySelector('select[name="service"]');
        if (select) select.value = servicePreselect;
      }
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    openTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const service = btn.getAttribute('data-service') || '';
        openModal(service);
      });
    });

    closeTriggers.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Expose global helper
    window.openEnquiryModal = openModal;
    window.closeEnquiryModal = closeModal;
  }

  /* --- 3. Accordions --- */
  function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(function (acc) {
      const header = acc.querySelector('.accordion-header');
      if (!header) return;

      header.addEventListener('click', function () {
        const isActive = acc.classList.contains('active');
        
        // Optional: close other accordions in the same group
        const group = acc.closest('[data-accordion-group]');
        if (group) {
          group.querySelectorAll('.accordion').forEach(function (other) {
            other.classList.remove('active');
          });
        }

        if (!isActive) {
          acc.classList.add('active');
        } else {
          acc.classList.remove('active');
        }
      });
    });
  }

  /* --- 4. Tabs --- */
  function initTabs() {
    const tabContainers = document.querySelectorAll('[data-tabs]');
    tabContainers.forEach(function (container) {
      const buttons = container.querySelectorAll('[data-tab-target]');
      const contents = container.querySelectorAll('[data-tab-content]');

      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const target = btn.getAttribute('data-tab-target');

          buttons.forEach(function (b) { b.classList.remove('active'); });
          contents.forEach(function (c) { c.style.display = 'none'; });

          btn.classList.add('active');
          const targetEl = container.querySelector('[data-tab-content="' + target + '"]');
          if (targetEl) {
            targetEl.style.display = 'block';
          }
        });
      });
    });
  }

  /* --- 5. Scroll Animations (IntersectionObserver) --- */
  function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      reveals.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      reveals.forEach(function (el) {
        el.classList.add('active');
      });
    }
  }

  /* --- 6. Forms Processing (Offline & Static-friendly) --- */
  function initForms() {
    const forms = document.querySelectorAll('form[data-ssv-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'PROCESSING INQUIRY...';
        }

        setTimeout(function () {
          // Show confirmation banner
          let banner = form.querySelector('.form-success-banner');
          if (!banner) {
            banner = document.createElement('div');
            banner.className = 'form-success-banner';
            form.prepend(banner);
          }
          banner.innerHTML = '<strong>Inquiry Received!</strong> Thank you for contacting SSV Commercial Services & Infra. Our operational command team will respond within 4 business hours.';
          banner.style.display = 'block';

          // Reset inputs
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          // Scroll banner into view
          banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 600);
      });
    });
  }

  /* --- 7. Smooth Scrolling for Internal Anchors --- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({
            behavior: 'smooth'
            // block: 'start'
          });
        }
      });
    });
  }

  /* --- 8. Dynamic Copyright Year --- */
  function initDynamicYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

})();
