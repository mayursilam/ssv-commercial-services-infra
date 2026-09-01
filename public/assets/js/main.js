// SSV Commercial Services & Infra - Interactive Client Scripts
document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Static Form Handler
  const contactForms = document.querySelectorAll('form');
  contactForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
        submitBtn.setAttribute('disabled', 'true');
      }
      setTimeout(() => {
        form.innerHTML = `
          <div style="text-align:center; padding: 2.5rem 1rem; color: #FFFFFF;">
            <div style="width: 54px; height: 54px; border-radius: 50%; border: 2px solid #C0122A; color: #C0122A; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 1.5rem; font-weight: bold;">âœ“</div>
            <h3 style="font-size: 1.25rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.5rem;">Requirement Registered</h3>
            <p style="font-size: 0.875rem; color: #CBD5E1; max-width: 420px; margin: 0 auto 1.5rem; line-height: 1.5;">Thank you. Your request has been transmitted to SSV Commercial Services & Infra Private Limited. Our Dharashiv operations supervisor will contact you shortly.</p>
            <a href="https://wa.me/918669005122" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background-color: #25D366; color: #000; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; border-radius: 2px; text-decoration: none;">Chat on WhatsApp</a>
          </div>
        `;
      }, 500);
    });
  });
});
