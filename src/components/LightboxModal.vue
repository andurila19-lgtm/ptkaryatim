<template>
  <div v-if="isOpen" class="lightbox-overlay" @click.self="$emit('close')">
    <div class="lightbox-content">
      <button class="lightbox-close" @click="$emit('close')" aria-label="Tutup Preview">&times;</button>
      <img :src="imageUrl" :alt="title" class="lightbox-image">
      <div class="lightbox-caption" v-if="title">{{ title }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  imageUrl: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
});

defineEmits(['close']);
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(10, 37, 64, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.2s ease forwards;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-close {
  position: absolute;
  top: -44px;
  right: 0;
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 2.2rem;
  cursor: pointer;
  line-height: 1;
}
.lightbox-close:hover {
  color: var(--blue-light);
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.lightbox-caption {
  margin-top: 14px;
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  text-align: center;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
