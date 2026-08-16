<template>
  <div class="page-view">
    <PageHeader 
      title="Layanan Konstruksi &amp; Spesialis" 
      subtitle="14 Bidang Layanan Terpadu Mulai dari Konstruksi Bangunan, Baja, Beton, Aspal, ACP, Waterproofing, Interior hingga Sistem MEP."
    />

    <!-- What We Do Visual Overview -->
    <WhatWeDo @open-image="$emit('open-image', $event[0], $event[1])" />

    <!-- Detailed 14 Services Breakdown -->
    <section class="section section-services-list">
      <div class="container">
        <div class="pdf-slide-card">
          <div class="pdf-pill-badge">Rincian 14 Layanan Utama</div>

          <div class="services-detail-grid">
            <div class="service-detail-card" v-for="srv in services" :key="srv.title">
              <div class="srv-badge-category">{{ srv.category }}</div>
              <h3 class="srv-title">{{ srv.title }}</h3>
              <p class="srv-desc">{{ srv.description }}</p>
              <ul class="srv-points">
                <li v-for="pt in srv.points" :key="pt">{{ pt }}</li>
              </ul>
              <a :href="srv.waLink" target="_blank" class="btn btn-outline-blue btn-sm btn-srv-cta">
                <span>Konsultasi Layanan Ini</span>
                &rarr;
              </a>
            </div>
          </div>

          <!-- Bottom Contact Bar -->
          <div class="slide-bottom-bar">
            <div class="slide-pills-left">
              <span class="slide-pill">6281231716286</span>
              <span class="slide-pill">628128490094</span>
              <span class="slide-pill">@karyatimcontractor</span>
            </div>
            <router-link to="/portfolio" class="slide-next-btn" aria-label="Ke Halaman Portofolio">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Connect Footer -->
    <ConnectFooter />
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import WhatWeDo from '../components/WhatWeDo.vue';
import ConnectFooter from '../components/ConnectFooter.vue';

defineEmits(['open-image']);

const services = [
  {
    category: 'Sipil & Gedung',
    title: '1. Building Construction Project',
    description: 'Pembangunan gedung baru, pabrik, pergudangan, ruko komersial, dan renovasi total dengan perhitungan struktural SNI presisi.',
    points: ['Perhitungan struktur & pondasi bore pile / footplat', 'Manajemen proyek & pengawasan bertahap', 'Serah terima BAST bergaransi resmi'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Building%20Construction.'
  },
  {
    category: 'Struktur Berat',
    title: '2. Steel / Konstruksi Baja',
    description: 'Fabrikasi dan ereksi rangka baja WF, H-Beam, dan cangkang struktur baja untuk gudang modern, pabrik, mezzanine, dan hanggar bentang lebar.',
    points: ['Pengelasan presisi & standar K3 tinggi', 'Daya tahan bentang lebar ekstra kuat', 'Ereksi alat berat & crane terkoordinasi'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Konstruksi%20Baja.'
  },
  {
    category: 'Struktur Beton',
    title: '3. Concrete / Pengecoran Beton',
    description: 'Pengecoran dak beton, lantai kerja pabrik (rigid pavement), retaining wall batu kali, bore pile, dan kolom struktur berstandar mutu K-300+.',
    points: ['Mutu beton ready-mix terstandar lab', 'Pembesian wiremesh / rebar akurat', 'Finishing trowel halus & anti retak'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Pengecoran%20Beton.'
  },
  {
    category: 'Infrastruktur Jalan',
    title: '4. Asphalt / Pengaspalan Jalan',
    description: 'Jasa pengaspalan hotmix jalan industri, pergudangan, perumahan, area parkir Maersk Sealand, dan perbaikan tambal sulam jalan.',
    points: ['Aspal Hotmix ATB / HRS / Binder Course', 'Pemadatan tandem roller modern', 'Daya dukung tonase kontainer berat'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Pengaspalan%20Jalan.'
  },
  {
    category: 'Fasad Arsitektur',
    title: '5. ACP (Aluminium Composite Panel)',
    description: 'Pemasangan fasad panel ACP eksterior gedung, ruko, dan showroom agar tampil modern, berkelas, tahan cuaca ekstrem, dan mudah dibersihkan.',
    points: ['Rangka hollow galvanis anti karat', 'Pilihan merk Seven, Alucobond, dll', 'Sealant rapi & presisi tahan bocor'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Pemasangan%20ACP.'
  },
  {
    category: 'Proteksi Kebocoran',
    title: '6. Waterproofing System',
    description: 'Solusi tuntas anti-bocor untuk dak beton, rooftop gedung BCA, basement, dan dinding luar gedung dengan membran bakar, coating, dan injeksi PU.',
    points: ['Membran bakar & coating elastomeric', 'Injeksi polyurethane titik bocor', 'Bergaransi bebas rembes'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Waterproofing.'
  },
  {
    category: 'Eksterior & Shelter',
    title: '7. Kanopi Minimalis & Industrial',
    description: 'Fabrikasi dan pemasangan kanopi carport, selasar pabrik, drop-off area dengan material kaca tempered, solarflat, alderon, membran, dan rangka baja.',
    points: ['Desain arsitektural modern', 'Rangka besi hollow / WF kokoh', 'Tahan beban angin & radiasi UV'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Kanopi.'
  },
  {
    category: 'Interior & Fit-Out',
    title: '8. Interior Office & Branding',
    description: 'Desain & build interior kantor, ruang meeting, workstation, backdrop logo 3D, resepsionis, dan retail branding yang meningkatkan prestise bisnis.',
    points: ['Custom furniture HPL & finishing rapi', 'Tata ruang ergonomis & modern', 'Signage acrylic LED 3D letter'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Interior%20Office.'
  },
  {
    category: 'Partisi Ruangan',
    title: '9. Partisi Gypsum & Kaca',
    description: 'Pemasangan sekat partisi ruangan kantor, partisi gypsum peredam suara (rockwool), partisi kaca tempered frameless, dan movable partition.',
    points: ['Rangka aluminium & hollow kuat', 'Sambungan kompon halus tanpa retak', 'Peredam suara akustik efektif'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Partisi.'
  },
  {
    category: 'Lantai Industri',
    title: '10. Epoxy Lantai (Floor Coating)',
    description: 'Aplikasi cat epoxy lantai standar industri, gudang logistik, pabrik food/pharma grade steril, dan area parkir tahan gesek serta bahan kimia.',
    points: ['Self-leveling glossy & tahan gores', 'Standar kebersihan HACCP & GMP', 'Pilihan warna hijau, biru, abu-abu'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Epoxy%20Lantai.'
  },
  {
    category: 'Finishing Gedung',
    title: '11. Pengecatan Gedung & Pabrik',
    description: 'Pengecatan eksterior gedung bertingkat tinggi (rope access/gondola), dinding interior, plafon, serta proteksi cat anti-karat/epoxy pada struktur baja pabrik.',
    points: ['Cat weather-shield anti jamur & lumut', 'Tim spesialis ketinggian bersertifikat K3', 'Aplikasi roller & airless spray rapi'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Pengecatan%20Gedung.'
  },
  {
    category: 'Besi & Stainless',
    title: '12. Railing Tangga & Pagar',
    description: 'Pembuatan dan pemasangan railing tangga darurat, balkon kaca tempered, handrail stainless steel 304, tangga putar, dan pagar minimalis modern.',
    points: ['Material stainless SUS 304 anti karat', 'Las argon halus & sambungan kokoh', 'Standar keamanan gedung komersial'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Railing.'
  },
  {
    category: 'Mekanikal Elektrikal',
    title: '13. Elektrikal & Panel Daya (MDP/SDP)',
    description: 'Instalasi kelistrikan tegangan rendah & menengah, perakitan panel distribusi MDP/SDP, instalasi genset, grounding system tembaga murni, dan penerangan gedung.',
    points: ['Sesuai standar PUIL & SNI', 'Penyeimbangan beban daya aman', 'Instalasi lampu LED linear rapi'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Elektrikal.'
  },
  {
    category: 'Security & IT',
    title: '14. Jaringan IT & CCTV Surveillance',
    description: 'Pemasangan infrastruktur jaringan data LAN kabel Fiber Optic/Cat6, server rack cabinet, access control pintu, dan sistem IP Camera CCTV Hikvision online.',
    points: ['Monitoring jarak jauh via smartphone', 'Server rack & switch hub terorganisir', 'Manajemen kabel berlabel rapi'],
    waLink: 'https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20tertarik%20dengan%20layanan%20Jaringan%20dan%20CCTV.'
  }
];
</script>

<style scoped>
.services-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.service-detail-card {
  background: #FFFFFF;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  transition: all var(--transition-normal);
}
.service-detail-card:hover {
  border-color: var(--blue-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-pdf-card);
}

.srv-badge-category {
  background: var(--blue-bg-subtle);
  color: var(--blue-primary);
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  width: fit-content;
  margin-bottom: 12px;
}

.srv-title {
  font-size: 1.25rem;
  color: var(--blue-dark);
  margin-bottom: 10px;
}

.srv-desc {
  font-size: 0.925rem;
  color: var(--color-text-dark);
  line-height: 1.6;
  margin-bottom: 16px;
}

.srv-points {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
  padding-top: 14px;
  border-top: 1px dashed var(--color-border);
}
.srv-points li {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  position: relative;
  padding-left: 16px;
}
.srv-points li::before {
  content: '•';
  color: var(--blue-primary);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.btn-srv-cta {
  width: fit-content;
}

@media (max-width: 992px) {
  .services-detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>
