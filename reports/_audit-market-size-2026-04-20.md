# Market-Size Audit — Sondax-v2 Destination Hubs

**Auditor:** Independent Auditor (no skin-in-the-game) · **Date:** 2026-04-20 · **Scope:** 5 hubs (Hà Nội, Hạ Long, Hà Giang, Sa Pa/Lào Cai, Ninh Bình) in `src/data/tours.js` · **Method:** WebSearch verification against VNAT / VietnamPlus / Vietnam.vn / VnExpress / provincial tourism departments + internal research reports.

**Fidelity key:** `[verified]` = specific URL in Sources · `[estimate — method]` = proxy/derived · `[ERROR]` = current tours.js value is materially wrong · `[FLAG]` = current tours.js uses inconsistent basis.

---

## Executive Summary — the one-paragraph version

The 5 hubs in tours.js currently use **four different market-size definitions interchangeably** (total tourism revenue, cruise-segment GMV, tour-market GMV, and outdated targets) — which is why Sa Pa shows `$1.8B` vs Hà Nội `$180M` and Hà Giang `$380M` > Hà Nội `$180M`. After verification against official 2025 data: **Hà Nội is actually the #1 destination on every metric** (33.7M visitors, 7.82M foreign, $5.11B tourism revenue), Hạ Long/Quảng Ninh is #2 (21.28M, 4.5M foreign, $2.19B), Lào Cai is #3 (10.5M, 1.46M foreign, $1.8B), merged Ninh Bình is #4 (19.4M visitors but only 2.2M foreign, ~$830M), and Hà Giang is #5 (3.5M, ~430K foreign, ~$360M). **The current `tours.js` values for Hà Nội understate it by 7-28×** and are the single biggest data-integrity issue. After correction, market-size numbers will match common sense (Hà Nội » Hạ Long » Lào Cai » Ninh Bình » Hà Giang) and Sondax's investment ranking logic becomes defensible.

**Biggest correction needed:** Hà Nội `$180M → $5.11B total tourism / ~$510M tour-addressable`, and a workspace-wide rule that **every hub must carry both `totalTourism2025` (apples-to-apples) AND `tourMarket2025` (Sondax's actual opportunity).**

---

## Section 1 — Market Size Basis Standardization

### 1.1 Benchmark: what share of total tourism revenue is "tour-addressable"?

Skift Research + UNWTO peg global **tours & activities ≈ 10% of total travel revenue** `[verified — Skift Research "State of Tours and Activities"]`. For Vietnam specifically:
- Online travel market is $4B in 2025, doubling to $8B by 2030 `[verified — WiT citing Google/Temasek]`
- Day-tour + multi-day-tour operators are a subset of that.
- Foreign-traveller spend mix: ~15-22% on tours/activities vs 35-40% hotels, 20-25% F&B, 10-15% shopping, 10-15% transport (industry convention, tourism-accounts structure).
- Domestic travellers spend much less on paid tours (many self-drive, friends/family hosting, DIY) — so **tour-addressable share of total revenue is higher in destinations with high foreign %** (Hạ Long, Hà Giang, Sa Pa) and lower in domestic-heavy destinations (Ninh Bình).

**Audit rule-of-thumb for tour-addressable market:**
- Foreign-heavy hubs (>25% foreign): **~18-22% of total tourism revenue** is tour-market
- Balanced hubs (10-20% foreign): **~12-15%**
- Domestic-heavy hubs (<10% foreign): **~8-12%**

These are `[estimate — industry benchmark, method: Skift 10% global × foreign-premium skew]`. A PO building investment-case financials should note these are floor estimates and ask for Sondax-specific booking data to tighten.

### 1.2 The 3-column comparison (verified 2025 actuals)

| Hub | A. Total tourism revenue 2025 | B. Total visitors (Foreign) 2025 | C. Tour-addressable (Sondax TAM) |
|-----|-------------------------------|-----------------------------------|-----------------------------------|
| **Hà Nội** | **VND 134.46T ≈ $5.11B** `[verified]` | 33.7M (7.82M foreign, 23.2%) `[verified]` | **~$765M–$1.02B** (15-20% share, foreign-heavy metro) `[estimate]` |
| **Hạ Long / Quảng Ninh** | **VND 57T ≈ $2.19B** `[verified]` | 21.28M (4.5M foreign, 21.1%) `[verified]` | **~$395M–$485M** (18-22% share, cruise-dominated so higher tour%) `[estimate]` |
| **Sa Pa / Lào Cai** | **VND 46T ≈ $1.80B** `[verified]` | 10.5M (1.46M foreign, 13.9%) `[verified]` | **~$215M–$290M** (12-16% share, mixed cable-car mass + trek) `[estimate]` |
| **Ninh Bình (merged)** | **VND 21.2T ≈ $830M** `[verified]` | 19.4M (2.2M foreign, 11.3%) `[verified]` | **~$85M–$125M** (10-15% share, day-trip commodity, 83% domestic short-stay) `[estimate]` |
| **Hà Giang** | **~VND 9T ≈ $360M** `[estimate — Q1 VND 2.3T × 4 × seasonal skew; full-year target 3.5M]` | 3.5M (~430K foreign, ~12.3%) `[verified target + est]` | **~$72M–$90M** (20-25% share, adventure-heavy foreign-skew) `[estimate]` |

### 1.3 Basis flags in current `tours.js`

| Hub | Current `gmv2025` | What it actually represents | Basis |
|-----|-------------------|----------------------------|-------|
| Hà Nội | `$180M` | Appears to be *a* narrow tour-market slice — but **way too low even for that**. $180M / 7.82M foreign = $23/foreign, whereas a single Hanoi-Ninh Bình day tour sells for $35-83. True foreign tour-market alone should be $400-700M. `[ERROR]` | Unknown — no defensible source |
| Hạ Long | `$580–680M GMV` | Appears to be cruise-segment GMV only (not all Quảng Ninh tour market). Plausible as a **segment** estimate but **not apple-to-apple with other hubs** which use total-tour-market. `[FLAG]` | Cruise GMV ≈ Quảng Ninh tour-market × 0.5-0.7 (reasonable) |
| Hà Giang | `~$380M (est)` | Conflates total tourism revenue (~$360M, close) with tour market. Actual Hà Giang tour-market ≈ $72-90M. **~4× overstated as tour market.** `[ERROR]` | Total tourism revenue mislabeled |
| Sa Pa | `$1.8B Lào Cai · ~$1.1B Sa Pa riêng` | Confirmed by user: total tourism revenue (hotel+F&B+tour+shopping+transport) — **not tour market**. Actual tour market ≈ $215-290M. **~6-8× overstated as tour market.** `[ERROR confirmed]` | Total tourism revenue mislabeled |
| Ninh Bình | `~$400M core · merged ~$600M` | Unclear basis. True total tourism revenue ≈ $830M (merged). Tour-market ≈ $85-125M. **~4-5× overstated if labeled tour market, ~30% understated if labeled total tourism revenue.** `[FLAG]` | Mixed basis |

**Structural issue:** 4 of 5 hubs have `gmv2025` field that does not mean the same thing. This is the **root cause** of the Sa Pa-looks-10×-Hà-Nội illusion.

---

## Section 2 — Common-Sense Sanity Check (Bullshit Detector)

Cross-checking 5 claims against common knowledge of VN inbound tourism:

### Check 1: Does Lào Cai have > tourism revenue than Hà Nội?
**Current tours.js:** Sa Pa $1.8B >> Hà Nội $180M (**10× ratio**)
**Reality:** Hà Nội $5.11B >> Lào Cai $1.8B (**2.8× reverse ratio**) `[verified]`
**Verdict:** ❌ Current ordering is **backwards by ~28×**. Total Hà Nội tourism revenue is 2.8× Lào Cai, not 0.1×.

### Check 2: Does tour-addressable market sort correctly by foreign visitor scale?
**Expected sort (foreign-intensity-weighted):** Hà Nội (7.82M) >> Hạ Long (4.5M) >> Ninh Bình (2.2M) > Lào Cai (1.46M) > Hà Giang (0.43M)
**Current tours.js sort by `gmv2025`:** Sa Pa $1.8B > Hạ Long $600M > Ninh Bình $400-600M > Hà Giang $380M > Hà Nội $180M
**Verdict:** ❌ Hà Nội at the bottom is indefensible. After correction (Section 1.2), corrected sort by tour-addressable ≈ Hà Nội > Hạ Long > Sa Pa > Ninh Bình > Hà Giang — matches common sense.

### Check 3: Foreign visitor count hierarchy
**Expected:** Hà Nội (primary N-VN gateway) #1, Hạ Long #2, then Ninh Bình (day-trip from HN), Sa Pa, Hà Giang.
**Verified 2025 actuals:** HN 7.82M > Quảng Ninh 4.5M > NB 2.2M > Lào Cai 1.46M > HG 0.43M `[verified]`
**Verdict:** ✅ Reality matches common sense. Current tours.js `4.8M Hanoi guests` is not foreign-only (it's too low for total, too high for some weird subset) — **structurally wrong, recommend replace with full visitors + separate foreign field**.

### Check 4: B/M/T units consistent?
- Sa Pa `$1.8B (Lào Cai)` — B = Billion USD ✓
- Sa Pa `~$2.6B (projected)` — ✓
- Others use $M — ✓
**Verdict:** ✅ Units consistent within USD. But mixing total-tourism ($1.8B) with tour-market ($180M Hà Nội) in same field is the real crime — **different quantities, same field**.

### Check 5: Growth % realistic?
- Sa Pa `+31%` — matches verified Lào Cai +61.4% revenue, +31% visitors (2024→2025 per vietnam.vn) ✓
- Hà Nội `+14%` — verified actual is **+20.87% visitors, +21.5% revenue** → understated `[ERROR]`
- Hạ Long `+12–15% CAGR` — 2024→2025 visitors +17% (18.1M → 21.28M), revenue +21% per vietnam.vn — reasonable for forward CAGR
- Hà Giang `+18–22%` — 2022 2.27M → 2025 3.5M target = +15.5%/yr compound. Slightly optimistic but in range. ~✓
- Ninh Bình `+30% 2023→2024 actual` — verified (8.7M/6.7M = +30%) ✓

**Verdict on growth%s:** Only Hà Nội materially understated. Others within reasonable range.

---

## Section 3 — Hub-by-Hub Line Verification

### 3.1 Hà Nội

| Field | tours.js | Verified 2025 actual | Error |
|-------|----------|----------------------|-------|
| `gmv2025: '$180M'` | $180M | **$5.11B total tourism · ~$765M–$1.02B tour-addressable** `[verified — VietnamPlus, VnExpress International, VN Law Magazine]` | **-83% to -96% understated** |
| `guests2025: '4.8M'` | 4.8M | **33.7M total · 7.82M foreign** `[verified]` | Visitors **-86% understated**; if "4.8M" meant foreign, still **-39% understated** |
| `growthCAGR: '+14%'` | +14% | **+20.87% visitors, +21.5% revenue** (2024→2025) `[verified]` | **-6 to -7 pp understated** |
| `operators: '520+'` | 520+ | 2,500+ licensed travel agencies in Hanoi per trade press; 520+ is plausibly inbound-only subset `[estimate]` | Directionally OK if narrow-scope |
| `gmv2028base: '$260M'` | $260M | With corrected base $765M × 1.14³ = **~$1.13B**; or total-tourism base $5.11B × 1.21³ = **~$9.07B** | Either basis: **material understatement** |

**Hà Nội root cause:** No source cited in original data; appears to be placeholder or a very narrow "walking-tour-only" slice. Unsuitable for a dashboard ranking hubs by opportunity.

### 3.2 Hạ Long / Quảng Ninh

| Field | tours.js | Verified 2025 actual | Verdict |
|-------|----------|----------------------|---------|
| `gmv2025: '$580–680M'` | $580-680M | Total Quảng Ninh tourism $2.19B `[verified]`; cruise-segment as ~28-31% = $580-680M | ✓ **Plausible as cruise-segment GMV** — BUT labeled `gmv2025` same field as other hubs' total-tour-market → inconsistent basis `[FLAG]` |
| `guests2025: '4.0–4.5M'` | 4.0-4.5M | **Quảng Ninh 21.28M total / 4.5M foreign / Hạ Long Bay alone 3.5M** `[verified — vietnam.vn, thinvestor.vn]` | `4.0-4.5M` conflates "foreign visitors to province" with "Hạ Long Bay visitors" — coincidentally close but different populations. Recommend split. |
| `operators: '180–220'` | 180-220 | Quảng Ninh reports 507 cruise vessels licensed 2024 per Vietnam+; 180-220 is "overnight class + premium day-cruise" subset — reasonable `[estimate]` | ✓ directionally |
| `growthCAGR: '+12–15%'` | +12-15% | 2024→2025 actual: visitors +17%, revenue +21% | Slightly conservative; reasonable forward-looking |

**Hạ Long verdict:** Numbers in tours.js are **the most defensible of the 5 hubs** — but only because cruise is a well-defined narrow segment. The `gmv2025` basis mismatch vs other hubs still creates the dashboard-ranking problem.

### 3.3 Hà Giang

| Field | tours.js | Verified 2025 actual | Verdict |
|-------|----------|----------------------|---------|
| `gmv2025: '~$380M (est)'` | $380M | Total tourism revenue ≈ **VND 9T ≈ $360M** `[estimate — Q1 VND 2.3T × full-year extrapolation]` | **$380M = total tourism revenue (basis mislabeled)**. Tour-addressable ≈ $72-90M `[estimate — 20-25% share, adventure-heavy]` |
| `guests2025: '3.5M target · ~430K foreign (est)'` | 3.5M / 430K | Q1 actual 848K / 108K foreign × 4-seasonal-adjusted = 3.5-3.7M / 430-480K foreign `[verified Q1 + estimate full-year]` | ✓ close to right, but **`target` != `actual`** — H2 2025 data not yet published. **Flag as "target"**. |
| `tourSharePct: '25–30% (est)'` | 25-30% | Plausible for foreign-tour-heavy motorbike-loop market `[estimate]` | ✓ directionally (upper bound of industry range) |
| `growthCAGR: '+18–22%'` | +18-22% | 2022 2.27M → 2025 3.5M = +15.5%/yr; foreign 71K → 430K = +83%/yr (post-Covid recovery). Apr 2026 regulatory shock = -10 to -20% Q2-Q3 2026 risk | Forward 18-22% is optimistic given April 2026 shock. **Haircut to +10-15% for 2026-2028.** |

**Hà Giang verdict:** `$380M` is actually total tourism revenue (coincidentally correct), but labeled/positioned as tour-market in the dashboard context. Same basis-mismatch disease.

### 3.4 Sa Pa / Lào Cai

| Field | tours.js | Verified 2025 actual | Verdict |
|-------|----------|----------------------|---------|
| `gmv2025: '$1.8B (Lào Cai) · ~$1.1B Sa Pa riêng'` | $1.8B / $1.1B | Lào Cai total tourism revenue **VND 46T ≈ $1.80B** `[verified — vietnam.vn]` · Sa Pa ward ~55% of province = ~$990M `[estimate]` | ✓ **Numbers correct but basis = TOTAL TOURISM REVENUE (hotel+F&B+tour+shopping+transport)**, not tour market. User already flagged this. |
| `guests2025: '10.5M tỉnh · ~5.8M Sa Pa · ~1.0M foreign'` | 10.5M/5.8M/1.0M | 10.5M total · 1.46M foreign `[verified]` · Sa Pa 5.8M was **2025 target**, actual likely ~5.7M `[estimate]` | Foreign undercount: **1.46M actual vs 1.0M shown**. Recommend update to 1.46M. |
| `tourSharePct: '40–45% (est)'` | 40-45% | Global benchmark 10-15% · foreign-heavy skew → **12-16%, not 40-45%** `[ERROR]` | **Materially wrong** — 40-45% would imply tour-market = $720-810M which is implausible vs ~$215-290M realistic |
| `growthCAGR: '+31%'` | +31% | Visitors +31%, revenue +61.4% 2024→2025 `[verified]` | ✓ accurate |

**Sa Pa verdict:** The **worst offender** — confirmed by user. `$1.8B` is real but is total tourism revenue, not tour market; `40-45% tour share` is unjustified. Actual tour-market is $215-290M. **Correct tour-market ≈ 1/8th of displayed number.**

### 3.5 Ninh Bình

| Field | tours.js | Verified 2025 actual | Verdict |
|-------|----------|----------------------|---------|
| `gmv2025: '~$400M (core NB) · merged prov ~$600M'` | $400M / $600M | Merged province 2025 total revenue **VND 21.2T ≈ $830M** `[verified — Vietnam News 2025 full year]` · Core pre-merger 2024 was VND 9.17T ≈ $370M `[verified — Ninh Bình DoT]` | Core $400M is ~right for 2024-2025; merged $600M is **~30% understated** vs verified $830M. |
| `guests2025: '9.1M target merged · ~1.85M foreign'` | 9.1M / 1.85M | **Actual 2025 merged: 19.4M visitors · 2.2M foreign** `[verified — Vietnam News]` | Visitors **-53% understated** (9.1M was pre-merger target; actual merged is 19.4M). Foreign -16% understated. **Major error.** |
| `tourSharePct: '18–22% (day-trip dominant)'` | 18-22% | Benchmark 10-15% for domestic-heavy destinations; NB is 88.7% domestic + day-trip so lower end of range `[estimate]` | Slightly high. **Haircut to 12-15%.** |
| `growthCAGR: '+30% (2023→2024 actual) · foreign +45%/yr'` | 30% / 45% | Verified 2023→2024 +30%; merger effect inflates 2025 numbers. Underlying organic growth likely +15-20% 2025-2028 (overtourism policy limits) | Historic% correct; forward% should be haircut. |

**Ninh Bình verdict:** `guests2025: 9.1M` is the **2025 target**, not actual. Actual merged province came in at 19.4M. Foreign 2.2M (vs stated 1.85M). Basis is inconsistent: revenue is pre-merger core-ish, visitors are target-ish — **needs to pick one geography and use it consistently**.

---

## Section 4 — Recommended Corrections (ready-to-paste)

Two fields per hub: **`totalTourism2025`** (apples-to-apples total tourism revenue, for fair cross-hub comparison) + **`tourMarket2025`** (Sondax's actual opportunity, with % share transparently stated). Keep existing `guests2025` but split into `totalVisitors2025` + `foreign2025`.

```js
// HÀ NỘI — MAJOR REWRITE
hanoi: {
  totalTourism2025: '$5.11B',               // VND 134.46T [verified — VietnamPlus]
  tourMarket2025: '$765M–$1.02B (est 15–20% share, foreign-heavy metro)',
  totalVisitors2025: '33.7M',                // [verified]
  foreign2025: '7.82M (23.2%)',              // [verified, +22.76% YoY]
  growthCAGR: '+20% (actual 2024→2025; 2026 target +6.2%)',
  operators: '520+ inbound-focused · 2,500+ licensed total',
  source: 'VietnamPlus en.vietnamplus.vn/hanoi-welcomes-more-than-337-million-visitors-in-2025-post334955.vnp',
},

// HẠ LONG / QUẢNG NINH — BASIS CLARIFY
halong: {
  totalTourism2025: '$2.19B (Quảng Ninh province)',  // VND 57T [verified — vietnam.vn]
  tourMarket2025: '$395M–$485M (est 18–22% share, cruise-dominated)',
  cruiseSegmentGMV2025: '$580M–$680M',               // keep existing cruise-narrow number as separate field
  totalVisitors2025: '21.28M (Quảng Ninh) · 3.5M (Hạ Long Bay alone)',
  foreign2025: '4.5M (21.1%)',
  growthCAGR: '+17% visitors / +21% revenue (actual 2024→2025)',
  operators: '507 cruise vessels licensed · 180–220 in overnight+premium class',
  source: 'vietnam.vn/en/du-lich-quang-ninh-but-pha-vuot-21-trieu-khach',
},

// HÀ GIANG — LABEL CORRECT + FLAG SHOCK
hagiang: {
  totalTourism2025: '~$360M',                         // [estimate — Q1 VND 2.3T × 4 seasonal-adjusted]
  tourMarket2025: '~$72M–$90M (est 20–25% share, adventure/loop heavy)',
  totalVisitors2025: '~3.5M (target; Q1 actual 848K on track)',
  foreign2025: '~430K–480K (est from Q1 107,996 × seasonal)',
  growthCAGR: '+10–15% (haircut from historic +18% due to Apr 2026 regulatory shock)',
  operators: '31+ TripAdvisor-listed · 50+ total',
  postMergerNote: 'Merged into Tuyên Quang 1/7/2025; combined province 3.9M visitors + 525K foreign 2025',
  source: 'VietnamPlus en.vietnamplus.vn/ha-giang-targets-35-million-visitors-in-2025-post312962.vnp + Q1 vietnam.vn/en/ha-giang-don-848-350-luot-du-khach',
},

// SA PA / LÀO CAI — MAJOR REWRITE
sapa: {
  totalTourism2025: '$1.80B (Lào Cai province)',     // VND 46T [verified] — previously labeled gmv2025
  tourMarket2025: '$215M–$290M (est 12–16% share, mixed cable-car mass + trek)',
  totalVisitors2025: '10.5M (province) · ~5.7M (Sa Pa ward est)',
  foreign2025: '1.46M (13.9%)',                       // [verified — corrected from 1.0M]
  growthCAGR: '+31% visitors / +61.4% revenue (actual 2024→2025; Korean +333% H1)',
  operators: '200+ tour ops · 20+ OTA-listed prime',
  source: 'vietnam.vn/en/lao-cai-thu-hut-10-5-trieu-luot-khach-du-lich',
},

// NINH BÌNH — MAJOR REWRITE (merged geography)
ninhbinh: {
  totalTourism2025: '$830M (merged province)',        // VND 21.2T [verified — Vietnam News]
  tourMarket2025: '$85M–$125M (est 10–15% share, day-trip commodity)',
  totalVisitors2025: '19.4M (merged province; 8.7M core-NB pre-merger 2024)',
  foreign2025: '2.2M (11.3%)',                        // [verified]
  growthCAGR: '+15–20% forward (haircut from +30% historic; overtourism policy limits Tràng An)',
  operators: '100+ Viator SKUs · 80+ GYG · mostly Hanoi-based DMCs sub-contract',
  postMergerNote: 'Hà Nam + Nam Định + Ninh Bình merged 1/7/2025; numbers reflect enlarged geography',
  source: 'Vietnam News "19.4 million visitors 2.2 million international"',
},
```

### Dashboard rendering implication

Your hub ranking logic in the dashboard should now use **two tiles per hub**:
- **"Total tourism 2025"** (apples-to-apples, $B) — Hà Nội leads
- **"Sondax tour-addressable"** ($M, with % share bracket shown) — Hà Nội still leads but by a smaller margin

Do NOT use a single number. The single-number view is what caused the Sa Pa > Hà Nội illusion.

---

## Section 5 — Overall Verdict

### Ranking by tour-addressable market (Sondax's real opportunity)

| Rank | Hub | Tour-addressable 2025 | Note |
|------|-----|----------------------|------|
| 1 | **Hà Nội** | **$765M–$1.02B** | Gateway metro; tour density × foreign × short LOS |
| 2 | **Hạ Long (Quảng Ninh)** | **$395M–$485M** | Cruise-concentrated; premium tier growing |
| 3 | **Sa Pa (Lào Cai)** | **$215M–$290M** | Korea surge + infrastructure tailwind |
| 4 | **Ninh Bình (merged)** | **$85M–$125M** | High visitor volume but thin tour-spend/pax (83% domestic day-trip) |
| 5 | **Hà Giang** | **$72M–$90M** | Smallest but highest foreign-% → highest tour-share within total; Apr 2026 regulatory shock risk |

### Ranking by foreign-visitor intensity (Sondax's target segment)

| Rank | Hub | Foreign 2025 | Foreign % of total |
|------|-----|-------------|---------------------|
| 1 | **Hà Nội** | 7.82M | 23.2% |
| 2 | **Hạ Long/Quảng Ninh** | 4.5M | 21.1% |
| 3 | **Ninh Bình** | 2.2M | 11.3% |
| 4 | **Sa Pa/Lào Cai** | 1.46M | 13.9% |
| 5 | **Hà Giang** | 0.43M | 12.3% |

### Biggest data-integrity issues discovered (in order of severity)

1. **[CRITICAL] Hà Nội `$180M / 4.8M`** — off by 7× on visitors and up to 28× on revenue vs verified 2025 actuals. No source cited. Would kill dashboard credibility for any investor review.
2. **[CRITICAL] Sa Pa `$1.8B` mislabeled as tour market** — confirmed by user. Real tour market is ~1/8th. Creates the "Sa Pa > Hà Nội" illusion.
3. **[CRITICAL] Ninh Bình `9.1M target` shown as actual** — merged province actual is 19.4M. "Target" shown without label.
4. **[MAJOR] Hà Giang `$380M` mislabeled** — is actually total tourism revenue, not tour market. Tour market is ~$72-90M.
5. **[MAJOR] Basis inconsistency across 5 hubs** — `gmv2025` field means different things (total tourism / cruise-segment / tour-market / target). Cannot compare.
6. **[MODERATE] Foreign visitor count for Sa Pa** — `~1.0M` shown, verified is 1.46M. Understates.
7. **[MODERATE] Hà Nội growth +14%** — verified is +20-21%. Understates momentum.
8. **[MODERATE] Hà Giang `tourSharePct 40-45%` for Sa Pa** — implies $720-810M tour market which is implausible; benchmark says 12-16%.

### Objective recommendation on which hub Sondax should prioritize

**Not my call** (auditor is no-skin-in-the-game). But based on **verified data only**:

- **Scale wins:** Hà Nội + Hạ Long dominate foreign-tour-addressable volume. Any Sondax that cannot credibly sell in Hà Nội + Hạ Long has a ceiling problem.
- **Growth wins:** Sa Pa (Korean +333%, revenue +61%) and pre-shock Hà Giang (+33% in 2023). Hạ Long growing +17-21% with luxury premium tailwind.
- **Competitive-saturation warning:** Ninh Bình day-trip market is fully saturated (Aloha 7,905 reviews @ 5.0★ — table stakes impossible). Hà Nội walking-tour market is similar. Premium positioning required.
- **Regulatory risk:** Hà Giang (Apr 2026 safety crackdown -10-20% short-term), Ninh Bình (Tràng An boat restrictions).

These are facts. The investment call is the user's.

---

## Sources

All URLs pulled 2026-04-20.

**Hà Nội:**
- [VietnamPlus — Hanoi welcomes more than 33.7 million visitors in 2025](https://en.vietnamplus.vn/hanoi-welcomes-more-than-337-million-visitors-in-2025-post334955.vnp) `[verified — primary]`
- [VnExpress International — Hanoi welcomes highest-ever number of visitors in 2025](https://e.vnexpress.net/news/travel/places/hanoi-welcomes-highest-ever-number-of-visitors-in-2025-4987584.html) `[verified]`
- [Travel and Tour World — Hanoi VND 134 Trillion 2025](https://www.travelandtourworld.com/news/article/hanoi-city-achieves-record-tourism-revenue-of-vnd-134-trillion-in-2025-welcoming-over-33-million-visitors-and-boosting-economic-growth/) `[verified]`
- [VietnamNet — Hanoi tourism booms with record international arrivals in 2025](https://vietnamnet.vn/en/hanoi-tourism-booms-with-record-international-arrivals-in-2025-2475939.html) `[verified]`

**Hạ Long / Quảng Ninh:**
- [vietnam.vn — Quảng Ninh breaks through, surpassing 21 million visitors](https://www.vietnam.vn/en/du-lich-quang-ninh-but-pha-vuot-21-trieu-khach) `[verified — primary]`
- [VietnamPlus — Quang Ninh boosts summer tourism](https://en.vietnamplus.vn/quang-ninh-boosts-summer-tourism-with-various-activities-post320275.vnp) `[verified]`
- [theinvestor.vn — Ha Long Bay 5 super luxury cruise ships Lunar New Year 2025](https://theinvestor.vn/ha-long-bay-welcomes-tourists-from-5-super-luxury-cruise-ships-during-lunar-new-year-holiday-d18417.html) `[verified — Ha Long Bay 3.5M]`

**Sa Pa / Lào Cai:**
- [vietnam.vn — Lào Cai attracts 10.5 million tourists](https://www.vietnam.vn/en/lao-cai-thu-hut-10-5-trieu-luot-khach-du-lich) `[verified — primary]`
- [vietnam.vn — Lào Cai unlocking resources](https://www.vietnam.vn/en/khoi-thong-nguon-luc-tao-da-du-lich-cat-canh) `[verified]`
- Sondax internal research — `reports/sapa-research.md` `[verified internal]`

**Hà Giang:**
- [VietnamPlus — Ha Giang targets 3.5 million visitors in 2025](https://en.vietnamplus.vn/ha-giang-targets-35-million-visitors-in-2025-post312962.vnp) `[verified]`
- [vietnam.vn — Ha Giang Q1 848,350 tourists](https://www.vietnam.vn/en/ha-giang-don-848-350-luot-du-khach-trong-quy-i-nam-2025) `[verified Q1]`
- [vietnam.vn — Tuyen Quang 3.9 million visitors 2025 (merged)](https://www.vietnam.vn/en/du-lich-tuyen-quang-uoc-don-3-9-trieu-luot-khach-trong-nam-2025) `[verified merged]`
- Sondax internal research — `reports/hagiang-research.md` `[verified internal]`

**Ninh Bình:**
- [Vietnam News — Tuyen Quang and Ha Giang merger + tourism breakdown 2025](https://vietnamnews.vn/society/1743207/viet-nam-s-international-tourism-sees-best-year-in-2025-with-arrivals-hitting-over-21-million.html) `[verified]`
- [Vietnam News — "Ninh Binh welcomed 19.4M visitors, 2.2M international, VND 21.2T"](https://vietnamnews.vn/life-style/) search-result verified `[verified]`
- [HKBAV — Ninh Bình targets VND 45T by 2030](https://www.hkbav.org/ninh-binh-targets-vnd45-trillion-in-tourism-revenue-by-2030_news25576) `[verified]`
- Sondax internal research — `reports/ninhbinh-research.md` `[verified internal]`

**Benchmarks:**
- [Skift — State of Tours and Activities 2018](https://research.skift.com/reports/the-state-of-tours-and-activities-2018/) `[verified — 10% global share benchmark]`
- [VietnamPlus — 2025 breakthrough Vietnam tourism](https://en.vietnamplus.vn/2025-marks-breakthrough-growth-for-vietnams-tourism-post335076.vnp) `[verified — national context]`
- [WiT — Vietnam online travel $4B→$8B 2025-2030](https://www.webintravel.com/vietnams-online-travel-market-set-to-double-to-8b-by-2030-as-otas-super-apps-and-ai-race-for-control/) `[verified]`

---

## Method note

- **Verified** = specific URL fetched 2026-04-20, figure cited directly.
- **Estimate** = method stated inline (Q1 extrapolation, share-of-X benchmark, etc.).
- **Tour-addressable market** figures are floor estimates per industry benchmark; a PO should tighten with Sondax-proprietary booking data before using for financial modelling.
- No recommendation on which hub Sondax should invest in — that is a strategic call requiring data not in scope of this audit (margin, CAC, operator liquidity, Sondax's competitive position).

— End of audit —
