// Destinations — điểm đến là entity chính, tour là con.
// Mỗi destination gom nhiều category; mỗi category chứa tourIds (ref sang tours.js).
// `plannedTours` = tour placeholder sắp thêm, chưa có trong tours.js.
// halongHub là deep-dive hub data, reuse nguyên từ tours.js.

import { halongHub } from './tours.js';

// Region groups used by monthly briefings — 6 coarse buckets với weather/season đồng nhất.
// Source of truth cho "điểm đến tháng này" ở page_months.jsx.
// Thêm destination mới → thêm id vào đúng group (không động months.js).
export const MONTH_GROUPS = [
  {
    id: 'central-coast',
    label: 'Đà Nẵng / Hội An / Nha Trang',
    destinationIds: ['danang', 'hoi-an', 'nha-trang', 'hue', 'quy-nhon'],
  },
  {
    id: 'south-hcmc',
    label: 'HCMC / Đà Lạt / Mekong',
    destinationIds: ['hcmc', 'dalat', 'mekong', 'con-dao'],
  },
  {
    id: 'north-mountain',
    label: 'Sapa / Hà Giang',
    destinationIds: ['sapa', 'ha-giang', 'pu-luong'],
  },
  {
    id: 'hanoi-plus',
    label: 'Hà Nội + Ninh Bình',
    destinationIds: ['hanoi', 'ninh-binh'],
  },
  {
    id: 'phu-quoc',
    label: 'Phú Quốc',
    destinationIds: ['phu-quoc'],
  },
  {
    id: 'halong-area',
    label: 'Hạ Long / Cát Bà',
    destinationIds: ['halong', 'cat-ba'],
  },
];

export const CATEGORY_CATALOG = [
  { id: 'cruise',      name: 'Cruise & Du thuyền',   icon: '🚢' },
  { id: 'food',        name: 'Ẩm thực',              icon: '🍜' },
  { id: 'fine-dining', name: 'Fine Dining',          icon: '⭐' },
  { id: 'workshop',    name: 'Workshop & Lớp học',   icon: '🎨' },
  { id: 'culture',     name: 'Văn hóa & Di sản',     icon: '🏛️' },
  { id: 'wellness',    name: 'Wellness & Spa',       icon: '🧘' },
  { id: 'adventure',   name: 'Adventure',            icon: '🚙' },
  { id: 'nature',      name: 'Thiên nhiên & Outdoor', icon: '⛰️' },
  { id: 'multi-day',   name: 'Tour trọn gói',        icon: '🎒' },
];

const destinations = [
  {
    id: 'hanoi',
    name: 'Hà Nội',
    region: 'Bắc',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Thủ đô văn hóa — street food, workshop cà phê, di sản phố cổ, fine dining nổi lên',
    topSourceMarkets: ['us', 'uk', 'fr', 'au'],
    categories: [
      {
        id: 'food',
        tourIds: ['hanoi-food-night'],
        plannedTours: [
          { id: 'hanoi-bun-cha-walk',    name: 'Bún chả + Tạ Hiện craft beer' },
          { id: 'hanoi-banh-cuon-dawn',  name: 'Bánh cuốn sáng sớm phố cổ' },
        ],
      },
      {
        id: 'workshop',
        tourIds: [],
        plannedTours: [
          { id: 'hanoi-egg-coffee-class', name: 'Workshop cà phê trứng (Giảng Café origin)' },
          { id: 'hanoi-coffee-cupping',   name: 'Coffee cupping specialty — rang thủ công' },
          { id: 'hanoi-lacquer-workshop', name: 'Workshop sơn mài truyền thống' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'hanoi-museum-ethno',     name: 'Bảo tàng Dân tộc học — guide chuyên sâu' },
          { id: 'hanoi-old-quarter-walk', name: 'Phố cổ 36 phố phường walking tour' },
          { id: 'hanoi-temple-literature',name: 'Văn Miếu + Hồ Tây sunset' },
        ],
      },
      {
        id: 'fine-dining',
        tourIds: [],
        plannedTours: [
          { id: 'hanoi-michelin-tasting', name: 'Michelin tasting — 3 nhà (Gia, Tầm Vị, ChapterOne)' },
          { id: 'hanoi-chef-private',     name: 'Chef private dining — set menu 8 món' },
        ],
      },
    ],
  },
  {
    id: 'halong',
    name: 'Hạ Long',
    region: 'Bắc',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Di sản UNESCO — cruise vịnh day/overnight/premium, kayak, hang động',
    topSourceMarkets: ['cn', 'kr', 'in', 'us', 'au', 'uk', 'tw'],
    hub: halongHub,
    categories: [
      {
        id: 'cruise',
        tourIds: ['india-halong'],
        plannedTours: [
          { id: 'halong-day-cruise',      name: 'Day cruise 6–8h (budget)' },
          { id: 'halong-overnight-std',   name: 'Overnight 1N2Đ standard' },
          { id: 'halong-premium-2n3d',   name: 'Premium 2N3Đ boutique cabin' },
        ],
      },
      {
        id: 'nature',
        tourIds: [],
        plannedTours: [
          { id: 'halong-kayak-lanha',     name: 'Kayak Lan Hạ hang động' },
        ],
      },
    ],
  },
  {
    id: 'hoi-an',
    name: 'Hội An',
    region: 'Trung',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Phố cổ UNESCO — wellness retreat, cooking class, lantern festival',
    topSourceMarkets: ['us', 'au', 'kr', 'fr'],
    categories: [
      {
        id: 'wellness',
        tourIds: ['hoi-an-wellness'],
        plannedTours: [
          { id: 'hoi-an-spa-full-day',    name: 'Full-day spa + yoga biển An Bàng' },
        ],
      },
      {
        id: 'workshop',
        tourIds: [],
        plannedTours: [
          { id: 'hoi-an-cooking-class',   name: 'Cooking class + chợ Hội An' },
          { id: 'hoi-an-lantern-making',  name: 'Làm đèn lồng thủ công' },
          { id: 'hoi-an-tailor-express',  name: 'Tailor express — áo dài 24h' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'hoi-an-old-town-walk',   name: 'Walking tour phố cổ đêm lantern' },
          { id: 'hoi-an-my-son',          name: 'Mỹ Sơn + làng Trà Quế' },
        ],
      },
    ],
  },
  {
    id: 'ha-giang',
    name: 'Hà Giang',
    region: 'Bắc',
    hubLevel: 'primary',
    demand7: 'TĂNG NHANH',
    shortDesc: 'Cao nguyên đá Đồng Văn — jeep loop, chợ phiên H\'Mong, Mã Pì Lèng',
    topSourceMarkets: ['au', 'us', 'uk'],
    categories: [
      {
        id: 'adventure',
        tourIds: ['ha-giang-jeep'],
        plannedTours: [
          { id: 'ha-giang-motorbike',     name: 'Motorbike loop 3D2N (easy rider)' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'ha-giang-market-tour',   name: 'Chợ phiên Mèo Vạc + Đồng Văn' },
        ],
      },
    ],
  },
  {
    id: 'sapa',
    name: 'Sapa',
    region: 'Bắc',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Ruộng bậc thang Lào Cai — trek 2N1Đ, homestay H\'Mong, Fansipan',
    topSourceMarkets: ['fr', 'de', 'au', 'uk'],
    categories: [
      {
        id: 'nature',
        tourIds: ['sapa-trek'],
        plannedTours: [
          { id: 'sapa-fansipan-cable',    name: 'Fansipan cable car + đỉnh' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'sapa-ethnic-homestay',   name: 'Homestay bản Tả Van — H\'Mong weaving' },
        ],
      },
    ],
  },
  {
    id: 'danang',
    name: 'Đà Nẵng',
    region: 'Trung',
    hubLevel: 'secondary',
    demand7: 'CAO',
    shortDesc: 'Biển Mỹ Khê + Ba Na Hills — gateway Hội An/Huế',
    topSourceMarkets: ['kr', 'in', 'us'],
    categories: [
      {
        id: 'adventure',
        tourIds: ['bana-hills'],
        plannedTours: [
          { id: 'danang-marble-mountain', name: 'Ngũ Hành Sơn + Linh Ứng' },
        ],
      },
      {
        id: 'food',
        tourIds: [],
        plannedTours: [
          { id: 'danang-seafood-tour',    name: 'Hải sản Mỹ Khê + local market' },
        ],
      },
    ],
  },
  {
    id: 'hcmc',
    name: 'TP. Hồ Chí Minh',
    region: 'Nam',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Metro ẩm thực + Vespa night, Cu Chi, đa dạng tour ngắn',
    topSourceMarkets: ['us', 'au', 'ph', 'uk'],
    categories: [
      {
        id: 'adventure',
        tourIds: ['saigon-vespa'],
        plannedTours: [
          { id: 'saigon-xe-om-food',      name: 'Xe ôm food tour quận 4 + 5' },
        ],
      },
      {
        id: 'multi-day',
        tourIds: ['ph-barkada'],
        plannedTours: [],
      },
      {
        id: 'food',
        tourIds: [],
        plannedTours: [
          { id: 'saigon-banh-mi-craft',   name: 'Bánh mì craft — 4 tiệm + history' },
          { id: 'saigon-pho-dawn',        name: 'Phở Sài Gòn sáng sớm' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'saigon-cu-chi-tunnels',  name: 'Địa đạo Củ Chi half-day' },
          { id: 'saigon-war-museum',      name: 'War Remnants Museum + Reunification Palace' },
        ],
      },
    ],
  },
  {
    id: 'mekong',
    name: 'Mekong Delta',
    region: 'Nam',
    hubLevel: 'secondary',
    demand7: 'CAO',
    shortDesc: 'Chợ nổi + đảo dừa — Tiền Giang, Bến Tre, Cái Bè',
    topSourceMarkets: ['us', 'uk', 'au'],
    categories: [
      {
        id: 'nature',
        tourIds: ['mekong-delta'],
        plannedTours: [
          { id: 'mekong-2d-homestay',     name: 'Mekong 2D1N homestay Cần Thơ' },
          { id: 'mekong-cai-rang',        name: 'Chợ nổi Cái Răng sáng sớm' },
        ],
      },
    ],
  },
  {
    id: 'phu-quoc',
    name: 'Phú Quốc',
    region: 'Nam',
    hubLevel: 'primary',
    demand7: 'CAO',
    shortDesc: 'Đảo biển Kiên Giang — snorkel 3 đảo, resort, hải sản',
    topSourceMarkets: ['kr', 'au', 'ph'],
    categories: [
      {
        id: 'nature',
        tourIds: ['phu-quoc-snorkel'],
        plannedTours: [
          { id: 'phu-quoc-squid-fishing', name: 'Câu mực đêm + night market Dinh Cậu' },
        ],
      },
      {
        id: 'wellness',
        tourIds: [],
        plannedTours: [
          { id: 'phu-quoc-spa-resort',    name: 'Spa + biển Ông Lang' },
        ],
      },
    ],
  },
  {
    id: 'ninh-binh',
    name: 'Ninh Bình',
    region: 'Bắc',
    hubLevel: 'primary',
    demand7: 'TĂNG NHANH',
    shortDesc: 'Tam Cốc + Tràng An — day trip Hà Nội, thuyền + xe đạp',
    topSourceMarkets: ['us', 'fr', 'uk', 'au'],
    categories: [
      {
        id: 'nature',
        tourIds: ['ninh-binh'],
        plannedTours: [
          { id: 'ninh-binh-hang-mua',     name: 'Hang Múa sunrise + Tam Cốc' },
        ],
      },
      {
        id: 'culture',
        tourIds: [],
        plannedTours: [
          { id: 'ninh-binh-hoa-lu',       name: 'Cố đô Hoa Lư + Bái Đính' },
        ],
      },
    ],
  },
  {
    id: 'dalat',
    name: 'Đà Lạt',
    region: 'Nam',
    hubLevel: 'secondary',
    demand7: 'TRUNG BÌNH',
    shortDesc: 'Cao nguyên mát Lâm Đồng — canyoning, cà phê, hoa',
    topSourceMarkets: ['au', 'uk', 'us'],
    categories: [
      {
        id: 'adventure',
        tourIds: ['dalat-canyon'],
        plannedTours: [],
      },
      {
        id: 'workshop',
        tourIds: [],
        plannedTours: [
          { id: 'dalat-coffee-farm',      name: 'Coffee farm tour + cupping Cầu Đất' },
        ],
      },
    ],
  },
  {
    id: 'hue',
    name: 'Huế',
    region: 'Trung',
    hubLevel: 'secondary',
    demand7: 'TRUNG BÌNH',
    shortDesc: 'Cố đô — hoàng thành, lăng tẩm, ẩm thực cung đình',
    topSourceMarkets: ['fr', 'jp'],
    categories: [
      { id: 'culture', tourIds: ['hue-imperial'], plannedTours: [] },
    ],
  },
  {
    id: 'nha-trang',
    name: 'Nha Trang',
    region: 'Trung',
    hubLevel: 'secondary',
    demand7: 'CAO',
    shortDesc: 'Biển + spa Khánh Hòa — khách Nga, Hàn, diving',
    topSourceMarkets: ['ru', 'kr'],
    categories: [
      { id: 'wellness', tourIds: ['nha-trang-spa'], plannedTours: [] },
    ],
  },
  {
    id: 'quy-nhon',
    name: 'Quy Nhơn',
    region: 'Trung',
    hubLevel: 'secondary',
    demand7: 'THẤP',
    shortDesc: 'Biển hoang sơ Bình Định — emerging destination',
    topSourceMarkets: ['au'],
    categories: [
      { id: 'nature', tourIds: ['quy-nhon'], plannedTours: [] },
    ],
  },
  {
    id: 'cat-ba',
    name: 'Cát Bà',
    region: 'Bắc',
    hubLevel: 'secondary',
    demand7: 'TRUNG BÌNH',
    shortDesc: 'Đảo lớn vịnh Lan Hạ — kayak, leo núi, alternative Hạ Long',
    topSourceMarkets: ['de', 'uk'],
    categories: [
      { id: 'adventure', tourIds: ['cat-ba'], plannedTours: [] },
    ],
  },
  {
    id: 'pu-luong',
    name: 'Pù Luông',
    region: 'Bắc',
    hubLevel: 'secondary',
    demand7: 'TRUNG BÌNH',
    shortDesc: 'Retreat núi Thanh Hóa — homestay, ruộng bậc thang ít khách',
    topSourceMarkets: ['fr', 'de'],
    categories: [
      { id: 'wellness', tourIds: ['pu-luong'], plannedTours: [] },
    ],
  },
  {
    id: 'con-dao',
    name: 'Côn Đảo',
    region: 'Nam',
    hubLevel: 'secondary',
    demand7: 'THẤP',
    shortDesc: 'Di tích lịch sử + biển hoang sơ BR-VT',
    topSourceMarkets: ['vn-diaspora'],
    categories: [
      { id: 'culture', tourIds: ['con-dao'], plannedTours: [] },
    ],
  },
];

// Enrich category objects with catalog metadata (name, icon) at load time.
const catalogMap = CATEGORY_CATALOG.reduce((acc, c) => { acc[c.id] = c; return acc; }, {});
for (const dest of destinations) {
  dest.categories = dest.categories.map((c) => ({
    ...catalogMap[c.id],
    ...c,
  }));
}

// Reverse index: tourId → { destinationId, categoryId }
export const tourDestinationIndex = (() => {
  const idx = {};
  for (const d of destinations) {
    for (const c of d.categories) {
      for (const tid of (c.tourIds || [])) {
        idx[tid] = { destinationId: d.id, categoryId: c.id };
      }
    }
  }
  return idx;
})();

export function destinationOfTour(tourId) {
  const ref = tourDestinationIndex[tourId];
  if (!ref) return null;
  return destinations.find((d) => d.id === ref.destinationId) || null;
}

// Reverse index: destinationId → groupId
const destToGroup = (() => {
  const m = {};
  for (const g of MONTH_GROUPS) for (const did of g.destinationIds) m[did] = g.id;
  return m;
})();

export function monthGroup(groupId) {
  return MONTH_GROUPS.find((g) => g.id === groupId) || null;
}

export function monthGroupOfDestination(destinationId) {
  const gid = destToGroup[destinationId];
  return gid ? monthGroup(gid) : null;
}

// All tour ids that sit in a given month-group (walks: group → destinationIds → tourIds).
export function toursInMonthGroup(groupId) {
  const g = monthGroup(groupId);
  if (!g) return [];
  const ids = [];
  for (const did of g.destinationIds) {
    const dest = destinations.find((d) => d.id === did);
    if (!dest) continue;
    for (const c of dest.categories) for (const tid of (c.tourIds || [])) ids.push(tid);
  }
  return ids;
}

export function toursInDestination(destinationId, allTours) {
  const dest = destinations.find((d) => d.id === destinationId);
  if (!dest) return [];
  const ids = new Set(dest.categories.flatMap((c) => c.tourIds || []));
  return allTours.filter((t) => ids.has(t.id));
}

export default destinations;
