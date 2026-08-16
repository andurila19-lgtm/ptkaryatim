import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import ClientsView from '../views/ClientsView.vue';
import AdvantagesView from '../views/AdvantagesView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'PT. Karyatim Mandiri Engineering | Kontraktor Umum Surabaya Sejak 2014' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { title: 'Tentang Kami | PT. Karyatim Mandiri Engineering' }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: { title: 'Layanan Konstruksi & Spesialis | PT. Karyatim Mandiri Engineering' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
    meta: { title: 'Portofolio Proyek | PT. Karyatim Mandiri Engineering' }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsView,
    meta: { title: 'Klien & Mitra Kami | PT. Karyatim Mandiri Engineering' }
  },
  {
    path: '/advantages',
    name: 'Advantages',
    component: AdvantagesView,
    meta: { title: 'Keunggulan & Jaminan Mutu | PT. Karyatim Mandiri Engineering' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Hubungi Kami & Survey Lokasi | PT. Karyatim Mandiri Engineering' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
