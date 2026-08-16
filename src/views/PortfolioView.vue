<template>
  <div class="page-view">
    <PageHeader 
      title="Portofolio Proyek Terpilih" 
      subtitle="Dokumentasi Visual 14 Bidang Pekerjaan Konstruksi Sipil, Pabrik, Gudang, Interior &amp; Finishing di Surabaya dan Kawasan Jawa Timur."
    />

    <!-- Interactive Portfolio Showcase -->
    <PortfolioShowcase @open-image="$emit('open-image', $event[0], $event[1])" />

    <!-- Connect Footer -->
    <ConnectFooter />
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import PortfolioShowcase from '../components/PortfolioShowcase.vue';
import ConnectFooter from '../components/ConnectFooter.vue';

defineEmits(['open-image']);
</script>

<style scoped>
</style>
