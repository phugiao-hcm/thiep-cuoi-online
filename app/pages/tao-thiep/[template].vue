<script setup lang="ts">
import { templates } from '~/data/templates'

const route = useRoute()
const template = computed(() => templates.find(t => t.slug === route.params.template) ?? templates[0]!)
const step = ref(1)
const showPreview = ref(true)
const uploadedPhoto = ref('')
const form = reactive({
  brideName: 'Ngọc Mai',
  groomName: 'Minh Đức',
  date: '2027-03-20',
  time: '11:00',
  venue: 'Nhà hàng The Garden',
  address: 'Thành phố Hồ Chí Minh',
  message: 'Sự hiện diện của bạn là niềm vui lớn đối với chúng mình.',
  ceremony: 'Tiệc cưới',
  host: 'Cả hai gia đình',
  dressCode: 'Trang phục lịch sự',
  rsvp: true,
})
const formattedDate = computed(() => {
  if (!form.date) return 'Ngày vui của chúng mình'
  return new Date(`${form.date}T12:00:00`).toLocaleDateString('vi-VN', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric',
  })
})
const photoSrc = computed(() => uploadedPhoto.value || template.value.image)
const stepTitles = ['Thông tin', 'Cá nhân hóa', 'Hoàn tất']

function nextStep() {
  if (step.value < 3) {
    step.value += 1
    if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
function previousStep() {
  if (step.value > 1) {
    step.value -= 1
    if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
function handlePhotoUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  if (!file.type.startsWith('image/')) {
    alert('Vui lòng chọn tệp hình ảnh.')
    input.value = ''
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    alert('Ảnh cần có dung lượng nhỏ hơn 5 MB.')
    input.value = ''
    return
  }
  if (uploadedPhoto.value.startsWith('blob:')) URL.revokeObjectURL(uploadedPhoto.value)
  uploadedPhoto.value = URL.createObjectURL(file)
}
function publishDemo() {
  alert('Thông tin thiệp đã sẵn sàng! Đây là bản demo giao diện; lưu dữ liệu, thanh toán và xuất bản link sẽ được kết nối với backend ở bước tiếp theo.')
}

useSeoMeta({ title: 'Tạo thiệp cưới online', description: 'Tự tạo thiệp cưới online theo 3 bước đơn giản.' })
</script>

<template>
  <main class="builder-page">
    <div class="builder-top">
      <div class="container builder-top-inner">
        <div>
          <NuxtLink to="/mau-thiep" class="back-link">← Thư viện mẫu</NuxtLink>
          <h1 class="serif">Tạo thiệp <em>của hai bạn.</em></h1>
          <p>{{ step === 1 ? 'Bắt đầu bằng những thông tin quan trọng của ngày vui.' : step === 2 ? 'Thêm dấu ấn riêng để chiếc thiệp mang câu chuyện của hai bạn.' : 'Kiểm tra lần cuối trước khi xuất bản thiệp.' }}</p>
        </div>
        <button class="preview-toggle" @click="showPreview = !showPreview">{{ showPreview ? 'Ẩn bản xem trước' : 'Xem bản xem trước' }} <span>↗</span></button>
      </div>
    </div>

    <div class="container builder-layout">
      <section class="editor-panel">
        <div class="editor-progress" aria-label="Tiến trình tạo thiệp">
          <template v-for="(title, index) in stepTitles" :key="title">
            <span class="progress-step" :class="{ 'progress-active': step === index + 1, 'progress-done': step > index + 1 }">{{ step > index + 1 ? '✓' : `0${index + 1}` }}</span>
            <span v-if="index < stepTitles.length - 1" class="progress-line" :class="{ 'progress-line-done': step > index + 1 }"></span>
          </template>
          <small>{{ stepTitles[step - 1]?.toUpperCase() }} · BƯỚC {{ step }}/3</small>
        </div>

        <template v-if="step === 1">
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">♡</span><div><h2 class="serif">Hai nhân vật chính</h2><p>Hãy bắt đầu bằng tên của hai bạn.</p></div></div>
            <div class="form-grid">
              <label>Tên cô dâu<input v-model="form.brideName" placeholder="Ví dụ: Ngọc Mai" maxlength="60" required></label>
              <label>Tên chú rể<input v-model="form.groomName" placeholder="Ví dụ: Minh Đức" maxlength="60" required></label>
            </div>
          </div>
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">✳</span><div><h2 class="serif">Ngày mình chung đôi</h2><p>Ngày giờ và nơi hai bạn tổ chức lễ cưới.</p></div></div>
            <div class="form-grid">
              <label>Ngày cưới<input v-model="form.date" type="date" required></label>
              <label>Giờ bắt đầu<input v-model="form.time" type="time" required></label>
              <label class="full-field">Tên địa điểm<input v-model="form.venue" placeholder="Tên nhà hàng / tư gia" maxlength="120" required></label>
              <label class="full-field">Địa chỉ<textarea v-model="form.address" placeholder="Địa chỉ tổ chức" rows="2" maxlength="250" required></textarea></label>
            </div>
          </div>
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">✉</span><div><h2 class="serif">Lời mời từ trái tim</h2><p>Một lời nhắn ngắn gửi đến những người bạn thương.</p></div></div>
            <label class="full-field">Lời mời<textarea v-model="form.message" rows="4" maxlength="350"></textarea><small class="char-count">{{ form.message.length }}/350 ký tự</small></label>
          </div>
        </template>

        <template v-else-if="step === 2">
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">▧</span><div><h2 class="serif">Ảnh của hai bạn</h2><p>Chọn ảnh đại diện để thiệp thêm dấu ấn riêng.</p></div></div>
            <label class="photo-upload" for="wedding-photo">
              <img v-if="uploadedPhoto" :src="uploadedPhoto" alt="Ảnh cưới đã chọn" class="uploaded-photo-preview">
              <span v-else class="upload-symbol">＋</span>
              <strong>{{ uploadedPhoto ? 'Đổi ảnh cưới' : 'Tải ảnh cưới lên' }}</strong>
              <small>JPG, PNG hoặc WebP · tối đa 5 MB</small>
              <input id="wedding-photo" type="file" accept="image/*" @change="handlePhotoUpload">
            </label>
            <p class="helper-note">Ảnh đang được xem trước trên trình duyệt. Bản demo chưa tải ảnh lên máy chủ.</p>
          </div>
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">✧</span><div><h2 class="serif">Chi tiết buổi tiệc</h2><p>Thêm thông tin để khách mời chuẩn bị thuận tiện hơn.</p></div></div>
            <div class="form-grid">
              <label>Loại buổi lễ<select v-model="form.ceremony"><option>Tiệc cưới</option><option>Lễ vu quy</option><option>Lễ thành hôn</option><option>Lễ báo hỷ</option></select></label>
              <label>Đại diện mời<select v-model="form.host"><option>Cả hai gia đình</option><option>Gia đình nhà gái</option><option>Gia đình nhà trai</option><option>Cô dâu và chú rể</option></select></label>
              <label class="full-field">Gợi ý trang phục<input v-model="form.dressCode" placeholder="Ví dụ: Trang phục lịch sự" maxlength="100"></label>
            </div>
          </div>
          <div class="editor-section">
            <div class="editor-section-heading"><span class="section-icon">♡</span><div><h2 class="serif">Xác nhận tham dự</h2><p>Cho phép khách mời báo trước số người tham dự.</p></div></div>
            <label class="toggle-row"><span><strong>Bật xác nhận tham dự (RSVP)</strong><small>Khách mời có thể xác nhận và gửi lời nhắn.</small></span><input v-model="form.rsvp" type="checkbox" class="toggle-input"><span class="toggle-ui"></span></label>
          </div>
        </template>

        <template v-else>
          <div class="editor-section final-step-intro">
            <span class="final-check">✓</span>
            <h2 class="serif">Chiếc thiệp đã sẵn sàng</h2>
            <p>Kiểm tra thông tin dưới đây. Bạn có thể quay lại chỉnh sửa bất cứ lúc nào.</p>
          </div>
          <div class="review-card">
            <div class="review-card-top"><span class="eyebrow">THÔNG TIN THIỆP</span><button class="text-edit" @click="step = 1">Chỉnh sửa ↗</button></div>
            <h3 class="serif">{{ form.brideName || 'Cô dâu' }} <span>&</span> {{ form.groomName || 'Chú rể' }}</h3>
            <div class="review-row"><span>Ngày cưới</span><strong>{{ formattedDate }}</strong></div>
            <div class="review-row"><span>Thời gian</span><strong>{{ form.time || 'Chưa chọn giờ' }}</strong></div>
            <div class="review-row"><span>Địa điểm</span><strong>{{ form.venue || 'Chưa nhập địa điểm' }}</strong></div>
            <div class="review-row"><span>Địa chỉ</span><strong>{{ form.address || 'Chưa nhập địa chỉ' }}</strong></div>
            <div class="review-row"><span>Mẫu thiệp</span><strong>{{ template.name }}</strong></div>
            <div class="review-row"><span>Xác nhận tham dự</span><strong>{{ form.rsvp ? 'Đã bật' : 'Chưa bật' }}</strong></div>
          </div>
          <div class="publish-info"><span>♡</span><p><strong>Bước tiếp theo:</strong> Khi website kết nối backend, bạn sẽ lưu thiệp, chọn gói và thanh toán trước khi xuất bản link chính thức. Hiện tại đây là bản demo, chưa có dữ liệu nào được gửi lên máy chủ.</p></div>
        </template>

        <div class="editor-actions">
          <button v-if="step === 1" class="btn btn-outline" @click="$router.push(`/mau-thiep/${template.slug}`)">Đổi mẫu</button>
          <button v-else class="btn btn-outline" @click="previousStep">← Quay lại</button>
          <button v-if="step < 3" class="btn btn-primary" @click="nextStep">{{ step === 1 ? 'Lưu và tiếp tục' : 'Hoàn tất thông tin' }} <span>↗</span></button>
          <button v-else class="btn btn-primary" @click="publishDemo">Lưu thiệp <span>♡</span></button>
        </div>
      </section>

      <aside v-if="showPreview" class="preview-panel">
        <div class="preview-header"><span class="eyebrow">BẢN XEM TRƯỚC TRỰC TIẾP</span><span class="preview-device">▯ Điện thoại</span></div>
        <div class="preview-phone"><div class="preview-screen"><img :src="photoSrc" :alt="template.name"><div class="preview-screen-shade"></div><div class="preview-invitation"><span class="preview-kicker">{{ form.ceremony.toUpperCase() }}</span><h2 class="serif">{{ form.brideName || 'Cô dâu' }}<i> & </i>{{ form.groomName || 'Chú rể' }}</h2><span class="preview-rule"></span><p>{{ formattedDate }}</p><p>{{ form.time || 'Giờ tổ chức' }}</p><div class="preview-venue">{{ form.venue || 'Địa điểm tổ chức' }}</div><small>{{ form.address || 'Địa chỉ' }}</small><div class="preview-message">{{ form.message }}</div><div v-if="form.dressCode && step >= 2" class="preview-dresscode">{{ form.dressCode }}</div><span class="preview-heart">♡</span></div></div></div>
        <div class="preview-template"><span>MẪU ĐANG DÙNG</span><strong class="serif">{{ template.name }}</strong><NuxtLink :to="`/mau-thiep/${template.slug}`">Chi tiết mẫu ↗</NuxtLink></div>
        <div class="preview-notice"><span>ⓘ</span><p>{{ step === 3 ? 'Bạn đang xem lại thông tin trước khi lưu thiệp.' : 'Thông tin được cập nhật trực tiếp trong bản xem trước.' }}</p></div>
      </aside>
    </div>
  </main>
</template>

<style scoped>
.builder-page{background:#fff5f6;min-height:70vh}.builder-top{border-bottom:1px solid var(--line);padding:35px 0 28px;background:linear-gradient(135deg,#fff5f7,#f8e8ed)}.builder-top-inner{display:flex;align-items:end;justify-content:space-between;gap:25px}.back-link{font-size:10px;color:var(--olive-dark);font-weight:700}.builder-top h1{font-size:clamp(37px,4vw,50px);font-weight:500;letter-spacing:-.05em;margin:15px 0 5px}.builder-top h1 em{color:var(--olive);font-weight:400}.builder-top p{font-size:12px;color:var(--muted);margin:0}.preview-toggle{display:none;border:1px solid var(--line);border-radius:99px;padding:10px 14px;background:transparent;font-size:10px}.builder-layout{display:grid;grid-template-columns:minmax(0,1fr) 390px;gap:60px;padding-block:42px 80px;align-items:start}.editor-panel{background:rgba(255,255,255,.6);border:1px solid var(--line);border-radius:20px;padding:30px}.editor-progress{display:flex;align-items:center;gap:10px;font-size:9px;color:#b7a5ad;padding-bottom:25px;border-bottom:1px solid var(--line)}.progress-active{width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:var(--olive-dark);color:#fff}.progress-line{height:1px;width:32px;background:var(--line)}.editor-progress small{margin-left:auto;font-size:8px;letter-spacing:.08em;color:var(--muted)}.editor-section{padding:27px 0;border-bottom:1px solid var(--line)}.editor-section-heading{display:flex;align-items:start;gap:13px;margin-bottom:21px}.section-icon{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#f6e6ec;color:var(--olive);flex-shrink:0}.editor-section-heading h2{font-size:22px;font-weight:500;margin:0 0 5px}.editor-section-heading p{font-size:10px;color:var(--muted);margin:0}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.form-grid label,.full-field{display:flex;flex-direction:column;gap:8px;font-size:10px;font-weight:700;color:#65515d;position:relative}.form-grid input,.form-grid textarea,.full-field textarea{width:100%;border:1px solid #e9d7df;background:#fffaf8;border-radius:12px;outline:none;padding:12px 13px;color:var(--ink);font-size:12px;font-weight:400;min-width:0;transition:border .2s}.form-grid input:focus,.form-grid textarea:focus,.full-field textarea:focus{border-color:#b96a88}.form-grid textarea,.full-field textarea{resize:vertical;line-height:1.7}.full-field{margin-top:16px}.form-grid>.full-field{grid-column:1/-1}.full-field:first-child{margin-top:0}.char-count{position:absolute;right:2px;bottom:-17px;font-size:9px;color:var(--muted);font-weight:400}.upload-placeholder{border:1px dashed #dec2cf;border-radius:13px;min-height:115px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:7px;background:#fff9f8}.upload-placeholder>span{font-size:21px;color:var(--olive)}.upload-placeholder strong{font-size:11px}.upload-placeholder small{font-size:9px;color:var(--muted)}.editor-actions{display:flex;justify-content:space-between;gap:12px;padding-top:25px}.editor-actions .btn{min-height:44px;font-size:11px}.preview-panel{position:sticky;top:105px}.preview-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.preview-header .eyebrow{font-size:8px}.preview-device{font-size:9px;color:var(--muted)}.preview-phone{width:100%;max-width:340px;margin:0 auto;background:#2d2028;border:7px solid #2d2028;border-radius:33px;padding:5px;box-shadow:0 20px 55px rgba(42,42,32,.14)}.preview-screen{min-height:570px;position:relative;overflow:hidden;border-radius:22px;background:#ead6df;color:#fff}.preview-screen>img{position:absolute;width:100%;height:100%;object-fit:cover;inset:0}.preview-screen-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(45,32,40,.05),rgba(45,32,40,.75))}.preview-invitation{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:end;align-items:center;text-align:center;padding:24px 18px 31px}.preview-kicker{font-size:8px;letter-spacing:.18em}.preview-invitation h2{font-size:clamp(25px,3vw,35px);line-height:1.2;font-weight:400;margin:17px 0 14px;overflow-wrap:anywhere}.preview-invitation h2 i{color:#f2c6b8;font-size:.75em}.preview-rule{height:1px;width:34px;background:#f0dce4;margin-bottom:17px}.preview-invitation p{font-size:10px;letter-spacing:.08em;margin:4px 0}.preview-venue{font-size:13px;font-weight:700;margin-top:13px}.preview-invitation small{font-size:9px;margin-top:6px;opacity:.85}.preview-message{font-family:var(--serif);font-size:12px;font-style:italic;line-height:1.7;margin-top:23px;max-width:250px}.preview-heart{font-size:21px;margin-top:16px;color:#f2c6b8}.preview-template{display:flex;align-items:center;gap:10px;margin-top:18px;padding:13px 15px;border:1px solid var(--line);border-radius:12px;background:rgba(255,255,255,.5)}.preview-template span{font-size:8px;color:var(--muted);letter-spacing:.1em}.preview-template strong{font-size:15px;font-weight:500;flex:1}.preview-template a{font-size:9px;font-weight:700;color:var(--olive-dark);white-space:nowrap}.preview-notice{display:flex;align-items:start;gap:10px;margin-top:12px;background:#f8eaf0;border-radius:10px;padding:12px;color:#806d77}.preview-notice>span{font-size:14px}.preview-notice p{font-size:9px;line-height:1.6;margin:0}
.progress-step{width:24px;height:24px;display:grid;place-items:center;border-radius:50%;border:1px solid #e7d3dc;background:#fff;color:#b7a5ad;flex-shrink:0;font-size:9px}.progress-step.progress-active{border-color:var(--olive-dark);background:var(--olive-dark);color:#fff}.progress-step.progress-done{border-color:#b96a88;background:#f6e6ec;color:#8f4966}.progress-line-done{background:#b96a88}.form-grid select{width:100%;border:1px solid #e9d7df;background:#fffaf8;border-radius:12px;outline:none;padding:12px 13px;color:var(--ink);font-size:12px;font-weight:400;min-width:0}.form-grid select:focus{border-color:#b96a88}.photo-upload{display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px;min-height:190px;border:1px dashed #d9b8c7;border-radius:16px;background:linear-gradient(135deg,#fff9f8,#fff0f5);padding:20px;text-align:center;cursor:pointer;overflow:hidden}.photo-upload input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.photo-upload strong{font-size:12px;color:var(--ink)}.photo-upload small,.helper-note{font-size:10px;color:var(--muted);line-height:1.7}.upload-symbol{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#f4dce6;color:#8e4564;font-size:24px}.uploaded-photo-preview{width:100%;max-height:210px;object-fit:cover;border-radius:10px}.helper-note{margin:10px 0 0}.toggle-row{display:flex;align-items:center;justify-content:space-between;gap:20px;position:relative;padding:15px;border:1px solid #ead9e0;border-radius:13px;background:#fffaf8;cursor:pointer}.toggle-row>span:first-child{display:flex;flex-direction:column;gap:5px}.toggle-row strong{font-size:11px;color:#65515d}.toggle-row small{font-size:10px;color:var(--muted);line-height:1.5}.toggle-input{position:absolute;right:15px;opacity:0;width:42px;height:24px;cursor:pointer}.toggle-ui{width:42px;height:24px;border-radius:99px;background:#d9cbd1;flex-shrink:0;position:relative;transition:background .2s}.toggle-ui:after{content:"";position:absolute;width:18px;height:18px;top:3px;left:3px;background:#fff;border-radius:50%;box-shadow:0 1px 4px #0002;transition:transform .2s}.toggle-input:checked+.toggle-ui{background:#a45574}.toggle-input:checked+.toggle-ui:after{transform:translateX(18px)}.final-step-intro{text-align:center;padding:35px 10px}.final-check{display:grid;place-items:center;width:54px;height:54px;border-radius:50%;background:#f4dce6;color:#8e4564;font-size:25px;margin:0 auto 17px}.final-step-intro h2{font-size:28px;font-weight:500;margin:0 0 9px}.final-step-intro p{max-width:350px;margin:0 auto;color:var(--muted);font-size:11px;line-height:1.8}.review-card{padding:22px;border:1px solid #ead9e0;background:#fffaf8;border-radius:16px}.review-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.review-card-top .eyebrow{font-size:8px;letter-spacing:.12em;color:var(--muted)}.text-edit{border:0;background:none;color:#974f6d;font-size:10px;font-weight:700;cursor:pointer}.review-card h3{font-size:27px;font-weight:500;margin:0 0 22px;overflow-wrap:anywhere}.review-card h3 span{color:#b96a88;font-style:italic}.review-row{display:flex;justify-content:space-between;gap:18px;padding:12px 0;border-top:1px solid #f0e2e8;font-size:10px;line-height:1.6}.review-row>span{color:var(--muted);flex:0 0 34%}.review-row strong{text-align:right;font-weight:600;color:#59434f;overflow-wrap:anywhere}.publish-info{display:flex;align-items:flex-start;gap:12px;margin-top:16px;padding:15px;border-radius:13px;background:#f8eaf0;color:#806d77}.publish-info>span{font-size:18px;color:#a45574}.publish-info p{font-size:10px;line-height:1.8;margin:0}.publish-info strong{color:#654456}.preview-dresscode{margin-top:10px;font-size:9px;border:1px solid #ffffff80;border-radius:99px;padding:5px 10px}
@media(max-width:950px){.builder-layout{grid-template-columns:minmax(0,1fr) 320px;gap:28px}.editor-panel{padding:22px}.preview-screen{min-height:500px}.editor-progress small{display:none}}
@media(max-width:760px){.builder-top-inner{align-items:start}.preview-toggle{display:block;white-space:nowrap}.builder-layout{grid-template-columns:1fr;padding-top:24px}.preview-panel{position:static;grid-row:1}.preview-phone{max-width:290px}.preview-screen{min-height:490px}.editor-panel{padding:20px}.preview-header{max-width:340px;margin-inline:auto;margin-bottom:12px}.preview-template,.preview-notice{max-width:420px;margin-inline:auto}.preview-template{margin-top:15px}.preview-notice{margin-top:10px}.preview-panel{display:block}.builder-top h1{font-size:38px}.builder-top p{max-width:250px;line-height:1.7}.form-grid{grid-template-columns:1fr}.full-field{margin-top:0}.editor-section{padding:23px 0}.editor-section-heading h2{font-size:20px}.editor-actions{flex-wrap:wrap}.editor-actions .btn{flex:1}.builder-layout:has(.preview-panel[style*="display: none"]){grid-template-columns:1fr}}
</style>
