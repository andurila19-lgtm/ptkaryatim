<template>
  <div class="floating-wa-wrapper" id="floatingWa">
    <div class="floating-wa-card" :class="{ active: isOpen }">
      <div class="floating-card-header">
        <div class="wa-avatar-group">
          <div class="wa-avatar">
            <svg viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="46" fill="#0077C8"/>
              <path d="M25 75 A 36 36 0 0 1 75 25" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
              <path d="M35 85 A 48 48 0 0 1 85 35" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <h4 class="wa-card-name">PT. Karyatim Mandiri</h4>
            <span class="wa-status-text"><span class="wa-online-dot"></span> Online &bull; Siap Konsultasi Proyek</span>
          </div>
        </div>
        <button class="wa-close-btn" @click="isOpen = false" aria-label="Tutup">&times;</button>
      </div>
      <div class="floating-card-body">
        <p class="wa-card-msg">Halo! Mau konsultasi rencana bangun/renovasi atau estimasi RAB proyek Anda di Surabaya &amp; sekitarnya?</p>
        <div class="wa-agent-options">
          <a href="https://wa.me/6281231716286?text=Halo%20Admin%201%20PT%20Karyatim,%20saya%20mau%20konsultasi%20proyek." target="_blank" class="wa-agent-btn">
            <div class="agent-info">
              <strong>Tim Engineering &amp; RAB (CS 1)</strong>
              <span>0812-3171-6286</span>
            </div>
            <span class="agent-action-arrow">&rarr;</span>
          </a>
          <a href="https://wa.me/628128490094?text=Halo%20Admin%202%20PT%20Karyatim,%20saya%20mau%20konsultasi%20proyek." target="_blank" class="wa-agent-btn">
            <div class="agent-info">
              <strong>Customer Relation (CS 2)</strong>
              <span>0812-8490-094</span>
            </div>
            <span class="agent-action-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>

    <button class="floating-wa-btn" @click="isOpen = !isOpen" aria-label="Chat WhatsApp PT. Karyatim">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span class="floating-tooltip">Konsultasi Gratis</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
.floating-wa-wrapper {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
}

.floating-wa-btn {
  width: 60px;
  height: 60px;
  background-color: var(--color-wa);
  color: #FFFFFF;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-wa);
  transition: all var(--transition-normal);
  position: relative;
}
.floating-wa-btn svg {
  width: 32px;
  height: 32px;
}
.floating-wa-btn:hover {
  transform: scale(1.08);
  background-color: #20BA5A;
}

.floating-tooltip {
  position: absolute;
  right: 70px;
  background: var(--blue-deep);
  color: #FFFFFF;
  font-size: 0.775rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateX(10px);
  transition: all var(--transition-fast);
}
.floating-wa-btn:hover .floating-tooltip {
  opacity: 1;
  transform: translateX(0);
}

.floating-wa-card {
  position: absolute;
  bottom: 74px;
  right: 0;
  width: 320px;
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transform: translateY(20px) scale(0.95);
  opacity: 0;
  pointer-events: none;
  transition: all var(--transition-smooth);
}
.floating-wa-card.active {
  transform: translateY(0) scale(1);
  opacity: 1;
  pointer-events: auto;
}

.floating-card-header {
  background: var(--blue-primary);
  color: #FFFFFF;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wa-avatar-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wa-avatar {
  width: 36px;
  height: 36px;
}
.wa-avatar svg {
  width: 100%;
  height: 100%;
}

.wa-card-name {
  font-size: 0.9rem;
  color: #FFFFFF;
}

.wa-status-text {
  font-size: 0.725rem;
  color: #EBF5FF;
  display: flex;
  align-items: center;
  gap: 4px;
}

.wa-online-dot {
  width: 6px;
  height: 6px;
  background-color: var(--color-wa);
  border-radius: 50%;
}

.wa-close-btn {
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 1.4rem;
  cursor: pointer;
  line-height: 1;
}

.floating-card-body {
  padding: 16px;
  background: var(--color-bg-page);
}

.wa-card-msg {
  font-size: 0.8125rem;
  color: var(--color-text-dark);
  background: #FFFFFF;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  margin-bottom: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  line-height: 1.45;
}

.wa-agent-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wa-agent-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid var(--color-border);
  padding: 10px 14px;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}
.wa-agent-btn:hover {
  border-color: var(--color-wa);
  background: #F0FDF4;
}

.agent-info strong {
  display: block;
  font-size: 0.8125rem;
  color: var(--color-text-navy);
}
.agent-info span {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.agent-action-arrow {
  color: var(--color-wa);
  font-weight: 800;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .floating-wa-wrapper {
    bottom: 20px;
    right: 20px;
  }
  .floating-wa-card {
    width: calc(100vw - 40px);
    right: 0;
  }
}
</style>
