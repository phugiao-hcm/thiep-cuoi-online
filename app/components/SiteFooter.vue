<template>
  <footer class="footer">
    <div class="container footer-main">
      <div>
        <NuxtLink to="/" class="footer-brand serif">mộc thiệp<span>.</span></NuxtLink>
        <p>Một chiếc thiệp nhỏ, gửi trọn niềm vui lớn.</p>
      </div>
      <div class="footer-links"><NuxtLink to="/mau-thiep">Thư viện mẫu</NuxtLink><NuxtLink to="/#bang-gia">Bảng giá</NuxtLink><NuxtLink to="/#cach-hoat-dong">Cách hoạt động</NuxtLink></div>
    </div>
    <div class="container footer-bottom"><span>© 2026 Mộc Thiệp. Bản mẫu giao diện.</span><span>Được làm bằng sự tử tế ♡</span></div>
  </footer>
</template>

<style scoped>
.footer { background: linear-gradient(135deg, #351f2b, #4c2338); color: #fff5f7; padding-top: 50px; }
.footer-main { display: flex; justify-content: space-between; gap: 32px; padding-bottom: 40px; }
.footer-brand { font-size: 29px; letter-spacing: -.06em; }.footer-brand span { color: #d28ca5; }
.footer-main p { color: #d7c2cb; font-size: 13px; margin: 10px 0 0; }
.footer-links { display: flex; flex-wrap: wrap; gap: 22px; align-items: center; font-size: 12px; color: #ead9e0; }
.footer-bottom { display: flex; justify-content: space-between; gap: 16px; padding-block: 18px; border-top: 1px solid rgba(255,255,255,.15); font-size: 10px; color: #bba8b1; }
@media(max-width:600px){.footer-main,.footer-bottom{flex-direction:column}.footer-links{gap:16px}.footer-bottom{gap:8px}}
</style>
