<template>
  <section class="section section-estimator-pdf" id="estimasi-rab">
    <div class="container">
      <div class="estimator-grid-box">
        <div class="estimator-info-left">
          <div class="pdf-pill-badge">Form Rencana Proyek</div>
          <h2 class="estimator-head">Dapatkan Perhitungan RAB &amp; Jadwal Survey Gratis</h2>
          <p class="estimator-sub">
            Isi formulir singkat di samping untuk mendiskusikan spesifikasi material, luas volume pekerjaan, dan jadwal survey pengukuran di lokasi Anda (Surabaya &amp; Sekitarnya).
          </p>

          <div class="estimator-benefits">
            <div class="eb-item">
              <span class="eb-bullet">&check;</span>
              <div>
                <strong>Survey Lokasi &amp; Ukur Gratis</strong>
                <p>Khusus wilayah Surabaya, Sidoarjo, Gresik, &amp; Pasuruan</p>
              </div>
            </div>
            <div class="eb-item">
              <span class="eb-bullet">&check;</span>
              <div>
                <strong>Transparansi Rincian RAB</strong>
                <p>Spesifikasi material detail dan tanpa biaya tersembunyi</p>
              </div>
            </div>
            <div class="eb-item">
              <span class="eb-bullet">&check;</span>
              <div>
                <strong>Skema Termin Pembayaran 100% Aman</strong>
                <p>Pembayaran berbasis pencapaian progres fisik riil</p>
              </div>
            </div>
          </div>
        </div>

        <div class="estimator-form-right">
          <form @submit.prevent="handleSubmit" class="inquiry-form-card">
            <h3 class="form-title-blue">Formulir Konsultasi Proyek</h3>

            <div class="form-field">
              <label for="clientName">Nama Lengkap / Perusahaan *</label>
              <input type="text" id="clientName" v-model="formData.name" class="form-input" placeholder="Contoh: Bapak Hendra / PT. Maju Bersama" required>
            </div>

            <div class="form-field">
              <label for="projectLoc">Lokasi Proyek *</label>
              <input type="text" id="projectLoc" v-model="formData.location" class="form-input" placeholder="Contoh: Rungkut Industri, Surabaya / Gempol" required>
            </div>

            <div class="form-field">
              <label for="projectService">Pilihan Layanan Konstruksi *</label>
              <select id="projectService" v-model="formData.service" class="form-input" required>
                <option value="" disabled>Pilih Layanan Utama</option>
                <option value="Building Construction Project">Building Construction (Gedung/Pabrik/Ruko)</option>
                <option value="Steel Project (Rangka Baja WF / Gudang)">Steel Project (Rangka Baja WF / Gudang)</option>
                <option value="Concrete Project (Pengecoran Beton)">Concrete Project (Pengecoran Beton)</option>
                <option value="Asphalt Project (Pengaspalan Jalan)">Asphalt Project (Pengaspalan Jalan)</option>
                <option value="ACP Project (Fasad Aluminium Composite Panel)">ACP Project (Fasad Aluminium Composite Panel)</option>
                <option value="Waterproofing Project (Anti Bocor)">Waterproofing Project (Anti Bocor Rooftop/Dak)</option>
                <option value="Canopy Project (Kanopi/Awning/Membran)">Canopy Project (Kanopi/Awning/Membran)</option>
                <option value="Interior Office Project">Interior Office Project & Fit-Out</option>
                <option value="Branding & Signage 3D">Branding & Signage 3D Letter</option>
                <option value="Partition Project (Gypsum / Kaca)">Partition Project (Gypsum / Kaca)</option>
                <option value="Epoxy Project (Lantai Industri)">Epoxy Project (Lantai Industri)</option>
                <option value="Pengecatan Project (Cat Gedung/Pabrik)">Pengecatan Project (Cat Gedung/Pabrik)</option>
                <option value="Railing Project (Stainless / Besi)">Railing Project (Stainless / Besi)</option>
                <option value="Jaringan, CCTV & Elektrikal">Jaringan, CCTV & Elektrikal Project</option>
                <option value="Paket Konstruksi Terpadu (Multi-Layanan)">Paket Lengkap / Multi-Layanan</option>
              </select>
            </div>

            <div class="form-field">
              <label for="projectDesc">Deskripsi Rencana / Perkiraan Luas</label>
              <textarea id="projectDesc" v-model="formData.description" rows="3" class="form-input" placeholder="Contoh: Pembangunan gudang struktur baja 20x40m lengkap lantai cor k300 dan instalasi elektrikal."></textarea>
            </div>

            <button type="submit" class="btn btn-submit-wa btn-block">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              <span>Kirim &amp; Konsultasi via WhatsApp</span>
            </button>
            <span class="secure-badge-note">&#128274; Respon Cepat Langsung ke Tim Engineering PT. Karyatim Mandiri</span>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  location: '',
  service: '',
  description: ''
});

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.location || !formData.value.service) {
    alert('Mohon lengkapi Nama, Lokasi Proyek, dan Layanan yang dipilih.');
    return;
  }

  const message = 
`Halo PT. Karyatim Mandiri Engineering,
Saya ingin mengajukan permohonan konsultasi proyek & survey lokasi:

*Nama / Perusahaan:* ${formData.value.name}
*Lokasi Proyek:* ${formData.value.location}
*Layanan yang Dipilih:* ${formData.value.service}
*Rencana Kebutuhan:* ${formData.value.description || '-'}

Mohon informasi ketersediaan jadwal survey dan estimasi RAB. Terima kasih.`;

  const encoded = encodeURIComponent(message);
  const waUrl = `https://wa.me/6281231716286?text=${encoded}`;
  window.open(waUrl, '_blank');
};
</script>

<style scoped>
.section-estimator-pdf {
  background: var(--blue-deep);
  color: #FFFFFF;
}

.estimator-grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.estimator-info-left .pdf-pill-badge {
  margin-inline: 0;
  margin-bottom: 20px;
}

.estimator-head {
  font-size: 2.2rem;
  color: #FFFFFF;
  margin-bottom: 16px;
  line-height: 1.25;
}

.estimator-sub {
  font-size: 1.05rem;
  color: #CBD5E1;
  line-height: 1.65;
  margin-bottom: 28px;
}

.estimator-benefits {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.eb-item {
  display: flex;
  gap: 14px;
}

.eb-bullet {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--blue-primary);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
}

.eb-item strong {
  display: block;
  font-size: 1rem;
  color: #FFFFFF;
  margin-bottom: 2px;
}
.eb-item p {
  font-size: 0.85rem;
  color: #94A3B8;
}

.inquiry-form-card {
  background: #FFFFFF;
  border-radius: var(--radius-xl);
  padding: 36px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  color: var(--color-text-dark);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-title-blue {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--blue-dark);
  margin-bottom: 4px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-text-navy);
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-bg-page);
  color: var(--color-text-dark);
  transition: all var(--transition-fast);
}
.form-input:focus {
  outline: none;
  border-color: var(--blue-primary);
  background-color: #FFFFFF;
  box-shadow: 0 0 0 3px rgba(0, 119, 200, 0.15);
}

.btn-submit-wa {
  background: var(--color-wa);
  color: #FFFFFF;
  padding: 14px;
  font-size: 1.05rem;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
}
.btn-submit-wa:hover {
  background: #20BA5A;
  transform: translateY(-2px);
}

.secure-badge-note {
  font-size: 0.775rem;
  color: var(--color-text-muted);
  text-align: center;
}

@media (max-width: 992px) {
  .estimator-grid-box {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
