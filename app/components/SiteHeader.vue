<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const links = [
  { label: 'Mẫu thiệp', to: '/mau-thiep' },
  { label: 'Cách hoạt động', to: '/#cach-hoat-dong' },
  { label: 'Bảng giá', to: '/#bang-gia' },
]
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand" aria-label="Mộc Thiệp - Trang chủ">
        <span class="brand-mark">m.</span>
        <span class="brand-name">mộc thiệp<span class="brand-dot">.</span><small>THIỆP CƯỚI ONLINE</small></span>
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Điều hướng chính">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to" :class="{ active: route.path === link.to }">{{ link.label }}</NuxtLink>
      </nav>
      <div class="header-actions">
        <NuxtLink to="/tao-thiep/vuon-nang" class="btn btn-primary header-cta">Tạo thiệp miễn phí <span>↗</span></NuxtLink>
        <button class="menu-toggle" aria-label="Mở menu" @click="menuOpen = !menuOpen">{{ menuOpen ? 'Đóng' : 'Menu' }} <span>☰</span></button>
      </div>
    </div>
    <nav v-if="menuOpen" class="mobile-nav container" aria-label="Menu điện thoại">
      <NuxtLink v-for="link in links" :key="link.label" :to="link.to" @click="menuOpen = false">{{ link.label }}</NuxtLink>
      <NuxtLink to="/tao-thiep/vuon-nang" @click="menuOpen = false">Tạo thiệp miễn phí ↗</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 20; background: rgba(255,249,247,.9); backdrop-filter: blur(18px); border-bottom: 1px solid var(--line); }
.header-inner { min-height: 82px; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
.brand { display: flex; align-items: center; gap: 11px; flex-shrink: 0; }
.brand-mark { width: 39px; height: 39px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(145deg, #96395e, #68233f); color: #fffafa; font-family: var(--serif); font-size: 24px; font-style: italic; box-shadow: 0 5px 14px rgba(112,42,69,.18); }
.brand-name { font-family: var(--serif); font-size: 22px; letter-spacing: -.06em; font-weight: 600; line-height: 1; }
.brand-dot { color: var(--rose); }
.brand-name small { display: block; font-family: var(--sans); letter-spacing: .18em; font-size: 8px; margin-top: 6px; color: var(--muted); font-weight: 600; }
.desktop-nav { display: flex; gap: 32px; align-items: center; }
.desktop-nav a { font-size: 13px; color: #806d77; transition: color .2s; }
.desktop-nav a:hover, .desktop-nav a.active { color: var(--olive-dark); }
.header-actions { display: flex; align-items: center; gap: 10px; }
.header-cta { min-height: 43px; padding-inline: 18px; font-size: 12px; }
.menu-toggle, .mobile-nav { display: none; }
@media (max-width: 780px) { .header-inner { min-height: 70px; } .desktop-nav { display: none; } .header-cta { display: none; } .menu-toggle { display: flex; align-items: center; gap: 8px; background: transparent; border: 0; color: var(--ink); font-size: 12px; font-weight: 700; } .mobile-nav { display: flex; flex-direction: column; gap: 0; padding-bottom: 14px; } .mobile-nav a { padding: 13px 2px; border-top: 1px solid var(--line); font-size: 14px; } }
</style>
