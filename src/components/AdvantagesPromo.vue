<template>
  <section class="section section-advantages-pdf" id="keuntungan">
    <div class="container">
      <div class="pdf-slide-card advantages-card">
        <h2 class="pdf-3d-title">KEUNTUNGAN KERJASAMA BARENG KAMI!</h2>

        <!-- 6 Checklist Advantages dari Page 23 -->
        <div class="advantages-grid">
          <div class="advantage-pill-card" v-for="item in advantages" :key="item">
            <div class="adv-check-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span class="adv-text">{{ item }}</span>
          </div>
        </div>

        <!-- Callout Banner Promo dari Page 23 -->
        <div class="pdf-promo-callout">
          <span class="promo-small-tag">Dapatkan</span>
          <h3 class="promo-main-tag">GRATIS KONSULTASI dan PROMO MENARIK LAINNYA!</h3>
          <p class="promo-instruct">
            Konsultasi secara langsung melalui <strong>DM Instagram @karyatimcontractor</strong> dan <strong>Whatsapp 628128490094</strong> atau <strong>6281231716286</strong>
          </p>
          <div class="promo-actions">
            <a href="https://wa.me/6281231716286?text=Halo%20PT%20Karyatim,%20saya%20ingin%20klaim%20Gratis%20Konsultasi%20dan%20Promo%20Menarik." target="_blank" class="btn btn-primary btn-lg">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>Chat WhatsApp CS 1 (0812-3171-6286)</span>
            </a>
            <a href="https://wa.me/628128490094?text=Halo%20PT%20Karyatim,%20saya%20ingin%20klaim%20Gratis%20Konsultasi." target="_blank" class="btn btn-outline-blue btn-lg">
              <span>Chat WhatsApp CS 2 (0812-8490-094)</span>
            </a>
          </div>
        </div>

        <!-- Slide Bottom Contact Bar -->
        <div class="slide-bottom-bar">
          <div class="slide-pills-left">
            <span class="slide-pill">6281231716286</span>
            <span class="slide-pill">628128490094</span>
            <span class="slide-pill">@karyatimcontractor</span>
          </div>
          <a href="#estimasi-rab" class="slide-next-btn" aria-label="Next Slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  'Jasa dan hasil yang berkualitas',
  'Tenaga ahli pada bidangnya',
  'Transparasi Rencana Anggaran Biaya',
  'Monitoring proyek berkala',
  'Proses aman dan terpercaya',
  'Keamanan pembayaran terjamin 100%'
];
</script>

<style scoped>
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 900px;
  margin: 0 auto 40px;
}

.advantage-pill-card {
  background: #FFFFFF;
  border: 1.5px solid var(--color-border-blue);
  border-radius: var(--radius-pill);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 4px 12px rgba(0, 119, 200, 0.06);
  transition: all var(--transition-fast);
}
.advantage-pill-card:hover {
  border-color: var(--blue-primary);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 119, 200, 0.15);
}

.adv-check-icon {
  width: 28px;
  height: 28px;
  background: var(--blue-primary);
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.adv-check-icon svg {
  width: 16px;
  height: 16px;
}

.adv-text {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-navy);
}

.pdf-promo-callout {
  background: linear-gradient(135deg, var(--blue-bg-subtle) 0%, #FFFFFF 100%);
  border: 2px dashed var(--blue-primary);
  border-radius: var(--radius-xl);
  padding: 36px;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

.promo-small-tag {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--blue-dark);
  display: block;
  margin-bottom: 4px;
}

.promo-main-tag {
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--blue-primary);
  margin-bottom: 12px;
}

.promo-instruct {
  font-size: 1.05rem;
  color: var(--color-text-dark);
  margin-bottom: 24px;
  line-height: 1.6;
}

.promo-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

@media (max-width: 768px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  .pdf-promo-callout {
    padding: 24px 16px;
  }
  .promo-main-tag {
    font-size: 1.3rem;
  }
}
</style>
