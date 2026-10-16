<script setup lang="ts">
import { templates } from '~/data/templates'
const route = useRoute()
const item = computed(() => templates.find(t => t.slug === route.params.slug))
if (!item.value) {
  throw createError({ statusCode: 404, statusMessage: 'Không tìm thấy mẫu thiệp' })
}
useSeoMeta({
  title: () => `Mẫu thiệp cưới ${item.value?.name}`,
  description: () => item.value?.description,
  ogTitle: () => `${item.value?.name} — Mộc Thiệp`,
  ogDescription: () => item.value?.description,
  ogImage: () => item.value?.image,
})
</script>

<template>
  <main v-if="item" class="detail-page"><div class="container detail-breadcrumb"><NuxtLink to="/mau-thiep">← Tất cả mẫu</NuxtLink><span>/</span><span>{{ item.name }}</span></div><div class="container detail-grid"><div class="detail-image"><img :src="item.image" :alt="`Mẫu thiệp cưới ${item.name}`"><div class="image-caption">ẢNH MINH HỌA PHONG CÁCH THIẾT KẾ</div></div><div class="detail-copy"><div class="eyebrow">{{ item.category }}</div><h1 class="serif">{{ item.name }}</h1><p class="detail-description">{{ item.description }}</p><div class="detail-price"><span>Từ</span><strong>{{ item.price.toLocaleString('vi-VN') }}đ</strong></div><div class="detail-line"></div><h2 class="serif">Chiếc thiệp của bạn sẽ có</h2><ul><li>Thông tin cô dâu, chú rể và ngày vui</li><li>Địa điểm tổ chức và liên kết bản đồ</li><li>Album ảnh của hai bạn</li><li>Đường dẫn riêng để chia sẻ online</li><li>Mã QR dẫn đến thiệp</li></ul><NuxtLink :to="`/tao-thiep/${item.slug}`" class="btn btn-primary detail-button">Tạo thiệp với mẫu này <span>↗</span></NuxtLink><p class="detail-note">Bạn có thể nhập thông tin và xem trước trước khi quyết định thanh toán.</p></div></div></main>
</template>

<style scoped>
.detail-page{padding-bottom:90px}.detail-breadcrumb{display:flex;gap:12px;align-items:center;padding-block:25px;font-size:10px;color:var(--muted)}.detail-breadcrumb a{color:var(--olive-dark);font-weight:700}.detail-grid{display:grid;grid-template-columns:1fr .8fr;gap:90px;align-items:start}.detail-image{position:relative;aspect-ratio:4/5;overflow:hidden;border-radius:24px; box-shadow:0 18px 45px rgba(89,38,59,.1);background:#ead6df}.detail-image img{width:100%;height:100%;object-fit:cover}.image-caption{position:absolute;bottom:0;left:0;right:0;padding:18px;text-align:center;background:linear-gradient(transparent,rgba(45,32,40,.52));color:white;font-size:8px;letter-spacing:.15em}.detail-copy{padding-top:30px}.detail-copy h1{font-size:clamp(43px,5vw,65px);font-weight:500;letter-spacing:-.05em;margin:17px 0}.detail-description{font-size:14px;line-height:1.9;color:var(--muted);max-width:430px}.detail-price{display:flex;align-items:baseline;gap:10px;margin:28px 0}.detail-price span{font-size:12px;color:var(--muted)}.detail-price strong{font-family:var(--serif);font-size:38px;font-weight:500}.detail-line{height:1px;background:var(--line);margin:27px 0}.detail-copy h2{font-size:24px;font-weight:500;margin:0 0 18px}.detail-copy ul{list-style:none;padding:0;margin:0 0 28px;display:flex;flex-direction:column;gap:14px}.detail-copy li{font-size:12px;color:#65515d}.detail-copy li:before{content:'✓';color:var(--olive);font-weight:700;margin-right:11px}.detail-button{width:100%}.detail-note{font-size:10px;color:var(--muted);text-align:center;line-height:1.7;margin-top:14px}
@media(max-width:750px){.detail-page{padding-bottom:60px}.detail-grid{grid-template-columns:1fr;gap:25px}.detail-image{max-height:540px;aspect-ratio:4/4.4}.detail-copy{padding-top:5px}.detail-copy h1{font-size:48px}.detail-price{margin:20px 0}.detail-line{margin:22px 0}}
</style>
