<template>
  <div class="page-header-banner">
    <div class="page-header-bands"></div>
    <div class="container page-header-content">
      <div class="breadcrumbs">
        <router-link to="/">Home</router-link>
        <span class="crumb-sep">/</span>
        <span class="crumb-current">{{ title }}</span>
      </div>
      <h1 class="page-title">{{ title }}</h1>
      <p class="page-subtitle" v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.page-header-banner {
  position: relative;
  background: linear-gradient(135deg, #0084D6 0%, #0077C8 40%, #005A9E 100%);
  color: #FFFFFF;
  padding: 48px 0 54px;
  overflow: hidden;
}

.page-header-bands {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, 
    rgba(255, 255, 255, 0.04) 0%, 
    rgba(255, 255, 255, 0.04) 20%, 
    rgba(0, 0, 0, 0.04) 20%, 
    rgba(0, 0, 0, 0.04) 40%,
    transparent 40%
  );
  pointer-events: none;
}

.page-header-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 4px 16px;
  border-radius: var(--radius-pill);
  font-size: 0.825rem;
  font-weight: 600;
  margin-bottom: 14px;
}

.breadcrumbs a {
  color: #EBF5FF;
}
.breadcrumbs a:hover {
  color: #FFFFFF;
  text-decoration: underline;
}

.crumb-sep {
  opacity: 0.6;
}

.crumb-current {
  color: #FFFFFF;
}

.page-title {
  font-size: 2.35rem;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.page-subtitle {
  font-size: 1.05rem;
  color: #EBF5FF;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-header-banner {
    padding: 36px 0 42px;
  }
  .page-title {
    font-size: 1.85rem;
  }
  .page-subtitle {
    font-size: 0.95rem;
  }
}
</style>
