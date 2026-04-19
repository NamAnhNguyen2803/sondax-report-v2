// Tour Detail v2 — new fields để match Halong hub richness
// Generated 2026-04-19
// Fields: market (niche sizing) + trends + topCompetitors (rich) + painPointPositioning
// Paste vào tours.js tour block (trước dấu `},` kết thúc mỗi tour)
// IDE lỗi "expected ;" là bình thường — đây là paste guide, không phải module.

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: hanoi-food-night
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$42M', guests: '~320K', growthCAGR: '11%', operators: 48, gmv2028: '$58M' },
trends: [
  { name: 'TikTok food-map discovery', stars: 5, peak: 'T10–T3', note: 'Khách đặt tour sau khi xem reel 30s — operator nào xuất hiện trên FYP Hà Nội thắng. Sondax cần quay 5–8 reels/tháng tại các stop signature.' },
  { name: 'Dietary prefilters (gluten/vegan)', stars: 4, peak: 'T1–T4', note: 'OTA 2026 bắt đầu cho filter dietary trước khi book. Tour không có variant chay/gluten-free sẽ mất 18–22% khách US/UK.' },
  { name: 'Small-group hard cap (≤8)', stars: 5, peak: 'Đã xảy ra', note: 'Review Viator 1–3★ gắn từ "cattle herd" với group >12. Sondax hard cap 8 biến thành USP rõ ràng trên listing.' },
  { name: 'Guide-as-storyteller (not menu-reader)', stars: 4, peak: 'T6–T12', note: 'Khách trả thêm $10–15 để guide có anecdote cá nhân về phố cổ, không đọc Wikipedia. Đào tạo storytelling là lever giữ ADR.' },
  { name: 'Night market photo service', stars: 3, peak: 'T11–T2', note: 'Portable LED + photographer phụ tour đang test tại Bangkok & Hội An. Add-on $12–15, attach rate 35–45% khách chụp ảnh.' },
  { name: 'Post-tour cooking class upsell', stars: 4, peak: 'T12–T4', note: 'Bún chả/Phở class morning-after $20–25. Khách đã enjoy evening food walk là lead nóng nhất cho cooking class.' },
],
topCompetitors: [
  { tier: 'MARKET LEADER', name: 'XO Hanoi (Motorbike Food Tour)', priceRange: '$49–59', rating: 4.8, reviews: 4820, channelMix: 'Viator 60% · Klook 25% · Direct 15%',
    strengths: ['Brand mạnh nhất Hà Nội, nhận diện cao trong mọi guidebook', 'Xe máy tạo cảm giác authentic — khác biệt với walking tour', 'Guide được train 3 tháng, SOP chặt về safety'],
    gaps: ['Xe máy gây lo ngại cho khách 50+, gia đình có trẻ', 'Group 10–14 người khó dừng đồng bộ tại ngõ hẹp', 'Giá đã tăng 3 năm liên tiếp — khách nhạy giá đang switch'],
    opp: 'Sondax: walking = safe for all ages, dừng lâu hơn tại mỗi điểm, phù hợp content creator cần không gian chụp ảnh. Positioning "intimate vs mass motorbike pack".' },
  { tier: 'CHALLENGER', name: 'Taste of Hanoi (Walking Food Tour)', priceRange: '$38–45', rating: 4.6, reviews: 2130, channelMix: 'Klook 55% · GYG 25% · Viator 15% · Direct 5%',
    strengths: ['Giá thấp nhất phân khúc — backpacker + flashpacker ưa chuộng', 'Booking linh hoạt last-minute, không yêu cầu deposit', 'Top-3 search "Hanoi food walk" trên Klook cho khách Âu'],
    gaps: ['Chỉ 5 stops — review 1–3★ hay dùng từ "too short, not enough food"', 'Guide kiêm nhiều nhóm cùng tối, attention chia nhỏ', 'Thiếu backstory món ăn — khách phàn nàn "Wikipedia reading"'],
    opp: 'Sondax: 8 stops + 1 hidden bonus, guide chỉ phụ trách 1 nhóm mỗi tối, mỗi stop có food-story card. Tăng $5–10 vẫn rẻ hơn XO.' },
  { tier: 'PREMIUM NICHE', name: 'Urban Adventures Hanoi Street Food', priceRange: '$55–70', rating: 4.7, reviews: 1640, channelMix: 'Viator 75% · Direct 25%',
    strengths: ['Thương hiệu quốc tế Intrepid Group — policy refund rõ ràng', 'Guide nói được tiếng Pháp + Đức, hiếm trong segment', 'Insurance rõ ràng, listing có badge "responsible tourism"'],
    gaps: ['Group 16–20 — review: "cattle herd"', 'Số stop ít so với giá — khách cảm thấy không đáng tiền', 'Route bão hoà, trùng với nhiều tour khác'],
    opp: 'Sondax: giá tương đương ($55) nhưng group ≤8, ít người hơn 2.5× — convert khách quality-seeker đang chê Urban Adventures.' },
],
painPointPositioning: [
  'Sondax: slot 6:30pm — ăn khi hàng còn đầy',
  'Sondax: guide có food-story card cho từng stop',
  'Sondax: hard cap 8 khách — luôn theo kịp guide',
  'Sondax: Vegetarian Night variant + allergen tracker',
  'Sondax: water + wet-wipe kit trong giá',
  'Sondax: WhatsApp pin 2h trước tour, dễ tìm',
  'Sondax: portable LED cho ảnh hẻm sáng đẹp',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: sapa-trek
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$68M', guests: '~240K', growthCAGR: '13%', operators: 85, gmv2028: '$95M' },
trends: [
  { name: 'Homestay photo-verification badge', stars: 5, peak: 'T6–T12', note: 'Sau 2023–2025 scandal "listing photos vs reality", GYG + Viator bắt đầu prioritize listings có verified photos. Sondax audit hàng quý là entry ticket.' },
  { name: 'Female H\'Mông guide positioning', stars: 5, peak: 'Đã xảy ra', note: 'Sapa Sisters đã own narrative này. Ai muốn chen vào cần backup bằng community impact report, không chỉ marketing.' },
  { name: 'Mirror terraces T3–T4 discovery', stars: 4, peak: 'T3–T4 2026', note: 'Lúa vàng T9–T10 đã bão hoà; khách AU/UK đang tìm shoulder season. Sondax tạo listing riêng "Mirror Terraces" có thể lấy 25–30% volume mới.' },
  { name: 'Train delay insurance/buffer', stars: 4, peak: 'T7–T12', note: 'Tàu đêm Hà Nội–Lào Cai delay 15–20% lượt. Tour có buffer 1.5h + Plan B = review score +0.2, retention tour 2N tăng.' },
  { name: 'Co-guide model (local + bilingual)', stars: 3, peak: 'T8–T12', note: 'Khách Pháp/Đức trả thêm $15–25 cho trải nghiệm authentic + storyteller song hành. Single-guide model đang mất thị phần premium.' },
  { name: 'Sustainable trekking certification', stars: 3, peak: 'T10–T3', note: 'Khách Đức + Hà Lan bắt đầu filter theo eco-certification. GSTC hoặc Travelife certification = ticket vào premium DE/NL segment.' },
  { name: 'Digital nomad 4–5 day retreat', stars: 4, peak: 'T1–T3, T10–T12', note: 'Remote worker + trek 2N + co-working 2N đang thành format mới. Phí $280–380, ADR gấp 2.5× tour 2N tiêu chuẩn.' },
],
topCompetitors: [
  { tier: 'COMMUNITY BRAND LEADER', name: 'Sapa Sisters (Community Trek)', priceRange: '$85–120', rating: 4.9, reviews: 3210, channelMix: 'Direct 85% · Partner hotels 15% · 0% OTA',
    strengths: ['Thương hiệu nữ quyền H\'Mông nổi tiếng toàn cầu — BBC, Lonely Planet, NYT đề cập', 'Guide là phụ nữ bản địa có câu chuyện riêng — social proof mạnh', 'Community impact narrative rõ ràng, khách DE/NL trả thêm 30% vì giá trị'],
    gaps: ['Direct-only — mất toàn bộ OTA traffic FR + AU + UK', 'Không có overnight train + trek gói gọn', 'Itinerary ít linh hoạt cho nhóm >6'],
    opp: 'Sondax: distribute GYG + Viator reach khách chưa biết Sapa Sisters; bundle train + homestay + trek one-click = giảm friction.' },
  { tier: 'VOLUME CHALLENGER', name: 'Vietnam Jungle Trekking', priceRange: '$75–110', rating: 4.7, reviews: 1870, channelMix: 'GYG 60% · Viator 25% · Direct 15%',
    strengths: ['SEO mạnh trên GYG — top search "Sapa trek"', 'Nhiều loại trek (1N/2N/3N) — customer journey flexibility', 'Response time <2h, booking conversion cao'],
    gaps: ['Homestay chất lượng thấp — review 1–3★ có từ "dirty bathroom"', 'Guide thay đổi thường xuyên → inconsistent storytelling', 'Ảnh listing misleading vs thực tế'],
    opp: 'Sondax: commit homestay standard (quarterly audit), same-guide-both-days policy, "what you see is what you get" photo policy.' },
  { tier: 'PREMIUM CLASSIC', name: 'Buffalo Tours Sapa', priceRange: '$110–165', rating: 4.5, reviews: 980, channelMix: 'Viator 70% · Direct 20% · Booking 10%',
    strengths: ['Lữ hành lâu năm — brand trust cho khách 45+', 'Xe riêng Hà Nội–Sapa (không tàu đêm)', 'Policy refund + insurance chặt, khách risk-averse yên tâm'],
    gaps: ['Giá cao nhất phân khúc', 'Xe riêng mất trải nghiệm "tàu đêm iconic"', 'Guide scripted — review chê "like a museum tour"'],
    opp: 'Sondax: giữ tàu đêm làm văn hoá, homestay ngang Buffalo nhưng authentic hơn — win on value-per-dollar cho khách 35+.' },
],
painPointPositioning: [
  'Sondax: quarterly photo audit + verified badge',
  'Sondax: buffer 1.5h + Plan B nếu tàu trễ',
  'Sondax: co-guide local + storyteller bilingual',
  'Sondax: weather alert + gear list 48h trước',
  'Sondax: meal rotation theo mùa + cooking night',
  'Sondax: pocket WiFi/SIM trong gói premium',
  'Sondax: difficulty filter E/M/H khi book',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: ninh-binh
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$48M', guests: '~420K', growthCAGR: '18%', operators: 62, gmv2028: '$78M' },
trends: [
  { name: '"Halong on land" SEO positioning', stars: 5, peak: 'Đã xảy ra', note: 'Phrase này đã lọt top search intent — operator nào chiếm slot đầu Viator/GYG với keyword này thắng. Volume tăng 25–30%/năm.' },
  { name: 'Sunrise photography tour T10–T11', stars: 4, peak: 'T10–T11', note: 'Khởi hành 06:00, group ≤8, guide mang tripod — niche mới đang nổi. Sondax có lever dễ nhất từ AU photography segment.' },
  { name: 'Hang Múa sunset timing', stars: 4, peak: 'T3–T4, T10–T12', note: 'Arrive 4:30pm để có golden hour panorama — competitor chưa ai làm. Differentiation rõ ràng + shareable content.' },
  { name: 'Pre-booked boat slot (bypass 45–90 min queue)', stars: 5, peak: 'T3–T4, T10–T11', note: 'Pain #2 hiện tại của mọi operator. Partnership với bến thuyền Tràng An cho slot 7:30am sẽ solve được 30–40% pain points.' },
  { name: 'Multilingual audio guide (FR/DE/KR)', stars: 3, peak: 'T6–T12', note: 'Khách FR/DE đang chê "guide chỉ biết tiếng Anh". Audio guide download trước tour giải quyết được problem với cost thấp.' },
  { name: 'Food tour extension (goat + burnt rice)', stars: 3, peak: 'T11–T4', note: 'Ninh Bình có đặc sản thịt dê + cơm cháy chưa được monetize trong tour. Extension 1.5h cuối ngày $15–20, attach rate 25–35%.' },
],
topCompetitors: [
  { tier: 'PREMIUM LEADER', name: 'Handspan Ninh Binh Day Tour', priceRange: '$55–85', rating: 4.6, reviews: 2340, channelMix: 'Viator 65% · Direct 25% · GYG 10%',
    strengths: ['Thương hiệu uy tín lâu năm — guidebook recommendations', 'Xe riêng + tài xế chuyên nghiệp, không bus ghép', 'Guide tiếng Pháp sẵn có — unique selling point cho FR segment'],
    gaps: ['Bỏ Hang Múa — review 1–3★: "missing the best view"', 'Tràng An phải add-on thêm $12 — surprise fee', 'Group 16–22 người, không nhỏ như quảng cáo'],
    opp: 'Sondax: all-inclusive Hoa Lư + Tràng An + Hang Múa trong 1 giá, group tối đa 10 — không surprise fee, transparent pricing.' },
  { tier: 'VOLUME RACE', name: 'GetYourGuide Generic Ninh Binh', priceRange: '$42–55', rating: 4.4, reviews: 5610, channelMix: 'GYG 80% · Viator 15% · Direct 5%',
    strengths: ['Giá rẻ nhất thị trường — backpacker + student traveler', 'Top search GYG — organic traffic cao', 'Free cancellation 24h — book sớm không risk'],
    gaps: ['Nhóm 20–28 người — review: "chaotic", "rushed"', 'Guide đọc script — không storytelling', 'Chất lượng không ổn định giữa các departure'],
    opp: 'Sondax: giá cao hơn $20 nhưng group nhỏ 3×, xe riêng, guide personalized — convert khách sau khi đọc reviews GYG.' },
  { tier: 'NICHE ACTIVE', name: 'Vietnam Jungle Trekking Ninh Binh', priceRange: '$38–65', rating: 4.7, reviews: 1120, channelMix: 'GYG 70% · Klook 20% · Direct 10%',
    strengths: ['Rating cao — guide thân thiện, review mention tên guide', 'Option kayak Tràng An — differentiator rõ', 'Flexible pickup time — linh hoạt cho khách đi solo'],
    gaps: ['Kayak thường unavailable — phụ thuộc weather + permit', 'Hoa Lư chỉ 25 phút — hời hợt', 'Không có Hang Múa sunset timing'],
    opp: 'Sondax: Hang Múa sunset 4:30pm — view golden hour mà không competitor có. Lock timing này làm USP chính.' },
],
painPointPositioning: [
  'Sondax: GPS tracking xe + driver SLA penalty',
  'Sondax: pre-book slot thuyền 8am — bypass queue',
  'Sondax: 50 phút Hoa Lư + oral history',
  'Sondax: fitness advisory + skip option có view thay',
  'Sondax: set meal nhà hàng nhỏ + $5 thêm',
  'Sondax: 30 phút free-float ở Tràng An',
  'Sondax: sun kit (ô + sunscreen) miễn phí',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: mekong-delta
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$58M', guests: '~380K', growthCAGR: '9%', operators: 94, gmv2028: '$76M' },
trends: [
  { name: 'Floating market T7–T8 positioning', stars: 4, peak: 'T7–T8', note: 'Chợ nổi Cái Bè active nhất mùa lũ — competitor ít ai push T7–T8 vì coi là "mùa mưa". Niche window có thể pull 35–45% volume mới.' },
  { name: 'Low-waste tour certification', stars: 4, peak: 'T6–T12', note: 'Khách UK/DE eco-conscious đang filter theo low-waste. Styrofoam-free + reusable lunch box = $0 chi phí, impact marketing cao.' },
  { name: 'Cu Chi + Mekong 2-day bundle', stars: 5, peak: 'T11–T3', note: 'Khách AU + UK hay kết hợp 2 day trip từ HCMC. Bundle $105 (vs $120 mua lẻ) tăng attach rate + giữ khách khỏi competitor.' },
  { name: 'Guide English-certified badge', stars: 5, peak: 'Đã xảy ra', note: 'Pain #1 hiện tại. Listing nào có TOEIC score hiển thị sẽ convert cao hơn 15–20% so với "English-speaking guide" generic.' },
  { name: 'Home-cooked meal vs tourist restaurant', stars: 4, peak: 'T10–T4', note: 'Review 1–3★ phàn nàn bữa trưa "touristy". Chuyển sang cơm nhà dân bản địa giải quyết pain #3 + kể được story.' },
  { name: 'Small-group speedboat (≤8 pax)', stars: 3, peak: 'T11–T3', note: 'Les Rives đang own premium segment. Sondax có thể chen vào với "small group không phải private" — group ≤8 giá $65.' },
],
topCompetitors: [
  { tier: 'PREMIUM LEADER', name: 'Mekong Eyes Cruise', priceRange: '$85–110', rating: 4.8, reviews: 1240, channelMix: 'Viator 70% · Direct 25% · GYG 5%',
    strengths: ['Thuyền gỗ sang trọng — instagrammable', 'Bữa ăn cao cấp — chef riêng, set menu gợi nhớ Pháp colonial', 'Định vị premium rõ ràng trên Viator — top search "luxury Mekong"'],
    gaps: ['Giá cao loại trừ khách mid-range', 'Không có speedboat + kênh dừa cùng 1 ngày', 'Slot hạn chế — khách muốn đặt gấp bị loại'],
    opp: 'Sondax: "best of both" — tốc độ speedboat buổi sáng + kênh yên tĩnh Ben Tre, giá mid $68–75 — sweet spot giữa Mekong Eyes và mass tour.' },
  { tier: 'BOUTIQUE LUXURY', name: 'Les Rives Speedboat', priceRange: '$95–130', rating: 4.9, reviews: 890, channelMix: 'Viator 55% · Direct 40% · Travel agents 5%',
    strengths: ['Boutique ultra-cao cấp — guide 1:1, champagne welcome', 'Review 4.9 — cực kỳ tốt, thương hiệu tín nhiệm', 'Personalization tuyệt đối — khách nhớ tên guide'],
    gaps: ['Chỉ phục vụ group 2–6 người — không scale được', 'Slot hạn chế, book trước 2–3 tuần', 'Giá quá cao cho 80% khách mid-range'],
    opp: 'Sondax: target khách muốn "small group không phải private" — group ≤8 với guide riêng, giá $65 dễ tiếp cận hơn 60%.' },
  { tier: 'MASS VOLUME', name: 'Buffalo Tours Mekong', priceRange: '$50–70', rating: 4.6, reviews: 3100, channelMix: 'GYG 50% · Klook 35% · Direct 15%',
    strengths: ['Volume lớn nhất segment — brand awareness cao', 'Giá cạnh tranh — backpacker + student', 'Thương hiệu lâu năm tại VN, trust factor'],
    gaps: ['Không ghé Ben Tre — chỉ Mỹ Tho, thiếu kênh dừa iconic', 'Group 20–30 người — factory tour feeling', 'Guide bất định — review bất ổn'],
    opp: 'Sondax: thêm Ben Tre kênh dừa làm USP rõ trên listing — differentiate vs Buffalo bằng nội dung, không phải giá.' },
],
painPointPositioning: [
  'Sondax: TOEIC-certified guide hiển thị trên listing',
  'Sondax: group ≤8 + slot sáng 7h tránh đông',
  'Sondax: cơm nhà dân bản địa — home-cooked',
  'Sondax: earplugs + nghỉ giữa hành trình',
  'Sondax: Ben Tre dài hơn 30 phút — không rush',
  'Sondax: ảnh thực tế mùa cao điểm trên listing',
  'Sondax: guide không dẫn shop commission',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: saigon-vespa
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$32M', guests: '~210K', growthCAGR: '10%', operators: 38, gmv2028: '$44M' },
trends: [
  { name: 'Female rider positioning', stars: 5, peak: 'T10–T4', note: 'Khách nữ solo + couple đang tìm operator có nữ rider. Back of the Bike toàn nam → Sondax có thể chen vào bằng female-rider variant giá bằng hoặc +$3.' },
  { name: '"Hidden alley" + Google Maps omission', stars: 4, peak: 'T11–T3', note: 'Khách US + AU tìm "off the beaten path" — listing nhấn "không có trên Google Maps" convert cao. Cần rotate 2/6 stops mỗi 3 tháng để giữ promise.' },
  { name: 'Meet-your-rider profile page', stars: 4, peak: 'T10–T3', note: 'Viator "meet your guide" section đang thành standard. XO chưa làm kỹ. Sondax thêm bio + photo rider → conversion +15%.' },
  { name: 'Motorbike safety certification display', stars: 5, peak: 'Đã xảy ra', note: 'Pain #1 trong segment. Listing có insurance coverage + safety video briefing trước tour = xoá lo ngại, convert khách 40+.' },
  { name: 'Vegetarian route alternative', stars: 3, peak: 'T6–T12', note: 'Khách UK gap year + Âu trẻ hỏi vegetarian. Thêm 2–3 stop chay (đậu hũ, bánh mì chay Huỳnh Hoa) — chi phí $0, review score +0.1.' },
  { name: 'Helmet hygiene single-use liner', stars: 3, peak: 'T7–T10', note: 'Hậu COVID, khách Âu vẫn nhạy về vệ sinh. Liner vệ sinh dùng 1 lần là micro-investment ($0.3/khách), impact review cao.' },
],
topCompetitors: [
  { tier: 'MARKET LEADER', name: 'XO Tours HCMC', priceRange: '$55–75', rating: 4.9, reviews: 7520, channelMix: 'Viator 60% · TripAdvisor 25% · Direct 15%',
    strengths: ['Market leader tuyệt đối — 7.5k reviews cực mạnh social proof', 'Brand awareness cao nhất segment — mọi guidebook đều đề cập', 'Đội ngũ rider lớn — không bao giờ sold out'],
    gaps: ['Group 15–25 người — mất cảm giác kết nối với rider', 'Tour đã quá quen, khách lâu năm chê "thiếu tươi mới"', 'Rider toàn nam — khách nữ solo thường e ngại'],
    opp: 'Sondax: group ≤8 + rider local có backstory riêng về hẻm quận 4, positioning "intimate vs mass" + female rider variant.' },
  { tier: 'BUDGET CHALLENGER', name: 'Back of the Bike Tours', priceRange: '$45–55', rating: 4.8, reviews: 2890, channelMix: 'GYG 55% · Viator 30% · Klook 10% · Direct 5%',
    strengths: ['Giá thấp nhất segment — backpacker + budget traveler', 'GYG ranking cao — organic traffic lớn', 'Rider thân thiện — review thường khen cá nhân'],
    gaps: ['Rider toàn nam — không có nữ rider option', 'Điểm dừng ít đa dạng — ít hẻm sâu', 'Không có cầu Thủ Thiêm trong route — missing skyline moment'],
    opp: 'Sondax: offer female rider cho khách nữ solo/couple — highlight như USP an toàn trên listing, chênh giá $3–5.' },
  { tier: 'FOOD SPECIALIST', name: 'Saigon Street Eats Vespa', priceRange: '$55–65', rating: 4.7, reviews: 1340, channelMix: 'Viator 70% · Direct 20% · GYG 10%',
    strengths: ['Focus 100% street food — menu đa dạng, 7–8 món', 'Storytelling ẩm thực tốt — guide có nền tảng chef', 'Hình ảnh listing professional — appetite-appealing'],
    gaps: ['Chỉ route quận 1–3 — không có hẻm quận 4–8', 'Thiếu yếu tố "local neighborhood" — cảm giác touristy', 'Không có cầu Thủ Thiêm sunset view'],
    opp: 'Sondax: own quận 4 hẻm + cầu Thủ Thiêm combo — "nơi người Sài Gòn thật sự ăn tối", differentiation content-first.' },
],
painPointPositioning: [
  'Sondax: safety video 3 phút + insurance hiển thị',
  'Sondax: English-certified rider badge',
  'Sondax: 18–20 phút/điểm — ăn + chụp đủ',
  'Sondax: rotate 2/6 stops mỗi quý — luôn mới',
  'Sondax: quarterly audit 6 điểm dừng',
  'Sondax: helmet mới + liner vệ sinh single-use',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: dalat-canyon
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$18M', guests: '~85K', growthCAGR: '16%', operators: 14, gmv2028: '$28M' },
trends: [
  { name: 'GoPro rental + footage service', stars: 5, peak: 'Đã xảy ra', note: 'Viet Challenge đã offer $12–15. Pain #6 của mọi competitor — khách tiếc không capture moment. Attach rate 40–50% nếu offer.' },
  { name: 'Safety credential transparency', stars: 5, peak: 'T10–T3', note: 'Khách UK gap year + Âu filter theo PADI/UIAA credentials. Listing có tên guide + cert → conversion +20% so với generic.' },
  { name: '"Beginner Welcome" tag positioning', stars: 4, peak: 'T11–T3', note: 'Khách US hỏi nhiều về difficulty. Tag "Beginner — No Experience Needed" trong title → pull first-time adventure segment +25%.' },
  { name: 'Early-bird 7:30am departure', stars: 4, peak: 'T12–T3', note: 'Pain #3: thác đông tour operator khác. Book slot 7:30am độc quyền → experience quality +, differentiation rõ.' },
  { name: 'Waitlist system (capture Viet Challenge overflow)', stars: 4, peak: 'T11–T3', note: 'Viet Challenge fully booked 2–3 tuần trước. Sondax setup waitlist → capture 15–25% demand bị bỏ rơi.' },
  { name: 'Cliff jumping cancelation protocol', stars: 3, peak: 'T6–T10', note: 'Cliff jumping bị cancel khi mưa mà khách không biết trước. WhatsApp 24h trước + voucher 30% nếu cancel = review score +0.15.' },
  { name: 'Equipment kiểm định date display', stars: 4, peak: 'T10–T3', note: 'Harness + helmet cũ là pain #4 (sev 5). Thay mới 2 năm + hiển thị date kiểm định trên listing → xoá lo ngại safety cho khách Âu.' },
],
topCompetitors: [
  { tier: 'CATEGORY LEADER', name: 'Viet Challenge Adventures', priceRange: '$68–85', rating: 4.9, reviews: 2800, channelMix: 'GYG 50% · Viator 35% · Direct 15%',
    strengths: ['TripAdvisor Best of Best 2026 — social proof tuyệt đối', 'Rating cao nhất segment — review consistently 5★', 'Báo chí adventure travel đề cập — brand trust cao'],
    gaps: ['Luôn fully booked 2–3 tuần trước — khách gấp bị loại', 'Không có waitlist system — demand bị bỏ rơi', 'Chỉ 1 departure/ngày — không đáp ứng khách flex'],
    opp: 'Sondax: flexible 48h notice booking + waitlist system — capture toàn bộ demand bị Viet Challenge bỏ lại. Cùng chất lượng, dễ book hơn.' },
  { tier: 'MULTI-ACTIVITY', name: 'Phat Tire Ventures', priceRange: '$55–75', rating: 4.7, reviews: 1650, channelMix: 'Viator 60% · Direct 30% · GYG 10%',
    strengths: ['Multi-activity combo (canyoning + biking) — package value', 'Thương hiệu outdoor Đà Lạt từ 2005 — legacy', 'Cross-sell biking → canyoning hiệu quả'],
    gaps: ['Jack-of-all-trades — canyoning không chuyên sâu', 'Abseiling tối đa 25m — thiếu cliff jumping', 'Safety protocol không rõ ràng như specialist'],
    opp: 'Sondax: positioning canyoning specialist với abseiling 40m + cliff jumping — rõ hơn multi-activity generalist cho khách thực sự muốn adventure.' },
  { tier: 'BUDGET FUN', name: 'Groovy Gecko Adventure Tours', priceRange: '$45–60', rating: 4.6, reviews: 980, channelMix: 'GYG 65% · Viator 25% · Direct 10%',
    strengths: ['Giá thấp nhất — backpacker + budget friendly', 'Group vui vẻ — vibe mạnh', 'HDV có tính cách — review mention tên'],
    gaps: ['Abseiling chỉ 20m — thiếu thiết bị chuyên nghiệp', 'Không có cliff jumping option', 'Equipment cũ — khách phàn nàn trên review'],
    opp: 'Sondax: level progression "starter 20m → expert 40m + cliff jump" — upsell path từ Groovy Gecko graduates.' },
],
painPointPositioning: [
  'Sondax: safety briefing 20 phút + demo video',
  'Sondax: fitness test thực tế tại điểm xuất phát',
  'Sondax: slot 7:30am độc quyền — tránh đông',
  'Sondax: harness thay 2 năm + date kiểm định',
  'Sondax: WhatsApp weather 24h + voucher 30%',
  'Sondax: GoPro footage $15 hoặc guide chụp free',
  'Sondax: BBQ ngoài trời — trưa protein',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: phu-quoc-snorkel
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$38M', guests: '~290K', growthCAGR: '14%', operators: 72, gmv2028: '$56M' },
trends: [
  { name: 'Underwater GoPro photo service', stars: 5, peak: 'T11–T3', note: 'Khách KR + AU muốn Instagram content. Add-on $8–12, attach rate 50–60% từ KR segment. Simple + cao impact.' },
  { name: 'Reef Health Badge (no-touch briefing)', stars: 4, peak: 'T10–T4', note: 'Khách AU đang quan tâm marine conservation. Badge + briefing 5 phút trước snorkel → review score +0.1–0.2 → organic ranking tăng.' },
  { name: '"Coral rivals Coron at 1/3 price" positioning', stars: 4, peak: 'T11–T3', note: 'Khách PH đã đến Palawan/Coron là segment nóng nhất. Listing title nhấn so sánh giá → convert tour replacement.' },
  { name: 'Max 12 pax guarantee', stars: 5, peak: 'Đã xảy ra', note: 'Pain #1 (sev 5, freq 40–55%). Badge "Max 12 guaranteed" + slot giờ tránh cao điểm → xoá complaint crowded.' },
  { name: 'Halal + chay meal options', stars: 3, peak: 'T11–T2', note: 'Khách PH + Malaysia + Indonesia filter theo halal. Chi phí bổ sung thấp, unlock segment mới 15–20%.' },
  { name: 'Toilet + changing cabin on board', stars: 3, peak: 'T10–T4', note: 'Pain #7: không có khu thay đồ riêng tư. Ưu tiên tàu có toilet + rèm cabin → listing có badge comfort — khách nữ solo/couple trả thêm $5–8.' },
],
topCompetitors: [
  { tier: 'MASS VOLUME', name: 'Sao Beach Snorkel & 3 Islands', priceRange: '$35–45', rating: 4.5, reviews: 1840, channelMix: 'Klook 60% · Viator 25% · Direct 15%',
    strengths: ['Volume review lớn — social proof mạnh cho KR', 'Tên Bãi Sao quen thuộc với khách Hàn', 'Thumbnail đẹp trên Klook — CTR cao'],
    gaps: ['Snorkel chỉ 25–30 phút/điểm — quá ngắn', 'Tàu gỗ chậm — tốn thời gian di chuyển', 'Nhóm lên đến 30 người — chen chúc'],
    opp: 'Sondax: speedboat riêng + 3 đảo hoang + snorkel 60 phút = value gap rõ. Khách KR/AU trả thêm $10–15 cho trải nghiệm khác.' },
  { tier: 'BOUTIQUE', name: 'Riva Bella 3 Islands Snorkel', priceRange: '$40–50', rating: 4.7, reviews: 430, channelMix: 'Viator 65% · Direct 25% · Booking 10%',
    strengths: ['Rating cao — trải nghiệm premium', 'Thuyền nhỏ ~16 pax — intimate', 'Hình ảnh chuyên nghiệp trên Viator'],
    gaps: ['Chỉ 1 chuyến/ngày — không linh hoạt', 'Không pickup bán đảo phía Nam', 'Không có Hòn Vang trong lịch trình'],
    opp: 'Sondax: 2 chuyến/ngày + pickup tận nơi bán đảo phía Nam = lấy được khách resort cao cấp (Grand World, Vinpearl).' },
  { tier: 'BUDGET FLOOR', name: "John's Tours 3 Islands", priceRange: '$28–35', rating: 4.3, reviews: 890, channelMix: 'Booking 45% · Klook 35% · Direct 20%',
    strengths: ['Giá rẻ nhất phân khúc — backpacker ưa thích', 'Nhiều review trên Booking.com — brand trust', 'Phù hợp khách solo budget-conscious'],
    gaps: ['Thuyền gỗ cũ — không speedboat', 'Thiết bị snorkel kém — mask rò nước', 'HDV kiêm nhiệm lái tàu — thiếu focus'],
    opp: 'Sondax không cạnh tranh giá — định vị "premium small-group" tránh race-to-bottom với John\'s segment.' },
],
painPointPositioning: [
  'Sondax: Max 12 pax badge + slot độc quyền',
  'Sondax: cam kết 60 phút snorkel/điểm',
  'Sondax: mask thay mới hàng năm + fit-test',
  'Sondax: HDV song ngữ English rating nội bộ',
  'Sondax: buffet hải sản + option chay/halal',
  'Sondax: túi chống say + tuyến ven đảo êm',
  'Sondax: rèm cabin thay đồ + toilet trên tàu',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: hoi-an-wellness
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$14M', guests: '~72K', growthCAGR: '15%', operators: 22, gmv2028: '$22M' },
trends: [
  { name: 'Slow travel + wellness bundling', stars: 5, peak: 'T1–T3, T7', note: 'Khách US female 35–55 sẵn sàng trả premium cho authentic wellness. 3-in-1 bundle (bike + cook + spa) = value clear trên Viator.' },
  { name: '"Cook at Home" vs cooking school', stars: 5, peak: 'T10–T4', note: 'Morning Glory, Red Bridge là cooking school. Cooking tại nhà dân Trà Quế là niche mới — storytelling mạnh hơn 2–3×.' },
  { name: 'Lantern Festival 25/7 + T1–T3 Rằm', stars: 4, peak: 'T1–T3, T7', note: 'Khách AU escape winter T7 + khách US T1–T3 chồng Rằm âm lịch. Lantern release add-on $5–8/đèn × 3 đèn = $15–24 AOV.' },
  { name: 'Vegan cooking class add-on', stars: 3, peak: 'T10–T12', note: 'Khách US 35–55 female có 25–30% vegetarian/vegan. Cooking class vegan variant pre-book 24h — không tốn chi phí, tăng conversion.' },
  { name: 'Rice picked this morning transparency', stars: 4, peak: 'T3–T8', note: 'Khách phàn nàn rau "không tươi". Cam kết "hái sáng sớm Trà Quế" + ảnh thu hoạch gửi trước tour = storytelling + delivery.' },
  { name: 'Herbal compress + foot soak spa upgrade', stars: 4, peak: 'T6–T12', note: 'Spa cơ bản không đáp ứng expectation wellness. Upgrade lên herbal compress + foot soak + aromatherapy → ADR +$15–20, review 4.5→4.8.' },
],
topCompetitors: [
  { tier: 'COOKING SCHOOL LEADER', name: 'Morning Glory Cooking School', priceRange: '$45–58', rating: 4.8, reviews: 2100, channelMix: 'Viator 70% · Direct 25% · Hotel concierge 5%',
    strengths: ['Review cao nhất phân khúc cooking — legacy brand', 'Thương hiệu lâu đời — mọi hotel concierge giới thiệu', 'Market basket tour buổi sáng — differentiator'],
    gaps: ['Chỉ cooking — không có cycling hoặc spa', 'Khách muốn trọn gói phải tự book 3 tour', 'Giá tăng chậm hơn inflation — margin mỏng'],
    opp: 'Sondax: bundle 3-in-1 cùng giá $55 = tiết kiệm thời gian planning cho khách FIT Mỹ/Úc đi solo — 1 book cover 3 experiences.' },
  { tier: 'LUXURY COMBO', name: 'Red Bridge Cooking & Spa', priceRange: '$85–110', rating: 4.6, reviews: 760, channelMix: 'Viator 55% · Direct 40% · Booking 5%',
    strengths: ['Cao cấp, resort-style — thuyền đưa đón sông Thu Bồn', 'Phù hợp khách honeymoon + premium couple', 'Cooking school chuyên nghiệp hơn home-based'],
    gaps: ['Giá gấp đôi mid-range — loại trừ budget-conscious', 'Không có cycling/làng rau — thiếu local immersion', 'Spa hiện đại thay vì truyền thống — mất narrative'],
    opp: 'Sondax mid-premium $55–65: authentic làng nghề + truyền thống mà không đánh mất khách budget-conscious — sweet spot.' },
  { tier: 'ACTIVE COMBO', name: 'Hoi An Eco Cooking & Cycling', priceRange: '$50–65', rating: 4.5, reviews: 540, channelMix: 'GYG 60% · Viator 30% · Direct 10%',
    strengths: ['Kết hợp cycling + cooking — value perception cao', 'Giá tốt cho combo — GYG recommend cho khách Úc', 'Route cycling hay qua làng rau Trà Quế'],
    gaps: ['Không có spa component — thiếu "wellness" complete', 'Cooking class ngoài trời — thiếu chuyên nghiệp', 'Nhóm lên đến 20 người — hoạt động rush'],
    opp: 'Sondax: thêm spa 90 phút truyền thống + giới hạn 8 pax = upgrade tự nhiên cho khách Eco muốn "một bước lên".' },
],
painPointPositioning: [
  'Sondax: 8 pax/lớp — mỗi người bếp riêng',
  'Sondax: herbal compress + foot soak 90 phút',
  'Sondax: buffer 20 phút giữa activities',
  'Sondax: vegan menu pre-book 24h',
  'Sondax: bản đồ + QR route — HDV chạy đầu',
  'Sondax: rau hái sáng + ảnh thu hoạch',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: bana-hills
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$85M', guests: '~1.2M', growthCAGR: '12%', operators: 120, gmv2028: '$125M' },
trends: [
  { name: 'Early-bird 7:30am departure', stars: 5, peak: 'T1–T3', note: 'Pain #1 (sev 5, freq 55–65%): xếp hàng cáp treo. Book slot sớm + priority lane → differentiation rõ ràng, trả thêm $8–10.' },
  { name: 'India Family Pack variant', stars: 5, peak: 'T1–T3', note: 'Khách Ấn gia đình 4–8 người chiếm 58% volume. Family Pack 2A+2K giá gộp rõ + Fantasy Park trong thumbnail → booking +20%.' },
  { name: 'Fantasy Park inclusion transparency', stars: 4, peak: 'Đã xảy ra', note: 'Pain #3: khách ngạc nhiên Fantasy Park vé riêng. Listing nhấn "Fantasy Park INCLUDED" hoặc ghi rõ Exclusions → giảm 1-star review 30%.' },
  { name: 'TikTok Golden Bridge pre-sell', stars: 5, peak: 'Đã xảy ra', note: 'Khách US + Âu đã xem reel TikTok trước khi đến Đà Nẵng. Listing có video 15–30s Golden Bridge hands → CTR +25%.' },
  { name: 'Weather alert 24h trước (T7–T9 sương mù)', stars: 4, peak: 'T7–T9', note: 'Sương mù che Golden Bridge 40–60% thời gian T7–T9. SMS/WhatsApp confirm tình trạng + reschedule option → trust factor cao.' },
  { name: 'Lunch box ngoài cổng', stars: 3, peak: 'T6–T12', note: 'Pain #4: giá ăn trong Ba Na Hills đắt gấp 3 lần. Sondax cung cấp lunch box từ Đà Nẵng + list nhà hàng ven đường → save khách $15–20.' },
],
topCompetitors: [
  { tier: 'VOLUME LEADER', name: 'Ba Na Hills Full Day — Klook', priceRange: '$60–75', rating: 4.4, reviews: 3200, channelMix: 'Klook 70% · MakeMyTrip 20% · Viator 10%',
    strengths: ['Volume review cao nhất segment', 'Giá cạnh tranh — backpacker + family India', 'Top-of-search trên Klook cho khách Ấn'],
    gaps: ['Nhóm 30–40 người — bus ghép', 'HDV chia sẻ nhiều nhóm — attention không focus', 'Không có early-bird departure'],
    opp: 'Sondax: xe riêng 16 chỗ + khởi hành 7:30 AM = giải quyết pain #1 — thuyết phục trả thêm $10 dễ dàng.' },
  { tier: 'PREMIUM LISTING', name: 'Golden Bridge Ba Na Hills — Viator', priceRange: '$65–85', rating: 4.5, reviews: 1870, channelMix: 'Viator 75% · Direct 20% · GYG 5%',
    strengths: ['Định vị premium hơn Klook — brand perception', 'Ảnh Golden Bridge nổi bật — CTR cao', 'Thu hút khách Mỹ chụp ảnh — photography segment'],
    gaps: ['Vẫn dùng bus ghép — không match "premium"', 'Fantasy Park không bao gồm — surprise fee', 'Guide không sâu về French Village — thiếu storytelling'],
    opp: 'Sondax: cùng giá $72 nhưng private transport + storytelling French colonial = differentiation thực chất, không chỉ packaging.' },
  { tier: 'SELF-GUIDED', name: 'Vé trực tiếp tại cổng', priceRange: '$60–70', rating: null, reviews: null, channelMix: 'Direct 100% — Sun World official',
    strengths: ['Rẻ nhất — flexibility giờ giấc hoàn toàn', 'Không phụ thuộc lịch tour', 'Phù hợp khách đã ở gần (Hội An, Đà Nẵng)'],
    gaps: ['Không guide — khách tự xử lý', 'Không xe đưa đón — pain cho khách Ấn lần đầu', 'Không có storytelling French Village'],
    opp: 'Sondax nhắm khách Ấn lần đầu: "all-inclusive, không lo gì" — convert 40–60% self-guided planners sau khi so sánh.' },
],
painPointPositioning: [
  'Sondax: early-bird 7:30 AM + priority lane',
  'Sondax: HDV đi cùng suốt + meeting point 2h',
  'Sondax: Fantasy Park INCLUDED trong title',
  'Sondax: lunch box từ Đà Nẵng — tiết kiệm $15',
  'Sondax: kéo dài 17:00 + sunset Golden Bridge',
  'Sondax: SMS/WhatsApp confirm tình trạng điểm',
  'Sondax: xe 16 chỗ riêng — nhấn "private"',
],

// ─────────────────────────────────────────────────────────────────────────────
// TOUR: india-halong
// ─────────────────────────────────────────────────────────────────────────────
market: { size: '$22M', guests: '~65K', growthCAGR: '22%', operators: 18, gmv2028: '$42M' },
trends: [
  { name: 'Jain-Certified Menu mặc định', stars: 5, peak: 'Đã xảy ra', note: 'Pain #1 (sev 5, freq 45–58%). Tất cả competitor đều yêu cầu pre-book 5–7 ngày. Sondax default Jain = USP #1 trên mọi listing.' },
  { name: 'Hindi-Speaking Guide guaranteed', stars: 5, peak: 'Đã xảy ra', note: 'Pain #2 (sev 5, freq 38–50%). Jade Sails không có Hindi guide thường trực. Khoảng trắng thị trường rõ ràng — lock ngay.' },
  { name: 'Family Cabin 4–6 người', stars: 5, peak: 'T1–T3, T12', note: 'Gia đình Ấn 3 thế hệ đi cùng là norm. Bhaya max 4 người, Signature max 4. Cabin 4+2 là thị phần bỏ trống.' },
  { name: 'UPI/PhonePe payment on board', stars: 4, peak: 'T10–T4', note: 'Khách Ấn Gen-Z dùng UPI thay tiền mặt. Chấp nhận UPI QR cho bar/laundry/tips → spend per pax +15–20%, giảm friction.' },
  { name: 'Yoga / Tai Chi sunrise deck', stars: 3, peak: 'T10–T3', note: 'Khách Ấn 35–55 wellness-conscious. Morning yoga 30 phút miễn phí → review score +0.1–0.15, social shareable.' },
  { name: 'Indian breakfast (poha/paratha/idli)', stars: 5, peak: 'Đã xảy ra', note: 'Pain #3: breakfast không phù hợp khẩu vị Ấn. Bổ sung poha/upma/paratha → cost thấp, impact review rất cao.' },
  { name: 'Satellite WiFi mini on board', stars: 3, peak: 'T11–T3', note: 'Pain #5: khách không liên lạc được với gia đình ở Ấn. SIM VN tạm 1 ngày hoặc WiFi mini → differentiation dễ truyền thông qua MakeMyTrip.' },
],
topCompetitors: [
  { tier: 'PREMIUM LEADER', name: 'India Halong by Jade Sails', priceRange: '$260–320', rating: 4.6, reviews: 320, channelMix: 'MakeMyTrip 70% · Direct 20% · Yatra 10%',
    strengths: ['Tàu cao cấp — cabin rộng, amenities đầy đủ', 'Báo chí Ấn Độ đề cập nhiều — brand trust', 'Jain menu có sẵn (nhưng phải pre-book 7 ngày)'],
    gaps: ['Jain menu không mặc định — quy trình phức tạp khách bỏ', 'Không Hindi guide thường trực — tour lead', 'Giá cao khó scale với đoàn 10–15 người'],
    opp: 'Sondax: Jain mặc định + Hindi guide thường trực = lấy gia đình Ấn trung lưu đang né Jade vì thủ tục.' },
  { tier: 'VOLUME CHALLENGER', name: 'Bhaya Cruises India Package', priceRange: '$230–270', rating: 4.4, reviews: 510, channelMix: 'MakeMyTrip 75% · Thomas Cook 15% · Direct 10%',
    strengths: ['Giá phù hợp ngân sách gia đình Ấn', 'MakeMyTrip listing — khách Ấn tin tưởng', 'Đội tàu lớn — không bao giờ sold out'],
    gaps: ['Cabin tối đa 4 người — không phù hợp gia đình lớn', 'Guide chỉ tiếng Anh — không Hindi', 'Thực đơn chưa customize cho Ấn'],
    opp: 'Sondax: cabin 4–6 người + giá $260 (giữa Bhaya và Jade) = sweet spot cho gia đình 3 thế hệ đi cùng.' },
  { tier: 'LUXURY OUTLIER', name: 'Signature Royal Halong', priceRange: '$330–380', rating: 4.7, reviews: 180, channelMix: 'Klook 60% · Direct 30% · Viator 10%',
    strengths: ['Cao cấp nhất — tàu mới 2023, pool boong', 'Dịch vụ butler — trải nghiệm luxury đúng nghĩa', 'Rating cao — review positive consistent'],
    gaps: ['Giá quá cao cho đoàn gia đình đông', 'Không Hindi guide — khách Ấn lần đầu pain', 'Không có mặt trên MakeMyTrip — ngoài mental model khách Ấn'],
    opp: 'Sondax không cạnh tranh luxury — focus "best value cho gia đình Ấn" $250–270, đánh vào MakeMyTrip nơi Signature không có.' },
],
painPointPositioning: [
  'Sondax: Jain/vegan mặc định + WhatsApp confirm',
  'Sondax: Hindi guide guaranteed — USP #1',
  'Sondax: poha/upma/paratha breakfast đặt trước',
  'Sondax: cabin 4+2 + ảnh thực tế trên listing',
  'Sondax: SIM VN 1 ngày hoặc satellite WiFi',
  'Sondax: thuyền quan sát thay kayak cho người lớn tuổi',
  'Sondax: UPI/PhonePe trên tàu — giảm friction',
],
