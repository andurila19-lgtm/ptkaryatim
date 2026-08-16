/**
 * PT. KARYATIM MANDIRI ENGINEERING
 * Interactivity Script for PDF-aligned Landing Page
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // 3. Navbar Active Link on Scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 4. Portfolio Category Filtering (14 PDF Project Slides)
  const tabBtns = document.querySelectorAll('.pdf-tab-btn');
  const projectBlocks = document.querySelectorAll('.project-slide-block');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-tab');

      projectBlocks.forEach(block => {
        const blockCat = block.getAttribute('data-category');
        if (targetCategory === 'all' || blockCat === targetCategory) {
          block.style.display = 'block';
          block.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          block.style.display = 'none';
        }
      });
    });
  });

  // 5. Floating WhatsApp Drawer Toggle
  const floatingWaBtn = document.getElementById('floatingWaBtn');
  const floatingWaCard = document.getElementById('floatingWaCard');
  const waCloseBtn = document.getElementById('waCloseBtn');

  if (floatingWaBtn && floatingWaCard && waCloseBtn) {
    floatingWaBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingWaCard.classList.toggle('active');
    });

    waCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingWaCard.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
      if (!floatingWaCard.contains(e.target) && !floatingWaBtn.contains(e.target)) {
        floatingWaCard.classList.remove('active');
      }
    });
  }

  // 6. Interactive Form WhatsApp Submission
  const form = document.getElementById('karyatimProjectForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const location = document.getElementById('projectLoc').value.trim();
      const service = document.getElementById('projectService').value;
      const desc = document.getElementById('projectDesc').value.trim();

      if (!name || !location || !service) {
        alert('Mohon lengkapi Nama, Lokasi Proyek, dan Layanan yang dipilih.');
        return;
      }

      const message = 
`Halo PT. Karyatim Mandiri Engineering,
Saya ingin mengajukan permohonan konsultasi proyek & survey lokasi:

*Nama / Perusahaan:* ${name}
*Lokasi Proyek:* ${location}
*Layanan yang Dipilih:* ${service}
*Rencana Kebutuhan:* ${desc || '-'}

Mohon informasi ketersediaan jadwal survey dan estimasi RAB. Terima kasih.`;

      const encodedMessage = encodeURIComponent(message);
      const waNumber = '6281231716286'; // CS 1 Hotline
      const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

      window.open(waUrl, '_blank');
    });
  }
});
