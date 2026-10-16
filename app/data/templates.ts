export interface WeddingTemplate {
  slug: string
  name: string
  category: string
  price: number
  description: string
  image: string
  accent: string
  label?: string
}

export const templates: WeddingTemplate[] = [
  {
    slug: 'vuon-nang', name: 'Vườn nắng', category: 'Hoa lá · Lãng mạn', price: 99000,
    description: 'Nét hoa mềm mại, tông kem ấm và xanh olive dịu dàng.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85', accent: '#d9d8bd', label: 'Được yêu thích',
  },
  {
    slug: 'toi-gian', name: 'Ngày mình chung đôi', category: 'Tối giản · Hiện đại', price: 99000,
    description: 'Bố cục thoáng, kiểu chữ thanh lịch cho cặp đôi hiện đại.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85', accent: '#ead8cc',
  },
  {
    slug: 'hoa-hong', name: 'Một đời thương', category: 'Cổ điển · Thanh lịch', price: 149000,
    description: 'Sắc hồng đất và những chi tiết nhẹ nhàng đầy cảm xúc.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85', accent: '#e8bfc9', label: 'Mới',
  },
  {
    slug: 'doi-ta', name: 'Đôi ta', category: 'Ảnh cưới · Tự nhiên', price: 149000,
    description: 'Đặt câu chuyện tình yêu và bộ ảnh của hai bạn ở vị trí trung tâm.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1000&q=85', accent: '#e4ccd6',
  },
  {
    slug: 'thuong', name: 'Thương', category: 'Nhẹ nhàng · Tinh tế', price: 99000,
    description: 'Tông màu tự nhiên, phù hợp một buổi tiệc thân mật ấm cúng.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1000&q=85', accent: '#f0dce4',
  },
  {
    slug: 'loi-hen', name: 'Lời hẹn tháng Ba', category: 'Editorial · Thơ mộng', price: 149000,
    description: 'Phong cách tạp chí, khoảng trắng đẹp và typography nổi bật.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85', accent: '#ead6df',
  },
]
