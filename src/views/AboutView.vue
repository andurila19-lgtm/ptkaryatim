<template>
  <div class="page-view">
    <PageHeader 
      title="Tentang Kami (About Us)" 
      subtitle="Profil resmi PT. Karyatim Mandiri Engineering, kontraktor umum dan rekayasa teknik terpercaya di Kota Surabaya sejak 2014."
    />

    <section class="section">
      <div class="container">
        <div class="pdf-slide-card about-detail-card">
          <div class="pdf-pill-badge">Profil Perusahaan</div>

          <div class="about-hero-grid">
            <div class="about-text-col">
              <h2 class="section-subhead">Dedikasi Konstruksi Profesional &amp; Customer Oriented Sejak 2014</h2>
              <p class="about-paragraph">
                <strong>PT. Karyatim Mandiri Engineering</strong> merupakan perusahaan kontraktor umum yang berdomisili di Kota Surabaya sejak tahun 2014 yang berfokus pada konstruksi umum, sipil, mekanikal elektrikal, interior, serta finishing spesialis.
              </p>
              <p class="about-paragraph">
                Fokus utama kami adalah <strong>customer oriented</strong>, dimana kami selalu mengedepankan kebutuhan dan kepuasan pelanggan secara menyeluruh dengan berpegang teguh pada 4 pilar kendali: <strong>Mutu yang presisi, Ketepatan waktu (On-time schedule), Efisiensi anggaran (RAB transparan), dan Kesesuaian scope pekerjaan</strong>.
              </p>
            </div>
            <div class="about-img-col">
              <img src="/assets/portfolio/team_indofood/team_indofood-hd.jpg" alt="Tim Lapangan PT Karyatim Mandiri" class="about-feature-img" @click="$emit('open-image', '/assets/portfolio/team_indofood/team_indofood-hd.jpg', 'Tim PT Karyatim Mandiri Engineering di Proyek')">
              <span class="img-caption">Foto Tim Engineering &amp; Tenaga Ahli Karyatim di Lapangan</span>
            </div>
          </div>

          <!-- Visi & Misi Cards -->
          <div class="vision-mission-grid">
            <div class="vm-card">
              <div class="vm-icon">🎯</div>
              <h3>Visi Perusahaan</h3>
              <p>Menjadi mitra kontraktor umum terdepan dan paling terpercaya di Jawa Timur dan Indonesia, yang dikenal atas integritas teknik, ketepatan waktu, mutu terbaik, dan transparansi menyeluruh.</p>
            </div>
            <div class="vm-card">
              <div class="vm-icon">🚀</div>
              <h3>Misi Perusahaan</h3>
              <ul class="vm-list">
                <li>Memberikan solusi konstruksi terpadu dengan standar teknis SNI dan kepatuhan K3 ketat.</li>
                <li>Menyusun perencanaan anggaran (RAB) yang transparan, rasional, dan tanpa biaya tersembunyi.</li>
                <li>Menjaga jadwal pelaksanaan secara disiplin melalui monitoring fisik dan laporan kurva S berkala.</li>
                <li>Membangun hubungan kemitraan jangka panjang berlandaskan kepercayaan dan garansi pemeliharaan.</li>
              </ul>
            </div>
          </div>

          <!-- 4 Core Pillars -->
          <div class="pillars-block">
            <h3 class="pillars-title">4 Nilai Utama Kami</h3>
            <div class="pillars-grid">
              <div class="pillar-box">
                <span class="pillar-num">01</span>
                <h4>Mutu Teruji</h4>
                <p>Didukung tenaga ahli bersertifikasi dan material bermutu tinggi.</p>
              </div>
              <div class="pillar-box">
                <span class="pillar-num">02</span>
                <h4>Tepat Waktu</h4>
                <p>Monitoring berkala mingguan memastikan milestone serah terima tercapai on-time.</p>
              </div>
              <div class="pillar-box">
                <span class="pillar-num">03</span>
                <h4>Transparansi Biaya</h4>
                <p>RAB rinci, item pekerjaan jelas, dan penyesuaian anggaran fleksibel.</p>
              </div>
              <div class="pillar-box">
                <span class="pillar-num">04</span>
                <h4>Scope Tuntas</h4>
                <p>Pelaksanaan menyeluruh dari pondasi struktur hingga finishing bergaransi.</p>
              </div>
            </div>
          </div>

          <!-- Action CTA -->
          <div class="about-action-bar">
            <a href="https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20ingin%20konsultasi%20mengenai%20profil%20dan%20kebutuhan%20proyek%20kami." target="_blank" class="btn btn-primary btn-lg">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>Konsultasikan Proyek Anda Sekarang</span>
            </a>
          </div>

          <!-- Bottom Contact Bar -->
          <div class="slide-bottom-bar">
            <div class="slide-pills-left">
              <span class="slide-pill">6281231716286</span>
              <span class="slide-pill">628128490094</span>
              <span class="slide-pill">@karyatimcontractor</span>
            </div>
            <router-link to="/services" class="slide-next-btn" aria-label="Ke Halaman Layanan">
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
import ConnectFooter from '../components/ConnectFooter.vue';

defineEmits(['open-image']);
</script>

<style scoped>
.about-hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 36px;
  align-items: center;
  margin-bottom: 40px;
}

.section-subhead {
  font-size: 1.65rem;
  color: var(--blue-dark);
  margin-bottom: 16px;
  line-height: 1.3;
}

.about-paragraph {
  font-size: 1.05rem;
  color: var(--color-text-dark);
  line-height: 1.7;
  margin-bottom: 16px;
}

.about-img-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-feature-img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-pdf-card);
  cursor: pointer;
  transition: transform var(--transition-smooth);
}
.about-feature-img:hover {
  transform: scale(1.03);
}

.img-caption {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-top: 8px;
  text-align: center;
}

.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 40px;
}

.vm-card {
  background: var(--blue-bg-subtle);
  border: 1.5px solid var(--color-border-blue);
  border-radius: var(--radius-xl);
  padding: 32px;
}

.vm-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.vm-card h3 {
  font-size: 1.35rem;
  color: var(--blue-dark);
  margin-bottom: 12px;
}

.vm-card p {
  font-size: 0.95rem;
  color: var(--color-text-dark);
  line-height: 1.65;
}

.vm-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.vm-list li {
  font-size: 0.925rem;
  color: var(--color-text-dark);
  position: relative;
  padding-left: 18px;
}
.vm-list li::before {
  content: '✓';
  color: var(--blue-primary);
  font-weight: 800;
  position: absolute;
  left: 0;
}

.pillars-block {
  background: #FFFFFF;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 32px;
  margin-bottom: 32px;
}

.pillars-title {
  text-align: center;
  font-size: 1.45rem;
  color: var(--blue-primary);
  margin-bottom: 24px;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.pillar-box {
  background: var(--color-bg-page);
  border-radius: var(--radius-lg);
  padding: 20px;
  text-align: center;
  position: relative;
}

.pillar-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--blue-primary);
  display: block;
  margin-bottom: 4px;
}

.pillar-box h4 {
  font-size: 1.1rem;
  color: var(--blue-dark);
  margin-bottom: 6px;
}

.pillar-box p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.about-action-bar {
  text-align: center;
  margin: 32px 0 10px;
}

@media (max-width: 992px) {
  .about-hero-grid, .vision-mission-grid {
    grid-template-columns: 1fr;
  }
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }
}
</style>
