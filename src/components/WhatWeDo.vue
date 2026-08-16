<template>
  <section class="section section-what-we-do" id="what-we-do">
    <div class="container">
      <div class="pdf-slide-card">
        <div class="pdf-pill-badge">What We Do</div>

        <!-- 6 Visual Category Cards from Page 4 -->
        <div class="what-we-do-grid">
          <div class="what-card" v-for="item in categories" :key="item.name" @click="$emit('open-image', item.image, 'Layanan: ' + item.name)">
            <img :src="item.image" :alt="item.name" loading="lazy" class="what-img">
            <div class="what-label">{{ item.name }}</div>
          </div>
        </div>

        <!-- Featured Project Banner with HD Team Photo at Indofood CBP Sukses Makmur Tbk -->
        <div class="team-showcase-banner">
          <div class="team-banner-img-wrap" @click="$emit('open-image', '/assets/portfolio/team_indofood/team_indofood-hd.jpg', 'Tim PT. Karyatim Mandiri di PT. Indofood CBP Sukses Makmur Tbk Gempol Pasuruan')">
            <img src="/assets/portfolio/team_indofood/team_indofood-hd.jpg" alt="Tim Proyek PT. Karyatim Mandiri Engineering di Indofood CBP Sukses Makmur Tbk Gempol Pasuruan" class="team-banner-img" loading="lazy">
            <span class="banner-zoom-tag">🔍 Klik untuk perbesar (HD)</span>
          </div>
          <div class="team-banner-info">
            <span class="project-tag-pill">Proyek Nyata &middot; Standar K3 Ketat</span>
            <h3>PT. Indofood CBP Sukses Makmur Tbk</h3>
            <p class="loc-text">&#128205; Jl. Raya Surabaya - Malang Km 38,200 Gempol &ndash; Pasuruan</p>
            <p class="team-note">&#128119; Tim engineering &amp; tenaga ahli PT. Karyatim Mandiri Engineering beroperasi dengan perlengkapan K3 lengkap, disiplin mutu, dan on-time milestone.</p>
            <div class="team-highlights">
              <span class="hl-badge">&check; Standar Mutu SNI</span>
              <span class="hl-badge">&check; Monitoring Kurva S</span>
              <span class="hl-badge">&check; Garansi Pemeliharaan</span>
            </div>
          </div>
        </div>

        <!-- Slide Bottom Contact Bar -->
        <div class="slide-bottom-bar">
          <div class="slide-pills-left">
            <span class="slide-pill">6281231716286</span>
            <span class="slide-pill">628128490094</span>
            <span class="slide-pill">@karyatimcontractor</span>
          </div>
          <a href="#portofolio-proyek" class="slide-next-btn" aria-label="Next Slide">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-image']);

const categories = [
  { name: 'ATAP', image: '/assets/portfolio/what_we_do/what_we_do-1.jpg' },
  { name: 'PLUMBING', image: '/assets/portfolio/what_we_do/what_we_do-2.jpg' },
  { name: 'LANTAI', image: '/assets/portfolio/what_we_do/what_we_do-3.jpg' },
  { name: 'PENGECATAN', image: '/assets/portfolio/what_we_do/what_we_do-4.jpg' },
  { name: 'SIPIL', image: '/assets/portfolio/what_we_do/what_we_do-5.jpg' },
  { name: 'KOMERSIL', image: '/assets/portfolio/what_we_do/what_we_do-6.jpg' }
];
</script>

<style scoped>
.what-we-do-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
}

.what-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 200px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.what-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-smooth);
}
.what-card:hover .what-img {
  transform: scale(1.08);
}

.what-label {
  position: absolute;
  bottom: 0;
  inset-inline: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 37, 64, 0.88) 100%);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-align: center;
  padding: 24px 10px 12px;
}

.team-showcase-banner {
  background: var(--blue-bg-subtle);
  border: 1.5px solid var(--color-border-blue);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  margin-top: 24px;
}

.team-banner-img-wrap {
  height: 100%;
  min-height: 260px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.team-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-smooth);
}
.team-banner-img-wrap:hover .team-banner-img {
  transform: scale(1.04);
}

.banner-zoom-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.65);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

.team-banner-info {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-tag-pill {
  background: var(--blue-primary);
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  width: fit-content;
}

.team-banner-info h3 {
  font-size: 1.45rem;
  color: var(--blue-dark);
  font-weight: 800;
}

.loc-text {
  font-size: 0.95rem;
  color: var(--color-text-dark);
  font-weight: 600;
}

.team-note {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.team-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.hl-badge {
  background: #FFFFFF;
  border: 1px solid var(--color-border-blue);
  color: var(--blue-dark);
  font-family: var(--font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

@media (max-width: 992px) {
  .what-we-do-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .team-showcase-banner {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .what-we-do-grid {
    grid-template-columns: 1fr;
  }
  .team-banner-info {
    padding: 20px;
  }
}
</style>
