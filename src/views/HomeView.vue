<template>
  <div class="home-view">
    <!-- Hero Section (PDF Cover Style) -->
    <HeroSection />

    <!-- About Us Section (PDF Page 2) -->
    <AboutUs />

    <!-- Our Clients Section (PDF Page 3) -->
    <OurClients />

    <!-- What We Do Section (PDF Page 4) -->
    <WhatWeDo @open-image="$emit('open-image', $event[0], $event[1])" />

    <!-- Portofolio Showcase 14 Layanan (PDF Pages 5-22) -->
    <PortfolioShowcase @open-image="$emit('open-image', $event[0], $event[1])" />

    <!-- Keuntungan Kerjasama Bareng Kami (PDF Page 23) -->
    <AdvantagesPromo />

    <!-- Estimator Form -->
    <EstimatorForm />

    <!-- Connect With Us & Footer Section (PDF Page 24) -->
    <ConnectFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
import AboutUs from '../components/AboutUs.vue';
import OurClients from '../components/OurClients.vue';
import WhatWeDo from '../components/WhatWeDo.vue';
import PortfolioShowcase from '../components/PortfolioShowcase.vue';
import AdvantagesPromo from '../components/AdvantagesPromo.vue';
import EstimatorForm from '../components/EstimatorForm.vue';
import ConnectFooter from '../components/ConnectFooter.vue';

defineEmits(['open-image']);
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
}
</style>
