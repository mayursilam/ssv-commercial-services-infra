const fs = require('fs');
const path = require('path');

// Helper to generate the common HTML shell
function renderPage({
  title,
  description,
  activeNav,
  pageContent
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <!-- Top Bar -->
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-links">
        <a href="tel:+918669005122">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +91 86690 05122
        </a>
        <a href="mailto:ssvsecservices@gmail.com" class="hidden-mobile">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          ssvsecservices@gmail.com
        </a>
      </div>
      <div style="font-size: 0.75rem; font-weight: 700; color: #848A99; letter-spacing: 0.05em; text-transform: uppercase;">
        Dharashiv, Maharashtra • 24/7 Operational Command
      </div>
    </div>
  </div>

  <!-- Main Site Header -->
  <header class="site-header">
    <div class="container header-main">
      <!-- Brand Logo -->
      <a href="index.html" class="brand-logo" id="brandLogoLink">
        <img src="assets/logo/ssv-logo.svg" alt="SSV Commercial Services & Infra Logo" width="240" height="52">
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop" aria-label="Main Navigation">
        <ul class="nav-list">
          <li><a href="index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="about.html" class="nav-link ${activeNav === 'about' ? 'active' : ''}">About SSV</a></li>
          <li><a href="services.html" class="nav-link ${activeNav === 'services' ? 'active' : ''}">Services</a></li>
          <li><a href="security.html" class="nav-link ${activeNav === 'security' ? 'active' : ''}">Security</a></li>
          <li><a href="housekeeping.html" class="nav-link ${activeNav === 'housekeeping' ? 'active' : ''}">Housekeeping</a></li>
          <li><a href="infrastructure.html" class="nav-link ${activeNav === 'infra' ? 'active' : ''}">Infra</a></li>
          <li><a href="industries.html" class="nav-link ${activeNav === 'industries' ? 'active' : ''}">Industries</a></li>
          <li><a href="why-ssv.html" class="nav-link ${activeNav === 'why-ssv' ? 'active' : ''}">Why SSV</a></li>
          <li><a href="contact.html" class="nav-link ${activeNav === 'contact' ? 'active' : ''}">Contact</a></li>
        </ul>
      </nav>

      <!-- Header CTA Button -->
      <div class="header-cta">
        <button type="button" class="btn btn-primary" data-open-modal="enquiry">
          REQUEST QUOTE
        </button>
      </div>

      <!-- Mobile Menu Hamburger Button -->
      <button type="button" class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Nav Panel -->
    <div class="mobile-nav-panel" id="mobileNavPanel">
      <ul class="mobile-nav-list">
        <li><a href="index.html" class="mobile-nav-link ${activeNav === 'home' ? 'active' : ''}">Home</a></li>
        <li><a href="about.html" class="mobile-nav-link ${activeNav === 'about' ? 'active' : ''}">About SSV</a></li>
        <li><a href="services.html" class="mobile-nav-link ${activeNav === 'services' ? 'active' : ''}">All Services</a></li>
        <li><a href="security.html" class="mobile-nav-link ${activeNav === 'security' ? 'active' : ''}">Security Services</a></li>
        <li><a href="housekeeping.html" class="mobile-nav-link ${activeNav === 'housekeeping' ? 'active' : ''}">Housekeeping Services</a></li>
        <li><a href="infrastructure.html" class="mobile-nav-link ${activeNav === 'infra' ? 'active' : ''}">Infra & Civil Services</a></li>
        <li><a href="industries.html" class="mobile-nav-link ${activeNav === 'industries' ? 'active' : ''}">Industries Served</a></li>
        <li><a href="why-ssv.html" class="mobile-nav-link ${activeNav === 'why-ssv' ? 'active' : ''}">Why Choose SSV</a></li>
        <li><a href="contact.html" class="mobile-nav-link ${activeNav === 'contact' ? 'active' : ''}">Contact Us</a></li>
      </ul>
      <div class="mobile-nav-cta">
        <button type="button" class="btn btn-primary btn-block" data-open-modal="enquiry">
          REQUEST A PROPOSAL
        </button>
      </div>
    </div>
  </header>

  <!-- Page Main Content -->
  <main>
    ${pageContent}
  </main>

  <!-- Global Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand Info -->
        <div class="footer-col">
          <div style="margin-bottom: 1.25rem;">
            <img src="assets/logo/ssv-logo.svg" alt="SSV Commercial Services & Infra" width="220" height="48" style="filter: brightness(0) invert(1);">
          </div>
          <p style="font-size: 0.875rem; color: #94A3B8; margin-bottom: 1rem; line-height: 1.6;">
            <strong>SSV COMMERCIAL SERVICES & INFRA PRIVATE LIMITED</strong> provides professional security, housekeeping, and infrastructure solutions for commercial, residential, and industrial environments across Maharashtra.
          </p>
          <div style="font-size: 0.8125rem; color: #CBD5E1; line-height: 1.6;">
            <strong>Operational HQ:</strong><br>
            Chhatrapati Sambhaji Maharaj Nagar,<br>
            Behind DIC Office, Dharashiv, Maharashtra - 413501
          </div>
        </div>

        <!-- Col 2: Core Pillars -->
        <div class="footer-col">
          <h4>Core Pillars</h4>
          <div class="footer-links">
            <a href="security.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              Security Services
            </a>
            <a href="housekeeping.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              Housekeeping Services
            </a>
            <a href="infrastructure.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              Infra & Civil Projects
            </a>
            <a href="services.html">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              Integrated Facility Solutions
            </a>
          </div>
        </div>

        <!-- Col 3: Quick Navigation -->
        <div class="footer-col">
          <h4>Company Links</h4>
          <div class="footer-links">
            <a href="about.html">About SSV</a>
            <a href="industries.html">Industries Served</a>
            <a href="why-ssv.html">Why SSV Advantage</a>
            <a href="contact.html">Contact & Headquarters</a>
            <a href="#" data-open-modal="enquiry">Request Quote</a>
          </div>
        </div>

        <!-- Col 4: 24/7 Command -->
        <div class="footer-col">
          <h4>24/7 Support & Command</h4>
          <p style="font-size: 0.8125rem; color: #94A3B8; margin-bottom: 1rem;">
            Direct phone lines and prompt operational response for commercial facilities.
          </p>
          <div style="margin-bottom: 0.75rem;">
            <a href="tel:+918669005122" class="btn btn-primary btn-sm btn-block">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              CALL: +91 86690 05122
            </a>
          </div>
          <div>
            <a href="https://wa.me/918669005122" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm btn-block">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              WHATSAPP INQUIRY
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div>
          &copy; <span id="currentYear">2026</span> SSV Commercial Services & Infra Private Limited. All rights reserved.
        </div>
        <div style="font-size: 0.75rem; color: #64748B;">
          ISO Compliant Protocols • Vetted & Trained Personnel • Fully Licensed Operations
        </div>
      </div>
    </div>
  </footer>

  <!-- Sticky Mobile Action Bar -->
  <div class="mobile-action-bar" id="mobileActionBar">
    <a href="tel:+918669005122" class="mobile-action-btn call-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Call
    </a>
    <a href="https://wa.me/918669005122?text=Hello%20SSV%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" class="mobile-action-btn whatsapp-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      WhatsApp
    </a>
    <button type="button" class="mobile-action-btn enquire-btn" data-open-modal="enquiry">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      Enquire
    </button>
  </div>

  <!-- Enquiry Modal Popup -->
  <div class="modal-overlay" id="enquiryModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modalTitle">Request Service Proposal</h3>
        <button type="button" class="modal-close" data-close-modal aria-label="Close dialog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="modal-body">
        <p style="font-size: 0.875rem; color: #5A6273; margin-bottom: 1.25rem;">
          Fill out the brief requirements below. Our operational command team will analyze your site and respond with a formal quote within 4 hours.
        </p>
        <form data-ssv-form id="modalEnquiryForm">
          <div class="form-group">
            <label class="form-label" for="mName">Full Name *</label>
            <input type="text" id="mName" name="name" class="form-control" placeholder="Enter your name" required>
          </div>
          <div class="grid-2" style="gap: 1rem; margin-bottom: 0;">
            <div class="form-group">
              <label class="form-label" for="mPhone">Phone Number *</label>
              <input type="tel" id="mPhone" name="phone" class="form-control" placeholder="+91 98765 43210" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="mEmail">Work Email</label>
              <input type="email" id="mEmail" name="email" class="form-control" placeholder="name@company.com">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="mService">Service Requirement *</label>
            <select id="mService" name="service" class="form-control" required>
              <option value="">Select Service Category</option>
              <option value="Security Services">Security Services (Manned Guarding / CCTV / Access)</option>
              <option value="Housekeeping Services">Housekeeping & Sanitization Services</option>
              <option value="Infra Services">Infrastructure, Utility Shifting & Road Construction</option>
              <option value="Integrated Solution">Integrated Total Facility Package</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="mLocation">Site Location / City</label>
            <input type="text" id="mLocation" name="location" class="form-control" placeholder="e.g., Dharashiv, Pune, Solapur, Aurangabad">
          </div>
          <div class="form-group">
            <label class="form-label" for="mMessage">Brief Requirement Details</label>
            <textarea id="mMessage" name="message" class="form-control" placeholder="Describe facility size, number of guards, or civil work scope..."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 0.5rem;">
            SUBMIT REQUIREMENT
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Local Script -->
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

module.exports = { renderPage };
