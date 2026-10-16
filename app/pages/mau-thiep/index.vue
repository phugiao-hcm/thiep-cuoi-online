<script setup lang="ts">
import { templates } from '~/data/templates'

useSeoMeta({
  title: 'Mẫu thiệp cưới online đẹp',
  description: 'Khám phá mẫu thiệp cưới online tinh tế. Chọn phong cách, xem trước và bắt đầu tạo thiệp của riêng bạn.',
})
const selectedCategory = ref('Tất cả')
const categories = ['Tất cả', 'Hoa lá · Lãng mạn', 'Tối giản · Hiện đại', 'Cổ điển · Thanh lịch', 'Ảnh cưới · Tự nhiên', 'Nhẹ nhàng · Tinh tế', 'Editorial · Thơ mộng']
const filteredTemplates = computed(() => selectedCategory.value === 'Tất cả' ? templates : templates.filter(t => t.category === selectedCategory.value))
</script>

<template>
  <main class="catalog-page">
    <section class="catalog-hero"><div class="container"><div class="eyebrow">Thư viện Mộc Thiệp</div><h1 class="serif">Tìm chiếc thiệp<br><em>giống câu chuyện của bạn.</em></h1><p>Mỗi mẫu là một cách dịu dàng để nói lời mời. Chọn mẫu bạn yêu, rồi thêm vào đó câu chuyện của riêng hai người.</p><div class="catalog-meta"><span>{{ templates.length }} MẪU THIỆP</span><span>·</span><span>THIẾT KẾ CHO ĐIỆN THOẠI</span></div></div></section>
    <section class="container catalog-content"><div class="filter-row"><div class="filter-scroll"><button v-for="category in categories" :key="category" class="filter-pill" :class="{ active: selectedCategory === category }" @click="selectedCategory = category">{{ category }}</button></div><span class="result-count">{{ filteredTemplates.length }} mẫu</span></div>
      <div class="catalog-grid"><article v-for="item in filteredTemplates" :key="item.slug" class="catalog-card"><NuxtLink :to="`/mau-thiep/${item.slug}`" class="catalog-photo"><img :src="item.image" :alt="`Mẫu thiệp ${item.name}`" loading="lazy"><span v-if="item.label" class="catalog-label">{{ item.label }}</span><span class="catalog-overlay">Xem chi tiết ↗</span></NuxtLink><div class="catalog-info"><div><h2 class="serif">{{ item.name }}</h2><p>{{ item.category }}</p></div><span>Từ {{ item.price.toLocaleString('vi-VN') }}đ</span></div><NuxtLink :to="`/tao-thiep/${item.slug}`" class="catalog-cta">Tạo thiệp này <span>↗</span></NuxtLink></article></div>
      <div v-if="!filteredTemplates.length" class="empty-state">Chưa có mẫu trong phong cách này.</div>
    </section>
  </main>
</template>

<style scoped>
.catalog-hero{padding:80px 0 56px;background:radial-gradient(ellipse at 85% 25%,#f3e2e7,transparent 55%)}.catalog-hero h1{font-size:clamp(44px,6vw,70px);line-height:1.06;letter-spacing:-.055em;font-weight:500;margin:22px 0}.catalog-hero h1 em{color:var(--olive);font-weight:400}.catalog-hero p{max-width:540px;color:var(--muted);font-size:14px;line-height:1.9}.catalog-meta{display:flex;gap:12px;align-items:center;margin-top:30px;font-size:9px;letter-spacing:.16em;color:var(--olive)}.catalog-content{padding-bottom:90px}.filter-row{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:20px 0 32px}.filter-scroll{display:flex;gap:8px;overflow-x:auto;padding-bottom:5px;scrollbar-width:none}.filter-scroll::-webkit-scrollbar{display:none}.filter-pill{white-space:nowrap;border:1px solid var(--line);border-radius:99px;background:transparent;padding:10px 15px;font-size:10px;color:#806d77;cursor:pointer}.filter-pill.active{background:var(--olive-dark);color:#fffafa;border-color:var(--olive-dark)}.result-count{font-size:10px;color:var(--muted);white-space:nowrap}.catalog-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:42px 24px}.catalog-photo{display:block;position:relative;aspect-ratio:4/4.8;overflow:hidden;background:#ead6df;border-radius:22px;box-shadow:0 14px 36px rgba(89,38,59,.08)}.catalog-photo img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.catalog-photo:hover img{transform:scale(1.04)}.catalog-label{position:absolute;top:15px;left:15px;background:rgba(255,250,248,.94);border-radius:99px;padding:8px 11px;font-size:9px}.catalog-overlay{position:absolute;bottom:15px;right:15px;background:#fffaf8;padding:10px 14px;border-radius:99px;font-size:10px;font-weight:700}.catalog-info{display:flex;justify-content:space-between;gap:10px;align-items:start;padding:16px 2px 0}.catalog-info h2{font-size:22px;font-weight:500;margin:0}.catalog-info p{font-size:10px;color:var(--muted);margin:6px 0}.catalog-info>span{font-size:10px;color:var(--olive-dark);white-space:nowrap;padding-top:6px}.catalog-cta{display:flex;justify-content:space-between;margin-top:13px;border-top:1px solid var(--line);padding:13px 2px;font-size:11px;font-weight:700;color:var(--olive-dark)}.empty-state{text-align:center;padding:70px 0;color:var(--muted)}
@media(max-width:750px){.catalog-hero{padding:55px 0 40px}.catalog-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px 14px}.catalog-info{flex-direction:column;gap:5px}.catalog-info h2{font-size:19px}.catalog-info>span{padding-top:0}.filter-row{align-items:start;flex-direction:column}.result-count{align-self:end;margin-top:-4px}.catalog-content{padding-bottom:65px}}
</style>
