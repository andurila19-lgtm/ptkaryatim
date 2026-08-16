<template>
  <div class="app-root">
    <!-- Navbar (Global Navigation) -->
    <Navbar />

    <!-- Active Router View -->
    <main class="main-content">
      <router-view @open-image="handleOpenImage" />
    </main>

    <!-- Floating WhatsApp Widget (Global) -->
    <FloatingWhatsApp />

    <!-- Fullscreen Lightbox Modal (Global) -->
    <LightboxModal 
      :is-open="lightboxState.isOpen" 
      :image-url="lightboxState.imageUrl" 
      :title="lightboxState.title"
      @close="lightboxState.isOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import FloatingWhatsApp from './components/FloatingWhatsApp.vue';
import LightboxModal from './components/LightboxModal.vue';

const lightboxState = ref({
  isOpen: false,
  imageUrl: '',
  title: ''
});

const handleOpenImage = (imageUrl, title) => {
  lightboxState.value = {
    isOpen: true,
    imageUrl,
    title
  };
};
</script>

<style>
.app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
