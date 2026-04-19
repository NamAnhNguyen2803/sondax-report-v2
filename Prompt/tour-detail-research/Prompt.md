# Research Prompt — Tour Detail Data Generator

**Dùng để:** Fill `itinerary`, `marketBreakdown`, `designLevers`, `competitors`, `usp` cho từng tour trong `Sondax-v2/src/data/tours.js`.

**Template tham chiếu:** `ha-giang-jeep` (đã có đủ, xem cuối prompt).

---

## Vai trò

Bạn là một OTA product analyst nghiên cứu thị trường tour du lịch Việt Nam cho khách quốc tế. Bạn cần điền data chi tiết cho từng tour theo đúng format JS bên dưới, dựa trên:

- Thông tin OTA thực tế (Viator, GetYourGuide, Klook, MakeMyTrip, Ctrip)
- Hành vi booking theo từng thị trường nguồn
- Lịch trình thực tế của operator tiêu biểu trên thị trường
- Đối thủ cạnh tranh hàng đầu trên OTA

---

## Output Format (JS object — gắn vào tour object trong tours.js)

```js
hasDetail: true,
usp: '<1 câu — lý do duy nhất khách chọn tour này thay vì đối thủ>',
competitors: [
  { name: '<Tên operator/listing>', ota: '<viator|gyg|klook|makemytrip>', reviews: <số>, rating: <4.x>, price: '<$XX>', diff: '<1 dòng khác biệt chính>' },
  // 2–3 competitors là đủ
],
itinerary: [
  // Nếu 1 ngày: { time: 'HH:MM', stop: '<mô tả điểm dừng — cụ thể, không generic>' }
  // Nếu nhiều ngày: { day: <N>, time: 'HH:MM', stop: '<mô tả>' }
  // Mỗi ngày 4–7 stops. Thêm chi tiết thực tế: tên hang, tên làng, thời lượng hoạt động.
],
itineraryNote: '<1–2 câu về biến thể theo mùa, cancel condition, hoặc lưu ý logistic quan trọng>',
marketBreakdown: [
  { market: '<mã thị trường: au|us|uk|kr|in|fr|vn|ph|...>', pct: <số>, bookings7: <ước tính booking tháng 7>, peak: '<T9–T11 hoặc T3 & T10>', note: '<hành vi cụ thể: kênh OTA, motivation, group size, điều họ cần nhất>' },
  // Chỉ list thị trường thực sự có booking — không thêm cho có
],
designLevers: [
  { market: '<Quốc gia + flag emoji>', lever: '<3–4 action cụ thể để tăng conversion/ADR với thị trường này>', impact: '<+$XX/người HOẶC "Volume tăng X%">' },
  // 2–3 lever theo đúng thị trường trong marketBreakdown
],
```

---

## Nguyên tắc viết data

**Itinerary:**
- Dùng tên địa điểm thực (không viết "điểm tham quan chính")
- Ghi thời lượng hoạt động: "(45 phút)", "(2 tiếng)"
- Highlight điểm khác biệt — nếu tour này đi hang mà tour khác không vào được, ghi rõ
- Mùa ảnh hưởng hoạt động → ghi vào `itineraryNote`

**marketBreakdown:**
- `pct` phải cộng đủ = 100%
- `bookings7` = ước tính tháng 7 (thường là tháng có data trong `bookings.7` của tour object)
- Chỉ list thị trường match với `markets[]` của tour
- `note` phải nói được: họ book kênh nào, vì sao chọn tour này, họ cần gì mà không thấy ở nơi khác

**designLevers:**
- Lever = hành động cụ thể, không phải concept
- Xấu: "Cải thiện trải nghiệm văn hóa"
- Tốt: "Guide kể chuyện H'Mong border 1979 + dừng chợ phiên Mèo Vạc — không có trên Google Maps"
- Impact phải estimate được bằng số

---

## Danh sách tour cần fill (theo thứ tự ưu tiên)

### 1. `hanoi-food-night` — Hà Nội Street Food Night
- Price: $35–55 · Markets: uk, us · OTAs: viator, klook · Reviews: 4,794
- Bookings cao nhất T11 (9,400), T3 (8,200), T12 (8,400)
- Đây là tour walking + food. Cần itinerary 1 ngày (3h đêm, 8 món), competitors trong category "Hanoi food tour" trên Viator

### 2. `sapa-trek` — Sapa Trek 2N1Đ
- Price: $120–180 · Markets: fr, de, au, uk · OTAs: viator, gyg · Reviews: 820
- Peak: T9–T10 (lúa vàng), shoulder T3–T4 (ruộng đổ nước)
- Itinerary 2 ngày (Hà Nội → Sapa → Cát Cát → Fansipan option?)
- Competitors: "Sapa 2 day trek" category

### 3. `ninh-binh` — Ninh Bình Tam Cốc
- Price: $30–65 · Markets: us, fr, uk, au · OTAs: viator, gyg · Reviews: 2,100
- Viator top 3 VN listing (8,425 reviews on category)
- Full-day từ Hà Nội. Itinerary: Hoa Lư → Tràng An thuyền → Hang Múa leo núi
- Điểm khác biệt so với halong: cultural depth + UNESCO landscape

### 4. `mekong-delta` — Mekong Delta Day Trip
- Price: $40–70 · Markets: us, uk, au · OTAs: viator, klook · Reviews: 1,540
- Peak T12–T3 (dry season), secondary peak T7–T8 (flood + floating market)
- My Tho + Ben Tre. Khác biệt mùa mưa vs mùa khô
- Competitors: "Mekong delta day trip from Ho Chi Minh" category

### 5. `saigon-vespa` — Saigon Vespa Night
- Price: $40–65 · Markets: au, us, uk · OTAs: viator, gyg · Reviews: 3,400
- XO Tours = market leader. Itinerary 4h đêm, HCMC Old Quarter
- Competitors: XO Tours, Saigon Street Eats, Back of the Bike Tours

### 6. `dalat-canyon` — Đà Lạt Canyoning
- Price: $55–80 · Markets: au, uk, us · OTAs: viator, gyg · Reviews: 1,100
- Viet Challenge: TripAdvisor Best of Best 2026. Full-day, dam-controlled
- Điểm unique: không phụ thuộc thời tiết vì đập điều tiết nước
- Competitors: "Dalat canyoning" category — Phat Tire Ventures, Viet Challenge

### 7. `phu-quoc-snorkel` — Phú Quốc Snorkel 3 đảo
- Price: $31–86 · Markets: kr, au, ph · OTAs: klook, viator · Reviews: 920
- Peak T11–T4 (dry). 3 islands full-day
- Competitors: "Phu Quoc snorkeling 3 islands" — Rabbit Island, Sao Beach combos

### 8. `hoi-an-wellness` — Hội An Wellness Day
- Price: $85–120 · Markets: us, au · OTAs: viator · Reviews: 612
- Spa + cooking class + cycling. Lantern Festival 25/7
- Itinerary 1 ngày: sáng cycling → trưa cooking class → chiều spa
- Competitors: "Hoi An cooking class" + "Hoi An cycling" category

### 9. `bana-hills` — Ba Na Hills Golden Bridge
- Price: $65–95 · Markets: in, us · OTAs: klook, viator · Reviews: 1,230
- Full-day Đà Nẵng. Cáp treo + Golden Bridge + French Village
- ⚠️ Đây là attraction-based tour — itinerary đơn giản hơn, tập trung vào photo stops

### 10. `india-halong` — India Halong Cruise
- Price: $220–380 · Markets: in · OTAs: makemytrip · Reviews: 178
- Specialized cho thị trường Ấn: Jain meal, Hindi guide, family 6–10 pax
- Itinerary tương tự 1N2D standard cruise nhưng adapted cho Ấn
- Competitors: "Ha Long cruise family" trên MakeMyTrip

---

## Template tham chiếu đầy đủ (ha-giang-jeep)

```js
{
  id: 'ha-giang-jeep',
  // ... (basic fields giữ nguyên) ...
  hasDetail: true,
  usp: 'Enclosed cabin tránh mưa + phù hợp 35+ không thích xe máy.',
  competitors: [
    { name: 'Open Air Jeep HG', ota: 'gyg', reviews: 395, rating: 4.7, price: '$165', diff: 'Open-air Land Rover cổ' },
    { name: 'HG Loop Easy Rider', ota: 'viator', reviews: 1200, rating: 4.8, price: '$220', diff: 'Motorbike + driver' },
    { name: 'Vietnam Motorcycle Tours', ota: 'viator', reviews: 800, rating: 4.6, price: '$280', diff: 'Tự lái' },
  ],
  itinerary: [
    { day: 1, title: 'Hà Nội → Hà Giang', stops: ['06:00 Khởi hành từ Hà Nội (xe Jeep đón tại khách sạn)', 'Nghỉ trưa Tuyên Quang — bún cá sông Lô', '16:00 Check-in homestay Hà Giang thị xã'], distance: '320km · 6–7h' },
    { day: 2, title: 'Mã Pì Lèng + Đồng Văn', stops: ['07:30 Đèo Mã Pì Lèng (tầm nhìn 360°)', '09:00 Thuyền sông Nho Quế (30 phút)', 'Trưa phố cổ Đồng Văn', '14:00 Cột cờ Lũng Cú', '16:00 Dinh thự Vua Mèo'], distance: '80km loop' },
    { day: 3, title: 'Cao nguyên đá + Chợ phiên', stops: ['05:30 Sunrise Sán Phố (tùy ngày)', 'Chợ Mèo Vạc (phiên Chủ nhật/Thứ 5)', '15:00 Quay về Hà Giang'], distance: '120km' },
    { day: 4, title: 'Hà Giang → Hà Nội', stops: ['08:00 Khởi hành', '16:00–17:00 Về Hà Nội'], distance: '320km · 7h' },
  ],
  itineraryNote: 'Lịch trình có thể đổi thứ tự theo điều kiện đường. T7–T9 mưa: Mã Pì Lèng sương mù đẹp hơn nhưng hạn chế tầm nhìn.',
  marketBreakdown: [
    { market: 'au', pct: 42, bookings7: 1760, peak: 'T9–T11', note: 'Lúa chín vàng T10 = ảnh đẹp nhất. GYG AU + Viator. Small group ≤6 pax.' },
    { market: 'us', pct: 32, bookings7: 1344, peak: 'T3 & T9–T10', note: 'Spring break T3 + autumn couple. Cần justify enclosed cabin vs motorbike.' },
    { market: 'uk', pct: 26, bookings7: 1096, peak: 'T10–T11', note: 'Photography-focused. GYG UK chính. Thích authentic homestay bản.' },
  ],
  designLevers: [
    { market: 'Úc 🇦🇺', lever: 'Small group ≤6 pax. Sunrise stop Mã Pì Lèng tách riêng khỏi đoàn lớn. Storytelling H\'Mong culture sâu. Photography moment rõ ràng mỗi ngày.', impact: '+$30–50/người' },
    { market: 'Mỹ 🇺🇸', lever: 'Value justification vs open-air Jeep: enclosed = mưa không ướt, đường xấu không say. Cultural depth: lịch sử biên giới 1979. Cancellation policy rõ ràng.', impact: '+$20–40/người' },
    { market: 'Anh 🇬🇧', lever: 'Golden hour stop Mã Pì Lèng riêng, không chen đoàn khác. Guide kể chuyện thật, không đọc sách. Authentic homestay bản, không resort giả.', impact: '+$25–45/người' },
  ],
}
```

---

## Cách dùng prompt này

**Option A — Từng tour một (khuyến nghị):**
> "Điền data chi tiết cho tour `<tour-id>` theo đúng format trong Prompt.md. Context tour: [copy tour object cơ bản]. Tham chiếu ha-giang-jeep làm template."

**Option B — Batch theo nhóm:**
> "Điền data cho 3 tours: hanoi-food-night, sapa-trek, ninh-binh. Trả về 3 object JS riêng biệt."

**Sau khi có output:** Copy vào đúng tour object trong `Projects/Sondax-v2/src/data/tours.js`. Thêm `hasDetail: true` để `page_tours.jsx` render detail panel.
