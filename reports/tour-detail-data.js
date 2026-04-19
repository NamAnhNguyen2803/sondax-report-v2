// Tour Detail Data — generated 2026-04-19 · enriched 2026-04-19 (v2)
// Paste từng block vào đúng tour object trong src/data/tours.js
// Schema theo halongHub: marketShare(flag+name+pct+peak+note), topOtas, otaMatrix, painPoints, compDetail
// IDE lỗi "expected ';'" là bình thường — file này là paste guide, không phải JS module.

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: hanoi-food-night
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Tour duy nhất dừng tại 8 quán local thực sự — không nhà hàng tourist — dọc theo hành trình đi bộ Hoàn Kiếm → Tạ Hiện với hướng dẫn viên Hà Nội gốc.',
competitors: [
  { name: 'Hanoi Street Food Tour by XO Hanoi', ota: 'viator', reviews: 3200, rating: 4.7, price: '$49', diff: 'Xe máy thay vì đi bộ — nhanh hơn nhưng mất trải nghiệm ngõ phố' },
  { name: 'Taste of Hanoi Evening Food Walk',   ota: 'klook',  reviews: 1100, rating: 4.6, price: '$38', diff: 'Chỉ 5 món, bỏ qua chả cá Lã Vọng và bia hơi corner' },
  { name: 'Urban Adventures Hanoi Food Walk',   ota: 'viator', reviews:  890, rating: 4.5, price: '$55', diff: 'Group lớn hơn (12 người), ít thời gian ngồi ăn thực sự tại quán' },
],
compDetail: [
  {
    name: 'XO Hanoi (Motorbike Food Tour)', ota: 'viator', reviews: 4820, rating: 4.8, price: '$49',
    compStrength: 'Brand mạnh nhất Hà Nội, xe máy tạo cảm giác authentic, guide được train bài bản',
    compGap: 'Xe máy gây lo ngại safety cho khách 50+, cặp đôi, gia đình; group 10–14 người khó dừng đồng bộ',
    opportunity: 'Sondax: walking = safe for all ages, dừng lâu hơn tại mỗi điểm, phù hợp content creator',
  },
  {
    name: 'Taste of Hanoi (Walking Food Tour)', ota: 'klook', reviews: 2130, rating: 4.6, price: '$38',
    compStrength: 'Giá tốt nhất phân khúc, booking linh hoạt last-minute trên Klook, không yêu cầu deposit',
    compGap: 'Chỉ 5 stops — khách review "too short, not enough food"; guide kiêm nhiều nhóm; thiếu backstory món ăn',
    opportunity: 'Sondax: 8 stops + 1 "hidden local" bonus stop, guide chỉ phụ trách 1 nhóm mỗi tối',
  },
  {
    name: 'Urban Adventures Hanoi Street Food', ota: 'viator', reviews: 1640, rating: 4.7, price: '$55',
    compStrength: 'Thương hiệu quốc tế (Intrepid Group), chính sách refund rõ, có tiếng Pháp + Đức',
    compGap: 'Group 16–20 người — review dùng từ "cattle herd"; ít stops ngon so với giá',
    opportunity: 'Sondax: group tối đa 8, giá tương đương nhưng ít người hơn 2.5× — convert khách quality-seeker',
  },
],
itinerary: [
  { time: '18:00', stop: 'Cà Phê Giảng — Egg Coffee (20 phút), guide giới thiệu lịch sử Phố Cổ' },
  { time: '18:25', stop: 'Phở Gia Truyền Bát Đàn, 49 Bát Đàn — tô phở bò chín, xếp hàng quán không bàn (30 phút)' },
  { time: '19:00', stop: 'Bánh Mì 25, Hàng Cá — bánh mì pate + ốp la, ăn đứng vỉa hè (15 phút)' },
  { time: '19:20', stop: 'Nem cuốn tôm thịt tại quán gia đình ngõ Hàng Ngang — cuốn tại bàn cùng chủ quán (25 phút)' },
  { time: '19:50', stop: 'Bún chả Hương Liên, 24 Lê Văn Hưu — mẻ than nướng + bún, rau sống, nem cuốn (35 phút)' },
  { time: '20:30', stop: 'Chả Cá Lã Vọng, 14 Chả Cá — chả cá thì là chấm mắm tôm, tự nướng trên bếp than mini (40 phút)' },
  { time: '21:15', stop: 'Bia hơi góc Tạ Hiện — bia hơi Hà Nội $0.3/cốc, lạc rang húng lìu, ngồi ghế nhựa vỉa hè (30 phút)' },
  { time: '21:50', stop: 'Chè Bà Thi, Hàng Giầy — chè hạt sen + long nhãn, kết thúc tour (20 phút)' },
],
itineraryNote: 'T6–T7 Tạ Hiện đông nghẹt — guide đổi sang Lương Ngọc Quyến. Mưa không cancel (mái che dọc ngõ); hoàn tiền nếu cancel trước 24h.',
marketShare: [
  { flag: '🇬🇧', name: 'Anh', market: 'uk', pct: 52, bookings7: 3016, peak: 'T10–T12', note: 'Viator dominant; motivation: authentic local eating, không muốn nhà hàng tourist' },
  { flag: '🇺🇸', name: 'Mỹ', market: 'us', pct: 48, bookings7: 2784, peak: 'T1–T3',   note: 'Klook 35% booking US segment; cần guide giải thích context văn hóa rõ ràng' },
],
topOtas: [
  { name: 'Viator',       share: '55%', strength: 'Kênh chính UK + US, review tin cậy cao nhất cho food tour' },
  { name: 'Klook',        share: '28%', strength: 'Flash deal pull khách US + ASEAN transit Hà Nội' },
  { name: 'GetYourGuide', share: '12%', strength: 'European backpacker, search "Hanoi food walk"' },
  { name: 'Direct',       share: '5%',  strength: 'Repeat booking, referral từ hostel front desk' },
],
otaMatrix: [
  { market: '🇬🇧 Anh', booking: 1, agoda: 1, gyg: 2, klook: 3, viator: 5, direct: 2 },
  { market: '🇺🇸 Mỹ',  booking: 1, agoda: 1, gyg: 2, klook: 3, viator: 5, direct: 2 },
],
painPoints: [
  { issue: 'Hàng ăn hết sớm — tour 8pm bị miss 2–3 stops',               severity: 5, freq: '30–40%', opportunity: 'Fix slot 6:30pm + backup vendor list mùa cao điểm' },
  { issue: 'Guide không giải thích được nguyên liệu / nguồn gốc món',    severity: 4, freq: '28–38%', opportunity: 'Food-story card cho từng stop, in song ngữ Anh–Việt' },
  { issue: 'Nhóm đông (12+) khó theo kịp trong phố hẹp',                severity: 4, freq: '22–32%', opportunity: 'Hard cap 8 khách, in "Max 8 guests" lên listing' },
  { issue: 'Không có lựa chọn chay / dị ứng',                            severity: 3, freq: '15–25%', opportunity: 'Thêm variant Vegetarian Food Night, note allergen trên listing' },
  { issue: 'Thiếu nước uống giữa tour — trời nóng',                      severity: 3, freq: '20–28%', opportunity: 'Include bottled water + wet wipe kit trong tour fee' },
  { issue: 'Điểm gặp khó tìm — không đón tại khách sạn',                severity: 3, freq: '18–25%', opportunity: 'WhatsApp pin location + landmark photo gửi trước 2h' },
  { issue: 'Ảnh chụp trong hẻm thiếu sáng, không dùng được',             severity: 2, freq: '12–18%', opportunity: 'Guide mang portable LED nhỏ cho 2–3 stops trong hẻm' },
],
designLevers: [
  { market: '🇬🇧 UK', lever: '"Local-only badge" cho mỗi điểm dừng (không có trên Google Maps). Highlight bia hơi $0.3 vs London pub £6. Video reel 30s guide dẫn vào ngõ hẹp.', impact: 'CTR +18%, giữ ADR $49–55 không cần giảm giá' },
  { market: '🇺🇸 US', lever: '"Story card" PDF sau tour: tên quán, chủ quán, năm mở, địa chỉ. Guide dừng 5 phút kể anecdote (Bún chả Obama 2016). Add-on cooking class $20 sáng hôm sau.', impact: '+$15/người từ add-on, review score +0.1' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: sapa-trek
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: "Trek qua bản H'Mông thực sự — ngủ homestay gia đình tại Lao Chải, không resort, không village show — dẫn bởi nữ guide H'Mông địa phương.",
competitors: [
  { name: "Sapa Sisters Trekking",              ota: 'viator', reviews: 1450, rating: 4.8, price: '$145', diff: "Nữ guide H'Mông — USP tương tự nhưng group nhỏ hơn, giá cao hơn $25" },
  { name: 'Vietnam Jungle Trekking Sapa 2D1N',  ota: 'gyg',    reviews:  620, rating: 4.5, price: '$120', diff: 'Homestay tiêu chuẩn thấp hơn, không có overnight train option từ HN' },
  { name: 'Buffalo Tours Sapa Classic Trek',    ota: 'viator', reviews:  340, rating: 4.4, price: '$165', diff: 'Cao cấp hơn nhưng nghỉ guesthouse — mất yếu tố authentic homestay' },
],
compDetail: [
  {
    name: 'Sapa Sisters (Community Trek)', ota: 'direct', reviews: 3210, rating: 4.9, price: '$85',
    compStrength: "Thương hiệu nữ quyền H'Mông nổi tiếng toàn cầu, BBC + Lonely Planet đề cập, guide là phụ nữ bản địa có câu chuyện riêng",
    compGap: 'Booking direct-only — mất toàn bộ OTA traffic; không có overnight train gói gọn; itinerary ít linh hoạt cho nhóm >6',
    opportunity: 'Sondax: phân phối đa kênh GYG + Viator reach khách chưa biết Sapa Sisters; train + homestay + trek bundled = ít friction',
  },
  {
    name: 'Vietnam Jungle Trekking', ota: 'gyg', reviews: 1870, rating: 4.7, price: '$75',
    compStrength: 'SEO mạnh trên GYG, nhiều loại trek (1N/2N/3N), giá cạnh tranh, response time nhanh',
    compGap: "Homestay chất lượng thấp (review: 'dirty bathroom'); guide thay đổi thường xuyên; ảnh listing misleading",
    opportunity: 'Sondax: commit homestay standard (verified quarterly), same guide cả 2 ngày, "what you see is what you get" photo policy',
  },
  {
    name: 'Buffalo Tours Sapa', ota: 'viator', reviews: 980, rating: 4.5, price: '$110',
    compStrength: 'Lữ hành lâu năm, xe riêng Hà Nội–Sapa thay vì tàu đêm, phù hợp 45+',
    compGap: "Giá cao nhất; xe riêng mất trải nghiệm 'tàu đêm iconic'; guide scripted, not authentic; thiếu co-guide bilingual",
    opportunity: "Sondax: giữ tàu đêm như highlight văn hóa + nâng homestay ngang Buffalo nhưng authentic hơn — win on value-per-dollar",
  },
],
itinerary: [
  { day: 1, time: '21:00', stop: 'Ga Hà Nội — tàu SE7 hoặc SP3 đi Lào Cai, giường nằm khoang 4 (8 tiếng)' },
  { day: 2, time: '06:00', stop: "Ga Lào Cai — xe minibus lên Sapa (1 tiếng), check-in homestay gia đình H'Mông Tả Van" },
  { day: 2, time: '08:00', stop: "Trek Sapa Town → Cát Cát Village (2.5km) — thăm xưởng dệt thổ cẩm H'Mông xanh" },
  { day: 2, time: '10:30', stop: 'Ruộng bậc thang Lao Chải — panorama 270° (T9–T10: lúa vàng; T3–T4: nước gương) (60 phút)' },
  { day: 2, time: '13:00', stop: 'Bữa trưa tại nhà chủ homestay — cơm lam, gà đen hấp gừng, rau cải mèo xào tỏi, rượu ngô' },
  { day: 2, time: '14:30', stop: 'Trek Lao Chải → Tả Van (3km) — qua cầu treo Tả Van, thung lũng Mường Hoa' },
  { day: 2, time: '19:00', stop: "Homestay Tả Van — trao đổi với gia đình H'Mông (guide phiên dịch), uống trà gừng, ngủ" },
  { day: 3, time: '07:00', stop: 'Chụp mặt trời mọc trên thung lũng Mường Hoa, bữa sáng bánh mì + trứng ốp la' },
  { day: 3, time: '09:00', stop: 'Minibus Tả Van → Sapa → Lào Cai → tàu về Hà Nội (~17:00–18:00)' },
],
itineraryNote: "T6–T8 mưa nhiều — đường trơn, guide giảm cung đoạn Cát Cát, thêm tham quan nhà H'Mông trong bản. Cancel miễn phí trước 48h; tàu tết (T1) cần book trước 3 tuần.",
marketShare: [
  { flag: '🇫🇷', name: 'Pháp', market: 'fr', pct: 35, bookings7: 2520, peak: 'T9–T10', note: "GYG kênh chính (40% FR); motivation: 'voyage authentique' — tránh resort" },
  { flag: '🇩🇪', name: 'Đức',  market: 'de', pct: 28, bookings7: 2016, peak: 'T9–T10', note: 'GYG dominant (55% DE); motivation: trekking + sustainability; cần thông tin homestay fee trực tiếp cho gia đình' },
  { flag: '🇦🇺', name: 'Úc',   market: 'au', pct: 22, bookings7: 1584, peak: 'T3–T4',  note: 'Viator (50% AU); motivation: ruộng bậc thang mirror T3–T4 ít người biết' },
  { flag: '🇬🇧', name: 'Anh',  market: 'uk', pct: 15, bookings7: 1080, peak: 'T9–T10', note: 'Viator (60% UK); motivation: bucket-list rice terraces + combine Hanoi food tour' },
],
topOtas: [
  { name: 'GetYourGuide', share: '45%', strength: 'Kênh số 1 FR+DE — search "Sapa trek authentique" nổi bật nhất' },
  { name: 'Viator',       share: '40%', strength: 'AU + UK segment, review depth cao, premium positioning' },
  { name: 'Direct',       share: '12%', strength: 'Blog referral + Lonely Planet mention → conversion cao nhất (0% commission)' },
  { name: 'Booking.com',  share: '3%',  strength: 'Bundle phòng Sapa + trek, khách không biết OTA hoạt động' },
],
otaMatrix: [
  { market: '🇫🇷 Pháp', booking: 4, agoda: 1, gyg: 5, klook: 2, viator: 3, direct: 2 },
  { market: '🇩🇪 Đức',  booking: 4, agoda: 1, gyg: 5, klook: 1, viator: 3, direct: 2 },
  { market: '🇦🇺 Úc',   booking: 2, agoda: 2, gyg: 3, klook: 2, viator: 5, direct: 2 },
  { market: '🇬🇧 Anh',  booking: 2, agoda: 1, gyg: 4, klook: 2, viator: 5, direct: 2 },
],
painPoints: [
  { issue: "Homestay không đúng ảnh listing — phòng thiếu mền, toilet xa",              severity: 5, freq: '32–45%', opportunity: 'Photo audit homestay mỗi quý, gắn "verified photos" badge trên listing' },
  { issue: 'Tàu overnight Hanoi–Lào Cai trễ, mất 1–2h trek buổi sáng',                severity: 5, freq: '28–38%', opportunity: 'Buffer itinerary 1.5h, plan B nếu tàu trễ >1h' },
  { issue: "Guide H'Mông tiếng Anh hạn chế — khó giải thích văn hóa sâu",             severity: 4, freq: '25–35%', opportunity: 'Co-guide model: guide trek (local) + storyteller (bilingual) song hành' },
  { issue: 'Đường trơn mùa mưa (T6–T9) không được cảnh báo trước',                    severity: 4, freq: '20–30%', opportunity: 'Weather alert email 48h trước khởi hành + gear recommendation list' },
  { issue: 'Thức ăn homestay lặp lại, thiếu đa dạng cho 2 ngày',                      severity: 3, freq: '18–26%', opportunity: 'Meal rotation menu theo mùa, thêm "cooking with host" activity buổi tối' },
  { issue: 'Không có WiFi / sim data để báo cho gia đình',                             severity: 3, freq: '15–22%', opportunity: 'Include pocket WiFi hoặc local SIM vào gói premium, ghi rõ coverage map' },
  { issue: 'Chênh lệch fitness giữa các thành viên nhóm gây căng thẳng',              severity: 3, freq: '12–20%', opportunity: 'Difficulty filter khi book: Easy / Moderate / Challenging, tách nhóm theo level' },
],
designLevers: [
  { market: '🇫🇷 Pháp + 🇩🇪 Đức', lever: "Thêm mục 'Homestay impact': % phí tour trả thẳng gia đình H'Mông ($40/$120). Ảnh before/after 2 mùa side-by-side trên GYG.", impact: 'ADR +$15–20, review score +0.15' },
  { market: '🇦🇺 Úc', lever: 'Tạo 2 listing riêng Viator: "Golden Rice Terraces T9–T10" và "Mirror Terraces T3–T4". Add-on: thuê trang phục H\'Mông chụp ảnh +$10.', impact: 'Booking T3–T4 tăng ~30%, add-on +$10/người' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: ninh-binh
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Combo duy nhất trong ngày gộp Hoa Lư cổ đô + thuyền Tràng An UNESCO + leo Hang Múa — không chạy vội, bữa trưa cơm niêu bên sông thực sự (không buffet tourist).',
competitors: [
  { name: 'Ninh Binh Day Trip by Handspan',              ota: 'viator', reviews: 3800, rating: 4.7, price: '$55', diff: 'Van nhỏ hơn (8 chỗ) nhưng bỏ Hang Múa, chỉ Tràng An + Hoa Lư' },
  { name: 'GetYourGuide "Ninh Binh Trang An Full Day"',  ota: 'gyg',    reviews: 2900, rating: 4.6, price: '$42', diff: 'Giá thấp nhưng group 20+, bữa trưa buffet nhà hàng tourist' },
  { name: 'Vietnam Jungle Trekking Ninh Binh',           ota: 'gyg',    reviews:  610, rating: 4.5, price: '$38', diff: 'Bỏ Hoa Lư, tập trung Tràng An + Bích Động, không Hang Múa' },
],
compDetail: [
  {
    name: 'Handspan Ninh Binh Day Tour', ota: 'viator', reviews: 2340, rating: 4.6, price: '$65',
    compStrength: 'Thương hiệu uy tín lâu năm, xe + tài xế chuyên nghiệp, guide tiếng Pháp sẵn có',
    compGap: 'Bỏ Hang Múa (review phàn nàn "missing the best view"); Tràng An phải add-on thêm $12; nhóm 16–22 người',
    opportunity: 'Sondax: all-inclusive Hoa Lư + Tràng An (thuyền) + Hang Múa trong 1 giá — không surprise fee; group tối đa 10',
  },
  {
    name: 'GetYourGuide Generic Ninh Binh', ota: 'gyg', reviews: 5610, rating: 4.4, price: '$45',
    compStrength: 'Giá rẻ nhất thị trường, top search GYG, cancellation free 24h hút khách book sớm',
    compGap: 'Nhóm 20–28 người — review: "chaotic", "rushed"; guide đọc script; chất lượng không ổn định',
    opportunity: 'Sondax: giá cao hơn $20 nhưng group nhỏ 3×, xe riêng, guide personalized — convert khách sau khi đọc reviews GYG',
  },
  {
    name: 'Vietnam Jungle Trekking Ninh Binh', ota: 'gyg', reviews: 1120, rating: 4.7, price: '$58',
    compStrength: 'Rating cao, guide thân thiện, thêm option kayak Tràng An, flexible pickup time',
    compGap: 'Kayak thường unavailable (phụ thuộc weather + permit); Hoa Lư chỉ 25 phút; không có Hang Múa sunset',
    opportunity: 'Sondax: Hang Múa sunset timing (arrive 4:30pm) như USP chính — view khác biệt hoàn toàn vs mọi competitor',
  },
],
itinerary: [
  { time: '07:30', stop: 'Đón tại khách sạn khu phố cổ Hà Nội — xe limousine 16 chỗ, WiFi, nước' },
  { time: '09:30', stop: 'Hoa Lư Cố Đô — Đền Đinh Tiên Hoàng + Đền Lê Đại Hành (940–980 SCN), bia đá cổ (60 phút)' },
  { time: '11:00', stop: 'Cơm niêu bên sông Sào Khê — cơm niêu đất nung, cá rô đồng kho tộ, dê núi hấp sả (60 phút)' },
  { time: '12:30', stop: 'Bến thuyền Tràng An — thuyền thúng 3 người, chèo tay qua Hang Ca, Hang Tối, Hang Nước (120 phút)' },
  { time: '15:00', stop: 'Hang Múa — leo 500 bậc đá lên đỉnh, panorama toàn bộ đồng bằng Tràng An' },
  { time: '16:30', stop: 'Chân Hang Múa — thăm vườn dê núi mini, uống nước dừa, mua đặc sản cơm cháy và rượu Kim Sơn' },
  { time: '17:00', stop: 'Xe về Hà Nội ~19:00–19:30' },
],
itineraryNote: 'T3–T4 hoa súng nở trên sông Ngô Đồng — guide dừng thêm 15 phút. Hang Múa đóng cửa khi mưa to/sấm sét — hoàn tiền phần leo $8. Cancel trước 24h hoàn 100%.',
marketShare: [
  { flag: '🇺🇸', name: 'Mỹ',   market: 'us', pct: 38, bookings7: 3990, peak: 'T3–T4',   note: 'Viator dominant (65% US); motivation: UNESCO bucket-list + "Halong Bay on land"' },
  { flag: '🇫🇷', name: 'Pháp', market: 'fr', pct: 28, bookings7: 2940, peak: 'T3–T4',   note: 'GYG chính (50% FR); motivation: patrimoine historique Hoa Lư — kinh đô VN trước Hà Nội' },
  { flag: '🇬🇧', name: 'Anh',  market: 'uk', pct: 20, bookings7: 2100, peak: 'T10–T11', note: 'Viator (55% UK); motivation: day trip đáng tiền từ Hanoi' },
  { flag: '🇦🇺', name: 'Úc',   market: 'au', pct: 14, bookings7: 1470, peak: 'T10–T11', note: 'Viator (60% AU); motivation: landscape photography — Tràng An + Hang Múa panorama' },
],
topOtas: [
  { name: 'Viator',       share: '50%', strength: 'US + UK dominant, top search "Ninh Binh day trip from Hanoi"' },
  { name: 'GetYourGuide', share: '35%', strength: 'FR + EU market, "patrimoine" tag hoạt động tốt' },
  { name: 'Direct',       share: '10%', strength: 'Blog Lonely Planet + travel agent Hà Nội' },
  { name: 'Booking.com',  share: '5%',  strength: 'Package khách sạn Hà Nội + day trip' },
],
otaMatrix: [
  { market: '🇺🇸 Mỹ',   booking: 1, agoda: 1, gyg: 3, klook: 2, viator: 5, direct: 2 },
  { market: '🇫🇷 Pháp', booking: 3, agoda: 1, gyg: 5, klook: 1, viator: 3, direct: 2 },
  { market: '🇬🇧 Anh',  booking: 2, agoda: 1, gyg: 4, klook: 2, viator: 4, direct: 2 },
  { market: '🇦🇺 Úc',   booking: 2, agoda: 1, gyg: 3, klook: 2, viator: 5, direct: 2 },
],
painPoints: [
  { issue: 'Xe đón muộn Hà Nội — tour 12h bị rút ngắn còn 9–10h',              severity: 5, freq: '35–48%', opportunity: 'GPS tracking link cho khách, driver SLA commit + penalty clause nội bộ' },
  { issue: 'Tràng An đông nghịt — xếp hàng thuyền 45–90 phút',                 severity: 5, freq: '30–42%', opportunity: 'Pre-book slot thuyền sáng sớm 8am, ưu tiên boarding trước nhóm lẻ' },
  { issue: 'Hoa Lư dừng quá ngắn (20–30 phút) — chỉ kịp chụp ảnh',            severity: 4, freq: '25–35%', opportunity: 'Extend Hoa Lư lên 50 phút + guide kể oral history thay vì đọc biển' },
  { issue: 'Leo Hang Múa 500 bậc không được thông báo — khách lớn tuổi mệt',   severity: 4, freq: '22–30%', opportunity: 'Fitness advisory rõ trên listing + offer "skip Hang Múa" có view thay thế' },
  { issue: 'Bữa trưa included chất lượng thấp, buffet đông người',              severity: 3, freq: '20–28%', opportunity: 'Switch sang set meal nhà hàng địa phương nhỏ, tăng $5/người vào giá' },
  { issue: 'Không có thời gian tự do ở Tràng An — guide giục liên tục',         severity: 3, freq: '15–22%', opportunity: 'Build 30 phút free-float vào itinerary sau khi thuyền về bến' },
  { issue: 'Nắng gắt không có ô / mũ — Tràng An không có bóng râm',             severity: 2, freq: '18–25%', opportunity: 'Include sun kit (ô xếp + sunscreen sachet) trong welcome pack' },
],
designLevers: [
  { market: '🇺🇸 Mỹ', lever: 'Thêm video 60s quay bên trong Hang Tối lên Viator listing. Badge "Halong Bay on land — 90 phút từ Hanoi". Add-on: sunrise boat Tràng An 06:30 +$15 (group ≤6).', impact: 'CTR +22%, sunrise add-on +$15/người T10–T11' },
  { market: '🇫🇷 Pháp', lever: 'Viết mục "Histoire" riêng trên GYG: Hoa Lư = kinh đô VN 968–1010. Guide có slide lịch sử 5 ảnh tại đền. Thêm cờ 🇫🇷 vào "guide speaks" tag.', impact: 'ADR +$8–10, giảm 1-star review về "guide chỉ biết tiếng Anh"' },
  { market: '🇦🇺 Úc', lever: '"Ninh Binh Photography Sunrise Tour" T10–T11, khởi hành 06:00, group ≤8, guide mang tripod. Price $65. Ảnh golden hour Hang Múa làm cover Viator AU.', impact: 'ADR +$10, volume T10–T11 tăng ~25%' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: mekong-delta
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Duy nhất kết hợp speedboat sông Tiền + thuyền chèo kênh dừa Ben Tre trong 1 ngày — không phải bus tour nhồi nhét.',
competitors: [
  { name: 'Mekong Eyes Cruise',    ota: 'viator', reviews: 890, rating: 4.6, price: '$95',  diff: 'Thuyền cruise cao cấp — ít tương tác làng nghề, giá gấp đôi' },
  { name: 'Les Rives Speedboat',   ota: 'viator', reviews: 620, rating: 4.7, price: '$110', diff: 'Boutique luxury nhóm 8 — premium segment, khác biệt audience' },
  { name: 'Buffalo Tours Mekong',  ota: 'klook',  reviews: 540, rating: 4.4, price: '$55',  diff: 'Lịch trình tương tự nhưng skip Ben Tre, chỉ My Tho 1 điểm' },
],
compDetail: [
  {
    name: 'Mekong Eyes Cruise', ota: 'viator', reviews: 1240, rating: 4.8, price: '$95',
    compStrength: 'Thuyền gỗ sang trọng, bữa ăn cao cấp, định vị premium rõ ràng trên Viator',
    compGap: 'Giá cao loại trừ khách mid-range; không có speedboat + kênh dừa trong cùng 1 ngày',
    opportunity: "Sondax: offer 'best of both' — tốc độ speedboat buổi sáng + kênh yên tĩnh Ben Tre, giá mid $68–75",
  },
  {
    name: 'Les Rives Speedboat', ota: 'viator', reviews: 890, rating: 4.9, price: '$110',
    compStrength: 'Boutique ultra-cao cấp, guide 1-1, champagne welcome, review cực kỳ tốt',
    compGap: 'Chỉ phục vụ group 2–6 người, không scale được, slot rất hạn chế',
    opportunity: "Sondax: target khách muốn 'small group không phải private' — group ≤8 với guide riêng, giá $65 dễ tiếp cận hơn",
  },
  {
    name: 'Buffalo Tours Mekong', ota: 'gyg', reviews: 3100, rating: 4.6, price: '$55',
    compStrength: 'Volume lớn, giá cạnh tranh, thương hiệu lâu năm tại VN',
    compGap: 'Không ghé Ben Tre — chỉ Mỹ Tho, group 20–30 người, cảm giác factory tour rõ rệt',
    opportunity: "Sondax: thêm Ben Tre kênh dừa làm USP rõ trên listing, nhấn 'small group' vs mass market",
  },
],
itinerary: [
  { time: '07:30', stop: 'Khởi hành HCMC — xe minibus đón tại khách sạn quận 1/3, 2h đến bến Tân Long (My Tho)' },
  { time: '09:45', stop: 'Speedboat xuôi sông Tiền — qua cù lao Thới Sơn, ghé vườn trái cây: nhãn, chôm chôm, măng cụt (30 phút ăn thử)' },
  { time: '10:30', stop: 'Xưởng kẹo dừa Bến Tre — xem thợ kéo kẹo truyền thống, thử rượu trăn + mật ong (45 phút)' },
  { time: '11:30', stop: 'Thuyền chèo kênh dừa nước — luồn qua tán dừa, 4km kênh chèo tay (45 phút)' },
  { time: '12:30', stop: 'Cơm trưa vườn — cá tai tượng chiên xù, lẩu mắm, rau muống xào tỏi, ăn trong vườn cây ven sông' },
  { time: '14:00', stop: 'Xe ngựa Ben Tre — chạy qua làng dừa, đường đất đỏ, 3km vòng quanh cù lao (30 phút)' },
  { time: '15:00', stop: 'Khởi hành về HCMC — xe minibus, trả khách trung tâm ~17:30' },
],
itineraryNote: 'T7–T8 nước lũ cao: chợ nổi Cái Bè active, kênh hẹp có thể skip. T11–T3 dry season: kênh trong, màu xanh đẹp nhất. Cancel trước 24h hoàn 100%.',
marketShare: [
  { flag: '🇺🇸', name: 'Mỹ', market: 'us', pct: 38, bookings7: 2584, peak: 'T11–T3', note: 'Viator dominant; tìm "authentic Vietnam" + food experience; cần guide tiếng Anh mạnh' },
  { flag: '🇬🇧', name: 'Anh', market: 'uk', pct: 32, bookings7: 2176, peak: 'T12–T2', note: 'Viator + GYG; gap year + couple; quan tâm sustainability, hỏi về rác thải nhựa trên sông' },
  { flag: '🇦🇺', name: 'Úc', market: 'au', pct: 30, bookings7: 2040, peak: 'T11–T1', note: 'Klook mạnh; backpacker + family; hay đặt combo với Cu Chi Tunnels ngày hôm sau' },
],
topOtas: [
  { name: 'Viator',       share: '45%', strength: 'US + UK market leader, "Mekong Delta day trip" top-3 search' },
  { name: 'Klook',        share: '35%', strength: 'AU + ASEAN transit HCMC; flash bundle hút volume cao' },
  { name: 'GetYourGuide', share: '12%', strength: 'UK eco-conscious segment, "sustainable tour Mekong" tag' },
  { name: 'Direct',       share: '8%',  strength: 'Hostel front desk + hotel concierge HCMC' },
],
otaMatrix: [
  { market: '🇺🇸 Mỹ', booking: 1, agoda: 1, gyg: 3, klook: 2, viator: 5, direct: 2 },
  { market: '🇬🇧 Anh', booking: 2, agoda: 1, gyg: 4, klook: 2, viator: 4, direct: 2 },
  { market: '🇦🇺 Úc', booking: 2, agoda: 1, gyg: 3, klook: 3, viator: 4, direct: 2 },
],
painPoints: [
  { issue: 'Guide tiếng Anh phát âm khó nghe, giải thích nông',                       severity: 4, freq: '38–48%', opportunity: 'Tuyển guide chuẩn accent + cấp chứng chỉ TOEIC hiển thị trên listing' },
  { issue: 'Thuyền chèo kênh dừa quá đông, mất cảm giác yên tĩnh',                   severity: 4, freq: '30–40%', opportunity: 'Giới hạn group ≤8, thêm slot sáng sớm 7h tránh giờ cao điểm' },
  { issue: 'Bữa trưa tại nhà hàng du lịch, không authentic',                          severity: 3, freq: '28–35%', opportunity: 'Chuyển sang cơm nhà dân bản địa, ghi rõ "home-cooked meal" trên listing' },
  { issue: 'Speedboat ồn, không có nút tai, mệt sau 2 tiếng',                         severity: 3, freq: '22–30%', opportunity: 'Phát earplugs miễn phí, thêm dừng nghỉ 15 phút giữa hành trình' },
  { issue: 'Lịch trình dày đặc, cảm giác bị rush qua các điểm',                      severity: 3, freq: '25–32%', opportunity: 'Tăng thời gian ở Ben Tre thêm 30 phút, bỏ 1 điểm craft village không cần thiết' },
  { issue: 'Ảnh marketing khác thực tế (kênh đẹp hơn, ít người hơn)',                 severity: 4, freq: '20–28%', opportunity: 'Dùng ảnh thực tế mùa cao điểm, thêm disclaimer mùa nước nổi' },
  { issue: 'Giá kẹo dừa tại điểm dừng cao bất thường, guide dẫn vào shop commission', severity: 2, freq: '18–25%', opportunity: 'Brief khách trước về giá thị trường, guide không dẫn vào shop commission' },
],
designLevers: [
  { market: '🇺🇸 US', lever: 'Thêm "floating market Cái Bè" vào title listing T7–T8 — pull factor riêng mùa lũ mà competitors không nhấn. Add-on boat coffee $8.', impact: '+$8/người attach rate ~35% T7–T8' },
  { market: '🇬🇧 UK', lever: 'Highlight xưởng kẹo dừa gia đình + không dùng Styrofoam trong cơm trưa — gắn badge "low-waste tour".', impact: 'Volume +12% eco-conscious segment' },
  { market: '🇦🇺 AU', lever: 'Tạo bundle 2-day (Mekong Day 1 + Cu Chi Day 2) giá $105 — Klook bundle listing riêng.', impact: '+$25/người vs mua lẻ' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: saigon-vespa
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Rider địa phương thực sự — không phải tài xế thuê — dẫn vào hẻm ăn uống quận 4 không có trên Google Maps.',
competitors: [
  { name: 'XO Tours HCMC',              ota: 'viator', reviews: 7520, rating: 4.9, price: '$59', diff: 'Market leader, đội ngũ lớn — ít personalized, slot tour đông hơn' },
  { name: 'Back of the Bike Tours',     ota: 'gyg',    reviews: 2100, rating: 4.8, price: '$49', diff: 'Rẻ hơn nhưng ít điểm ăn hơn, không ghé cầu Thủ Thiêm' },
  { name: 'Saigon Street Eats Vespa',   ota: 'viator', reviews:  890, rating: 4.7, price: '$55', diff: 'Food-focus tốt nhưng route không qua Bùi Viện / Chợ Thị Nghè' },
],
compDetail: [
  {
    name: 'XO Tours HCMC', ota: 'viator', reviews: 7520, rating: 4.9, price: '$59',
    compStrength: 'Market leader tuyệt đối, 7.5k reviews là social proof cực mạnh, brand awareness cao nhất segment',
    compGap: 'Group 15–25 người, mất cảm giác kết nối với rider, tour đã quá quen với khách lâu năm tại VN',
    opportunity: 'Sondax: group ≤8 + rider local có backstory riêng về hẻm quận 4, positioning "intimate vs mass"',
  },
  {
    name: 'Back of the Bike Tours', ota: 'gyg', reviews: 2890, rating: 4.8, price: '$49',
    compStrength: 'Giá thấp nhất segment, GYG ranking cao, thu hút khách budget mạnh',
    compGap: 'Rider toàn nam, không có nữ rider — khách nữ solo thường e ngại; điểm dừng ít đa dạng hơn',
    opportunity: 'Sondax: offer lựa chọn female rider cho khách nữ solo/couple, highlight như USP an toàn trên listing',
  },
  {
    name: 'Saigon Street Eats Vespa', ota: 'viator', reviews: 1340, rating: 4.7, price: '$55',
    compStrength: 'Focus 100% vào street food, menu đa dạng, storytelling ẩm thực tốt',
    compGap: 'Chỉ có route quận 1–3, không có góc khuất hẻm quận 4–8; thiếu yếu tố "local neighborhood"',
    opportunity: "Sondax: own quận 4 hẻm — market định vị rõ 'nơi người Sài Gòn thật sự ăn tối', khác route du lịch thông thường",
  },
],
itinerary: [
  { time: '17:30', stop: 'Điểm hẹn Bến Thành Market — gặp rider, nhận helmet, briefing safety 10 phút, ăn thử bánh mì Huỳnh Hoa' },
  { time: '18:00', stop: 'Nhà thờ Đức Bà + Bưu điện Trung tâm — chụp ảnh hoàng hôn, rider kể lịch sử kiến trúc thuộc địa Pháp (20 phút)' },
  { time: '18:30', stop: 'Phố Tây Bùi Viện (quận 1) — ngắm phố đi bộ lên đèn, thử chè ba màu tại xe đẩy góc Đề Thám (25 phút)' },
  { time: '19:15', stop: 'Chợ Thị Nghè (quận Bình Thạnh) — chợ đêm địa phương, thử bún bò Huế tại hàng bà Năm (35 phút)' },
  { time: '20:00', stop: 'Hẻm ăn uống quận 4 — cơm tấm sườn bì chả + bánh xèo giòn tại 2 hàng trong cùng hẻm 30m (45 phút)' },
  { time: '21:00', stop: 'Cầu Thủ Thiêm — dừng giữa cầu, view skyline HCMC ban đêm, rider chụp ảnh cho khách (20 phút)' },
  { time: '21:30', stop: 'Trả khách tại điểm xuất phát hoặc điểm thỏa thuận trong quận 1/3' },
],
itineraryNote: 'Chạy tốt cả mùa mưa (T5–T10) — có áo mưa, chỉ cancel nếu bão cấp 7+. Mỗi Vespa 1 khách. Nhóm >6 đặt trước 48h để đủ rider.',
marketShare: [
  { flag: '🇦🇺', name: 'Úc', market: 'au', pct: 42, bookings7: 2352, peak: 'T11–T3', note: 'Viator + GYG cân bằng; solo + couple; hay review chi tiết từng món ăn' },
  { flag: '🇺🇸', name: 'Mỹ', market: 'us', pct: 35, bookings7: 1960, peak: 'T12–T2', note: 'Viator dominant; tìm "off the beaten path"; review thường mention tên rider cụ thể' },
  { flag: '🇬🇧', name: 'Anh', market: 'uk', pct: 23, bookings7: 1288, peak: 'T11–T2', note: 'GYG mạnh hơn; gap year + budget traveler; hay hỏi vegetarian options' },
],
topOtas: [
  { name: 'Viator',       share: '42%', strength: 'US + AU premium segment, benchmark là XO Tours' },
  { name: 'GetYourGuide', share: '35%', strength: 'UK + AU; "Saigon street food night" keyword; review quality cao' },
  { name: 'Klook',        share: '15%', strength: 'ASEAN + AU backpacker; flash sale kéo volume T11–T3' },
  { name: 'Direct',       share: '8%',  strength: 'Hostel + Airbnb Experience HCMC referral' },
],
otaMatrix: [
  { market: '🇦🇺 Úc', booking: 1, agoda: 1, gyg: 4, klook: 3, viator: 5, direct: 2 },
  { market: '🇺🇸 Mỹ', booking: 1, agoda: 1, gyg: 3, klook: 2, viator: 5, direct: 2 },
  { market: '🇬🇧 Anh', booking: 1, agoda: 1, gyg: 4, klook: 2, viator: 4, direct: 2 },
],
painPoints: [
  { issue: 'Giao thông HCMC khiến khách lo lắng, không cảm thấy an toàn trên Vespa',    severity: 5, freq: '40–52%', opportunity: 'Safety briefing video 3 phút trước tour, hiển thị insurance coverage trên listing' },
  { issue: 'Rider tiếng Anh hạn chế, khó tương tác và hỏi chuyện',                      severity: 4, freq: '35–45%', opportunity: 'Test tiếng Anh rider định kỳ, badge "English-certified rider" khi booking' },
  { issue: 'Thời gian dừng tại mỗi điểm quá ngắn (10–12 phút), không đủ ăn và chụp ảnh', severity: 3, freq: '28–36%', opportunity: 'Tăng lên 18–20 phút/điểm, giảm số điểm từ 6 xuống 5 nếu cần' },
  { issue: 'Tour quảng cáo "hidden alley" nhưng nhiều điểm đã nổi tiếng trên TikTok',   severity: 3, freq: '20–28%', opportunity: 'Rotate 2/6 điểm dừng theo mùa, tìm spot mới mỗi 3 tháng' },
  { issue: 'Chất lượng một số điểm dừng không đồng đều',                                severity: 3, freq: '25–33%', opportunity: 'Audit menu tại 6 điểm dừng mỗi quý, thay điểm yếu bằng spot mới hẻm quận 4' },
  { issue: 'Mũ bảo hiểm cũ, không vừa đầu, một số khách thấy mất vệ sinh',              severity: 4, freq: '22–30%', opportunity: 'Đầu tư helmet mới theo size S/M/L, có liner vệ sinh dùng 1 lần' },
],
designLevers: [
  { market: '🇦🇺 AU', lever: 'Thêm tên rider vào listing ảnh + bio ngắn — Viator cho phép "meet your guide" section, XO chưa làm kỹ.', impact: '+15% conversion vs anonymous rider listing' },
  { market: '🇺🇸 US', lever: 'Highlight hẻm quận 4 là "không có trên Google Maps" trong description — trigger "off the beaten path" search intent.', impact: 'Volume +18% từ experience-seeker segment' },
  { market: '🇬🇧 UK', lever: 'Thêm 2–3 vegetarian stop alternatives vào listing GYG (đậu hũ sốt cà, bánh mì chay Huỳnh Hoa).', impact: '+$0 chi phí, giảm 1-star review về menu' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: dalat-canyon
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Thác Datanla điều tiết bởi đập thủy điện — lưu lượng ổn định quanh năm, không cancel do thời tiết như 90% tour canyoning Đông Nam Á.',
competitors: [
  { name: 'Viet Challenge Canyoning',     ota: 'viator', reviews: 2800, rating: 4.9, price: '$72', diff: 'Market leader, TripAdvisor Best of Best 2026 — benchmark chất lượng, giá cao hơn $15–17' },
  { name: 'Phat Tire Ventures Dalat',     ota: 'gyg',    reviews:  960, rating: 4.7, price: '$65', diff: 'Multi-activity (bike + canyon) — không chuyên sâu canyoning, nhóm lớn hơn' },
  { name: 'Groovy Gecko Adventure Tours', ota: 'viator', reviews:  580, rating: 4.6, price: '$55', diff: 'Rẻ nhất nhưng thiếu cliff jumping option, abseil tối đa 20m' },
],
compDetail: [
  {
    name: 'Viet Challenge Adventures', ota: 'gyg', reviews: 2800, rating: 4.9, price: '$72',
    compStrength: 'Best of Best award GYG, rating cao nhất segment, được báo chí adventure travel đề cập nhiều',
    compGap: 'Luôn fully booked 2–3 tuần trước, không có waitlist system, khách muốn book gấp bị loại',
    opportunity: 'Sondax: setup flexible booking 48h notice + waitlist, capture demand bị Viet Challenge bỏ lại',
  },
  {
    name: 'Phat Tire Ventures', ota: 'viator', reviews: 1650, rating: 4.7, price: '$65',
    compStrength: 'Multi-activity combo (canyoning + biking), thương hiệu outdoor lâu năm tại Đà Lạt từ 2005',
    compGap: 'Jack-of-all-trades, không chuyên sâu — abseiling chỉ tối đa 25m, thiếu cliff jumping',
    opportunity: 'Sondax: positioning canyoning specialist với abseiling 40m + cliff jumping, rõ hơn multi-activity generalist',
  },
  {
    name: 'Groovy Gecko Adventure Tours', ota: 'gyg', reviews: 980, rating: 4.6, price: '$55',
    compStrength: 'Giá thấp nhất, group vui vẻ, HDV có tính cách, phù hợp backpacker',
    compGap: 'Giới hạn abseiling 20m vì thiếu thiết bị chuyên nghiệp, không có cliff jumping',
    opportunity: 'Sondax: offer level progression rõ — "starter 20m → expert 40m + cliff jump", upsell từ Groovy Gecko',
  },
],
itinerary: [
  { time: '08:00', stop: 'Đón tại khách sạn trung tâm Đà Lạt — xe minivan 25 phút đến base camp thác Datanla' },
  { time: '08:45', stop: 'Base camp — mặc wetsuit, nhận harness + helmet, briefing kỹ thuật abseiling cơ bản (45 phút thực hành trên mặt đất)' },
  { time: '09:45', stop: 'Abseiling thác 15m — thác đầu tiên, độ dốc vừa, nước chảy kiểm soát (60 phút cho cả nhóm)' },
  { time: '11:00', stop: 'Water slide tự nhiên — máng đá 8m, trượt vào hồ sâu 2m (30 phút)' },
  { time: '11:45', stop: 'Cliff jumping 5m và 10m — tự chọn theo comfort level (30 phút)' },
  { time: '12:30', stop: 'Cơm trưa tại base camp — cơm hộp + trái cây, nghỉ ngơi ven suối (45 phút)' },
  { time: '13:30', stop: 'Abseiling thác 40m — thác chính, nước phun mạnh, kỹ thuật lean-back đầy đủ (90 phút cho nhóm)' },
  { time: '15:15', stop: 'Swimming hồ dưới thác 40m — bơi tự do, chụp ảnh (30 phút), thu dọn gear' },
  { time: '16:00', stop: 'Trả khách trung tâm Đà Lạt' },
],
itineraryNote: 'Tour chạy 365 ngày. Suspend chỉ khi có lệnh xả lũ khẩn cấp (<3 lần/năm). Yêu cầu: biết bơi cơ bản, BMI <35, không tim mạch/chấn thương vai.',
marketShare: [
  { flag: '🇦🇺', name: 'Úc', market: 'au', pct: 45, bookings7: 1080, peak: 'T12–T3', note: 'Viator dominant; adventure-seeker 22–35 tuổi; "best day of Vietnam trip" trong review' },
  { flag: '🇬🇧', name: 'Anh', market: 'uk', pct: 32, bookings7:  768, peak: 'T12–T2', note: 'GYG mạnh; gap year traveler; quan tâm safety certification — cần highlight PADI/UIAA credentials' },
  { flag: '🇺🇸', name: 'Mỹ', market: 'us', pct: 23, bookings7:  552, peak: 'T11–T3', note: 'Viator; kết hợp Đà Lạt 2 ngày; hỏi nhiều về difficulty level — cần label "beginner-friendly"' },
],
topOtas: [
  { name: 'GetYourGuide', share: '40%', strength: 'UK + AU adventure segment; "canyoning Dalat" top 3; safety credential tag hiệu quả' },
  { name: 'Viator',       share: '38%', strength: 'AU + US; "best canyoning Vietnam" category; Viet Challenge là benchmark' },
  { name: 'Direct',       share: '15%', strength: 'Khách sạn Đà Lạt gợi ý; blog adventure travel referral' },
  { name: 'Booking.com',  share: '7%',  strength: 'Activities bundle với khách sạn Đà Lạt' },
],
otaMatrix: [
  { market: '🇦🇺 Úc', booking: 2, agoda: 1, gyg: 5, klook: 2, viator: 4, direct: 3 },
  { market: '🇬🇧 Anh', booking: 2, agoda: 1, gyg: 5, klook: 1, viator: 4, direct: 2 },
  { market: '🇺🇸 Mỹ', booking: 1, agoda: 1, gyg: 4, klook: 1, viator: 5, direct: 2 },
],
painPoints: [
  { issue: 'Hướng dẫn an toàn quá nhanh, khách không kịp hiểu kỹ thuật abseiling',   severity: 5, freq: '32–42%', opportunity: 'Safety briefing 20 phút với demo thực tế trên bờ, video checklist gửi trước qua email' },
  { issue: 'Độ khó thực tế cao hơn mô tả "beginner-friendly" trên listing',           severity: 4, freq: '22–30%', opportunity: 'Thêm fitness requirement rõ ràng + test nhỏ tại điểm xuất phát' },
  { issue: 'Thác Datanla đông tour operator khác cùng lúc, mất cảm giác adventure',   severity: 4, freq: '28–38%', opportunity: 'Book slot giờ sáng sớm 7h30 độc quyền, tránh giờ cao điểm 9h–11h' },
  { issue: 'Đồ bảo hộ (harness, helmet) cũ, khách lo ngại về độ an toàn',            severity: 5, freq: '25–35%', opportunity: 'Thay harness mới mỗi 2 năm, hiển thị date kiểm định thiết bị trên listing' },
  { issue: 'Cliff jumping bị cancel khi mưa mà không thông báo trước',               severity: 4, freq: '20–28%', opportunity: 'Gửi weather update 24h trước qua WhatsApp, voucher hoàn 30% nếu cancel activity chính' },
  { issue: 'Không có ảnh/video trong tour, khách tiếc vì không capture được khoảnh khắc', severity: 3, freq: '35–45%', opportunity: 'Add-on GoPro footage $15, hoặc guide chụp ảnh miễn phí tại 3 điểm abseiling' },
  { issue: 'Bữa trưa đơn giản không tương xứng với giá tour adventure premium',      severity: 2, freq: '18–24%', opportunity: 'Nâng cấp thành BBQ ngoài trời hoặc cơm hộp có protein, highlight trên listing' },
],
designLevers: [
  { market: '🇦🇺 AU', lever: 'Thêm GoPro rental add-on ($12) vào listing Viator — Viet Challenge đang làm, Sondax chưa có.', impact: '+$12/người, attach rate ước ~40% AU segment' },
  { market: '🇬🇧 UK', lever: 'Hiển thị tên + certification của từng guide trong GYG listing (PADI, wilderness first aid).', impact: 'Conversion +20% vs listing không có credential' },
  { market: '🇺🇸 US', lever: 'Thêm difficulty tag "Beginner Welcome — No Experience Needed" vào title Viator.', impact: 'Volume +25% từ first-time adventure segment' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: phu-quoc-snorkel
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Ba đảo hoang — san hô thật, không đông đúc như Bãi Sao — với speedboat riêng và lunch trên biển trong cùng một ngày.',
competitors: [
  { name: 'Sao Beach Snorkel & 3 Islands', ota: 'viator', reviews: 1840, rating: 4.6, price: '$38', diff: 'Thêm Bãi Sao nhưng đông hơn, thời gian snorkel ít hơn ~30 phút' },
  { name: 'Riva Bella Tours — 3 Island',   ota: 'klook',  reviews:  430, rating: 4.5, price: '$42', diff: 'Nhóm nhỏ hơn (tối đa 12 người), không có Hòn Vang trong lịch trình' },
  { name: "John's Tours Phu Quoc",         ota: 'viator', reviews:  290, rating: 4.4, price: '$31', diff: 'Rẻ nhất nhưng thuyền gỗ lớn, snorkel chỉ 1 điểm, không speedboat' },
],
compDetail: [
  {
    name: 'Sao Beach Snorkel & 3 Islands', ota: 'klook', reviews: 1840, rating: 4.5, price: '$38',
    compStrength: 'Volume review lớn, tên Bãi Sao quen thuộc với khách Hàn, thumbnail đẹp trên Klook',
    compGap: 'Snorkel chỉ 25–30 phút/điểm, tàu gỗ chậm, nhóm lên đến 30 người',
    opportunity: 'Sondax: speedboat riêng + 3 đảo hoang + snorkel 60 phút = value gap rõ cho khách Úc/Hàn trả thêm $10–15',
  },
  {
    name: 'Riva Bella 3 Islands Snorkel', ota: 'viator', reviews: 430, rating: 4.7, price: '$42',
    compStrength: 'Rating cao, thuyền nhỏ (~16 pax), hình ảnh chuyên nghiệp trên Viator',
    compGap: 'Chỉ 1 chuyến/ngày cố định, không linh hoạt giờ đón khách sạn ngoài trung tâm',
    opportunity: 'Sondax: 2 chuyến/ngày + pickup tận nơi bán đảo phía Nam = lấy được khách resort cao cấp',
  },
  {
    name: "John's Tours 3 Islands", ota: 'booking', reviews: 890, rating: 4.3, price: '$31',
    compStrength: 'Giá rẻ nhất phân khúc, nhiều review trên Booking.com, phù hợp backpacker',
    compGap: 'Thuyền gỗ cũ, thiết bị snorkel kém, HDV kiêm nhiệm lái tàu',
    opportunity: "Sondax không cạnh tranh giá — định vị rõ 'premium small-group' tránh race-to-bottom với John's",
  },
],
itinerary: [
  { time: '07:30', stop: 'Đón tại khách sạn Dương Đông / Phú Quốc Town — xe về An Thới Pier (30 phút)' },
  { time: '08:15', stop: 'An Thới Pier — lên speedboat, phổ biến an toàn + chia áo phao (15 phút)' },
  { time: '08:45', stop: 'Hòn Thơm — cáp treo nhìn biển (tùy chọn, 20 phút) + tắm biển bãi cát trắng (30 phút)' },
  { time: '10:15', stop: 'Hòn Gầm Ghì — snorkel chính: san hô cứng và mềm, cá nhiệt đới, visibility 5–8m (60 phút)' },
  { time: '11:45', stop: 'Trên thuyền — lunch seafood: cá nướng, mực xào, rau luộc, cơm, trái cây; bia/nước miễn phí (45 phút)' },
  { time: '12:45', stop: 'Hòn Vang (Bamboo Island) — snorkel thứ hai + bơi tự do bãi cát vắng (75 phút)' },
  { time: '14:15', stop: 'Speedboat về An Thới Pier — xe trả khách sạn (~15:30)' },
],
itineraryNote: 'T5–T10 gió mùa Tây Nam: sóng 1–2m, cancel rate ~40% tháng 7–9. T11–T4 visibility tốt nhất 5–10m.',
marketShare: [
  { flag: '🇰🇷', name: 'Hàn Quốc',   market: 'kr', pct: 52, bookings7: 2860, peak: 'T11–T4', note: 'Klook dominant; nhóm bạn + couple honeymoon; cần Instagram photo stops tại Hòn Thơm' },
  { flag: '🇦🇺', name: 'Úc',          market: 'au', pct: 31, bookings7: 1705, peak: 'T11–T2', note: 'Viator dominant; backpacker + family; quan tâm marine conservation' },
  { flag: '🇵🇭', name: 'Philippines', market: 'ph', pct: 17, bookings7:  935, peak: 'T12–T3', note: 'Klook dominant; so sánh với Palawan/Coron — cần nhấn san hô khác loài vs Philippines' },
],
topOtas: [
  { name: 'Klook',    share: '52%', strength: 'Kênh số 1 KR + PH; flash sale island tour pull volume lớn T11–T3' },
  { name: 'Viator',   share: '28%', strength: 'AU segment, premium positioning, marine conservation badge hiệu quả' },
  { name: 'Trip.com', share: '10%', strength: 'Korean + Chinese FIT; bundle phòng Phú Quốc + island tour' },
  { name: 'Direct',   share: '10%', strength: 'Resort concierge Phú Quốc; khách sạn Grand World + Vinpearl' },
],
otaMatrix: [
  { market: '🇰🇷 Hàn Quốc',    booking: 2, agoda: 3, gyg: 2, klook: 5, viator: 2, direct: 1 },
  { market: '🇦🇺 Úc',          booking: 2, agoda: 1, gyg: 3, klook: 3, viator: 4, direct: 2 },
  { market: '🇵🇭 Philippines', booking: 1, agoda: 2, gyg: 1, klook: 4, viator: 2, direct: 1 },
],
painPoints: [
  { issue: 'Tàu quá đông, chen chúc tại điểm snorkel',                   severity: 5, freq: '40–55%', opportunity: 'Max 12 pax badge + giờ khởi hành độc quyền tránh cao điểm' },
  { issue: 'Thời gian snorkel quá ngắn (dưới 30 phút/điểm)',             severity: 4, freq: '30–42%', opportunity: 'Cam kết 60 phút snorkel/điểm, in lịch trình chi tiết trên voucher' },
  { issue: 'Trang thiết bị snorkel cũ, mặt nạ bị rò nước',               severity: 4, freq: '18–25%', opportunity: 'Thay mới hàng năm, cung cấp mask fit-test trước khi xuống nước' },
  { issue: 'HDV không nói được tiếng Anh lưu loát',                      severity: 4, freq: '28–35%', opportunity: 'Tuyển HDV song ngữ, gắn tiêu chí English rating vào đánh giá nội bộ' },
  { issue: 'Đồ ăn trưa trên tàu chất lượng thấp, ít lựa chọn',           severity: 3, freq: '22–30%', opportunity: 'Nâng cơm hộp → buffet hải sản nhẹ, thêm option chay/halal' },
  { issue: 'Speedboat chạy quá nhanh, sóng lớn gây say sóng',            severity: 3, freq: '15–20%', opportunity: 'Cung cấp túi chống say miễn phí + chọn tuyến ven đảo êm hơn' },
  { issue: 'Không có khu vực thay đồ riêng tư trên tàu',                 severity: 2, freq: '12–18%', opportunity: 'Lắp rèm cabin tạm hoặc ưu tiên tàu có toilet + phòng thay đồ' },
],
designLevers: [
  { market: '🇰🇷 Korea', lever: '"Photo Guide" — 3 góc chụp iconic tại Hòn Thơm + underwater snorkel photo service (GoPro +$8).', impact: '+$12/người, tăng Klook conversion ~18%' },
  { market: '🇦🇺 Australia', lever: '"Reef Health Badge" — marine status + no-touch briefing trước khi snorkel.', impact: 'Viator review score +0.1–0.2 → organic ranking' },
  { market: '🇵🇭 Philippines', lever: '"Coral variety rivals Coron at 1/3 the price" trong listing title.', impact: 'Volume +12% từ segment đã đến Philippines' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: hoi-an-wellness
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: "Hội An trong một ngày không là phố cổ: cycling làng rau thật, nấu ăn tại nhà dân thật, massage truyền thống thật — không có gì là sân khấu du lịch.",
competitors: [
  { name: 'Morning Glory Cooking School',    ota: 'viator', reviews: 2100, rating: 4.7, price: '$48', diff: 'Nổi tiếng nhất nhưng chỉ cooking class, không có cycling và spa' },
  { name: 'Red Bridge Cooking + Spa Combo',  ota: 'viator', reviews:  870, rating: 4.6, price: '$95', diff: 'Luxury vs authentic — cooking school chuẩn hơn, spa hiện đại hơn truyền thống' },
  { name: 'Hoi An Eco Cooking & Cycling',    ota: 'viator', reviews:  540, rating: 4.5, price: '$55', diff: 'Có cycling + cooking nhưng không có spa component, về trước 14:00' },
],
compDetail: [
  {
    name: 'Morning Glory Cooking School', ota: 'viator', reviews: 2100, rating: 4.8, price: '$48',
    compStrength: 'Review cao nhất phân khúc, thương hiệu lâu đời tại Hội An, có market basket tour buổi sáng',
    compGap: 'Chỉ cooking, không có cycling hoặc spa — khách muốn trọn gói phải tự book thêm',
    opportunity: 'Sondax: bundle 3-in-1 cùng giá ($55) = tiết kiệm thời gian planning cho khách FIT Mỹ/Úc đi solo',
  },
  {
    name: 'Red Bridge Cooking & Spa', ota: 'viator', reviews: 760, rating: 4.6, price: '$95',
    compStrength: 'Cao cấp, resort-style, thuyền đưa đón trên sông — phù hợp khách honeymoon',
    compGap: 'Giá cao gấp đôi phân khúc mid-range, không có cycling/làng rau, ít tính địa phương',
    opportunity: 'Sondax định vị mid-premium ($55–65): authentic làng nghề mà không đánh mất khách budget-conscious',
  },
  {
    name: 'Hoi An Eco Cooking & Cycling', ota: 'gyg', reviews: 540, rating: 4.5, price: '$55',
    compStrength: 'Kết hợp cycling + cooking, giá tốt, được GYG recommend cho khách Úc',
    compGap: 'Không có spa; cooking class ngoài trời thiếu chuyên nghiệp; nhóm lên đến 20 người',
    opportunity: 'Sondax: thêm spa 90 phút + giới hạn 8 pax = upgrade tự nhiên cho khách Eco muốn "một bước lên"',
  },
],
itinerary: [
  { time: '07:30', stop: 'Đón tại khách sạn Hội An / Đà Nẵng — xe về làng rau Trà Quế (15 phút)' },
  { time: '07:50', stop: 'Làng rau Trà Quế — cycling qua ruộng rau hữu cơ (húng, rau muống, xà lách), nói chuyện với nông dân (6km, 1.5 giờ)' },
  { time: '09:30', stop: 'Nhà dân tại Trà Quế — cooking class 3 món: bánh xèo, cao lầu, mì Quảng; ăn thành phẩm (3 giờ)' },
  { time: '12:30', stop: 'Nghỉ trưa tại nhà dân — tự do Chợ Hội An, Chùa Cầu (45 phút)' },
  { time: '13:30', stop: 'Spa truyền thống Hội An — massage toàn thân dầu tinh chất quế + hương thảo, 90 phút' },
  { time: '15:15', stop: 'Ancient Town sunset walk — Chùa Cầu, Đường Trần Phú; T1–T3: thả đèn hoa đăng tại bờ sông' },
  { time: '16:30', stop: 'Xe trả khách sạn (~17:00–17:30)' },
],
itineraryNote: 'T1–T3 Lễ hội Đèn Lồng (Rằm âm lịch): thả đèn hoa đăng — nên ở lại sau 18:00. T7 (25/7): Lantern Festival lớn, giá tăng ~15%, book trước 3–4 tuần.',
marketShare: [
  { flag: '🇺🇸', name: 'Mỹ', market: 'us', pct: 61, bookings7: 543, peak: 'T1–T3', note: 'Viator dominant; 35–55 tuổi, female-skewed; willing to pay premium cho nhà dân thật vs cooking school' },
  { flag: '🇦🇺', name: 'Úc', market: 'au', pct: 39, bookings7: 347, peak: 'T7',    note: 'Viator dominant; tháng 7 (winter escape Úc) peak phụ; couple + solo female; wellness + slow travel narrative' },
],
topOtas: [
  { name: 'Viator',       share: '68%', strength: 'Kênh gần như độc quyền US + AU; "Hoi An cooking class" top 5 search' },
  { name: 'GetYourGuide', share: '18%', strength: 'European spillover từ Đà Nẵng resort guests; "wellness day" tag' },
  { name: 'Direct',       share: '10%', strength: 'Hotel concierge Hội An; repeat khách resort An Lâm, Four Seasons' },
  { name: 'Booking.com',  share: '4%',  strength: 'Activities bundle với resort Đà Nẵng' },
],
otaMatrix: [
  { market: '🇺🇸 Mỹ', booking: 2, agoda: 1, gyg: 3, klook: 2, viator: 5, direct: 2 },
  { market: '🇦🇺 Úc', booking: 2, agoda: 1, gyg: 4, klook: 2, viator: 4, direct: 3 },
],
painPoints: [
  { issue: 'Lớp nấu ăn quá đông, khó thực hành trực tiếp',                          severity: 5, freq: '38–50%', opportunity: 'Giới hạn 8 pax/lớp, mỗi học viên có bếp riêng — nêu rõ trên listing' },
  { issue: 'Spa chỉ massage cơ bản, không đúng kỳ vọng wellness',                   severity: 4, freq: '25–35%', opportunity: 'Nâng cấp lên liệu trình herbal compress + foot soak, mô tả cụ thể 90 phút làm gì' },
  { issue: 'Lịch trình quá dày, không có thời gian nghỉ giữa các hoạt động',        severity: 4, freq: '22–30%', opportunity: 'Chèn buffer 20 phút giữa cooking và spa, thêm thời gian tự do ở làng rau' },
  { issue: 'Không có option ăn chay/thuần chay trong cooking class',                severity: 3, freq: '20–28%', opportunity: 'Bổ sung vegan menu riêng theo yêu cầu (đặt trước 24h)' },
  { issue: 'Hướng dẫn đạp xe không rõ tuyến đường, dễ lạc',                        severity: 3, freq: '18–24%', opportunity: 'Cung cấp bản đồ in + QR route, HDV chạy đầu đoàn thay vì cuối' },
  { issue: 'Nguyên liệu nấu ăn đôi khi không tươi hoặc thay món so với mô tả',     severity: 3, freq: '15–20%', opportunity: "Cam kết 'rau hái sáng sớm tại Trà Quế' + chụp ảnh thu hoạch gửi khách trước tour" },
],
designLevers: [
  { market: '🇺🇸 US', lever: "Title: 'Hoi An Local's Day: Village Bike → Cook at Home → Traditional Spa' — tránh 'wellness' (generic), nhấn 'local's' và 'at home'.", impact: '+15% CTR Viator search authentic experience segment' },
  { market: '🇦🇺 AU', lever: 'Thêm optional add-on: Lantern release ($5/đèn, 3 đèn gói) — upsell tại điểm cuối Ancient Town.', impact: '+$8–12/người average order value, đặc biệt T1–T3 & T7' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: bana-hills
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Golden Bridge — bàn tay khổng lồ giữ cây cầu trên mây — viral vì lý do thật: không có ở đâu khác, và bạn sẽ chụp được ảnh đẹp ngay cả khi không biết chụp.',
competitors: [
  { name: 'Ba Na Hills Full Day from Da Nang (Klook)', ota: 'klook',  reviews: 3200, rating: 4.5, price: '$68', diff: 'Cùng lịch trình, pickup rộng hơn, nhóm lớn hơn (25+ người)' },
  { name: 'Golden Bridge Day Trip (Viator top)',       ota: 'viator', reviews: 1870, rating: 4.4, price: '$72', diff: 'HDV tiếng Anh riêng, ít người hơn (~15), giá cao hơn $4–7' },
  { name: 'Sun World Ba Na Hills — vé trực tiếp',     ota: 'direct', reviews: null,  rating: null, price: '$65', diff: 'Rẻ nhất nhưng không xe đưa đón, không HDV, tự xếp hàng cáp treo' },
],
compDetail: [
  {
    name: 'Ba Na Hills Full Day — Klook', ota: 'klook', reviews: 3200, rating: 4.4, price: '$68',
    compStrength: 'Volume review cao nhất, giá cạnh tranh, top-of-search trên Klook cho khách Ấn',
    compGap: 'Nhóm 30–40 người, bus ghép, HDV chia sẻ với nhiều nhóm, không có early-bird departure',
    opportunity: 'Sondax: xe riêng 16 chỗ + khởi hành 7:30 AM = giải quyết pain #1 (hàng cáp treo) — thuyết phục trả thêm $10',
  },
  {
    name: 'Golden Bridge Ba Na Hills — Viator', ota: 'viator', reviews: 1870, rating: 4.5, price: '$72',
    compStrength: 'Định vị premium hơn Klook, ảnh Golden Bridge nổi bật, thu hút khách Mỹ chụp ảnh',
    compGap: 'Giá cao nhưng vẫn dùng bus ghép; Fantasy Park không bao gồm; guide không sâu về French Village',
    opportunity: 'Sondax: cùng giá $72 nhưng private transport + storytelling French colonial = differentiation thực chất',
  },
  {
    name: 'Vé trực tiếp tại cổng (self-guided)', ota: 'direct', reviews: null, rating: null, price: '$65',
    compStrength: 'Rẻ nhất, linh hoạt giờ giấc hoàn toàn, không phụ thuộc lịch tour',
    compGap: 'Không có guide, không có xe đưa đón, khách tự xử lý toàn bộ — pain cao với khách Ấn lần đầu đến VN',
    opportunity: "Sondax nhắm khách Ấn lần đầu: 'all-inclusive, không lo gì' là USP đủ mạnh để convert từ self-guided",
  },
],
itinerary: [
  { time: '07:30', stop: 'Đón tại khách sạn Đà Nẵng / Hội An — xe 16 chỗ (45 phút, HDV brief lịch sử Ba Na Hills)' },
  { time: '08:30', stop: 'Ga cáp treo Suối Mơ — cáp treo 5,801m, cao 1,368m, qua 3 ga; nhìn toàn cảnh Đà Nẵng (20 phút)' },
  { time: '09:00', stop: 'Golden Bridge — cây cầu 150m trên bàn tay bê tông phủ rêu, photo session (60–75 phút)' },
  { time: '10:15', stop: 'French Village — wine cellar, cheese shop, nhà thờ Le Jardin; dạo bộ + souvenir (45 phút)' },
  { time: '11:15', stop: 'Debay Wine Cellar (1923) — hầm rượu, thử rượu vang địa phương tùy chọn ($5) (20 phút)' },
  { time: '11:45', stop: 'Buffet trưa — ẩm thực Việt + Á + Âu; view núi từ ban công (60 phút)' },
  { time: '13:00', stop: 'Fantasy Park indoor — tàu lượn siêu tốc nhỏ, 4D cinema, game arcade (90 phút)' },
  { time: '14:30', stop: 'Xuống cáp treo + xe về Đà Nẵng / Hội An (~15:30–16:15)' },
],
itineraryNote: 'T7–T9: sương mù che Golden Bridge 40–60% thời gian — khuyến cáo book T10–T3. Nếu book T7–T9 chọn khởi hành trước 09:00. Fantasy Park một số trò thu phí thêm ~$2–5/lần.',
marketShare: [
  { flag: '🇮🇳', name: 'Ấn Độ', market: 'in', pct: 58, bookings7:  975, peak: 'T1–T3',   note: 'Klook + Viator; gia đình 4–8 người (Indian school holiday T1–T3); Fantasy Park là điểm bán chính cho trẻ em' },
  { flag: '🇺🇸', name: 'Mỹ',   market: 'us', pct: 42, bookings7:  708, peak: 'T10–T11', note: 'Viator dominant; couple + solo; đến từ "Things to do Da Nang" searches; TikTok đã presell Golden Bridge' },
],
topOtas: [
  { name: 'Klook',      share: '52%', strength: 'Kênh số 1 khách Ấn Độ; search "Ba Na Hills day trip" top 2; family deal bundle hiệu quả' },
  { name: 'Viator',     share: '28%', strength: 'US + Western; "Golden Bridge Da Nang" keyword mạnh' },
  { name: 'MakeMyTrip', share: '12%', strength: 'India FIT + OTA domestic; supplement kênh Klook cho segment Ấn truyền thống hơn' },
  { name: 'Direct',     share: '8%',  strength: 'Khách sạn Đà Nẵng concierge + hotel package Sun World' },
],
otaMatrix: [
  { market: '🇮🇳 Ấn Độ', booking: 2, agoda: 2, gyg: 2, klook: 5, viator: 3, direct: 1 },
  { market: '🇺🇸 Mỹ',    booking: 2, agoda: 1, gyg: 3, klook: 3, viator: 5, direct: 2 },
],
painPoints: [
  { issue: 'Xếp hàng cáp treo 45–90 phút vào giờ cao điểm',                                severity: 5, freq: '55–65%', opportunity: 'Khởi hành 7:30 AM "early-bird" + priority lane — nêu rõ lợi thế giờ sớm trên listing' },
  { issue: 'HDV bỏ nhóm tự đi, khách bị lạc trong Fantasy Park',                           severity: 5, freq: '30–40%', opportunity: 'HDV đi cùng suốt, cung cấp bản đồ + meeting point mỗi 2 giờ' },
  { issue: 'Fantasy Park vé riêng không bao gồm trong tour — gây ngạc nhiên',              severity: 4, freq: '25–32%', opportunity: 'In rõ "Fantasy Park INCLUDED" hoặc ghi chi phí bổ sung trong mục Exclusions' },
  { issue: 'Giá ăn uống trong khu vực Ba Na Hills cực kỳ đắt',                             severity: 4, freq: '45–55%', opportunity: 'Cung cấp lunch box ngoài cổng hoặc list nhà hàng ven đường giá hợp lý' },
  { issue: 'Không đủ thời gian tham quan — tour kết thúc trước 15:00',                     severity: 4, freq: '28–35%', opportunity: 'Kéo dài đến 17:00, thêm slot tự do Golden Bridge chiều (ánh sáng đẹp hơn)' },
  { issue: 'Không được thông báo khi điểm tham quan đóng cửa/bảo trì',                    severity: 3, freq: '15–22%', opportunity: 'Gửi SMS/WhatsApp ngày hôm trước xác nhận tình trạng điểm' },
  { issue: 'Xe bus đông, không điều hòa đủ mát',                                           severity: 3, freq: '20–28%', opportunity: 'Dùng xe 16 chỗ riêng thay bus ghép — nhấn mạnh "private transport" trên listing' },
],
designLevers: [
  { market: '🇮🇳 India', lever: '"Family Pack" variant: 2 adults + 2 kids với giá gộp rõ per-head + highlight Fantasy Park trong thumbnail.', impact: '+$35/booking, tăng family segment +20%' },
  { market: '🇺🇸 US', lever: 'Early Bird option: khởi hành 06:45 — đến Golden Bridge trước 09:00, ít người, ảnh sạch (+$8 surcharge).', impact: '+$8/người, review score +0.1 dài hạn' },
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: india-halong
// ─────────────────────────────────────────────────────────────────────────────
hasDetail: true,
usp: 'Halong thiết kế lại cho gia đình Ấn Độ: cabin gia đình 4–6 người, menu Jain và thuần chay, hướng dẫn viên Hindi — không cần thỏa hiệp về thức ăn hay ngôn ngữ.',
competitors: [
  { name: 'India Halong by Jade Sails (MakeMyTrip)', ota: 'makemytrip', reviews: 340, rating: 4.6, price: '$280', diff: 'Premium hơn nhưng Jain menu không luôn sẵn — phụ thuộc đặt trước 7 ngày' },
  { name: 'Bhaya Cruises India Package',             ota: 'makemytrip', reviews: 210, rating: 4.4, price: '$245', diff: 'Cabin gia đình tối đa 4 người, không có group rate cho đoàn 6+' },
  { name: 'Signature Royal India-Dedicated',         ota: 'makemytrip', reviews: 155, rating: 4.5, price: '$350', diff: 'Jain option tốt nhất nhưng giá cao hơn $100–130, không Hindi guide thường trực' },
],
compDetail: [
  {
    name: 'India Halong by Jade Sails', ota: 'makemytrip', reviews: 320, rating: 4.6, price: '$280',
    compStrength: 'Thương hiệu tàu cao cấp, cabin rộng, được báo chí Ấn Độ đề cập, Jain menu có nhưng phải đặt trước',
    compGap: 'Jain menu không mặc định (đặt trước 7 ngày), không có Hindi guide thường trực, giá cao khó scale với đoàn 10–15 người',
    opportunity: 'Sondax: Jain mặc định + Hindi guide = lấy ngay phân khúc gia đình Ấn trung lưu đang né Jade vì thủ tục phức tạp',
  },
  {
    name: 'Bhaya Cruises India Package', ota: 'makemytrip', reviews: 510, rating: 4.4, price: '$245',
    compStrength: 'Giá phù hợp ngân sách gia đình, có qua MakeMyTrip nên khách Ấn tin tưởng, đội tàu lớn',
    compGap: 'Cabin tối đa 4 người, không có option gia đình lớn, guide chỉ tiếng Anh, thực đơn chưa customize cho Ấn',
    opportunity: 'Sondax: cabin 4–6 người + giá $260 (giữa Bhaya và Jade) = sweet spot cho gia đình 3 thế hệ đi cùng',
  },
  {
    name: 'Signature Royal Halong', ota: 'klook', reviews: 180, rating: 4.7, price: '$350',
    compStrength: 'Cao cấp nhất phân khúc, tàu mới 2023, dịch vụ butler, pool trên boong',
    compGap: 'Giá quá cao cho đoàn đông người, không có Hindi guide, thực đơn Âu hoàn toàn, trên Klook chứ không phải MakeMyTrip',
    opportunity: "Sondax không cạnh tranh luxury — focus 'best value cho gia đình Ấn' ở $250–270, đánh vào MakeMyTrip nơi Signature không có mặt",
  },
],
itinerary: [
  { day: 1, time: '07:30', stop: 'Đón tại Hà Nội — xe limousine 16 chỗ, wifi; HDV giới thiệu lịch trình bằng tiếng Hindi (3.5 giờ về Tuần Châu)' },
  { day: 1, time: '11:30', stop: 'Tuần Châu Marina — làm thủ tục lên tàu, welcome drink, briefing an toàn tiếng Hindi' },
  { day: 1, time: '12:00', stop: 'Cruise ra vịnh — ăn trưa buffet: Jain thala / thuần chay / non-veg theo đặt trước (2 giờ di chuyển)' },
  { day: 1, time: '14:30', stop: 'Đảo Ti Tốp — leo 300 bậc lên đỉnh (40 phút) + bơi tại bãi Ti Tốp (30 phút)' },
  { day: 1, time: '16:30', stop: 'Hang Sửng Sốt — hang động lớn nhất vịnh; HDV giải thích địa chất bằng tiếng Hindi (45 phút)' },
  { day: 1, time: '18:00', stop: 'Neo đậu vùng vịnh yên tĩnh — câu mực tại boong; sunset cocktail (nước ép / mocktail)' },
  { day: 1, time: '19:00', stop: 'Bữa tối gia đình — Jain / veg / non-veg set menu riêng; không có thịt bò; dessert: kheer' },
  { day: 2, time: '06:00', stop: 'Yoga / Tai Chi trên boong khi mặt trời mọc — HDV hướng dẫn (30 phút, tùy chọn)' },
  { day: 2, time: '07:00', stop: 'Ăn sáng — idli / poha / paratha theo đặt trước; cà phê, trà masala' },
  { day: 2, time: '08:00', stop: 'Kayak vùng vịnh Luồn — chèo vào động nước ngầm (1 giờ); phù hợp trẻ từ 8 tuổi' },
  { day: 2, time: '09:30', stop: 'Làng chài Cửa Vạn — tham quan làng chài nổi, nghe người dân kể cuộc sống (30 phút)' },
  { day: 2, time: '11:00', stop: 'Về Tuần Châu — ăn trưa nhẹ; trả phòng; xe về Hà Nội (~15:30)' },
],
itineraryNote: 'T5–T8 gió mùa Đông Bắc: boong ngoài hạn chế; T10–T3 thời tiết tốt nhất. Jain menu cần xác nhận trước 5 ngày. Group rate 6+ người: -10% giá niêm yết.',
marketShare: [
  { flag: '🇮🇳', name: 'Ấn Độ', market: 'in', pct: 100, bookings7: 8500, peak: 'T1–T3', note: 'MakeMyTrip dominant (~75%); Thrillophilia và EaseMyTrip 25%; cần Jain/veg + Hindi guide để gia đình an tâm đặt tour nước ngoài' },
],
topOtas: [
  { name: 'MakeMyTrip',            share: '62%', strength: 'Kênh OTA số 1 India cho outbound tour; "Halong Bay from Hanoi" rank cao với IN traffic' },
  { name: 'Klook',                 share: '18%', strength: 'Thế hệ trẻ Ấn Độ 25–35 dùng Klook; couple + friend group' },
  { name: 'Yatra / Thomas Cook',   share: '12%', strength: 'Package tour truyền thống; gia đình 40–60 tuổi, đặt qua agent offline' },
  { name: 'Direct',                share: '8%',  strength: 'WhatsApp booking qua referral cộng đồng Ấn tại VN; 0% commission' },
],
otaMatrix: [
  { market: '🇮🇳 Ấn Độ', booking: 1, agoda: 1, gyg: 1, klook: 3, viator: 1, makemytrip: 5, direct: 2 },
],
painPoints: [
  { issue: 'Jain menu không sẵn sàng — phải đặt trước 5–7 ngày mà không được nhắc',           severity: 5, freq: '45–58%', opportunity: 'Jain/vegan menu mặc định cho tất cả khách Ấn, xác nhận qua WhatsApp khi đặt tour' },
  { issue: 'Không có Hindi guide thường trực — chỉ có tài liệu tiếng Anh',                    severity: 5, freq: '38–50%', opportunity: '"Hindi-speaking guide guaranteed" như USP #1 trên mọi listing — khoảng trắng thị trường rõ ràng' },
  { issue: 'Thức ăn buổi sáng quá ít, không phù hợp khẩu vị Ấn Độ',                          severity: 4, freq: '35–45%', opportunity: 'Bổ sung poha/upma/paratha vào breakfast — cost thấp, impact review cao' },
  { issue: 'Cabin gia đình không đủ chỗ cho 5–6 người, giường ghép không thoải mái',          severity: 4, freq: '30–40%', opportunity: 'Cung cấp cabin 4+2 (giường đôi + 2 tầng + sofa bed), chụp ảnh thực tế cabin lên listing' },
  { issue: 'Sóng điện thoại và WiFi yếu, gia đình không liên lạc được với người thân ở Ấn',  severity: 3, freq: '25–32%', opportunity: 'Cung cấp SIM data VN tạm (1 ngày) hoặc satellite WiFi mini — điểm khác biệt dễ truyền thông' },
  { issue: 'Lịch trình kayak/chèo thuyền không phù hợp với người lớn tuổi trong đoàn gia đình', severity: 3, freq: '22–30%', opportunity: "Thêm option 'thuyền quan sát' thay thế kayak cho người cao tuổi hoặc trẻ nhỏ" },
  { issue: 'Không được hỗ trợ thanh toán qua UPI/PhonePe cho chi phí phát sinh trên tàu',     severity: 3, freq: '20–28%', opportunity: 'Chấp nhận UPI QR code cho bar/laundry/tips — tăng spend per pax và giảm friction tiền mặt' },
],
designLevers: [
  { market: '🇮🇳 India', lever: "Badge 'Jain-Certified Menu' + 'Hindi-Speaking Guide' ngay đầu listing — không chôn trong description.", impact: '+22% conversion từ segment Jain (~15% tổng khách Ấn), giảm câu hỏi pre-booking -40%' },
  { market: '🇮🇳 India', lever: "'Family Cabin Deal': 1 cabin lớn (4–6 người) + Jain dinner + breakfast gộp giá rõ per-head.", impact: '+$45/booking, giảm decision friction cho nhóm gia đình 5–6 người' },
],
