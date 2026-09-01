const fs = require('fs');
const path = require('path');
const { renderPage } = require('./render-helper.cjs');

// --- 1. INDEX.HTML ---
const homeContent = `
  <!-- Hero Section -->
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.82)), url('assets/images/hero.jpg'); background-size: cover; background-position: center;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.25); border: 1px solid rgba(192, 18, 42, 0.5); padding: 0.35rem 0.85rem; border-radius: 2px;">
        TOTAL INTEGRATED FACILITY &amp; INFRASTRUCTURE MANAGEMENT
      </span>
      <h1 class="hero-title" style="margin-top: 1rem; color: #FFFFFF;">
        ENSURING SAFETY, DELIVERING EXCELLENCE.
      </h1>
      <p class="hero-desc">
        SSV Commercial Services &amp; Infra Private Limited delivers professional security, hospital-grade housekeeping, and turnkey civil infrastructure solutions for commercial, residential, and industrial environments across Maharashtra.
      </p>
      <div class="hero-actions">
        <a href="services.html" class="btn btn-primary btn-lg">EXPLORE SERVICES</a>
        <a href="contact.html" class="btn btn-outline btn-lg">GET IN TOUCH</a>
        <button type="button" class="btn btn-white btn-lg" data-open-modal="enquiry">REQUEST A QUOTE</button>
      </div>
    </div>
  </section>

  <!-- Quick Stats Bar -->
  <section class="quick-stats-bar">
    <div class="container">
      <div class="grid-4" style="gap: 1rem;">
        <div class="stat-item">
          <div class="stat-number">24<span>/7</span></div>
          <div class="stat-label">Operational Command</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">100<span>%</span></div>
          <div class="stat-label">Statutory Compliance</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">3<span>+</span></div>
          <div class="stat-label">Core Specializations</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">4<span>hrs</span></div>
          <div class="stat-label">Rapid SLA Response</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 Core Pillars Section -->
  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">OUR CORE DIVISIONS</span>
        <h2>INTEGRATED OPERATIONAL CAPABILITIES</h2>
        <p>Three specialized divisions working under a synchronized command structure to keep your premises secure, pristine, and structurally optimized.</p>
      </div>

      <div class="grid-3" style="gap: 2rem;">
        <!-- Pillar 1: Security -->
        <div class="card card-top-red reveal">
          <div class="card-image-wrap">
            <img src="assets/images/security.jpg" alt="Security Guarding Services">
            <span class="card-badge">Pillar 01</span>
          </div>
          <h3>SECURITY SERVICES</h3>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">
            Professional physical protection, vigilant 24/7 manned guarding, electronic CCTV surveillance, and strict access control systems.
          </p>
          <div class="feature-list">
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Vetted &amp; Uniformed Manned Guarding</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Corporate Access &amp; Visitor Management</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>CCTV Monitoring &amp; Fire Safety Response</span>
            </div>
          </div>
          <div style="margin-top: auto; padding-top: 1rem;">
            <a href="security.html" class="btn btn-outline-dark btn-block">EXPLORE SECURITY &rarr;</a>
          </div>
        </div>

        <!-- Pillar 2: Housekeeping -->
        <div class="card card-top-navy reveal">
          <div class="card-image-wrap">
            <img src="assets/images/housekeeping.jpg" alt="Housekeeping and Sanitization">
            <span class="card-badge" style="background: #001423;">Pillar 02</span>
          </div>
          <h3>HOUSEKEEPING SERVICES</h3>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">
            Systematic hygiene management, mechanized commercial scrubbing, industrial plant cleaning, and eco-friendly deep sanitization.
          </p>
          <div class="feature-list">
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Mechanized Commercial &amp; Domestic Cleaning</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Industrial Floor Degreasing &amp; Maintenance</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Eco-Friendly Sanitization &amp; Waste Management</span>
            </div>
          </div>
          <div style="margin-top: auto; padding-top: 1rem;">
            <a href="housekeeping.html" class="btn btn-outline-dark btn-block">EXPLORE HOUSEKEEPING &rarr;</a>
          </div>
        </div>

        <!-- Pillar 3: Infrastructure -->
        <div class="card card-top-red reveal">
          <div class="card-image-wrap">
            <img src="assets/images/engineering.jpg" alt="Turnkey Civil and Infrastructure Projects">
            <span class="card-badge">Pillar 03</span>
          </div>
          <h3>INFRA SERVICES</h3>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">
            Turnkey civil works, municipal utility shifting, industrial road construction, and specialized site development with certified heavy machinery.
          </p>
          <div class="feature-list">
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Turnkey Civil &amp; Structural Projects</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Underground Cable &amp; Pipe Utility Shifting</span>
            </div>
            <div class="feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Heavy Bituminous &amp; Concrete Road Paving</span>
            </div>
          </div>
          <div style="margin-top: auto; padding-top: 1rem;">
            <a href="infrastructure.html" class="btn btn-outline-dark btn-block">EXPLORE INFRASTRUCTURE &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Corporate Profile Overview -->
  <section class="section-py bg-white">
    <div class="container">
      <div class="grid-2" style="align-items: center; gap: 3.5rem;">
        <div class="reveal">
          <span class="eyebrow">ABOUT SSV</span>
          <h2>THE PEOPLE, SYSTEMS AND INFRASTRUCTURE BEHIND BETTER SPACES</h2>
          <p style="line-height: 1.7; font-size: 1.05rem;">
            SSV Commercial Services &amp; Infra Private Limited was established to bridge the gap between standard labor outsourcing and high-governance facility operations. We combine disciplined manpower with mechanized workflows and strict supervisory oversight.
          </p>
          <p style="line-height: 1.7;">
            Headquartered in Dharashiv, Maharashtra, our service network serves corporate business parks, industrial manufacturing plants, residential townships, and civil infrastructure developments with unyielding dedication to safety and quality.
          </p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="about.html" class="btn btn-primary">COMPANY PROFILE &rarr;</a>
            <a href="why-ssv.html" class="btn btn-outline-dark">OUR ADVANTAGE</a>
          </div>
        </div>
        <div class="reveal">
          <div style="position: relative; border: 1px solid #E2E8F0; padding: 0.5rem; background: #FFF; box-shadow: 0 10px 30px rgba(0,20,35,0.08);">
            <img src="assets/images/team.jpg" alt="SSV Operations Command Team" class="img-cover" style="height: 380px; width: 100%;">
            <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; background: #001423; color: #FFF; padding: 1rem 1.5rem; border-left: 4px solid #C0122A;">
              <div style="font-weight: 800; font-size: 1.1rem; text-transform: uppercase;">ISO &amp; STATUTORY COMPLIANT</div>
              <div style="font-size: 0.75rem; color: #848A99;">Trained • Verified • Supervised Personnel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Industries Grid Highlight -->
  <section class="section-py bg-navy">
    <div class="container">
      <div class="section-header section-header-dark reveal">
        <span class="eyebrow eyebrow-dark">SECTORS WE SERVE</span>
        <h2>CUSTOMIZED DOMAIN EXPERTISE</h2>
        <p>From high-security IT parks and sterile healthcare centers to active civil construction sites, we adapt to distinct operational standards.</p>
      </div>

      <div class="grid-3" style="gap: 1.5rem;">
        <div class="card card-navy reveal">
          <h4>Commercial &amp; IT Parks</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Lobby concierge security, turnstile access systems, mechanized lobby cleaning, and after-hours security patrols.</p>
          <a href="industries.html#commercial" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
        <div class="card card-navy reveal">
          <h4>Industrial Plants &amp; Factories</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Perimeter gate checks, material movement logging, plant floor oil degreasing, and heavy machinery security watch.</p>
          <a href="industries.html#industrial" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
        <div class="card card-navy reveal">
          <h4>Residential Societies</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Gated community security, visitor vehicle tracking, clubhouse upkeep, and basement pressure washing.</p>
          <a href="industries.html#residential" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
        <div class="card card-navy reveal">
          <h4>Healthcare &amp; Hospitals</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Stringent hospital-grade disinfection, infection control protocols, and rapid emergency gate clearance.</p>
          <a href="industries.html#healthcare" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
        <div class="card card-navy reveal">
          <h4>Retail Malls &amp; Hospitality</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">High-footfall crowd control, continuous floor scrubbing, loss prevention, and luxury concierge services.</p>
          <a href="industries.html#retail" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
        <div class="card card-navy reveal">
          <h4>Civil &amp; Construction Sites</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Material anti-theft watch, heavy machinery safety escort, precision utility shifting, and road connectivity.</p>
          <a href="industries.html#construction" style="color: #F87171; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; margin-top: 1rem; display: inline-block;">Learn More &rarr;</a>
        </div>
      </div>

      <div style="text-align: center; margin-top: 2.5rem;">
        <a href="industries.html" class="btn btn-outline">VIEW ALL 9 INDUSTRY DOMAINS &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 5-Step Process Section -->
  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">METHODICAL EXECUTION</span>
        <h2>OUR 5-STAGE OPERATIONAL ROADMAP</h2>
        <p>Every facility engagement follows a disciplined, audited lifecycle from initial vulnerability assessment to continuous optimization.</p>
      </div>

      <div class="grid-3" style="gap: 1.5rem;">
        <div class="process-step reveal">
          <div class="step-num">01</div>
          <div class="step-title">UNDERSTAND</div>
          <p style="font-size: 0.875rem;">Comprehensive site reconnaissance, risk profiling, traffic analysis, and hygiene pain-point mapping.</p>
        </div>
        <div class="process-step reveal">
          <div class="step-num">02</div>
          <div class="step-title">PLAN</div>
          <p style="font-size: 0.875rem;">Custom SOP engineering, guard deployment rosters, cleaning frequency tables, and material schedules.</p>
        </div>
        <div class="process-step reveal">
          <div class="step-num">03</div>
          <div class="step-title">DEPLOY</div>
          <p style="font-size: 0.875rem;">Induction of vetted, uniformed personnel, placement of modern machinery, and logbook establishment.</p>
        </div>
        <div class="process-step reveal">
          <div class="step-num">04</div>
          <div class="step-title">MANAGE</div>
          <p style="font-size: 0.875rem;">Active on-ground field supervision, surprise night inspections, SLA audits, and daily attendance logging.</p>
        </div>
        <div class="process-step reveal">
          <div class="step-num">05</div>
          <div class="step-title">IMPROVE</div>
          <p style="font-size: 0.875rem;">Monthly SLA reviews with client leadership, customer feedback loops, and proactive security adjustments.</p>
        </div>
        <div class="process-step reveal" style="background: #001423; color: #FFF; border-color: #001423; display: flex; flex-direction: column; justify-content: center;">
          <h4 style="color: #FFF; text-transform: uppercase;">READY TO DEPLOY?</h4>
          <p style="color: #94A3B8; font-size: 0.875rem; margin: 0.5rem 0 1rem;">Get an audited deployment plan customized for your premises.</p>
          <button type="button" class="btn btn-primary btn-sm" data-open-modal="enquiry">START FREE SITE AUDIT</button>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="section-py bg-red" style="background: linear-gradient(135deg, #C0122A 0%, #990E21 100%);">
    <div class="container" style="text-align: center;">
      <h2 style="color: #FFF; text-transform: uppercase; margin-bottom: 1rem;">EXPERIENCE THE SSV SERVICE STANDARD</h2>
      <p style="color: #FEECEF; max-width: 700px; margin: 0 auto 2rem; font-size: 1.1rem;">
        Speak directly with our operational coordinators to discuss security deployments, facility housekeeping rosters, or turnkey civil infrastructure tenders.
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="tel:+918669005122" class="btn btn-white btn-lg">CALL +91 86690 05122</a>
        <button type="button" class="btn btn-outline btn-lg" data-open-modal="enquiry">REQUEST DETAILED PROPOSAL</button>
      </div>
    </div>
  </section>
`;

// --- 2. ABOUT.HTML ---
const aboutContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/team.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        CORPORATE PROFILE &amp; ETHOS
      </span>
      <h1 class="hero-title" style="color: #FFF;">ABOUT SSV COMMERCIAL SERVICES &amp; INFRA</h1>
      <p class="hero-desc">
        Delivering high-governance security guarding, mechanized housekeeping, and resilient civil infrastructure solutions designed to support safer, cleaner, and better-managed environments.
      </p>
    </div>
  </section>

  <section class="section-py bg-white">
    <div class="container">
      <div class="grid-2" style="align-items: center; gap: 3.5rem;">
        <div>
          <span class="eyebrow">WHO WE ARE</span>
          <h2>SAFETY AND RELIABILITY AS FUNDAMENTAL OPERATIONAL PILLARS</h2>
          <p style="line-height: 1.7; font-size: 1.05rem;">
            SSV Commercial Services &amp; Infra Private Limited was formed with a singular objective: to elevate the standard of commercial facility management and civil infrastructure execution in India.
          </p>
          <p style="line-height: 1.7;">
            We operate across three core business domains: Security Services (manned guarding, surveillance, and access control), Housekeeping Services (mechanized commercial cleaning, deep sanitization, and waste management), and Infrastructure Services (turnkey civil construction, municipal utility shifting, and heavy road construction).
          </p>
          <p style="line-height: 1.7;">
            Headquartered at Chhatrapati Sambhaji Maharaj Nagar, Behind DIC Office, Dharashiv, Maharashtra, we manage operations with round-the-clock supervisor responsiveness, digital log systems, and comprehensive statutory labor compliance.
          </p>
        </div>
        <div>
          <img src="assets/images/team.jpg" alt="SSV Operations Command" style="width: 100%; border: 1px solid #E2E8F0; box-shadow: var(--shadow-card);">
        </div>
      </div>
    </div>
  </section>

  <!-- Mission & Vision -->
  <section class="section-py bg-light border-top border-bottom">
    <div class="container">
      <div class="grid-2" style="gap: 2rem;">
        <div class="card card-top-red">
          <span class="eyebrow">OUR MISSION</span>
          <h3>DELIVERING EXCELLENCE &amp; RELIABILITY</h3>
          <p style="line-height: 1.7; margin-top: 0.5rem;">
            To create safe, hygienic, and structurally resilient environments through customer-centric service, rigorously trained personnel, advanced equipment, and disciplined operational execution that elevates the everyday well-being of the communities and enterprises we serve.
          </p>
        </div>
        <div class="card card-top-navy">
          <span class="eyebrow" style="color: #001423;">OUR VISION</span>
          <h3>TRUSTED REGIONAL BENCHMARK</h3>
          <p style="line-height: 1.7; margin-top: 0.5rem;">
            To be recognized as Maharashtra's most trusted commercial services and civil infrastructure partner, distinguished by unwavering integrity, operational transparency, rapid emergency response, and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Statutory & Governance -->
  <section class="section-py bg-white">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">GOVERNANCE &amp; COMPLIANCE</span>
        <h2>RIGOROUS STATUTORY STANDARDS</h2>
        <p>We believe dependable operations rest upon transparent legal compliance, strict labor governance, and audited site safety.</p>
      </div>

      <div class="grid-3" style="gap: 1.5rem;">
        <div class="card">
          <h4>100% Statutory Labor Compliance</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Strict adherence to minimum wages, PF (Provident Fund), ESIC (Employee State Insurance), Gratuity, and worker insurance policies.</p>
        </div>
        <div class="card">
          <h4>Vetted &amp; Background-Checked Staff</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Mandatory police verification, Aadhaar authentication, residential address confirmation, and formal health checkups for every team member.</p>
        </div>
        <div class="card">
          <h4>Continuous Protocol Training</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Structured module training covering fire evacuation, first aid, customer etiquette, mechanized equipment handling, and emergency escalation.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Action -->
  <section class="section-py-sm bg-navy text-white">
    <div class="container flex justify-between items-center" style="flex-wrap: wrap; gap: 1.5rem;">
      <div>
        <h3 style="color: #FFF;">PARTNER WITH SSV FOR YOUR FACILITY</h3>
        <p style="color: #94A3B8; margin: 0;">Speak directly with our senior operations team to schedule an on-site evaluation.</p>
      </div>
      <div>
        <a href="contact.html" class="btn btn-primary btn-lg">CONTACT US TODAY</a>
      </div>
    </div>
  </section>
`;

// --- 3. SERVICES.HTML ---
const servicesContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/hero.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        TOTAL INTEGRATED SOLUTIONS
      </span>
      <h1 class="hero-title" style="color: #FFF;">OUR COMPLETE SERVICE PORTFOLIO</h1>
      <p class="hero-desc">
        Comprehensive physical security, hospital-grade housekeeping, and turnkey civil infrastructure execution under a unified management umbrella.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">COMPREHENSIVE CAPABILITIES</span>
        <h2>THREE SPECIALIZED DIVISIONS, ONE UNIFIED STANDARD</h2>
        <p>Explore our full range of solutions designed to protect assets, ensure spotless sanitation, and construct durable civil connectivity.</p>
      </div>

      <!-- Division 1: Security -->
      <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 2.5rem; margin-bottom: 3rem; border-top: 4px solid #C0122A;">
        <div class="grid-2" style="align-items: center; gap: 2.5rem;">
          <div>
            <span class="eyebrow">DIVISION 01</span>
            <h2 style="font-size: 2rem;">SECURITY &amp; SURVEILLANCE SERVICES</h2>
            <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Vigilant on-ground guarding, specialized corporate concierge security, active CCTV video surveillance, access control, and emergency fire evacuation teams.
            </p>
            <ul class="feature-list" style="margin-bottom: 1.5rem;">
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>24/7 Manned Guarding &amp; Patrol Units</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Corporate Reception &amp; Turnstile Management</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Command Center Electronic Video Surveillance</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Fire Safety Drills &amp; Rapid Response Drills</span></li>
            </ul>
            <a href="security.html" class="btn btn-primary">VIEW ALL SECURITY MODULES &rarr;</a>
          </div>
          <div>
            <img src="assets/images/security.jpg" alt="Security Guarding" style="width: 100%; border: 1px solid #CBD5E1;">
          </div>
        </div>
      </div>

      <!-- Division 2: Housekeeping -->
      <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 2.5rem; margin-bottom: 3rem; border-top: 4px solid #001423;">
        <div class="grid-2" style="align-items: center; gap: 2.5rem;">
          <div>
            <span class="eyebrow" style="color: #001423;">DIVISION 02</span>
            <h2 style="font-size: 2rem;">HOUSEKEEPING &amp; HYGIENE SERVICES</h2>
            <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Hospital-grade deep disinfection, mechanized corporate scrubbing, heavy industrial plant maintenance, residential estate upkeep, and safe waste management.
            </p>
            <ul class="feature-list" style="margin-bottom: 1.5rem;">
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Mechanized Floor Scrubbing, Buffing &amp; Polishing</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Industrial Factory Floor Degreasing</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Eco-Friendly Disinfection &amp; Restroom Sanitation</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Integrated Solid Waste Segregation &amp; Disposal</span></li>
            </ul>
            <a href="housekeeping.html" class="btn btn-secondary">VIEW ALL HOUSEKEEPING MODULES &rarr;</a>
          </div>
          <div>
            <img src="assets/images/housekeeping.jpg" alt="Housekeeping Services" style="width: 100%; border: 1px solid #CBD5E1;">
          </div>
        </div>
      </div>

      <!-- Division 3: Infrastructure -->
      <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 2.5rem; border-top: 4px solid #C0122A;">
        <div class="grid-2" style="align-items: center; gap: 2.5rem;">
          <div>
            <span class="eyebrow">DIVISION 03</span>
            <h2 style="font-size: 2rem;">INFRASTRUCTURE &amp; CIVIL PROJECTS</h2>
            <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">
              Turnkey civil execution, municipal cable &amp; water pipeline utility shifting, heavy-duty asphalt and concrete road paving, and industrial site developments.
            </p>
            <ul class="feature-list" style="margin-bottom: 1.5rem;">
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Turnkey Civil Contracting &amp; Structural Works</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Underground Utility Trenching &amp; Cable Shifting</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Bituminous &amp; Concrete Road Paving &amp; Curbs</span></li>
              <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Specialized Industrial Perimeter Walls &amp; Grading</span></li>
            </ul>
            <a href="infrastructure.html" class="btn btn-primary">VIEW ALL INFRASTRUCTURE MODULES &rarr;</a>
          </div>
          <div>
            <img src="assets/images/engineering.jpg" alt="Civil Infrastructure" style="width: 100%; border: 1px solid #CBD5E1;">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Service Inquiries -->
  <section class="section-py bg-white">
    <div class="container text-center" style="max-width: 800px; margin: 0 auto; text-align: center;">
      <span class="eyebrow">CUSTOMIZED PACKAGING</span>
      <h2>NEED A TAILORED SERVICE PROPOSAL?</h2>
      <p style="margin-bottom: 2rem;">
        Whether you require a dedicated 50-guard security deployment, complete mechanized housekeeping for a corporate tower, or turnkey road paving, we prepare detailed milestone-driven proposals.
      </p>
      <button type="button" class="btn btn-primary btn-lg" data-open-modal="enquiry">REQUEST DETAILED ESTIMATE</button>
    </div>
  </section>
`;

// --- 4. SECURITY.HTML ---
const securityContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/security.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        CORE PILLAR 01
      </span>
      <h1 class="hero-title" style="color: #FFF;">PROFESSIONAL SECURITY &amp; SURVEILLANCE</h1>
      <p class="hero-desc">
        Disciplined, background-verified manned guarding, electronic CCTV monitoring, corporate access control, and proactive fire safety emergency readiness.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">SECURITY DIVISIONS</span>
        <h2>7 SPECIALIZED SECURITY MODULES</h2>
        <p>Tailored physical and technological protection frameworks designed for high-risk assets, corporate towers, and residential communities.</p>
      </div>

      <div class="grid-3" style="gap: 2rem;">
        <!-- 01: Manned Guarding -->
        <div class="card card-top-red" id="manned-guarding">
          <div class="card-image-wrap">
            <img src="assets/images/patrol.jpg" alt="Manned Guarding">
            <span class="card-badge">01</span>
          </div>
          <h4>Manned Guarding</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Disciplined, uniformed security guards trained in access control, patrol procedures, incident logging, and gatekeeping.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>24/7 Static &amp; roving patrols</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Police &amp; background verified</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Visitor &amp; vehicle registration</span></li>
          </ul>
        </div>

        <!-- 02: Corporate Security -->
        <div class="card card-top-red" id="corporate-security">
          <div class="card-image-wrap">
            <img src="assets/images/corporate.jpg" alt="Corporate Security">
            <span class="card-badge">02</span>
          </div>
          <h4>Corporate Security</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Specialized executive protection personnel tailored for corporate headquarters, tech parks, and commercial towers.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Front-desk concierge &amp; liaison</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Badge management &amp; turnstiles</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>After-hours floor security checks</span></li>
          </ul>
        </div>

        <!-- 03: Crowd Management -->
        <div class="card card-top-red" id="crowd-management">
          <div class="card-image-wrap">
            <img src="assets/images/team.jpg" alt="Crowd Management">
            <span class="card-badge">03</span>
          </div>
          <h4>Crowd Management &amp; Events</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Operational crowd management protocols designed to prevent bottlenecks, ensure structured queuing, and maintain public safety.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Perimeter barricade coordination</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Throughput optimization</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Emergency evacuation clearance</span></li>
          </ul>
        </div>

        <!-- 04: VIP Protection -->
        <div class="card card-top-red" id="vip-protection">
          <div class="card-image-wrap">
            <img src="assets/images/security.jpg" alt="VIP Protection">
            <span class="card-badge">04</span>
          </div>
          <h4>VIP &amp; Executive Protection</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Discreet personal protection officers trained in route surveying, close-quarter security escort, and risk avoidance.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Advance venue reconnaissance</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Close protection escort details</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Secure route planning</span></li>
          </ul>
        </div>

        <!-- 05: CCTV Surveillance -->
        <div class="card card-top-red" id="cctv-surveillance">
          <div class="card-image-wrap">
            <img src="assets/images/cctv.jpg" alt="CCTV Surveillance">
            <span class="card-badge">05</span>
          </div>
          <h4>CCTV Surveillance &amp; Control</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Centralized control-room monitoring and live video oversight to detect anomalies and perimeter breaches in real time.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>24/7 Command-center feeds</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Incident playback &amp; archiving</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Rapid dispatch alert triggers</span></li>
          </ul>
        </div>

        <!-- 06: Access Control -->
        <div class="card card-top-red" id="access-control">
          <div class="card-image-wrap">
            <img src="assets/images/corporate.jpg" alt="Access Control Systems">
            <span class="card-badge">06</span>
          </div>
          <h4>Access Control Systems</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Physical and electronic access enforcement restricting unauthorized entry, managing delivery vehicles, and securing restricted zones.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Biometric &amp; RFID validation</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Boom barrier &amp; gatepass systems</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Material in/out gate verification</span></li>
          </ul>
        </div>

        <!-- 07: Fire Safety -->
        <div class="card card-top-red" id="fire-safety">
          <div class="card-image-wrap">
            <img src="assets/images/hero.jpg" alt="Fire Safety and Emergency Response">
            <span class="card-badge">07</span>
          </div>
          <h4>Fire Safety &amp; Emergency</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Security officers trained in basic firefighting, emergency response drills, fire extinguisher operation, and rapid building evacuation.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>First-responder fire fighting</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Emergency evacuation drills</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Fire exit clearance inspections</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Security Audit CTA -->
  <section class="section-py bg-white text-center">
    <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
      <span class="eyebrow">VULNERABILITY AUDIT</span>
      <h2>SCHEDULE A COMPLIMENTARY SITE SECURITY AUDIT</h2>
      <p style="margin-bottom: 2rem;">Our security supervisors will inspect your perimeter, access points, and emergency routes to produce an actionable security deployment plan.</p>
      <button type="button" class="btn btn-primary btn-lg" data-open-modal="enquiry" data-service="Security Services">REQUEST SECURITY AUDIT</button>
    </div>
  </section>
`;

// --- 5. HOUSEKEEPING.HTML ---
const housekeepingContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/housekeeping.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        CORE PILLAR 02
      </span>
      <h1 class="hero-title" style="color: #FFF;">HOUSEKEEPING &amp; HYGIENE MANAGEMENT</h1>
      <p class="hero-desc">
        Mechanized commercial cleaning, factory floor degreasing, deep sanitization, residential society maintenance, and structured waste management.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">FACILITY HYGIENE</span>
        <h2>6 SPECIALIZED HOUSEKEEPING SOLUTIONS</h2>
        <p>We combine hospital-grade disinfectants, mechanized scrubbers, and trained cleaning technicians to maintain immaculate environments.</p>
      </div>

      <div class="grid-3" style="gap: 2rem;">
        <!-- 01: Commercial Cleaning -->
        <div class="card card-top-navy" id="commercial-cleaning">
          <div class="card-image-wrap">
            <img src="assets/images/commercialCleaning.jpg" alt="Commercial Cleaning">
            <span class="card-badge" style="background: #001423;">01</span>
          </div>
          <h4>Commercial &amp; Corporate Cleaning</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Systematic daily cleaning solutions for workspaces, common lobbies, corridors, executive suites, and corporate restrooms.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Mechanized surface scrubbing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Glass &amp; facade maintenance</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Restroom continuous sanitation</span></li>
          </ul>
        </div>

        <!-- 02: Industrial Cleaning -->
        <div class="card card-top-navy" id="industrial-cleaning">
          <div class="card-image-wrap">
            <img src="assets/images/industrialCleaning.jpg" alt="Industrial Cleaning">
            <span class="card-badge" style="background: #001423;">02</span>
          </div>
          <h4>Offices &amp; Industrial Factory Cleaning</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Heavy-duty cleaning for manufacturing plant floors, machine shops, warehouses, and engineering bays adhering to safety norms.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Oil &amp; grease degreasing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>High-truss dust extraction</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Industrial waste management</span></li>
          </ul>
        </div>

        <!-- 03: Residential Maintenance -->
        <div class="card card-top-navy" id="residential-maintenance">
          <div class="card-image-wrap">
            <img src="assets/images/residential.jpg" alt="Residential Society Maintenance">
            <span class="card-badge" style="background: #001423;">03</span>
          </div>
          <h4>Residential Society Maintenance</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Dedicated estate maintenance teams handling clubhouse facilities, shared stairwells, lifts, parking basements, and podium areas.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Basement pressure washing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Clubhouse &amp; gym sanitization</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Dedicated society rosters</span></li>
          </ul>
        </div>

        <!-- 04: Deep Sanitization -->
        <div class="card card-top-navy" id="deep-sanitization">
          <div class="card-image-wrap">
            <img src="assets/images/deepSanitization.jpg" alt="Deep Cleaning and Sanitization">
            <span class="card-badge" style="background: #001423;">04</span>
          </div>
          <h4>Deep Cleaning &amp; Sanitization</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Periodic deep cleaning programs utilizing certified eco-friendly disinfectants and high-pressure steam extraction for carpets and upholstery.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Hospital-grade surface disinfection</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Carpet shampooing &amp; steam clean</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Touchpoint antimicrobial treatment</span></li>
          </ul>
        </div>

        <!-- 05: Waste Management -->
        <div class="card card-top-navy" id="waste-management">
          <div class="card-image-wrap">
            <img src="assets/images/commercialCleaning.jpg" alt="Waste Management">
            <span class="card-badge" style="background: #001423;">05</span>
          </div>
          <h4>Structured Waste Management</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Solid waste management adhering to environmental norms, including color-coded source segregation and safe disposal pipelines.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Wet &amp; dry source segregation</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Garbage chute sanitation</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Compliant disposal handling</span></li>
          </ul>
        </div>

        <!-- 06: Pest Control -->
        <div class="card card-top-navy" id="pest-control">
          <div class="card-image-wrap">
            <img src="assets/images/deepSanitization.jpg" alt="Pest Control">
            <span class="card-badge" style="background: #001423;">06</span>
          </div>
          <h4>Pest Control Solutions</h4>
          <p style="font-size: 0.9rem; margin-top: 0.35rem;">
            Proactive inspection and application of approved, odor-free pest management treatments to protect premises from pests and termites.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Targeted gel &amp; spray applications</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Rodent baiting stations</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Non-toxic, certified chemicals</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Housekeeping Call to Action -->
  <section class="section-py bg-white text-center">
    <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
      <span class="eyebrow">SITE HYGIENE AUDIT</span>
      <h2>UPGRADE YOUR PREMISES TO SPOTLESS STANDARDS</h2>
      <p style="margin-bottom: 2rem;">Get in touch for a comprehensive cleaning assessment and tailored housekeeping staffing schedule.</p>
      <button type="button" class="btn btn-primary btn-lg" data-open-modal="enquiry" data-service="Housekeeping Services">REQUEST HOUSEKEEPING PROPOSAL</button>
    </div>
  </section>
`;

// --- 6. INFRASTRUCTURE.HTML ---
const infraContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/engineering.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        CORE PILLAR 03
      </span>
      <h1 class="hero-title" style="color: #FFF;">INFRASTRUCTURE &amp; CIVIL PROJECTS</h1>
      <p class="hero-desc">
        End-to-end turnkey civil construction, precision underground utility shifting, heavy asphalt and concrete road building, and specialized site works.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">ENGINEERED EXECUTION</span>
        <h2>4 SPECIALIZED INFRASTRUCTURE DIVISIONS</h2>
        <p>Executing mission-critical civil works across Maharashtra with engineering rigor, heavy equipment fleets, and strict milestone governance.</p>
      </div>

      <div class="grid-2" style="gap: 2rem;">
        <!-- 01: Turnkey Projects -->
        <div class="card card-top-red" id="turnkey-projects">
          <div class="card-image-wrap">
            <img src="assets/images/engineering.jpg" alt="Turnkey Civil Projects">
            <span class="card-badge">01</span>
          </div>
          <h4>Turnkey Civil Projects</h4>
          <p style="font-size: 0.95rem; margin-top: 0.35rem;">
            Comprehensive turnkey project delivery from initial site survey and planning to structural execution, procurement, quality assurance, and final handover.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Integrated civil &amp; structural engineering works</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Project milestone tracking &amp; critical path management</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Certified materials testing and safety compliance</span></li>
          </ul>
        </div>

        <!-- 02: Utility Shifting -->
        <div class="card card-top-red" id="utility-shifting">
          <div class="card-image-wrap">
            <img src="assets/images/utilityShifting.jpg" alt="Utility Shifting">
            <span class="card-badge">02</span>
          </div>
          <h4>Utility Shifting &amp; Diversion</h4>
          <p style="font-size: 0.95rem; margin-top: 0.35rem;">
            Safe and coordinated relocation of underground electrical conduits, telecom fiber cables, water supply pipelines, and drainage networks for highway and urban expansions.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>High-voltage underground cable trenching &amp; realignment</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Water &amp; sewage pipeline diversion without civilian disruption</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Liaison with municipal, power &amp; telecom departments</span></li>
          </ul>
        </div>

        <!-- 03: Road Construction -->
        <div class="card card-top-red" id="road-construction">
          <div class="card-image-wrap">
            <img src="assets/images/roadConstruction.jpg" alt="Road Construction">
            <span class="card-badge">03</span>
          </div>
          <h4>Road Construction &amp; Paving</h4>
          <p style="font-size: 0.95rem; margin-top: 0.35rem;">
            Construction and resurfacing of industrial access corridors, arterial roadways, heavy concrete pavements, and internal township roads engineered for heavy load cycles.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Sub-base grading, soil stabilization &amp; vibratory compaction</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Dense Bituminous Macadam (DBM) &amp; Concrete (PQC) paving</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Stormwater drainage gutters, road curbs &amp; retroreflective signage</span></li>
          </ul>
        </div>

        <!-- 04: Service Sector Solutions -->
        <div class="card card-top-red" id="service-sector-solutions">
          <div class="card-image-wrap">
            <img src="assets/images/urbanInfra.jpg" alt="Service Sector Solutions">
            <span class="card-badge">04</span>
          </div>
          <h4>Service Sector Solutions &amp; Site Works</h4>
          <p style="font-size: 0.95rem; margin-top: 0.35rem;">
            Targeted civil enhancements, perimeter boundary wall constructions, industrial concrete flooring, platform erection, and specialized infrastructure works.
          </p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Reinforced perimeter boundary walls &amp; high-security fencing</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Heavy industrial loading docks &amp; anti-abrasion flooring</span></li>
            <li class="feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Site leveling, grading &amp; stormwater retention planning</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Infra CTA -->
  <section class="section-py bg-white text-center">
    <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
      <span class="eyebrow">PROJECT ESTIMATION</span>
      <h2>HAVE AN ACTIVE CIVIL OR UTILITY TENDER?</h2>
      <p style="margin-bottom: 2rem;">Consult with our infrastructure engineers for technical drawings, BOQ review, and milestone execution schedules.</p>
      <button type="button" class="btn btn-primary btn-lg" data-open-modal="enquiry" data-service="Infra Services">SUBMIT PROJECT TENDER</button>
    </div>
  </section>
`;

// --- 7. INDUSTRIES.HTML ---
const industriesContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/commercialArch.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        SECTOR SPECIALIZATIONS
      </span>
      <h1 class="hero-title" style="color: #FFF;">INDUSTRIES &amp; DOMAINS WE SERVE</h1>
      <p class="hero-desc">
        Tailored security, housekeeping, and infrastructure solutions across commercial, industrial, healthcare, hospitality, and residential environments.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">SPECIALIZED DOMAINS</span>
        <h2>CUSTOMIZED PROTOCOLS FOR 9 INDUSTRY VERTICALS</h2>
        <p>Every facility possesses unique operational rhythms, compliance demands, and vulnerability profiles. Here is how we serve each sector:</p>
      </div>

      <div class="grid-3" style="gap: 2rem;">
        <!-- 1. Commercial Complexes -->
        <div class="card card-top-red" id="commercial">
          <div class="card-image-wrap">
            <img src="assets/images/commercialArch.jpg" alt="Commercial Complexes">
            <span class="card-badge">Commercial</span>
          </div>
          <h4>Commercial &amp; Corporate Towers</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Integrated security and housekeeping for Grade-A corporate towers, business parks, and multi-tenant offices.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Turnstile &amp; biometric access control</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Mechanized daily lobby buffing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Executive concierge liaison</span></li>
          </ul>
        </div>

        <!-- 2. Industrial & Manufacturing -->
        <div class="card card-top-navy" id="industrial">
          <div class="card-image-wrap">
            <img src="assets/images/industrialPlant.jpg" alt="Industrial Manufacturing">
            <span class="card-badge" style="background: #001423;">Industrial</span>
          </div>
          <h4>Industrial &amp; Manufacturing Plants</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Rigorous perimeter defense, material gate passes, hazardous waste handling, and heavy factory floor cleaning.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Material in/out gatepass tracking</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Plant floor degreasing &amp; scrubbing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Perimeter boundary patrols</span></li>
          </ul>
        </div>

        <!-- 3. Residential Societies -->
        <div class="card card-top-red" id="residential">
          <div class="card-image-wrap">
            <img src="assets/images/residential.jpg" alt="Residential Societies">
            <span class="card-badge">Residential</span>
          </div>
          <h4>Housing Societies &amp; Townships</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Complete estate services for gated communities, apartments, and townships ensuring safe, hygienic living.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Visitor &amp; delivery vehicle verification</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Basement pressure washing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Clubhouse &amp; park upkeep</span></li>
          </ul>
        </div>

        <!-- 4. Retail & Shopping Malls -->
        <div class="card card-top-navy" id="retail">
          <div class="card-image-wrap">
            <img src="assets/images/retailMall.jpg" alt="Retail Shopping Malls">
            <span class="card-badge" style="background: #001423;">Retail</span>
          </div>
          <h4>Retail Malls &amp; Commercial Centers</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Active crowd management, loss prevention, continuous high-traffic floor buffing, and restroom sanitation.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>High-footfall crowd control</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Continuous floor scrubbing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Emergency exit monitoring</span></li>
          </ul>
        </div>

        <!-- 5. Hotels & Hospitality -->
        <div class="card card-top-red" id="hospitality">
          <div class="card-image-wrap">
            <img src="assets/images/hotel.jpg" alt="Hotels and Hospitality">
            <span class="card-badge">Hospitality</span>
          </div>
          <h4>Hotels &amp; Hospitality Resorts</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">High-standard guest concierge security, pristine banquet floor maintenance, and guest comfort management.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Discreet VIP guest security</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Spotless banquet floor upkeep</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>24/7 Valet &amp; gate coordination</span></li>
          </ul>
        </div>

        <!-- 6. Healthcare & Hospitals -->
        <div class="card card-top-navy" id="healthcare">
          <div class="card-image-wrap">
            <img src="assets/images/hospital.jpg" alt="Healthcare and Hospitals">
            <span class="card-badge" style="background: #001423;">Healthcare</span>
          </div>
          <h4>Healthcare Institutes &amp; Hospitals</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Stringent infection-control sanitization, hospital-grade disinfection, and emergency entrance security.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Hospital-grade surface disinfection</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Emergency ambulance lane clearance</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>ICU &amp; ward access protection</span></li>
          </ul>
        </div>

        <!-- 7. Construction & Civil Sites -->
        <div class="card card-top-red" id="construction">
          <div class="card-image-wrap">
            <img src="assets/images/engineering.jpg" alt="Construction and Civil Projects">
            <span class="card-badge">Infra</span>
          </div>
          <h4>Construction &amp; Civil Sites</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Material anti-theft watch, heavy machinery safety watch, on-site utility shifting, and turnkey civil execution.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Building material theft prevention</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>On-site underground utility shifting</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Heavy machinery safety protocols</span></li>
          </ul>
        </div>

        <!-- 8. IT & Tech Parks -->
        <div class="card card-top-navy" id="it-parks">
          <div class="card-image-wrap">
            <img src="assets/images/itPark.jpg" alt="IT and Technology Parks">
            <span class="card-badge" style="background: #001423;">Tech</span>
          </div>
          <h4>IT &amp; Technology Parks</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">24/7 multi-tier perimeter protection, server room access authorization, and anti-static clean room maintenance.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>24/7 Video command surveillance</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Server room biometric security</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Anti-static floor cleaning</span></li>
          </ul>
        </div>

        <!-- 9. Public & Open Land -->
        <div class="card card-top-red" id="public-land">
          <div class="card-image-wrap">
            <img src="assets/images/urbanInfra.jpg" alt="Public and Open Land Environments">
            <span class="card-badge">Land</span>
          </div>
          <h4>Public &amp; Open Land Assets</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Large-scale open land boundary fencing, utility diversion, road grading, and perimeter security patrols.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Perimeter boundary wall &amp; fencing</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Encroachment prevention patrols</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Land leveling &amp; access road grading</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Industries Action -->
  <section class="section-py bg-white text-center">
    <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
      <span class="eyebrow">INDUSTRY CONSULTATION</span>
      <h2>NEED A SPECIALIZED PROTOCOL FOR YOUR SECTOR?</h2>
      <p style="margin-bottom: 2rem;">Contact our domain managers to review industry-specific service level agreements (SLAs).</p>
      <button type="button" class="btn btn-primary btn-lg" data-open-modal="enquiry">TALK TO A SECTOR SPECIALIST</button>
    </div>
  </section>
`;

// --- 8. WHY-SSV.HTML ---
const whySSVContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/team.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        COMPETITIVE EDGE
      </span>
      <h1 class="hero-title" style="color: #FFF;">WHY CHOOSE SSV COMMERCIAL SERVICES &amp; INFRA</h1>
      <p class="hero-desc">
        A disciplined, client-centric partner combining rigorously trained personnel, modern mechanized equipment, strict statutory compliance, and transparent leadership.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">OUR VALUE PILLARS</span>
        <h2>5 PILLARS OF OPERATIONAL EXCELLENCE</h2>
        <p>How SSV consistently outperforms traditional contractors across reliability, governance, and on-ground execution.</p>
      </div>

      <div class="grid-3" style="gap: 2rem;">
        <div class="card card-top-red">
          <div class="step-num" style="font-size: 2rem;">01</div>
          <h4>Experienced &amp; Reliable Team</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Disciplined, vetted, and rigorously trained personnel managed by seasoned operational supervisors with deep domain expertise.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Police verified &amp; background checked</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Continuous on-ground supervisor visits</span></li>
          </ul>
        </div>

        <div class="card card-top-navy">
          <div class="step-num" style="font-size: 2rem; color: #001423;">02</div>
          <h4>Client-Centric Approach</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Every operational blueprint is structured around the specific risk profile, footfall patterns, and physical geometry of your property.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Custom site surveys &amp; SOP manuals</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Dedicated single-point escalation officer</span></li>
          </ul>
        </div>

        <div class="card card-top-red">
          <div class="step-num" style="font-size: 2rem;">03</div>
          <h4>Cost-Effective Solutions</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Through mechanized efficiency, optimized labor rosters, and turnkey civil execution, we eliminate waste and reduce your total operational spend.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Zero hidden charges or bill padding</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Measurable productivity metrics</span></li>
          </ul>
        </div>

        <div class="card card-top-navy">
          <div class="step-num" style="font-size: 2rem; color: #001423;">04</div>
          <h4>Advanced Technology &amp; Machinery</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">From ride-on industrial scrubbers and CCTV command rooms to certified earthmovers and asphalt pavers, we deploy professional-grade tools.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Mechanized cleaning machinery</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#001423" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Modern heavy civil equipment fleets</span></li>
          </ul>
        </div>

        <div class="card card-top-red">
          <div class="step-num" style="font-size: 2rem;">05</div>
          <h4>Commitment to Excellence &amp; Law</h4>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Zero tolerance for compliance shortcuts. 100% compliance with PF, ESIC, minimum wages, and environmental regulations.</p>
          <ul class="feature-list">
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>100% Statutory labor law compliance</span></li>
            <li class="feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0122A" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Safe, eco-friendly green chemicals</span></li>
          </ul>
        </div>

        <div class="card" style="background: #001423; color: #FFF; border-color: #001423; display: flex; flex-direction: column; justify-content: center;">
          <h3 style="color: #FFF; text-transform: uppercase;">READY FOR THE SSV STANDARD?</h3>
          <p style="color: #94A3B8; font-size: 0.9rem; margin: 0.75rem 0 1.5rem;">Join leading enterprises across Maharashtra that rely on SSV daily.</p>
          <a href="contact.html" class="btn btn-primary">TALK TO US TODAY</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Qualitative Grid -->
  <section class="section-py bg-white">
    <div class="container">
      <div class="section-header">
        <span class="eyebrow">OUR ADVANTAGES</span>
        <h2>KEY DIFFERENTIATORS AT A GLANCE</h2>
      </div>

      <div class="grid-4" style="gap: 1.5rem;">
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #C0122A;">Highly Trained Personnel</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Rigorous physical, tactical, and etiquette training for all security and service staff.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #001423;">Customized Service Plans</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Site-specific standard operating procedures tailored to your exact property.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #C0122A;">Comprehensive Cleaning</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">End-to-end cleaning from daily upkeep to specialized industrial degreasing.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #001423;">Skilled Workforce</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Certified operators for modern equipment and heavy civil infrastructure machinery.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #C0122A;">Eco-Friendly Practices</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Biodegradable, non-toxic cleaning agents that protect health and environment.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #001423;">24/7 Quick Response</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Always-available operational command line and rapid emergency response teams.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #C0122A;">Safety &amp; Hygiene Standards</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Strict adherence to health protocols, PPE compliance, and fire safety norms.</p>
        </div>
        <div style="border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 2px;">
          <h4 style="font-size: 1rem; color: #001423;">Customizable Packages</h4>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Modular service contracts that scale flexibly as your enterprise grows.</p>
        </div>
      </div>
    </div>
  </section>
`;

// --- 9. CONTACT.HTML ---
const contactContent = `
  <section class="hero-section" style="background-image: linear-gradient(to right, rgba(0, 20, 35, 0.95), rgba(0, 20, 35, 0.85)), url('assets/images/contact.jpg'); background-size: cover;">
    <div class="container hero-content">
      <span class="eyebrow" style="color: #F87171; background: rgba(192, 18, 42, 0.2); border: 1px solid #C0122A; padding: 0.3rem 0.75rem; border-radius: 2px;">
        GET IN TOUCH
      </span>
      <h1 class="hero-title" style="color: #FFF;">CONTACT SSV OPERATIONAL HEADQUARTERS</h1>
      <p class="hero-desc">
        Connect directly with our operations team for guard deployments, facility housekeeping proposals, or civil infrastructure project consultations.
      </p>
    </div>
  </section>

  <section class="section-py bg-light">
    <div class="container">
      <div class="grid-2" style="gap: 3.5rem; align-items: start;">
        <!-- Left Col: Contact Information -->
        <div>
          <span class="eyebrow">HEADQUARTERS &amp; COMMAND</span>
          <h2 style="font-size: 2.25rem;">REACH OUR LEADERSHIP TEAM</h2>
          <p style="margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.7;">
            We operate round-the-clock command centers to ensure rapid mobilization, emergency escalation readiness, and proactive client support.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem;">
            <!-- Address Card -->
            <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-left: 4px solid #C0122A; border-radius: 2px;">
              <h4 style="color: #001423; margin-bottom: 0.35rem;">Corporate Headquarters</h4>
              <p style="margin: 0; color: #5A6273; font-size: 0.95rem;">
                <strong>SSV COMMERCIAL SERVICES &amp; INFRA PRIVATE LIMITED</strong><br>
                Chhatrapati Sambhaji Maharaj Nagar,<br>
                Behind DIC Office, Dharashiv,<br>
                Maharashtra - 413501, India
              </p>
            </div>

            <!-- Phone Card -->
            <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-left: 4px solid #001423; border-radius: 2px;">
              <h4 style="color: #001423; margin-bottom: 0.35rem;">24/7 Telephone Hotline</h4>
              <p style="margin: 0; font-size: 1.15rem; font-weight: 800; color: #C0122A;">
                <a href="tel:+918669005122">+91 86690 05122</a>
              </p>
              <p style="margin: 0.25rem 0 0; color: #848A99; font-size: 0.8rem;">Direct line for facility audits and new deployment contracts</p>
            </div>

            <!-- Email Card -->
            <div style="background: #FFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-left: 4px solid #C0122A; border-radius: 2px;">
              <h4 style="color: #001423; margin-bottom: 0.35rem;">Official Correspondence Email</h4>
              <p style="margin: 0; font-size: 1.05rem; font-weight: 700; color: #001423;">
                <a href="mailto:ssvsecservices@gmail.com">ssvsecservices@gmail.com</a>
              </p>
              <p style="margin: 0.25rem 0 0; color: #848A99; font-size: 0.8rem;">Send RFP documents, project tenders, and formal inquiries</p>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="tel:+918669005122" class="btn btn-primary btn-lg">CALL HOTLINE NOW</a>
            <a href="https://wa.me/918669005122?text=Hello%20SSV%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-lg" style="background: #25D366; color: #FFF; border-color: #25D366;">
              WHATSAPP DIRECT
            </a>
          </div>
        </div>

        <!-- Right Col: Interactive Static Form -->
        <div style="background: #FFF; border: 1px solid #CBD5E1; padding: 2.5rem; border-top: 4px solid #C0122A; border-radius: 2px; box-shadow: var(--shadow-card);">
          <h3 style="font-size: 1.5rem; text-transform: uppercase; margin-bottom: 0.5rem;">Send Us an Inquiry</h3>
          <p style="font-size: 0.9rem; color: #5A6273; margin-bottom: 1.5rem;">
            Submit your requirement details below. Our field coordination desk will review and contact you with a customized estimate within 4 hours.
          </p>

          <form data-ssv-form id="mainContactForm">
            <div class="form-group">
              <label class="form-label" for="cName">Your Name / Organization Contact *</label>
              <input type="text" id="cName" name="name" class="form-control" placeholder="e.g. Ramesh Patil / Tata Projects" required>
            </div>
            <div class="grid-2" style="gap: 1rem; margin-bottom: 0;">
              <div class="form-group">
                <label class="form-label" for="cPhone">Direct Phone Number *</label>
                <input type="tel" id="cPhone" name="phone" class="form-control" placeholder="+91 86690 05122" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="cEmail">Email Address</label>
                <input type="email" id="cEmail" name="email" class="form-control" placeholder="contact@company.com">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="cService">Primary Service Category *</label>
              <select id="cService" name="service" class="form-control" required>
                <option value="">Select Service Scope</option>
                <option value="Security Services">Security Guarding &amp; Electronic Surveillance</option>
                <option value="Housekeeping Services">Housekeeping, Mechanized Cleaning &amp; Sanitization</option>
                <option value="Infra Services">Civil Infrastructure, Utility Shifting &amp; Road Paving</option>
                <option value="Integrated Total Package">Integrated Multi-Pillar Facility Contract</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="cLocation">Site City / District</label>
              <input type="text" id="cLocation" name="location" class="form-control" placeholder="e.g. Dharashiv, Pune, Solapur, Aurangabad, Latur">
            </div>
            <div class="form-group">
              <label class="form-label" for="cMessage">Requirement Specifications</label>
              <textarea id="cMessage" name="message" class="form-control" placeholder="Tell us about the property size, number of security posts, frequency of cleaning, or road work scope..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 1rem;">
              SUBMIT INQUIRY TO SSV COMMAND
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Accordion Section -->
  <section class="section-py bg-white">
    <div class="container" style="max-width: 860px;">
      <div class="section-header">
        <span class="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
        <h2>HELPFUL QUESTIONS &amp; ANSWERS</h2>
      </div>

      <div class="accordion active">
        <button type="button" class="accordion-header">
          <span>What locations in Maharashtra does SSV serve?</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          SSV is headquartered in Dharashiv, Maharashtra, and executes security, housekeeping, and infrastructure contracts across Dharashiv, Pune, Solapur, Chhatrapati Sambhajinagar (Aurangabad), Latur, and neighboring commercial corridors throughout the state.
        </div>
      </div>

      <div class="accordion">
        <button type="button" class="accordion-header">
          <span>Are all SSV personnel statutory compliant and police verified?</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          Yes, 100%. Every security officer, housekeeping technician, and machine operator undergoes strict police verification, residential address validation, and identity authentication. SSV fully complies with PF, ESIC, minimum wages, and worker insurance policies.
        </div>
      </div>

      <div class="accordion">
        <button type="button" class="accordion-header">
          <span>How quickly can SSV deploy staff or begin civil works?</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          Following the initial site survey and agreement sign-off, standard security and housekeeping teams can be mobilized within 24 to 48 hours. Turnkey civil works and utility shifting commence according to agreed engineering critical path schedules.
        </div>
      </div>

      <div class="accordion">
        <button type="button" class="accordion-header">
          <span>Can we combine Security, Housekeeping, and Infra under one contract?</span>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="accordion-body">
          Yes. Our Integrated Total Facility Management package allows clients to manage security, sanitation, and civil infrastructure through a single coordinated command team with consolidated invoicing and a single dedicated account manager.
        </div>
      </div>
    </div>
  </section>
`;

// Compile and output all 9 pages!
const pages = [
  {
    fileName: 'index.html',
    title: 'SSV Commercial Services & Infra | Security, Housekeeping & Infrastructure Solutions',
    description: 'Official corporate website for SSV Commercial Services & Infra Private Limited. Professional security guarding, mechanized housekeeping, deep cleaning, utility shifting, and turnkey civil infrastructure solutions.',
    activeNav: 'home',
    content: homeContent
  },
  {
    fileName: 'about.html',
    title: 'About SSV | Mission, Vision & Governance | SSV Commercial Services & Infra',
    description: 'Learn about SSV Commercial Services & Infra Private Limited - our mission, vision, operational governance, leadership ethos, and trained workforce across Maharashtra.',
    activeNav: 'about',
    content: aboutContent
  },
  {
    fileName: 'services.html',
    title: 'Integrated Services | Security, Housekeeping & Infrastructure | SSV',
    description: 'Explore the complete service portfolio of SSV Commercial Services & Infra Private Limited - professional security guarding, hospital-grade cleaning, and turnkey civil infrastructure.',
    activeNav: 'services',
    content: servicesContent
  },
  {
    fileName: 'security.html',
    title: 'Security Services | Manned Guarding, CCTV & Access Control | SSV',
    description: 'Professional security guarding, corporate concierge security, CCTV surveillance, VIP protection, and emergency fire response by SSV Commercial Services & Infra Private Limited.',
    activeNav: 'security',
    content: securityContent
  },
  {
    fileName: 'housekeeping.html',
    title: 'Housekeeping Services | Mechanized Cleaning & Sanitization | SSV',
    description: 'Commercial and industrial housekeeping, factory floor scrubbing, deep sanitization, society maintenance, and structured waste management by SSV Commercial Services & Infra.',
    activeNav: 'housekeeping',
    content: housekeepingContent
  },
  {
    fileName: 'infrastructure.html',
    title: 'Infra Services | Turnkey Civil, Utility Shifting & Road Construction | SSV',
    description: 'Turnkey civil contracting, underground pipeline and cable utility shifting, heavy asphalt and concrete road paving by SSV Commercial Services & Infra Private Limited.',
    activeNav: 'infra',
    content: infraContent
  },
  {
    fileName: 'industries.html',
    title: 'Industries Served | Commercial, Industrial, Residential & Healthcare | SSV',
    description: 'Discover how SSV Commercial Services & Infra tailors security, housekeeping, and civil solutions for 9 specialized industry domains across Maharashtra.',
    activeNav: 'industries',
    content: industriesContent
  },
  {
    fileName: 'why-ssv.html',
    title: 'Why Choose SSV | Our Value Pillars & Competitive Advantage | SSV',
    description: 'Why leading enterprises choose SSV Commercial Services & Infra: trained personnel, modern technology, client-centric SOPs, statutory compliance, and 24/7 command support.',
    activeNav: 'why-ssv',
    content: whySSVContent
  },
  {
    fileName: 'contact.html',
    title: 'Contact Us | Dharashiv Maharashtra Headquarters | SSV Commercial Services',
    description: 'Contact SSV Commercial Services & Infra Private Limited in Dharashiv, Maharashtra. Call +91 86690 05122 or send requirements for security, housekeeping, and civil infrastructure tenders.',
    activeNav: 'contact',
    content: contactContent
  }
];

pages.forEach(p => {
  const fullHtml = renderPage({
    title: p.title,
    description: p.description,
    activeNav: p.activeNav,
    pageContent: p.content
  });

  // Write to project root
  fs.writeFileSync(path.join(__dirname, '..', p.fileName), fullHtml, 'utf8');
  // Write to public folder
  fs.writeFileSync(path.join(__dirname, '..', 'public', p.fileName), fullHtml, 'utf8');
  console.log(`Successfully generated: ${p.fileName} (Root & Public)`);
});

console.log('All 9 static pages generated successfully with full offline/file:// support!');
