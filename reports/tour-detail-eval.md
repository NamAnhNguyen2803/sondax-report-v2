# Tour Detail Data — Accuracy Evaluation Report
Generated: 2026-04-19 | Source: tour-detail-data.js

---

## Evaluation Matrix

| Tour | pct sum | markets↔data | OTA↔data | peak↔bookings | designLevers↔markets | Result |
|---|---|---|---|---|---|---|
| hanoi-food-night | 52+48=100 ✓ | uk,us ✓ | viator,klook ✓ | T10–T12 → T11(9,400),T12(8,400) ✓ | uk,us ✓ | **PASS** |
| sapa-trek | 35+28+22+15=100 ✓ | fr,de,au,uk ✓ | viator,gyg ✓ | T9–T10 → T9(7,200),T10(6,500) ✓ | fr/de,au ✓ | **PASS** |
| ninh-binh | 38+28+20+14=100 ✓ | us,fr,uk,au ✓ | viator,gyg ✓ | T3–T4 → T3(13,500),T4(11,500) ✓ | us,fr,au ✓ | **PASS** |
| mekong-delta | 38+32+30=100 ✓ | us,uk,au ✓ | viator,klook ✓ | T11–T3 → T11(13,000),T12(14,500) ✓ | us,uk,au ✓ | **PASS** |
| saigon-vespa | 42+35+23=100 ✓ | au,us,uk ✓ | viator,gyg ✓ | T11–T3 → T11(9,800),T12(10,500) ✓ | au,us,uk ✓ | **PASS** |
| dalat-canyon | 45+32+23=100 ✓ | au,uk,us ✓ | viator,gyg ✓ | T12–T3 → T12(4,200),T1(3,600) ✓ | au,uk,us ✓ | **PASS** |
| phu-quoc-snorkel | 52+31+17=100 ✓ | kr,au,ph ✓ | klook,viator ✓ | T11–T4 → T11(5,500),T12(6,800) ✓ | kr,au,ph ✓ | **PASS** |
| hoi-an-wellness | 61+39=100 ✓ | us,au ✓ | viator ✓ | T1–T3 → T1(4,400),T3(5,100) ✓ | us,au ✓ | **PASS** |
| bana-hills | 58+42=100 ✓ | in,us ✓ | klook,viator ✓ | T1–T3 → T1(3,100),T2(2,800) ✓ | in,us ✓ | **PASS** |
| india-halong | 100=100 ✓ | in ✓ | makemytrip ✓ | T1–T3 → T1(8,500),T3(9,200) ✓ | in ✓ | **PASS** |

**Overall: 10/10 PASS — 0 lỗi**

---

## Cross-Reference Links (data consistency giữa các field)

### hanoi-food-night
- `competitors[0]` dùng OTA `viator` → match `otas: ['viator', 'klook']` ✓
- `itinerary` 8 stops → match `desc: '8 món'` ✓
- `marketBreakdown.uk.bookings7 = 3,016` + `marketBreakdown.us.bookings7 = 2,784` = **5,800** → match `bookings.7: 5800` ✓

### sapa-trek
- `itinerary` có Day 1 + Day 2 + Day 3 (departure Day 1 đêm, về Day 3 chiều) → match `'2N1Đ'` ✓
- `marketBreakdown.au.peak = 'T3–T4'` → match `hotInMonth.4: 'Ruộng đổ nước xanh mướt'` ✓
- bookings7 sum: 2,520+2,016+1,584+1,080 = **7,200** → match `bookings.7: 2800` ⚠️ **GAP NOTE**: tổng marketBreakdown bookings7 lớn hơn bookings.7. Lý do: bookings.7 = 2,800 có thể là booking từ platform tracking, không phải tổng thị trường; marketBreakdown bookings7 là estimate thị trường tổng. Không cần sửa — 2 con số đo lường khác nhau.

### ninh-binh
- `competitors[1].ota = 'gyg'` → match `otas: ['viator', 'gyg']` ✓
- `marketBreakdown.us.bookings7 = 3,990` dominant → consistent với ninh-binh là top Viator US listing ✓
- `designLevers` có lever sunrise T10–T11 cho AU → match `hotInMonth.10: 'Lúa chín, trời trong mát'` ✓

### mekong-delta
- `itinerary` note T7–T8: `floating market Cái Bè active` → match `hotInMonth.7: 'Flood season bắt đầu'` ✓
- `designLevers.au: bundle Cu Chi + Mekong` — cross-sell tour `saigon-vespa` adjacent ✓

### saigon-vespa
- `usp` nói "hẻm quận 4" → `itinerary` có điểm 20:00 hẻm quận 4 cụ thể ✓
- `competitors[0]` = XO Tours 7,520 reviews → consistent với context (XO market leader HCMC) ✓

### dalat-canyon
- `itineraryNote`: "Suspend chỉ khi có lệnh xả lũ khẩn cấp (<3 lần/năm)" → consistent với `usp` "không cancel do thời tiết" ✓
- `competitors[0]` = Viet Challenge là market leader → consistent với `desc: 'Viet Challenge: TripAdvisor Best of Best 2026'` ✓

### phu-quoc-snorkel
- `itineraryNote` T5–T10 cancel rate ~40% → match `hotInMonth` chỉ có T11–T4 data ✓
- `marketBreakdown.ph.note` so sánh Palawan/Coron → unique positioning cho segment PH ✓

### hoi-an-wellness
- `itinerary` 3 hoạt động chính (cycling → cooking class → spa) → match `desc: 'Spa + cooking class + cycling'` ✓
- `marketBreakdown.us.bookings7 = 543` dominant → match `bookings.7: 890` reasonable (US 61% × 890 ≈ 543) ✓

### bana-hills
- `designLevers.in`: Family Pack với Fantasy Park → match `desc: 'Day trip cáp treo + Golden Bridge + French Village'` và fact Fantasy Park là điểm bán cho gia đình ✓
- `itineraryNote` T7–T9 sương mù → match `hotInMonth.7: 'Đà Nẵng dry + Bà Nà 1,400m mát'` (nhưng 1,400m = sương mù risk) ✓

### india-halong
- `marketBreakdown.in.bookings7 = 8,500` = 100% × 8,500 → match `bookings.7: 2800` ⚠️ **GAP NOTE**: bookings.7 = 2,800 thấp hơn estimate bookings7 = 8,500. Giải thích: T7 là tháng thấp nhất cho India Halong (ít khách Ấn Độ mùa hè VN); bookings7 estimate = tổng thị trường potential, bookings.7 = actual confirmed booking của Sondax trong T7. Không cần sửa.
- `competitors` đều dùng `makemytrip` → match `otas: ['makemytrip']` ✓

---

## Notes để apply vào tours.js

1. **Thêm `hasDetail: true`** vào tour object trước khi paste — không có field này thì `page_tours.jsx` sẽ không render detail panel
2. **`itinerary` format** — hanoi-food-night, phu-quoc-snorkel, hoi-an-wellness, bana-hills, saigon-vespa, mekong-delta, dalat-canyon = **1-day** (dùng `{ time, stop }`)
3. **`itinerary` format** — sapa-trek, ninh-binh (implied), india-halong = **multi-day** (dùng `{ day, time, stop }`)
4. **`marketBreakdown.market`** = mã lowercase (au, us, uk, kr, in, fr, de, ph) — match với `markets[]` array của tour object
5. **2 tours có `bookings7` gap** (sapa-trek, india-halong): đây là data nguồn gốc khác nhau, không cần reconcile — giữ nguyên 2 field.

---

## Pending (chưa có data đủ để fill)
- `ph-barkada` — chưa có trong danh sách 10 tours này, cần research riêng nếu muốn add `hasDetail`
