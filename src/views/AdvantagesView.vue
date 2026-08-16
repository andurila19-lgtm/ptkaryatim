<template>
  <div class="page-view">
    <PageHeader 
      title="Keunggulan &amp; Jaminan Mutu" 
      subtitle="Komitmen PT. Karyatim Mandiri Engineering dalam Menghadirkan Standar Konstruksi Berkualitas Tinggi, Transparan, dan Aman 100%."
    />

    <!-- Advantages Component -->
    <AdvantagesPromo />

    <!-- 4 Detailed Guarantee Blocks -->
    <section class="section section-guarantee">
      <div class="container">
        <div class="pdf-slide-card">
          <div class="pdf-pill-badge">Standar Kerja &amp; Garansi Resmi</div>

          <div class="guarantee-grid">
            <div class="guarantee-card">
              <div class="g-num">01</div>
              <h3>Kepatuhan Standar K3</h3>
              <p>Setiap proyek dilaksanakan dengan perlengkapan APD lengkap, rambu keselamatan kerja, dan prosedur operasional standar (SOP) untuk menjamin keamanan di lokasi kerja.</p>
            </div>

            <div class="guarantee-card">
              <div class="g-num">02</div>
              <h3>Transparansi RAB 100%</h3>
              <p>Rincian estimasi biaya terbuka tanpa mark-up siluman. Spesifikasi merk semen, besi, pipa, cat, dan panel tertulis jelas di kontrak kerja resmi.</p>
            </div>

            <div class="guarantee-card">
              <div class="g-num">03</div>
              <h3>Monitoring Fisik &amp; Kurva S</h3>
              <p>Pengawasan terjadwal oleh mandor dan engineer senior. Anda menerima dokumentasi foto/video mingguan untuk memantau capaian target fisik.</p>
            </div>

            <div class="guarantee-card">
              <div class="g-num">04</div>
              <h3>Sertifikat Masa Garansi</h3>
              <p>Setelah serah terima (BAST), proyek dilindungi masa pemeliharaan resmi dengan respon cepat jika terdapat perbaikan teknis pasca-konstruksi.</p>
            </div>
          </div>

          <!-- Bottom Contact Bar -->
          <div class="slide-bottom-bar">
            <div class="slide-pills-left">
              <span class="slide-pill">6281231716286</span>
              <span class="slide-pill">628128490094</span>
              <span class="slide-pill">@karyatimcontractor</span>
            </div>
            <router-link to="/contact" class="slide-next-btn" aria-label="Ke Halaman Kontak">
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
import AdvantagesPromo from '../components/AdvantagesPromo.vue';
import ConnectFooter from '../components/ConnectFooter.vue';
</script>

<style scoped>
.guarantee-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 20px;
}

.guarantee-card {
  background: var(--blue-bg-subtle);
  border: 1.5px solid var(--color-border-blue);
  border-radius: var(--radius-xl);
  padding: 30px;
  position: relative;
}

.g-num {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--blue-primary);
  margin-bottom: 8px;
}

.guarantee-card h3 {
  font-size: 1.25rem;
  color: var(--blue-dark);
  margin-bottom: 10px;
}

.guarantee-card p {
  font-size: 0.925rem;
  color: var(--color-text-dark);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .guarantee-grid {
    grid-template-columns: 1fr;
  }
}
</style>
