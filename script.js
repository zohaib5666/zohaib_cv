/* ============================================================
   PORTFOLIO SCRIPT — Muhammad Zohaib Usman
   ============================================================
   ✏️  TO EDIT CV DATA: update the `portfolioData` object below.
   All content renders from this single source of truth.
   ============================================================ */

const portfolioData = {
  name: "Muhammad Zohaib Usman",
  title: "Senior IT Administrator",
  typedTitles: [
    "Senior IT Administrator",
    "IT Infrastructure Engineer",
    "Network & Security Specialist",
    "ERP Systems Consultant",
    "Amazon FBA Strategist"
  ],
  tagline:
    "A dedicated IT professional with deep expertise in infrastructure management, network security, ERP systems, and cloud operations — delivering enterprise-grade solutions across Pakistan's leading industries.",
  location: "Lahore, Pakistan",
  email: "zohaibusmanlive@gmail.com",
  phone: "+92 304 5666900",

  // STATS shown in hero
  stats: [
    { number: "9+",  label: "Years Exp." },
    { number: "4",   label: "Roles" },
    { number: "3",   label: "Certifications" },
    { number: "10+", label: "Technologies" }
  ],

  // ABOUT — why hire this person
  aboutPoints: [
    {
      icon: "🛡️",
      text: "Dedicated and detail-oriented IT professional with strong expertise in system administration, network management, software development, and cybersecurity implementation."
    },
    {
      icon: "⚡",
      text: "Proactive and self-reliant — skilled in delivering value-added IT solutions, managing complex infrastructure, and ensuring seamless system operations under pressure."
    },
    {
      icon: "🤝",
      text: "Experienced in fostering collaborative team environments, promoting high levels of productivity, and maintaining robust IT security practices and compliance documentation."
    },
    {
      icon: "🔍",
      text: "Sharp analytical thinker with research-driven problem-solving skills, quick troubleshooting abilities, and a passion for continuous learning in evolving technologies."
    }
  ],

  // ABOUT stats cards
  aboutStats: [
    { number: "7+",   label: "Years in IT" },
    { number: "100+", label: "Systems Managed" },
    { number: "3",    label: "ERP Deployments" },
    { number: "4",    label: "Sectors Served" }
  ],

  // EXPERIENCE
  experience: [
    {
  company: "Opera Textile Mill",
  role: "Assistant Manager",
  period: "April 2026 – Present",
  location: "Kot Abdul Malik, Pakistan",
  responsibilities: [
    "Manage and maintain IT infrastructure, servers, and networks.",
    "Install, configure, and troubleshoot hardware and software.",
    "Monitor system performance and ensure maximum uptime.",
    "Provide technical support to users and resolve IT issues.",
    "Manage network security, firewalls, and antivirus systems.",
    "Configure and maintain backup and disaster recovery solutions.",
    "Handle Active Directory, user accounts, and permissions.",
    "Monitor LAN/WAN connectivity and internet performance.",
    "Maintain virtualization platforms such as VMware or Hyper-V.",
    "Coordinate with vendors for hardware and software procurement.",
    "Prepare technical documentation and system reports.",
    "Ensure data security and compliance with company policies.",
    "Support cloud services such as Microsoft 365 or Google Workspace.",
    "Perform regular system updates, patching, and maintenance.",
    "Optimize IT operations for performance and cost efficiency.",
  ]
},
    {
      company: "Ayesha Spinning Mills Ltd.",
      role: "Senoir I.T Officer",
      period: "Mar 2022 – April 2026",
      location: "Sheikhupura, Pakistan",
      responsibilities: [
        "Provide technical support to users experiencing problems with computers or software applications.",
        "Maintain and manage IT hardware, software, networks, and servers to ensure optimal performance.",
        "Monitor and manage network performance, firewalls, and security protocols to guarantee uptime.",
        "Implement and enforce cybersecurity policies to protect organizational data and systems.",
        "Supervise IT support staff and resolve escalated technical issues efficiently.",
        "Manage enterprise applications such as ERP, CRM, and database systems.",
        "Coordinate with vendors for software updates, patches, and advanced troubleshooting.",
        "Maintain configuration and distribution of laptops, network printers, access points, wireless controllers, and Sophos firewalls.",
        "Ensure licensing compliance and seamless system integration across departments."
      ]
    },
    {
      company: "Dynexcel",
      role: "Odoo ERP Technical Consultant",
      period: "Jun 2019 – Jul 2021",
      location: "Lahore, Pakistan",
      responsibilities: [
        "Gathered and analyzed business requirements from textile operations to design suitable ERP workflows.",
        "Customized and configured Odoo ERP modules: Manufacturing, Inventory, Sales, Purchase, HR, Accounting.",
        "Developed and maintained Odoo customizations using Python, XML, PostgreSQL, and the Odoo framework.",
        "Integrated Odoo with third-party applications including POS, e-commerce, and financial systems.",
        "Managed data migration from legacy systems to Odoo ERP with accuracy and minimal downtime.",
        "Provided user training and technical support to ensure smooth ERP adoption across departments.",
        "Created custom dashboards and reports delivering real-time insights into production, stock, and sales.",
        "Ensured compliance with IT security policies and data protection standards."
      ]
    },
    {
      company: "Freelancer — Amazon VA",
      role: "Virtual Assistant (Amazon FBA/FBM)",
      period: "Jun 2018 – Present",
      location: "Remote, Pakistan",
      responsibilities: [
        "Manage Amazon Seller Central accounts including listings, variations, and category optimization.",
        "Conduct product research using Helium10, Jungle Scout, and Keepa to identify profitable items.",
        "Optimize product titles, descriptions, bullet points, and keywords for improved search ranking.",
        "Handle inventory management, stock updates, and order processing for smooth operations.",
        "Manage FBA and FBM processes including shipment creation and tracking.",
        "Monitor account health, performance metrics, and policy compliance.",
        "Create and manage Amazon PPC campaigns, optimize bids, and improve ROI.",
        "Generate sales reports and performance analysis to support business decision-making."
      ]
    },
    {
      company: "Dawood Usman Textiles",
      role: "I.T. Officer",
      period: "Jun 2016 – Jun 2018",
      location: "Faisalabad, Pakistan",
      responsibilities: [
        "Managed and maintained IT infrastructure, servers, and network devices for smooth business operations.",
        "Configured and administered Windows & Linux servers including Active Directory, DNS, DHCP, and GPO.",
        "Installed, configured, and troubleshot LAN/WAN, routers, switches, and firewalls (Cisco, Sophos).",
        "Administered virtualization platforms (VMware, Hyper-V) for server optimization.",
        "Implemented and monitored data backup, disaster recovery, and business continuity plans.",
        "Managed email systems, CCTV security, UPS systems, and datacenter equipment.",
        "Collaborated with management to plan and execute IT projects and digital transformation initiatives."
      ]
    }
  ],

  // SKILLS with proficiency percentages
  skills: [
    { name: "Network Administration (LAN/WAN/VPN)", level: 92 },
    { name: "Cybersecurity & Firewall Management", level: 88 },
    { name: "Windows & Linux Server Admin", level: 90 },
    { name: "Odoo ERP (Python/XML/PostgreSQL)", level: 82 },
    { name: "Virtualization (VMware / Hyper-V)", level: 78 },
    { name: "Amazon FBA / PPC Campaigns", level: 85 },
    { name: "Active Directory & GPO", level: 88 },
    { name: "IT Infrastructure Management", level: 93 }
  ],

  // SKILL CHIPS organized by category
  skillCategories: [
    {
      title: "Networking & Security",
      chips: ["Cisco Routing & Switching", "IP Addressing & Subnetting", "Sophos Firewall", "VPN Server", "Wireless Controller", "Network Monitoring", "DHCP / DNS"]
    },
    {
      title: "Systems & Infrastructure",
      chips: ["Active Directory", "Windows Server", "Linux Admin", "VMware", "Hyper-V", "File Server", "Backup Server", "CCTV & UPS Mgmt"]
    },
    {
      title: "Development & ERP",
      chips: ["Odoo ERP", "Python", "XML", "PostgreSQL", "ERP Customization", "CRM Systems", "API Integration"]
    },
    {
      title: "Cloud & E-Commerce",
      chips: ["Amazon FBA", "Amazon PPC", "Helium10", "Jungle Scout", "Keepa", "Seller Central", "Amazon Private Label"]
    }
  ],

  // PROJECTS
  projects: [
    {
      icon: "🕌",
      title: "The Holy Quran Listener",
      description:
        "An AI-powered Proof of Concept application that converts Quranic audio recitations into text via a speech-to-text API, then intelligently compares the transcribed text against a verified Quran database for accuracy validation.",
      tags: ["AI / ML", "Speech-to-Text API", "Database Matching", "PoC", "Python"]
    },
    {
      icon: "🦠",
      title: "Ransomware PoC & Awareness",
      description:
        "Developed a Ransomware Proof of Concept for educational purposes in the Computer Science department at GCUF. Also founded and led a Cyber Awareness Community to educate students on digital threats, prevention strategies, and safe computing.",
      tags: ["Cybersecurity", "Ransomware PoC", "Community", "GCUF", "Awareness"]
    },
    {
      icon: "🏭",
      title: "Textile ERP Deployment",
      description:
        "End-to-end Odoo ERP deployment for a mid-size textile firm — covering manufacturing, inventory, HR, and finance modules. Included custom Python/XML development, legacy data migration, and staff training across multiple departments.",
      tags: ["Odoo ERP", "Python", "PostgreSQL", "Data Migration", "Textile"]
    },
    {
      icon: "🔐",
      title: "Enterprise Network Security Overhaul",
      description:
        "Redesigned the network security architecture at Ayesha Spinning Mills — including Sophos firewall deployment, network segmentation, access control policies, and cybersecurity compliance documentation for audit readiness.",
      tags: ["Sophos", "Firewall", "Network Security", "Compliance", "Infra"]
    }
  ],

  // CERTIFICATIONS
  certifications: [
    {
      icon: "🌐",
      name: "Cisco Certified Network Associate",
      issuer: "CISCO Systems"
    },
    {
      icon: "📊",
      name: "Microsoft Office Specialist",
      issuer: "Microsoft Corporation"
    },
    {
      icon: "🛒",
      name: "Virtual Assistant Amazon",
      issuer: "Amazon VA Program"
    }
  ],

  // EDUCATION
  education: [
    {
      icon: "🎓",
      degree: "Bachelor of Computer Information Technology",
      institution: "GCUF — Government College University Faisalabad",
      location: "Faisalabad, Pakistan"
    },
    {
      icon: "📐",
      degree: "DAE — Computer Information Technology",
      institution: "Diploma of Associate Engineering",
      location: "Kamalia, Pakistan"
    }
  ],

  // CONTACT INFO
  contact: [
    { icon: "📍", label: "Location",  value: "Lahore, Punjab, Pakistan" },
    { icon: "✉️", label: "Email",     value: "zohaibusmanlive@gmail.com" },
    { icon: "📞", label: "Phone",     value: "+92 304 5666900" },
    { icon: "💼", label: "LinkedIn",  value: "linkedin.com/in/mzohaibusman" },
    { icon: "🌐", label: "Available", value: "Open to new opportunities" }
  ],

  footerTagline:
    "Delivering enterprise-grade IT infrastructure solutions with precision and passion."
};

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderHero() {
  const el = id => document.getElementById(id);

  el('hero-name').textContent = portfolioData.name;
  el('hero-tagline').textContent = portfolioData.tagline;

  // Stats
  el('hero-stats').innerHTML = portfolioData.stats
    .map(s => `
      <div class="stat-item">
        <span class="stat-number">${s.number}</span>
        <span class="stat-label">${s.label}</span>
      </div>`)
    .join('');

  // Typed title effect
  let titleIdx = 0, charIdx = 0, deleting = false;
  const titleEl = el('typed-title');

  function typeLoop() {
    const current = portfolioData.typedTitles[titleIdx];
    if (!deleting) {
      titleEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 2200);
        return;
      }
    } else {
      titleEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        titleIdx = (titleIdx + 1) % portfolioData.typedTitles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 75);
  }
  setTimeout(typeLoop, 1000);
}

function renderAbout() {
  const pointsEl = document.getElementById('about-points');
  pointsEl.innerHTML = portfolioData.aboutPoints
    .map(p => `
      <div class="about-point reveal-up">
        <div class="about-point-icon">${p.icon}</div>
        <div class="about-point-text"><p>${p.text}</p></div>
      </div>`)
    .join('');

  const statsEl = document.getElementById('about-stats-cards');
  statsEl.innerHTML = `<div class="about-stats-grid">
    ${portfolioData.aboutStats.map(s => `
      <div class="about-stat-card">
        <span class="asc-number">${s.number}</span>
        <span class="asc-label">${s.label}</span>
      </div>`).join('')}
  </div>`;
}

function renderExperience() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = portfolioData.experience
    .map((exp, i) => `
      <div class="timeline-item reveal-up" data-delay="${i * 80}" onclick="toggleTimeline(this)">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="tl-header">
            <span class="tl-company">${exp.company}</span>
            <span class="tl-period">${exp.period}</span>
          </div>
          <div class="tl-role">${exp.role}</div>
          <div class="tl-location">📍 ${exp.location}</div>
          <ul class="tl-responsibilities">
            ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
          </ul>
          <div class="tl-toggle">
            <span>Click to expand</span>
            <span class="tl-arrow">›</span>
          </div>
        </div>
      </div>`)
    .join('');
}

function toggleTimeline(el) {
  const wasActive = el.classList.contains('active');
  document.querySelectorAll('.timeline-item').forEach(t => t.classList.remove('active'));
  if (!wasActive) el.classList.add('active');
}

function renderSkills() {
  // Bars
  document.getElementById('skills-bars').innerHTML = portfolioData.skills
    .map(s => `
      <div class="skill-bar-item">
        <div class="skill-bar-header">
          <span class="skill-bar-name">${s.name}</span>
          <span class="skill-bar-pct">${s.level}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-level="${s.level}"></div>
        </div>
      </div>`)
    .join('');

  // Chips
  document.getElementById('skills-chips').innerHTML = portfolioData.skillCategories
    .map(cat => `
      <div class="chips-section">
        <div class="chips-title">${cat.title}</div>
        <div class="chips-row">
          ${cat.chips.map(c => `<span class="chip">${c}</span>`).join('')}
        </div>
      </div>`)
    .join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    bar.style.width = bar.dataset.level + '%';
  });
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = portfolioData.projects
    .map((p, i) => `
      <div class="project-card reveal-up" data-delay="${i * 80}">
        <div class="project-icon">${p.icon}</div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>`)
    .join('');
}

function renderCertifications() {
  document.getElementById('certs-grid').innerHTML = portfolioData.certifications
    .map((c, i) => `
      <div class="cert-card reveal-up" data-delay="${i * 80}">
        <div class="cert-icon">${c.icon}</div>
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
      </div>`)
    .join('');
}

function renderEducation() {
  document.getElementById('edu-grid').innerHTML = portfolioData.education
    .map((e, i) => `
      <div class="edu-card reveal-up" data-delay="${i * 80}">
        <div class="edu-icon">${e.icon}</div>
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-institution">${e.institution}</div>
        <div class="edu-location">${e.location}</div>
      </div>`)
    .join('');
}

function renderContact() {
  const contactEl = document.getElementById('contact-info');
  contactEl.innerHTML = `
    <p class="contact-intro">
      I'm open to new opportunities, consulting projects, and collaborations in IT infrastructure,
      network security, ERP systems, or cloud operations. Let's connect.
    </p>
    ${portfolioData.contact.map(c => `
      <div class="contact-item">
        <div class="contact-item-icon">${c.icon}</div>
        <div>
          <div class="contact-item-label">${c.label}</div>
          <div class="contact-item-value">${c.value}</div>
        </div>
      </div>`).join('')}
  `;
}

function renderFooter() {
  document.getElementById('footer-tagline').textContent = portfolioData.footerTagline;
}

/* ============================================================
   PARTICLE BACKGROUND
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function Particle() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.r = Math.random() * 1.5 + 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '#00d4ff' : '#7b2fff';
  }

  function init() {
    resize();
    particles = [];
    const count = Math.min(90, Math.floor(W * H / 12000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { cancelAnimationFrame(animId); init(); draw(); });
}

/* ============================================================
   SCROLL REVEAL (Intersection Observer)
   ============================================================ */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('revealed');
          // Animate skill bars when skills section hits
          if (entry.target.closest('#skills')) animateSkillBars();
        }, delay);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Sticky styling
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Scroll to top button
    document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 400);

    // Active nav link
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });

  // Hamburger
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Scroll to top button
  document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'name',    errId: 'name-error',    msg: 'Name is required.' },
      { id: 'email',   errId: 'email-error',   msg: 'Valid email is required.' },
      { id: 'subject', errId: 'subject-error', msg: 'Subject is required.' },
      { id: 'message', errId: 'message-error', msg: 'Message cannot be empty.' }
    ];

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const err = document.getElementById(f.errId);
      input.classList.remove('error');
      err.textContent = '';

      const val = input.value.trim();
      let fieldOk = val.length > 0;

      if (f.id === 'email') {
        fieldOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }

      if (!fieldOk) {
        input.classList.add('error');
        err.textContent = f.msg;
        valid = false;
      }
    });

    if (valid) {
      // Form ki values lo
      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      // WhatsApp message banao
      const whatsappMsg = `*New Portfolio Message*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;

      // Apna number portfolioData se lo
      const number = portfolioData.phone.replace(/\D/g, ''); // sirf digits

      // WhatsApp open karo
      window.open(`https://wa.me/${number}?text=${whatsappMsg}`, '_blank');

      // Success message dikhao
      document.getElementById('form-success').classList.add('visible');
      form.reset();
      setTimeout(() => {
        document.getElementById('form-success').classList.remove('visible');
      }, 5000);
    }
  });
}

/* ============================================================
   CV DOWNLOAD (generates a simple downloadable text card)
   ============================================================ */
function initCVDownload() {
  document.getElementById('download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    const data = portfolioData;
    const content = `
CURRICULUM VITAE
${data.name}
${data.title}
${data.location} | ${data.email} | ${data.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.tagline}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.experience.map(ex => `
${ex.company} | ${ex.role} | ${ex.period}
${ex.location}
${ex.responsibilities.map(r => `  • ${r}`).join('\n')}
`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.skills.map(s => `${s.name} — ${s.level}%`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.certifications.map(c => `• ${c.name} — ${c.issuer}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.education.map(e => `• ${e.degree}\n  ${e.institution}, ${e.location}`).join('\n')}
`.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Muhammad_Zohaib_Usman_CV.txt';
    a.click();
    URL.revokeObjectURL(url);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Render all sections from data
  renderHero();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderCertifications();
  renderEducation();
  renderContact();
  renderFooter();

  // Init behaviours
  initParticles();
  initNavbar();
  initContactForm();
  initCVDownload();

  // Trigger scroll reveal after render
  requestAnimationFrame(() => {
    initScrollReveal();
    // Force-reveal hero elements on load
    document.querySelectorAll('#hero .reveal-up, #hero .reveal-right').forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), 100 + i * 120);
    });
  });
});

/* ============================================================

   ████████████████████████████████████████████████████████
   ██  HOW TO RUN THIS PORTFOLIO                         ██
   ████████████████████████████████████████████████████████

   1. RUNNING IN VS CODE:
      a. Open the project FOLDER in VS Code (File > Open Folder)
         containing index.html, style.css, script.js, profile.jpg
      b. Install the "Live Server" extension by Ritwick Dey
         (Extensions panel → search "Live Server" → Install)
      c. Right-click index.html → "Open with Live Server"
         OR click "Go Live" in the bottom-right status bar
      d. Your browser will open at http://127.0.0.1:5500

   2. REPLACING THE PROFILE IMAGE:
      - Name your photo: profile.jpg
      - Place it in the SAME folder as index.html
      - Portrait orientation recommended (face visible, professional)
      - The site will automatically pick it up — no code changes needed
      - For best results: 400×500px minimum, PNG/JPG, clean background

   3. EDITING CV DATA:
      - Open script.js
      - Find the `const portfolioData = { ... }` object at the TOP
      - Edit any field: name, title, experience[], skills[], projects[], etc.
      - Save — Live Server auto-reloads. All sections update instantly.
      - NO other file changes needed.

   ████████████████████████████████████████████████████████
   ██  FUTURE UPGRADE SUGGESTIONS                        ██
   ████████████████████████████████████████████████████████

   A. CONVERT TO REACT (Vite):
      npx create-vite portfolio --template react
      - Move portfolioData into src/data/portfolio.js
      - Create components: Hero.jsx, Experience.jsx, Skills.jsx, etc.
      - Use Framer Motion for animations (replaces CSS keyframes)
      - Use React Router for smooth page transitions
      - Use shadcn/ui or Radix UI for accessible components

   B. DEPLOY ON VERCEL:
      1. Push your project to GitHub
      2. Go to vercel.com → New Project → Import from GitHub
      3. For plain HTML/CSS/JS: Vercel auto-detects, no build step needed
      4. Custom domain: Project Settings → Domains → Add your domain
      5. Auto-deploys on every git push

   C. DEPLOY ON NETLIFY:
      1. Drag & drop your project folder onto netlify.com/drop
         OR connect GitHub for auto-deploys
      2. Go to Site Settings → Domain Management for custom domain
      3. Netlify Forms: replace contact form action with netlify attribute
         <form netlify name="contact"> — serverless, no backend needed!

   D. BACKEND CONTACT FORM (Node.js / Express):
      // server.js
      const express = require('express');
      const nodemailer = require('nodemailer');
      const app = express();
      app.use(express.json());

      app.post('/api/contact', async (req, res) => {
        const { name, email, subject, message } = req.body;
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: process.env.EMAIL, pass: process.env.PASS }
        });
        await transporter.sendMail({
          from: email,
          to: 'your@email.com',
          subject: `Portfolio: ${subject}`,
          text: `From: ${name}\n\n${message}`
        });
        res.json({ success: true });
      });
      app.listen(3000);

      // Frontend: update form submit to POST to '/api/contact'
      // Deploy on Render.com (free tier) or Railway.app

   E. ADDITIONAL ENHANCEMENTS:
      - Add a blog section using a headless CMS (Contentful / Sanity)
      - Integrate LinkedIn API to auto-pull experience
      - Add dark/light theme toggle (CSS variables make it trivial)
      - Add Google Analytics 4 for visitor tracking
      - Use Three.js for a 3D hero background (upgrade from canvas particles)
      - Add a PDF generator (html2pdf.js) for the CV download

   ████████████████████████████████████████████████████████

============================================================ */
