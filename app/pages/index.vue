<script setup lang="ts">
import { templates } from '~/data/templates'

useSeoMeta({
  title: 'Thiệp cưới online tinh tế, tự tạo trong vài phút',
  description: 'Tạo thiệp cưới online mang dấu ấn riêng. Chọn mẫu, thêm ảnh và thông tin ngày vui, rồi chia sẻ với người thương qua Zalo.',
  ogTitle: 'Mộc Thiệp — Gửi lời mời, giữ khoảnh khắc',
  ogDescription: 'Tự tạo thiệp cưới online thật đẹp trong vài phút.',
  ogType: 'website',
})
const featuredTemplates = templates.slice(0, 3)
const steps = [
  { number: '01', title: 'Chọn một mẫu bạn thương', body: 'Tìm phong cách hợp với câu chuyện của hai bạn — từ tối giản đến hoa lá lãng mạn.' },
  { number: '02', title: 'Thêm câu chuyện của hai bạn', body: 'Điền tên, ngày vui, địa điểm và những bức ảnh muốn chia sẻ cùng mọi người.' },
  { number: '03', title: 'Gửi lời mời đi xa', body: 'Xuất bản đường dẫn riêng, tạo QR và gửi đến bạn bè, người thân chỉ với một chạm.' },
]
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-grain"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow"><span class="tiny-flower">✳</span> Dành riêng cho ngày mình chung đôi</div>
          <h1 class="serif">Một lời mời,<br><em>ngàn thương mến.</em></h1>
          <p class="hero-desc">Thiệp cưới online mang dấu ấn riêng của hai bạn. Tinh tế, dễ tạo và thật dễ gửi đến những người mình thương.</p>
          <div class="hero-actions">
            <NuxtLink to="/mau-thiep" class="btn btn-primary">Khám phá mẫu thiệp <span>↗</span></NuxtLink>
            <a href="#cach-hoat-dong" class="text-link">Xem cách hoạt động <span>↓</span></a>
          </div>
          <div class="hero-proof"><div class="avatar-stack"><span>♡</span><span>✿</span><span>✳</span></div><div><strong>Khởi đầu bằng câu chuyện của bạn</strong><small>Không cần kỹ năng thiết kế</small></div></div>
        </div>
        <div class="hero-art" aria-label="Bản xem trước thiệp cưới mẫu">
          <div class="art-stamp">THE<br>WEDDING<br>INVITATION</div>
          <div class="floating-note note-top"><span>✳</span> Made with love</div>
          <div class="invitation-card">
            <div class="invitation-image"></div>
            <div class="invitation-content">
              <span class="invitation-kicker">TRÂN TRỌNG KÍNH MỜI</span>
              <h2 class="serif">Mai <i>&</i> Đức</h2>
              <span class="invitation-line"></span>
              <p>Tháng Ba · Ngày 20 · 2027</p>
              <small>Một ngày thật đẹp, có bạn cùng vui.</small>
            </div>
            <div class="card-flower flower-one">✿</div><div class="card-flower flower-two">❋</div>
          </div>
          <div class="floating-note note-bottom"><span>↗</span> Chia sẻ trong một chạm</div>
          <div class="hero-circle circle-one"></div><div class="hero-circle circle-two"></div>
        </div>
      </div>
      <div class="container hero-bottom"><span>THIỆP ONLINE, CẢM XÚC THẬT</span><span class="hero-bottom-line"></span><span>01 / 03 — MỘC THIỆP</span></div>
    </section>

    <section class="section-space featured" id="mau-noi-bat">
      <div class="container">
        <div class="section-heading"><div><div class="eyebrow">Một chút cảm hứng</div><h2 class="serif">Mẫu thiệp dành cho<br><em>chuyện tình của bạn.</em></h2></div><NuxtLink to="/mau-thiep" class="text-link desktop-more">Xem tất cả mẫu <span>↗</span></NuxtLink></div>
        <div class="template-grid">
          <article v-for="(item, index) in featuredTemplates" :key="item.slug" class="template-card" :class="`template-card-${index + 1}`">
            <NuxtLink :to="`/mau-thiep/${item.slug}`" class="template-photo" :style="{ '--accent': item.accent }">
              <img :src="item.image" :alt="`Mẫu thiệp cưới ${item.name}`" loading="lazy">
              <span v-if="item.label" class="template-label">{{ item.label }}</span>
              <span class="photo-view">Xem mẫu <span>↗</span></span>
            </NuxtLink>
            <div class="template-info"><div><h3 class="serif">{{ item.name }}</h3><p>{{ item.category }}</p></div><span class="template-price">Từ {{ item.price.toLocaleString('vi-VN') }}đ</span></div>
          </article>
        </div>
        <div class="mobile-more"><NuxtLink to="/mau-thiep" class="btn btn-outline">Xem tất cả mẫu <span>↗</span></NuxtLink></div>
      </div>
    </section>

    <section id="cach-hoat-dong" class="how-section section-space">
      <div class="container how-grid">
        <div class="how-intro"><div class="eyebrow">Thật nhẹ nhàng thôi</div><h2 class="serif">Ba bước nhỏ,<br><em>một ngày đáng nhớ.</em></h2><p>Từ ý tưởng đầu tiên đến chiếc thiệp hoàn chỉnh — mọi thứ đều nằm trong tay bạn.</p><NuxtLink to="/mau-thiep" class="btn btn-primary">Bắt đầu tạo thiệp <span>↗</span></NuxtLink><div class="how-doodle">♡</div></div>
        <div class="steps-list"><article v-for="step in steps" :key="step.number" class="step-item"><div class="step-number">{{ step.number }}</div><div><h3 class="serif">{{ step.title }}</h3><p>{{ step.body }}</p></div><span class="step-arrow">↗</span></article></div>
      </div>
    </section>

    <section class="quote-section">
      <div class="container quote-inner"><span class="quote-mark serif">“</span><p class="serif">Điều đẹp nhất của một chiếc thiệp<br>là người nhận biết mình được nhớ đến.</p><span class="quote-caption">GỬI ĐIỀU THƯƠNG, GIỮ LẠI KHOẢNH KHẮC</span><span class="quote-flower">✳</span></div>
    </section>

    <section id="bang-gia" class="section-space pricing-section">
      <div class="container">
        <div class="pricing-heading"><div class="eyebrow">Dễ thương từ cách bắt đầu</div><h2 class="serif">Một chiếc thiệp đẹp,<br><em>không cần cầu kỳ.</em></h2><p>Thử tạo thiệp trước. Chỉ thanh toán khi bạn đã sẵn sàng gửi lời mời.</p></div>
        <div class="pricing-card">
          <div class="pricing-left"><span class="pricing-tag">BẮT ĐẦU TỪ</span><div class="pricing-price serif">99.000<span>đ</span></div><p>Thanh toán một lần cho một chiếc thiệp online của riêng hai bạn.</p><NuxtLink to="/mau-thiep" class="btn btn-primary">Chọn mẫu thiệp <span>↗</span></NuxtLink></div>
          <div class="pricing-divider"></div>
          <ul class="pricing-features"><li><span>✓</span> Chọn mẫu thiệp thiết kế sẵn</li><li><span>✓</span> Tên, ngày cưới, địa điểm và ảnh riêng</li><li><span>✓</span> Đường dẫn thiệp cá nhân</li><li><span>✓</span> Chia sẻ qua Zalo, Messenger</li><li><span>✓</span> Mã QR dẫn đến thiệp</li><li class="coming-soon"><span>＋</span> RSVP và lời chúc — đang phát triển</li></ul>
        </div>
        <p class="pricing-note">* Giá khởi điểm dự kiến trong giai đoạn ra mắt. Một số tính năng đang được hoàn thiện.</p>
      </div>
    </section>

    <section class="final-cta"><div class="container final-cta-inner"><div><div class="eyebrow">Câu chuyện của bạn bắt đầu từ đây</div><h2 class="serif">Sẵn sàng gửi đi<br><em>một lời mời thật riêng?</em></h2></div><NuxtLink to="/mau-thiep" class="btn btn-primary">Chọn mẫu đầu tiên <span>↗</span></NuxtLink><span class="cta-spark">✳</span></div></section>
  </main>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; padding-top: 68px; background: radial-gradient(ellipse at 78% 45%, #f4dfe7 0%, #fff1f5 42%, var(--paper) 76%); }
.hero-grid { display: grid; grid-template-columns: 1fr .9fr; align-items: center; gap: 44px; min-height: 570px; position: relative; z-index: 1; }
.hero-copy { padding: 10px 0 56px; }
.tiny-flower { display: inline-block; margin-right: 8px; color: var(--rose); }
.hero h1 { font-size: clamp(48px, 6vw, 78px); line-height: 1.04; letter-spacing: -.055em; font-weight: 500; margin: 24px 0 22px; }
.hero h1 em, .section-heading h2 em, .how-intro h2 em, .pricing-heading h2 em, .final-cta h2 em { color: var(--olive); font-weight: 400; }
.hero-desc { max-width: 430px; color: #806d77; font-size: 15px; line-height: 1.9; }
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; margin-top: 29px; }
.text-link { font-size: 12px; font-weight: 700; border-bottom: 1px solid #d4b7c3; padding-bottom: 7px; display: inline-flex; gap: 12px; align-items: center; }
.hero-proof { display: flex; align-items: center; gap: 13px; margin-top: 45px; }
.avatar-stack { display: flex; align-items: center; }
.avatar-stack span { width: 31px; height: 31px; display: grid; place-items: center; border-radius: 50%; margin-right: -7px; border: 2px solid var(--paper); background: #f1d8e1; color: var(--olive-dark); font-size: 12px; }
.avatar-stack span:nth-child(2) { background: #e8bfc9; }.avatar-stack span:nth-child(3) { background: #f3dfe6; }
.hero-proof strong, .hero-proof small { display: block; }.hero-proof strong { font-size: 11px; }.hero-proof small { color: var(--muted); font-size: 10px; margin-top: 4px; }
.hero-art { min-height: 540px; display: grid; place-items: center; position: relative; }
.invitation-card { width: min(340px, 72%); background: #fffaf8; padding: 12px; position: relative; z-index: 2; transform: rotate(2deg); border: 1px solid rgba(255,255,255,.85); border-radius: 24px; box-shadow: 0 28px 75px rgba(89,38,59,.18); }
.invitation-image { height: 205px; background: linear-gradient(180deg, rgba(112,42,69,.03), rgba(112,42,69,.1)), url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85') center 45%/cover; }
.invitation-content { padding: 25px 12px 30px; text-align: center; position: relative; }
.invitation-kicker { font-size: 8px; letter-spacing: .22em; color: #936477; }.invitation-content h2 { font-size: 42px; line-height: 1.1; font-weight: 400; margin: 14px 0; letter-spacing: -.05em; }.invitation-content h2 i { font-size: 26px; color: #c17691; }.invitation-line { display: block; width: 38px; height: 1px; background: #d8b3c2; margin: 0 auto 13px; }.invitation-content p { font-size: 10px; letter-spacing: .12em; }.invitation-content small { font-family: var(--serif); font-style: italic; color: #887580; font-size: 11px; }
.card-flower { position: absolute; color: #c68ca0; opacity: .7; }.flower-one { top: 17px; left: 18px; font-size: 20px; }.flower-two { bottom: 13px; right: 21px; font-size: 19px; color: #bf8197; }
.art-stamp { position: absolute; top: 29px; right: 14px; border: 1px solid rgba(161,77,107,.45); width: 83px; height: 83px; border-radius: 50%; display: grid; place-content: center; text-align: center; font-size: 8px; letter-spacing: .14em; line-height: 1.6; color: var(--olive); transform: rotate(12deg); z-index: 3; }
.floating-note { position: absolute; z-index: 4; padding: 12px 16px; border-radius: 99px; background: rgba(255,253,248,.9); box-shadow: 0 8px 30px rgba(89,38,59,.08); font-size: 10px; color: #806d77; }.floating-note span { margin-right: 7px; color: var(--rose); }.note-top { top: 118px; left: 0; transform: rotate(-7deg); }.note-bottom { bottom: 80px; right: -3px; transform: rotate(5deg); }
.hero-circle { position: absolute; border: 1px solid rgba(161,77,107,.16); border-radius: 50%; }.circle-one { width: 470px; height: 470px; }.circle-two { width: 390px; height: 390px; }
.hero-bottom { display: flex; align-items: center; gap: 16px; padding-block: 20px; border-top: 1px solid var(--line); color: #9d8992; font-size: 8px; letter-spacing: .17em; }.hero-bottom-line { height: 1px; background: var(--line); flex: 1; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 42px; }.section-heading h2, .how-intro h2, .pricing-heading h2 { font-size: clamp(37px, 4vw, 54px); line-height: 1.1; letter-spacing: -.045em; font-weight: 500; margin: 17px 0 0; }.desktop-more { margin-bottom: 9px; }
.template-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }.template-card-2 { margin-top: 22px; }.template-card-3 { margin-top: 44px; }
.template-photo { display: block; position: relative; overflow: hidden; aspect-ratio: 4 / 5; background: var(--accent); border-radius: 24px; }.template-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }.template-photo:hover img { transform: scale(1.045); }.template-photo { box-shadow: 0 16px 38px rgba(89,38,59,.08); }.template-label { position: absolute; top: 17px; left: 17px; background: rgba(255,253,248,.9); padding: 8px 11px; border-radius: 99px; font-size: 9px; }.photo-view { position: absolute; bottom: 14px; right: 14px; background: #fffaf8; border-radius: 99px; padding: 10px 13px; font-size: 10px; font-weight: 700; }.photo-view span { margin-left: 10px; }
.template-info { display: flex; justify-content: space-between; align-items: start; gap: 10px; padding: 17px 2px 0; }.template-info h3 { font-size: 21px; font-weight: 500; margin: 0; }.template-info p { font-size: 10px; color: var(--muted); margin: 7px 0 0; }.template-price { font-size: 10px; white-space: nowrap; padding-top: 6px; color: var(--olive-dark); }.mobile-more { display: none; }
.how-section { background: linear-gradient(135deg, #fbf0f3, #f7e9ed); }.how-grid { display: grid; grid-template-columns: .85fr 1fr; gap: 100px; }.how-intro { position: relative; }.how-intro p { max-width: 350px; color: var(--muted); font-size: 13px; line-height: 1.9; margin: 20px 0 26px; }.how-doodle { position: absolute; right: 30px; bottom: 20px; color: #d7a8ba; font-family: var(--serif); font-size: 82px; transform: rotate(-15deg); }.steps-list { border-top: 1px solid var(--line); }.step-item { display: grid; grid-template-columns: 44px 1fr 20px; gap: 18px; padding: 27px 0; border-bottom: 1px solid var(--line); align-items: start; }.step-number { font-size: 10px; color: var(--rose); padding-top: 6px; letter-spacing: .1em; }.step-item h3 { font-size: 22px; font-weight: 500; margin: 0 0 9px; }.step-item p { color: var(--muted); font-size: 12px; line-height: 1.8; margin: 0; max-width: 430px; }.step-arrow { color: var(--olive); font-size: 15px; }
.quote-section { background: linear-gradient(135deg, #f7e6ec, #f2d9e2); text-align: center; position: relative; overflow: hidden; }.quote-inner { padding-block: 78px; position: relative; }.quote-mark { font-size: 70px; line-height: .8; color: #c68ca0; }.quote-inner p { font-size: clamp(25px, 3.5vw, 40px); line-height: 1.35; letter-spacing: -.035em; margin: 10px 0 24px; }.quote-caption { font-size: 8px; letter-spacing: .2em; color: #936477; }.quote-flower { position: absolute; right: 12%; top: 38%; color: #c68ca0; font-size: 48px; }
.pricing-heading { text-align: center; }.pricing-heading h2 { margin-top: 16px; }.pricing-heading p { font-size: 12px; color: var(--muted); margin: 18px 0 0; }.pricing-card { display: grid; grid-template-columns: .8fr 1px 1fr; gap: 52px; max-width: 800px; margin: 46px auto 0; padding: 38px 44px; border: 1px solid var(--line); border-radius: 24px; background: rgba(255,255,255,.72); box-shadow: 0 18px 55px rgba(89,38,59,.06); }.pricing-tag { font-size: 9px; letter-spacing: .16em; color: var(--olive); font-weight: 700; }.pricing-price { font-size: 65px; letter-spacing: -.06em; margin: 9px 0 5px; }.pricing-price span { font-size: 22px; margin-left: 5px; }.pricing-left p { font-size: 12px; color: var(--muted); line-height: 1.8; margin: 0 0 23px; max-width: 260px; }.pricing-divider { background: var(--line); }.pricing-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; justify-content: center; gap: 17px; }.pricing-features li { display: flex; align-items: start; gap: 12px; font-size: 12px; }.pricing-features li span { color: var(--olive); font-weight: 700; }.pricing-features .coming-soon { color: #b09aa5; }
.pricing-note { max-width: 800px; margin: 15px auto 0; color: #9d8992; font-size: 10px; }.final-cta { background: linear-gradient(120deg, #f8e8ed, #f1d6e0); overflow: hidden; }.final-cta-inner { min-height: 260px; display: flex; justify-content: space-between; align-items: center; gap: 30px; position: relative; }.final-cta h2 { font-size: clamp(35px, 4vw, 51px); line-height: 1.1; font-weight: 500; letter-spacing: -.045em; margin: 15px 0 0; }.cta-spark { font-size: 110px; color: rgba(193,118,145,.24); position: absolute; right: 20%; top: 20px; }
@media(max-width:900px){.hero-grid{gap:20px;grid-template-columns:1fr .9fr}.hero-art{min-height:470px}.invitation-card{width:min(310px,80%)}.invitation-image{height:165px}.invitation-content h2{font-size:34px}.how-grid{gap:45px}.pricing-card{gap:30px;padding:32px}.template-info{flex-direction:column;gap:8px}}
@media(max-width:700px){.hero{padding-top:32px}.hero-grid{grid-template-columns:1fr;gap:0}.hero-copy{padding-bottom:10px}.hero h1{font-size:clamp(47px,13vw,66px);margin-top:20px}.hero-desc{font-size:13px;max-width:500px}.hero-proof{margin-top:28px}.hero-art{min-height:430px;margin-top:4px}.invitation-card{width:min(300px,76%)}.invitation-image{height:175px}.note-top{left:2%;top:70px}.note-bottom{right:0;bottom:46px}.art-stamp{right:3%;top:8px}.hero-bottom{font-size:7px}.section-heading{align-items:start;flex-direction:column;margin-bottom:30px}.section-heading h2,.how-intro h2,.pricing-heading h2{font-size:40px}.desktop-more{display:none}.template-grid{grid-template-columns:1fr 1fr;gap:22px 14px}.template-card-2,.template-card-3{margin-top:0}.template-card-3{grid-column:1/-1;width:72%;margin-inline:auto}.template-info{padding-top:12px}.template-info h3{font-size:18px}.template-info p{font-size:9px}.template-price{font-size:9px;padding-top:0}.mobile-more{display:block;text-align:center;margin-top:32px}.how-grid{grid-template-columns:1fr;gap:40px}.how-doodle{right:10px;bottom:0;font-size:60px}.step-item{grid-template-columns:32px 1fr 15px;gap:12px;padding:23px 0}.step-item h3{font-size:20px}.quote-inner{padding-block:62px}.quote-flower{right:2%;top:12%;font-size:30px}.pricing-card{grid-template-columns:1fr;gap:28px;padding:28px 24px;margin-top:32px}.pricing-divider{height:1px;width:100%}.pricing-price{font-size:58px}.pricing-features{gap:15px}.final-cta-inner{padding-block:52px;min-height:auto;align-items:start;flex-direction:column}.cta-spark{right:4%;top:15px;font-size:70px}.final-cta h2{font-size:39px}}
</style>
