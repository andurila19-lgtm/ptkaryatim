<template>
  <section class="section section-portfolio-pdf" id="portofolio-proyek">
    <div class="container">
      <div class="section-header-center">
        <div class="pdf-pill-badge large">Portofolio Proyek Karyatim</div>
        <p class="section-lead-text">
          Jelajahi dokumentasi proyek riil dari 14 bidang keahlian konstruksi, sipil, interior, dan finishing PT. Karyatim Mandiri Engineering:
        </p>

        <!-- Interactive Category Filter Tabs -->
        <div class="pdf-filter-tab-bar">
          <button 
            v-for="tab in filterTabs" 
            :key="tab.id"
            class="pdf-tab-btn" 
            :class="{ active: activeCategory === tab.id }"
            @click="activeCategory = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- PORTFOLIO SLIDES CONTAINER (1:1 DENGAN HALAMAN PDF) -->
      <div class="portfolio-slides-container">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-slide-block"
        >
          <div class="project-slide-header">
            <span class="pdf-slide-badge">{{ project.title }}</span>
            <div class="header-right-actions">
              <span class="slide-counter">{{ project.pageLabel }}</span>
              <button 
                v-if="project.hdSlide" 
                class="btn-view-slide-hd"
                @click="$emit('open-image', project.hdSlide, project.title + ' (Full HD Slide PDF)')"
              >
                🖼️ Lihat Slide Penuh (HD)
              </button>
            </div>
          </div>

          <div class="project-quad-grid" :class="{ 'grid-2col': project.images.length === 2 }">
            <div 
              v-for="(img, idx) in project.images" 
              :key="idx"
              class="quad-item"
              @click="$emit('open-image', img, project.title + ' - Foto ' + (idx + 1))"
            >
              <img :src="img" :alt="project.title + ' ' + (idx + 1)" loading="lazy">
              <span class="zoom-indicator">🔍 Klik Foto HD</span>
            </div>
          </div>

          <div class="project-slide-footer">
            <div class="project-contact-pills">
              <span class="c-pill">&#128222; 0812-3171-6286</span>
              <span class="c-pill">&#9993; infokaryatimsurabaya@gmail.com</span>
              <span class="c-pill">&#128247; @karyatimcontractor</span>
            </div>
            <a :href="project.waLink" target="_blank" class="btn-consult-slide">Konsultasi Layanan Ini &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

defineEmits(['open-image']);

const activeCategory = ref('all');

const filterTabs = [
  { id: 'all', label: 'Semua Layanan (14)' },
  { id: 'building', label: 'Building Construction' },
  { id: 'steel', label: 'Steel / Baja' },
  { id: 'concrete', label: 'Concrete / Beton' },
  { id: 'asphalt', label: 'Asphalt / Jalan' },
  { id: 'acp', label: 'ACP Facade' },
  { id: 'waterproofing', label: 'Waterproofing' },
  { id: 'canopy', label: 'Canopy' },
  { id: 'interior', label: 'Interior Office' },
  { id: 'branding', label: 'Branding & Signage' },
  { id: 'partition', label: 'Partition' },
  { id: 'epoxy', label: 'Epoxy Lantai' },
  { id: 'pengecatan', label: 'Pengecatan' },
  { id: 'railing', label: 'Railing' },
  { id: 'mep', label: 'CCTV & Elektrikal' }
];

const projects = [
  {
    id: 'building',
    category: 'building',
    title: 'Bulding Construction Project',
    pageLabel: 'Halaman 05 · Konstruksi Sipil Gedung',
    images: [
      '/assets/portfolio/building/building-1.jpg',
      '/assets/portfolio/building/building-2.jpg',
      '/assets/portfolio/building/building-3.jpg',
      '/assets/portfolio/building/building-4.jpg'
    ],
    hdSlide: null,
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Building%20Construction%20Project.'
  },
  {
    id: 'steel',
    category: 'steel',
    title: 'Steel Project',
    pageLabel: 'Halaman 06 · Rangka Baja WF & Gudang',
    images: [
      '/assets/portfolio/steel/steel-1.jpg',
      '/assets/portfolio/steel/steel-2.jpg',
      '/assets/portfolio/steel/steel-3.jpg',
      '/assets/portfolio/steel/steel-4.jpg'
    ],
    hdSlide: null,
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Steel%20Project.'
  },
  {
    id: 'concrete',
    category: 'concrete',
    title: 'Concrete Project',
    pageLabel: 'Halaman 07 · Pengecoran Beton & Rigid Pavement',
    images: [
      '/assets/portfolio/concrete/concrete-1.jpg',
      '/assets/portfolio/concrete/concrete-2.jpg',
      '/assets/portfolio/concrete/concrete-3.jpg',
      '/assets/portfolio/concrete/concrete-4.jpg'
    ],
    hdSlide: null,
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Concrete%20Project.'
  },
  {
    id: 'asphalt',
    category: 'asphalt',
    title: 'Asphalt Project',
    pageLabel: 'Halaman 08 · Pengaspalan Jalan & Maersk Sealand',
    images: [
      '/assets/portfolio/asphalt/asphalt-1.jpg',
      '/assets/portfolio/asphalt/asphalt-2.jpg',
      '/assets/portfolio/asphalt/asphalt-3.jpg',
      '/assets/portfolio/asphalt/asphalt-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/asphalt-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Asphalt%20Project.'
  },
  {
    id: 'acp',
    category: 'acp',
    title: 'ACP Project',
    pageLabel: 'Halaman 09 · Fasad ACP Gedung & Ruko',
    images: [
      '/assets/portfolio/acp/acp-1.jpg',
      '/assets/portfolio/acp/acp-2.jpg'
    ],
    hdSlide: null,
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20ACP%20Project.'
  },
  {
    id: 'waterproofing',
    category: 'waterproofing',
    title: 'Waterproofing Project',
    pageLabel: 'Halaman 10 · Anti Bocor Rooftop & Gedung BCA',
    images: [
      '/assets/portfolio/waterproofing/waterproofing-1.jpg',
      '/assets/portfolio/waterproofing/waterproofing-2.jpg',
      '/assets/portfolio/waterproofing/waterproofing-3.jpg',
      '/assets/portfolio/waterproofing/waterproofing-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/waterproofing-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Waterproofing%20Project.'
  },
  {
    id: 'canopy',
    category: 'canopy',
    title: 'Canopy Project',
    pageLabel: 'Halaman 11 · Kanopi Rangka Besi, Awning & Membran',
    images: [
      '/assets/portfolio/canopy/canopy-1.jpg',
      '/assets/portfolio/canopy/canopy-2.jpg',
      '/assets/portfolio/canopy/canopy-3.jpg',
      '/assets/portfolio/canopy/canopy-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/canopy-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Canopy%20Project.'
  },
  {
    id: 'interior',
    category: 'interior',
    title: 'Interior Office Project',
    pageLabel: 'Halaman 12-13 · Ruang Kerja, Meeting Room & Pantry',
    images: [
      '/assets/portfolio/interior/interior-1.jpg',
      '/assets/portfolio/interior/interior-2.jpg',
      '/assets/portfolio/interior/interior-3.jpg',
      '/assets/portfolio/interior/interior-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/interior-hd-1.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Interior%20Office.'
  },
  {
    id: 'branding',
    category: 'branding',
    title: 'Branding & Signage',
    pageLabel: 'Halaman 14-15 · Sampoerna, PT Harvest Metalindo, PT Siegwerk',
    images: [
      '/assets/portfolio/branding/branding-1.jpg',
      '/assets/portfolio/branding/branding-2.jpg',
      '/assets/portfolio/branding/branding-3.jpg',
      '/assets/portfolio/branding/branding-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/branding-hd-1.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Branding%20dan%20Signage.'
  },
  {
    id: 'partition',
    category: 'partition',
    title: 'Partition Project',
    pageLabel: 'Halaman 16 · Sekat Gypsum & Kaca Ruangan',
    images: [
      '/assets/portfolio/partition/partition-1.jpg',
      '/assets/portfolio/partition/partition-2.jpg',
      '/assets/portfolio/partition/partition-3.jpg',
      '/assets/portfolio/partition/partition-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/partition-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Partition%20Project.'
  },
  {
    id: 'epoxy',
    category: 'epoxy',
    title: 'Epoxy Project',
    pageLabel: 'Halaman 17 · Cat Lantai Epoxy Standar Industri',
    images: [
      '/assets/portfolio/epoxy/epoxy-1.jpg',
      '/assets/portfolio/epoxy/epoxy-2.jpg',
      '/assets/portfolio/epoxy/epoxy-3.jpg',
      '/assets/portfolio/epoxy/epoxy-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/epoxy-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Epoxy%20Lantai.'
  },
  {
    id: 'pengecatan',
    category: 'pengecatan',
    title: 'Pengecatan Project',
    pageLabel: 'Halaman 18-19 · Cat Gedung, Koridor, Interior & Eksterior',
    images: [
      '/assets/portfolio/pengecatan/pengecatan-1.jpg',
      '/assets/portfolio/pengecatan/pengecatan-2.jpg',
      '/assets/portfolio/pengecatan/pengecatan-3.jpg',
      '/assets/portfolio/pengecatan/pengecatan-4.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/pengecatan-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Pengecatan%20Gedung.'
  },
  {
    id: 'railing',
    category: 'railing',
    title: 'Railling Project',
    pageLabel: 'Halaman 20 · Railing Tangga Stainless & Balkon',
    images: [
      '/assets/portfolio/railing/railing-1.jpg',
      '/assets/portfolio/railing/railing-2.jpg',
      '/assets/portfolio/railing/railing-3.jpg',
      '/assets/portfolio/railing/railing-4.jpg'
    ],
    hdSlide: null,
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Railing%20Project.'
  },
  {
    id: 'mep',
    category: 'mep',
    title: 'Jaringan, CCTV & Elektrikal Project',
    pageLabel: 'Halaman 21-22 · Monitoring Camera, Server & Panel Listrik',
    images: [
      '/assets/portfolio/cctv/cctv-1.jpg',
      '/assets/portfolio/cctv/cctv-2.jpg',
      '/assets/portfolio/elektrikal/elektrikal-1.jpg',
      '/assets/portfolio/elektrikal/elektrikal-2.jpg'
    ],
    hdSlide: '/assets/portfolio/hd_slides/cctv-hd.jpg',
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20CCTV%20dan%20Elektrikal.'
  }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects;
  }
  return projects.filter(p => p.category === activeCategory.value);
});
</script>

<style scoped>
.section-header-center {
  text-align: center;
  margin-bottom: 40px;
}

.section-lead-text {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  max-width: 720px;
  margin: -16px auto 28px;
}

.pdf-filter-tab-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
}

.pdf-tab-btn {
  background: #FFFFFF;
  border: 1.5px solid var(--color-border);
  color: var(--color-text-dark);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--transition-fast);
}
.pdf-tab-btn:hover {
  border-color: var(--blue-primary);
  color: var(--blue-primary);
}
.pdf-tab-btn.active {
  background: var(--blue-primary);
  color: #FFFFFF;
  border-color: var(--blue-primary);
  box-shadow: var(--shadow-btn);
}

.portfolio-slides-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-slide-block {
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: 36px 36px 28px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-pdf-card);
  transition: transform var(--transition-normal);
  animation: fadeInUp 0.35s ease forwards;
}
.project-slide-block:hover {
  box-shadow: 0 20px 45px -5px rgba(0, 119, 200, 0.18);
}

.project-slide-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.header-right-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-view-slide-hd {
  background: var(--blue-bg-subtle);
  color: var(--blue-dark);
  border: 1px solid var(--color-border-blue);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--transition-fast);
}
.btn-view-slide-hd:hover {
  background: var(--blue-primary);
  color: #FFFFFF;
}

.pdf-slide-badge {
  background: var(--blue-primary);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 800;
  padding: 8px 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-pill);
  letter-spacing: 0.3px;
}

.slide-counter {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted);
}

.project-quad-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
.project-quad-grid.grid-2col {
  grid-template-columns: repeat(2, 1fr);
}

.quad-item {
  height: 240px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--blue-bg-subtle);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  position: relative;
  cursor: pointer;
}

.quad-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  transition: transform var(--transition-smooth);
}
.quad-item:hover img {
  transform: scale(1.06);
}

.zoom-indicator {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.65);
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.725rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity var(--transition-fast);
}
.quad-item:hover .zoom-indicator {
  opacity: 1;
}

.project-slide-footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.project-contact-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.c-pill {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: var(--blue-bg-subtle);
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border-blue);
}

.btn-consult-slide {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--blue-primary);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.btn-consult-slide:hover {
  color: var(--blue-dark);
  text-decoration: underline;
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .project-slide-block {
    padding: 24px 18px 18px;
  }
  .pdf-slide-badge {
    font-size: 1.05rem;
    padding: 6px 18px;
  }
  .header-right-actions {
    width: 100%;
    justify-content: space-between;
  }
  .project-quad-grid, .project-quad-grid.grid-2col {
    grid-template-columns: 1fr;
  }
  .quad-item {
    height: 200px;
  }
}
</style>
