<template>
  <section class="hero-pdf-style" id="beranda">
    <!-- Fullscreen Background Video -->
    <div class="hero-video-bg-container">
      <video 
        ref="bgVideo"
        src="/assets/videos/company-profile.mp4" 
        autoplay 
        muted 
        loop 
        playsinline 
        class="hero-video-bg"
      ></video>
    </div>
    
    <!-- Dark Gradient Overlay for Contrast & Brand Colors -->
    <div class="hero-bg-overlay"></div>
    
    <!-- Hero Content Card Centered on Top of Video -->
    <div class="container hero-container">
      <div class="hero-main-card">
        
        <div class="karyatim-hero-logo">
          <svg viewBox="0 0 100 100" fill="none" class="hero-logo-svg">
            <path d="M25 75 A 36 36 0 0 1 75 25" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
            <path d="M35 85 A 48 48 0 0 1 85 35" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
            <path d="M15 65 A 24 24 0 0 1 65 15" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
          </svg>
          <div class="hero-logo-words">
            <span class="hero-brand-name">KARYATIM</span>
            <span class="hero-brand-mid">ENGINEERING</span>
            <span class="hero-brand-sub">CONTRACTORS</span>
          </div>
        </div>

        <h1 class="hero-main-title">
          Solusi Konstruksi Profesional, Tepat Waktu, Transparan, &amp; Customer Oriented.
        </h1>

        <p class="hero-lead-text">
          Kontraktor Umum &amp; Spesialis Konstruksi Surabaya beroperasi sejak 2014. Melayani proyek komersial, pabrik, gudang, perkantoran, dan infrastruktur dengan standar mutu terbaik.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-btn-group">
          <a href="https://wa.me/6281231716286?text=Halo%20PT%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20gratis%20sekarang." target="_blank" rel="noopener noreferrer" class="btn btn-hero-primary shadow-glow">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Konsultasi Gratis Sekarang</span>
          </a>
          <a href="#portofolio-proyek" class="btn btn-hero-secondary">
            <span>Lihat Galeri Portofolio</span>
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>

        <!-- Contact Pills Strip (Khas PDF Page 1-2) -->
        <div class="pdf-contact-strip">
          <a href="https://wa.me/6281231716286" target="_blank" class="contact-pill-item">
            <span class="pill-dot"></span>
            <span>WA 1: 0812-3171-6286</span>
          </a>
          <a href="https://wa.me/628128490094" target="_blank" class="contact-pill-item">
            <span class="pill-dot"></span>
            <span>WA 2: 0812-8490-094</span>
          </a>
          <a href="https://instagram.com/karyatimcontractor" target="_blank" class="contact-pill-item">
            <span class="pill-dot"></span>
            <span>IG: @karyatimcontractor</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Floating Audio Control Button -->
    <button @click="toggleMute" class="btn-audio-control" :class="{ 'is-unmuted': !isMuted }" aria-label="Toggle Video Sound">
      <span class="audio-wave" v-if="!isMuted">
        <span></span><span></span><span></span><span></span>
      </span>
      <span class="audio-text">{{ isMuted ? '🔇 Aktifkan Suara' : '🔊 Matikan Suara' }}</span>
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const bgVideo = ref(null);
const isMuted = ref(true);

const toggleMute = () => {
  if (bgVideo.value) {
    bgVideo.value.muted = !bgVideo.value.muted;
    isMuted.value = bgVideo.value.muted;
  }
};
</script>

<style scoped>
.hero-pdf-style {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding: 80px 0 100px;
  overflow: hidden;
  background-color: var(--blue-deep); /* Fallback background color */
}

/* Video Background Container */
.hero-video-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* Disable browser overlay actions on the video element */
}

/* Dark Gradient Overlay for legibility */
.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: linear-gradient(135deg, 
    rgba(10, 37, 64, 0.75) 0%, 
    rgba(0, 86, 158, 0.70) 50%, 
    rgba(10, 37, 64, 0.85) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-main-card {
  position: relative;
  text-align: center;
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 0.5s ease forwards;
}

.karyatim-hero-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.hero-logo-svg {
  width: 80px;
  height: 80px;
  filter: drop-shadow(0 4px 10px rgba(0, 119, 200, 0.4));
}

.hero-logo-words {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}

.hero-brand-name {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #FFFFFF;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.hero-brand-mid {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 2px;
  color: #FFFFFF;
  opacity: 0.95;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.hero-brand-sub {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 3.5px;
  color: #EBF5FF;
  opacity: 0.9;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.hero-main-title {
  font-size: 2.85rem;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 20px;
  line-height: 1.25;
  letter-spacing: -0.5px;
  text-align: center;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.5);
}

.hero-lead-text {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #EBF5FF;
  max-width: 760px;
  margin-bottom: 32px;
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.hero-btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 36px;
}

.btn-hero-primary {
  background-color: #FFFFFF;
  color: var(--blue-dark);
  font-size: 1.05rem;
  padding: 14px 32px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.btn-hero-primary:hover {
  background-color: #F8FAFC;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.btn-hero-secondary {
  background-color: rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  font-size: 1.05rem;
  padding: 14px 28px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.btn-hero-secondary:hover {
  background-color: rgba(255, 255, 255, 0.25);
  border-color: #FFFFFF;
  transform: translateY(-3px);
}

.pdf-contact-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 10px;
}

.contact-pill-item {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 6px 18px;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all var(--transition-fast);
}
.contact-pill-item:hover {
  background-color: #FFFFFF;
  color: var(--blue-dark);
  transform: translateY(-2px);
}

.pill-dot {
  width: 7px;
  height: 7px;
  background-color: var(--color-wa);
  border-radius: 50%;
}

/* Floating Audio Control Button */
.btn-audio-control {
  position: absolute;
  bottom: 28px;
  right: 28px;
  z-index: 4;
  background: rgba(10, 37, 64, 0.75);
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FFFFFF;
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all var(--transition-fast);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
.btn-audio-control:hover {
  background: var(--blue-primary);
  border-color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 119, 200, 0.4);
}

/* Audio waves animation for active sound */
.audio-wave {
  display: flex;
  align-items: flex-end;
  gap: 2.5px;
  height: 12px;
  width: 14px;
}
.audio-wave span {
  width: 1.8px;
  background-color: #FFFFFF;
  border-radius: 1px;
  animation: soundWave 1.2s ease infinite alternate;
}
.audio-wave span:nth-child(1) { height: 30%; animation-delay: 0.1s; }
.audio-wave span:nth-child(2) { height: 90%; animation-delay: 0.3s; }
.audio-wave span:nth-child(3) { height: 60%; animation-delay: 0.0s; }
.audio-wave span:nth-child(4) { height: 100%; animation-delay: 0.4s; }

@keyframes soundWave {
  0% { transform: scaleY(0.2); }
  100% { transform: scaleY(1); }
}

@media (max-width: 992px) {
  .hero-main-title {
    font-size: 2.25rem;
  }
  .hero-lead-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .hero-pdf-style {
    min-height: auto;
    padding: 60px 0 80px;
  }
  .hero-main-title {
    font-size: 1.85rem;
  }
  .hero-lead-text {
    font-size: 1rem;
    line-height: 1.6;
  }
  .btn-audio-control {
    bottom: 16px;
    right: 16px;
    padding: 8px 14px;
    font-size: 0.725rem;
  }
}
</style>
