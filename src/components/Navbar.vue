<template>
  <header class="header-main-wrapper" :class="{ 'scrolled': isScrolled }">
    <!-- NAVBAR UTAMA (STICKY & MENGIKUTI SCROLL KE MANAPUN) -->
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <router-link to="/" class="brand-logo" aria-label="Beranda PT. Karyatim Mandiri Engineering" @click="closeMenu">
          <div class="karyatim-logo-mark">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 75 A 36 36 0 0 1 75 25" stroke="#0077C8" stroke-width="10" stroke-linecap="round"/>
              <path d="M35 85 A 48 48 0 0 1 85 35" stroke="#0077C8" stroke-width="10" stroke-linecap="round"/>
              <path d="M15 65 A 24 24 0 0 1 65 15" stroke="#0077C8" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="brand-text">
            <span class="company-name">KARYATIM</span>
            <span class="company-sub">ENGINEERING CONTRACTORS</span>
          </div>
        </router-link>

        <div class="nav-menu" :class="{ open: isMenuOpen }">
          <router-link to="/" class="nav-link" exact-active-class="active" @click="closeMenu">Home (All)</router-link>
          <router-link to="/about" class="nav-link" active-class="active" @click="closeMenu">About Us</router-link>
          <router-link to="/services" class="nav-link" active-class="active" @click="closeMenu">Layanan</router-link>
          <router-link to="/portfolio" class="nav-link" active-class="active" @click="closeMenu">Portofolio</router-link>
          <router-link to="/clients" class="nav-link" active-class="active" @click="closeMenu">Our Clients</router-link>
          <router-link to="/advantages" class="nav-link" active-class="active" @click="closeMenu">Keunggulan</router-link>
          <router-link to="/contact" class="nav-link" active-class="active" @click="closeMenu">Kontak</router-link>
        </div>

        <div class="nav-actions">
          <a href="https://wa.me/6281231716286?text=Halo%20PT%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20proyek%20konstruksi." target="_blank" rel="noopener noreferrer" class="btn btn-wa-nav">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Konsultasi WA</span>
          </a>
          <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Nav Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 15) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Header Main Wrapper Sticky Pins to the Top of the Viewport */
.header-main-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9990;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* NAVBAR UTAMA */
.navbar {
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
}

.header-main-wrapper.scrolled .navbar {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 10px 30px -5px rgba(0, 119, 200, 0.15), 0 2px 6px rgba(0, 0, 0, 0.05);
  border-bottom: 1.5px solid var(--color-border-blue);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  transition: height 0.25s ease;
}

.header-main-wrapper.scrolled .nav-container {
  height: 52px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.karyatim-logo-mark {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}
.karyatim-logo-mark svg {
  width: 100%;
  height: 100%;
}
.brand-logo:hover .karyatim-logo-mark {
  transform: rotate(15deg);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.05rem;
  letter-spacing: 0.3px;
  color: var(--blue-dark);
  line-height: 1.1;
}

.company-sub {
  font-family: var(--font-heading);
  font-size: 0.6rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: var(--color-text-muted);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--color-text-dark);
  padding: 4px 0;
  position: relative;
  transition: all var(--transition-fast);
}

.nav-link:hover, .nav-link.active {
  color: var(--blue-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2.5px;
  background-color: var(--blue-primary);
  border-radius: var(--radius-pill);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-wa-nav {
  background: var(--color-wa);
  color: #FFFFFF;
  padding: 7px 16px;
  font-size: 0.8rem;
  border-radius: var(--radius-pill);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}
.btn-wa-nav:hover {
  background: #20BA5A;
  transform: translateY(-2px);
  box-shadow: var(--shadow-wa);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.menu-toggle span {
  width: 22px;
  height: 2px;
  background-color: var(--blue-dark);
  border-radius: 2px;
}

@media (max-width: 992px) {
  .nav-menu {
    gap: 10px;
  }
}

@media (max-width: 768px) {
  .top-bar-right {
    display: none;
  }
  .nav-menu {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    flex-direction: column;
    padding: 24px;
    gap: 16px;
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    opacity: 0;
    transition: all var(--transition-smooth);
    z-index: 999;
  }
  .header-main-wrapper.scrolled .nav-menu {
    top: 52px;
  }
  .nav-menu.open {
    transform: translateY(0);
    opacity: 1;
  }
  .menu-toggle {
    display: flex;
  }
}
</style>
