<template>
  <div class="page-view">
    <PageHeader 
      title="Klien &amp; Mitra Kami (Our Clients)" 
      subtitle="Kepercayaan dari Korporasi Multinasional, Industri Manufaktur, BUMN, Institusi Pendidikan, dan Brand Ternama di Indonesia."
    />

    <!-- Clients Showcase Component -->
    <OurClients />

    <!-- Detailed Client Partnerships Highlight -->
    <section class="section section-clients-detail">
      <div class="container">
        <div class="pdf-slide-card">
          <div class="pdf-pill-badge">Rekam Jejak Kemitraan Proyek</div>

          <div class="client-stories-grid">
            <div class="story-card">
              <div class="story-header">
                <span class="story-tag">Manufaktur Makanan &amp; Minuman</span>
                <h4>PT. Indofood CBP Sukses Makmur Tbk</h4>
              </div>
              <p>Pengerjaan struktur sipil, perbaikan lantai, waterproofing, dan instalasi mekanikal elektrikal di pabrik Gempol - Pasuruan dengan standar K3 dan kebersihan industri ketat.</p>
            </div>

            <div class="story-card">
              <div class="story-header">
                <span class="story-tag">Industri Tembakau &amp; Yayasan</span>
                <h4>PT. HM Sampoerna Tbk &amp; Yayasan Sampoerna</h4>
              </div>
              <p>Pekerjaan branding 3D signage, renovasi interior kantor, backdrop korporat, serta partisi ruangan meeting berstandar estetika tinggi di Surabaya.</p>
            </div>

            <div class="story-card">
              <div class="story-header">
                <span class="story-tag">Logistik Global &amp; Pelabuhan</span>
                <h4>A.P. Moller - Maersk (Maersk Sealand)</h4>
              </div>
              <p>Pengaspalan jalan hotmix dan rigid pavement area parkir alat berat serta depo kontainer pelabuhan berdaya dukung tonase tinggi.</p>
            </div>

            <div class="story-card">
              <div class="story-header">
                <span class="story-tag">BUMN Konstruksi &amp; Properti</span>
                <h4>PT. PP Properti Tbk &amp; PT PAL Indonesia</h4>
              </div>
              <p>Pekerjaan subkontraktor sipil, pengecoran struktur beton, instalasi railing stainless steel tangga darurat, dan pekerjaan MEP gedung.</p>
            </div>
          </div>

          <!-- Bottom Contact Bar -->
          <div class="slide-bottom-bar">
            <div class="slide-pills-left">
              <span class="slide-pill">6281231716286</span>
              <span class="slide-pill">628128490094</span>
              <span class="slide-pill">@karyatimcontractor</span>
            </div>
            <router-link to="/advantages" class="slide-next-btn" aria-label="Ke Halaman Keunggulan">
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
import OurClients from '../components/OurClients.vue';
import ConnectFooter from '../components/ConnectFooter.vue';
</script>

<style scoped>
.client-stories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.story-card {
  background: var(--blue-bg-subtle);
  border: 1.5px solid var(--color-border-blue);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.story-header {
  margin-bottom: 10px;
}

.story-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--blue-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 4px;
}

.story-card h4 {
  font-size: 1.15rem;
  color: var(--blue-dark);
}

.story-card p {
  font-size: 0.9rem;
  color: var(--color-text-dark);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .client-stories-grid {
    grid-template-columns: 1fr;
  }
}
</style>
