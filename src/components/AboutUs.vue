<template>
  <section class="section section-about-pdf" id="about-us">
    <div class="container">
      <div class="pdf-slide-card">
        <div class="pdf-pill-badge">About Us</div>
        
        <div class="about-content-box">
          <p class="about-lead-bold">
            PT. Karyatim Mandiri Engineering merupakan perusahaan kontraktor umum yang berdomisili di Kota Surabaya sejak 2014 yang berfokus pada konstruksi umum.
          </p>
          <div class="about-divider"></div>
          <p class="about-focus-text">
            Fokus kami adalah <strong>customer oriented</strong> dimana kami selalu mengedepankan kebutuhan dan kepuasan pelanggan sesuai dengan <strong>mutu, waktu, biaya,</strong> dan <strong>scope pekerjaan</strong>.
          </p>
        </div>

        <!-- Floating Pills Bottom Bar khas slide PDF -->
        <div class="slide-bottom-bar">
          <div class="slide-pills-left">
            <span class="slide-pill">6281231716286</span>
            <span class="slide-pill">628128490094</span>
            <span class="slide-pill">@karyatimcontractor</span>
          </div>
          <a href="#our-clients" class="slide-next-btn" aria-label="Next Slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section-about-pdf {
  background: url('/assets/portfolio/hero/hero-1.jpg') center/cover no-repeat;
  position: relative;
}
.section-about-pdf::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(240, 246, 252, 0.92);
}
.section-about-pdf .container {
  position: relative;
  z-index: 2;
}

.about-content-box {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0 20px;
}

.about-lead-bold {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text-navy);
  line-height: 1.6;
}

.about-divider {
  width: 80px;
  height: 4px;
  background: var(--blue-primary);
  border-radius: var(--radius-pill);
  margin: 24px auto;
}

.about-focus-text {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .about-lead-bold {
    font-size: 1.15rem;
  }
  .about-focus-text {
    font-size: 1rem;
  }
}
</style>
