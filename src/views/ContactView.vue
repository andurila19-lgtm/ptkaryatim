<template>
  <div class="page-view">
    <PageHeader 
      title="Hubungi Kami &amp; Jadwalkan Survey" 
      subtitle="Diskusikan Rencana Proyek, Kebutuhan Material, dan Jadwal Survey Pengukuran Lokasi Gratis Bersama Tim Engineering PT. Karyatim Mandiri."
    />

    <!-- Estimator Form -->
    <EstimatorForm />

    <!-- Connect With Us Component -->
    <ConnectFooter />
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import EstimatorForm from '../components/EstimatorForm.vue';
import ConnectFooter from '../components/ConnectFooter.vue';
</script>

<style scoped>
</style>
