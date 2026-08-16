<template>
  <footer class="section section-connect-pdf" id="connect-with-us">
    <div class="container">
      <div class="pdf-slide-card connect-card">
        <h2 class="pdf-3d-title">CONNECT WITH US</h2>

        <div class="connect-info-box">
          <div class="connect-row">
            <span class="connect-label">WhatsApp</span>
            <span class="connect-value">
              <a href="https://wa.me/6281231716286" target="_blank" class="link-highlight">081231716286</a> / 
              <a href="https://wa.me/628128490094" target="_blank" class="link-highlight">628128490094</a>
            </span>
          </div>

          <div class="connect-row">
            <span class="connect-label">Website</span>
            <span class="connect-value">
              <a href="https://linktr.ee/KaryatimSurabaya" target="_blank" rel="noopener noreferrer" class="link-highlight">linktr.ee/KaryatimSurabaya</a>
            </span>
          </div>

          <div class="connect-row">
            <span class="connect-label">Instagram</span>
            <span class="connect-value">
              <a href="https://instagram.com/karyatimcontractor" target="_blank" rel="noopener noreferrer" class="link-highlight">instagram.com/karyatimcontractor</a>
            </span>
          </div>

          <div class="connect-row">
            <span class="connect-label">Email Resmi</span>
            <span class="connect-value">
              <a href="mailto:infokaryatimsurabaya@gmail.com" class="link-highlight">infokaryatimsurabaya@gmail.com</a>
            </span>
          </div>
        </div>

        <!-- Scan QR Box dari Page 24 -->
        <div class="qr-scan-box">
          <span class="scan-badge">SCAN!</span>
          <div class="qr-code-frame">
            <svg viewBox="0 0 100 100" class="qr-svg">
              <rect width="100" height="100" fill="white"/>
              <!-- Corner 1 -->
              <rect x="10" y="10" width="26" height="26" fill="#000" rx="3"/>
              <rect x="15" y="15" width="16" height="16" fill="#fff" rx="2"/>
              <rect x="19" y="19" width="8" height="8" fill="#000"/>
              <!-- Corner 2 -->
              <rect x="64" y="10" width="26" height="26" fill="#000" rx="3"/>
              <rect x="69" y="15" width="16" height="16" fill="#fff" rx="2"/>
              <rect x="73" y="19" width="8" height="8" fill="#000"/>
              <!-- Corner 3 -->
              <rect x="10" y="64" width="26" height="26" fill="#000" rx="3"/>
              <rect x="15" y="69" width="16" height="16" fill="#fff" rx="2"/>
              <rect x="19" y="73" width="8" height="8" fill="#000"/>
              <!-- Data Patterns -->
              <rect x="42" y="12" width="6" height="6" fill="#0077C8"/>
              <rect x="52" y="18" width="6" height="6" fill="#000"/>
              <rect x="42" y="28" width="6" height="6" fill="#000"/>
              <rect x="52" y="32" width="6" height="6" fill="#0077C8"/>
              <rect x="12" y="44" width="6" height="6" fill="#000"/>
              <rect x="24" y="48" width="6" height="6" fill="#0077C8"/>
              <rect x="36" y="44" width="6" height="6" fill="#000"/>
              <rect x="48" y="48" width="6" height="6" fill="#000"/>
              <rect x="60" y="44" width="6" height="6" fill="#0077C8"/>
              <rect x="72" y="48" width="6" height="6" fill="#000"/>
              <rect x="84" y="44" width="6" height="6" fill="#000"/>
              <rect x="42" y="62" width="6" height="6" fill="#000"/>
              <rect x="52" y="68" width="6" height="6" fill="#0077C8"/>
              <rect x="64" y="64" width="6" height="6" fill="#000"/>
              <rect x="76" y="72" width="6" height="6" fill="#000"/>
              <rect x="86" y="80" width="6" height="6" fill="#0077C8"/>
              <rect x="42" y="82" width="6" height="6" fill="#0077C8"/>
              <rect x="54" y="84" width="6" height="6" fill="#000"/>
              <rect x="68" y="84" width="6" height="6" fill="#000"/>
            </svg>
          </div>
          <span class="qr-hint">Scan untuk simpan kontak &amp; portfolio digital</span>
        </div>

        <!-- Slide Bottom Contact Bar -->
        <div class="slide-bottom-bar">
          <div class="slide-pills-left">
            <span class="slide-pill">6281231716286</span>
            <span class="slide-pill">628128490094</span>
            <span class="slide-pill">@karyatimcontractor</span>
          </div>
          <a href="#beranda" class="slide-next-btn" aria-label="Kembali ke Atas">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          </a>
        </div>
      </div>

      <!-- Copyright Subfooter -->
      <div class="subfooter-copyright">
        <p>&copy; 2014 &ndash; {{ currentYear }} PT. Karyatim Mandiri Engineering. General Contractor &amp; Engineering Solution.</p>
        <p class="subfooter-tagline">Surabaya, Jawa Timur &bull; Customer Oriented &bull; Mutu, Waktu &amp; Biaya Terpercaya</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.section-connect-pdf {
  background: var(--color-bg-page);
  padding: 80px 0 40px;
}

.connect-card {
  text-align: center;
}

.connect-info-box {
  max-width: 640px;
  margin: 0 auto 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.connect-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: var(--blue-bg-subtle);
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border-blue);
}

.connect-label {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--blue-dark);
}

.connect-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text-dark);
}

.link-highlight {
  color: var(--blue-primary);
}
.link-highlight:hover {
  color: var(--blue-dark);
  text-decoration: underline;
}

.qr-scan-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.scan-badge {
  background: var(--blue-primary);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  padding: 4px 14px;
  border-radius: var(--radius-pill);
}

.qr-code-frame {
  width: 130px;
  height: 130px;
  padding: 10px;
  background: #FFFFFF;
  border: 2px solid var(--blue-primary);
  border-radius: var(--radius-lg);
  box-shadow: 0 6px 18px rgba(0, 119, 200, 0.15);
}

.qr-svg {
  width: 100%;
  height: 100%;
}

.qr-hint {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.subfooter-copyright {
  margin-top: 40px;
  text-align: center;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

@media (max-width: 768px) {
  .connect-row {
    flex-direction: column;
    gap: 4px;
    text-align: center;
    border-radius: var(--radius-lg);
  }
}
</style>
