// Tours tab — index + detail
import React, { useState } from 'react';
import DATA from './data.js';
import { SectionHeader, Placeholder, MarketChip, OtaChip, XLink } from './shell.jsx';
import HalongHubPage, { HalongVariantDetail } from './page_halong.jsx';
import HanoiHubPage, { HanoiProductDetail } from './page_hanoi.jsx';
import HagiangHubPage, { HagiangVariantDetail } from './page_hagiang.jsx';
import SapaHubPage, { SapaVariantDetail } from './page_sapa.jsx';
import NinhbinhHubPage, { NinhbinhVariantDetail } from './page_ninhbinh.jsx';

function ToursPage({ route, go }) {
  if (route.id === 'halong-hub') return <HalongHubPage go={go} />;
  if (route.id === 'hanoi-hub') return <HanoiHubPage go={go} />;
  if (route.id === 'hagiang-hub') return <HagiangHubPage go={go} />;
  if (route.id === 'sapa-hub') return <SapaHubPage go={go} />;
  if (route.id === 'ninhbinh-hub') return <NinhbinhHubPage go={go} />;
  if (route.id && route.id.startsWith('hn-')) return <HanoiProductDetail id={route.id} go={go} />;
  if (route.id && route.id.startsWith('hl-')) return <HalongVariantDetail id={route.id} go={go} />;
  if (route.id && route.id.startsWith('hg-')) return <HagiangVariantDetail id={route.id} go={go} />;
  if (route.id && route.id.startsWith('sp-')) return <SapaVariantDetail id={route.id} go={go} />;
  if (route.id && route.id.startsWith('nb-')) return <NinhbinhVariantDetail id={route.id} go={go} />;
  if (route.id) return <TourDetail id={route.id} go={go} />;
  return <ToursIndex go={go} />;
}

function ToursIndex({ go }) {
  const D = DATA;
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterMarket, setFilterMarket] = useState('all');
  const [sortBy, setSortBy] = useState('bookings');

  const regions = ['all', 'Bắc', 'Trung', 'Nam'];
  const markets = [
    { id: 'all', flag: '🌏', name: 'Tất cả' },
    ...D.markets.filter((m) => m.hasDetail || ['in','ph','uk'].includes(m.id)).map((m) => ({ id: m.id, flag: m.flag, name: m.name })),
  ];

  const allTours = D.tours;
  const filtered = allTours.filter((t) => {
    if (t.migratedTo) return false; // hide tours migrated into destination hubs
    if (filterRegion !== 'all' && t.region !== filterRegion) return false;
    if (filterMarket !== 'all' && !(t.markets || []).includes(filterMarket)) return false;
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'bookings') return ((b.bookings && b.bookings[7]) || 0) - ((a.bookings && a.bookings[7]) || 0);
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'price') return (a.priceLow || 0) - (b.priceLow || 0);
    return 0;
  });
  const featured = sorted.filter((t) => !t.placeholder);
  const placeholders = sorted.filter((t) => t.placeholder);

  const chipBtn = (active, onClick, children) => (
    <button onClick={onClick} style={{
      border: '1px solid ' + (active ? 'var(--ink)' : 'var(--rule)'),
      background: active ? 'var(--ink)' : 'var(--paper)',
      color: active ? 'var(--paper)' : 'var(--ink-2)',
      fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em',
      padding: '6px 12px', cursor: 'pointer', textTransform: 'uppercase',
      transition: 'all 0.12s',
    }}>{children}</button>
  );

  return (
    <div className="page-anim">
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Chương 02 · Tour</div>
          <h1 className="h-display" style={{ fontSize: 72, marginBottom: 20 }}>
            Danh mục <em style={{ color: 'var(--accent)' }}>{D.tours.length}</em> tour,<br />
            lọc theo vùng và khách.
          </h1>
          <p className="dek" style={{ maxWidth: 720 }}>
            Mỗi tour có vùng, giá, mùa, thị trường nguồn, và sàn phân phối riêng. Dùng bộ lọc để tìm tour phù hợp thị trường bạn đang push.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section thin" style={{ background: 'var(--paper-2)', paddingBlock: 20 }}>
        <div className="stage">
          <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <span className="label" style={{ marginRight: 8 }}>Vùng</span>
              {regions.map((r) => chipBtn(filterRegion === r, () => setFilterRegion(r), r === 'all' ? 'Tất cả' : r))}
            </div>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <span className="label" style={{ marginRight: 8 }}>Khách</span>
              {markets.map((m) => chipBtn(filterMarket === m.id, () => setFilterMarket(m.id), m.flag + ' ' + (m.id === 'all' ? 'Tất cả' : m.name)))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4, alignItems: 'center' }}>
              <span className="label" style={{ marginRight: 8 }}>Sắp xếp</span>
              {[['bookings','Booking T7'],['rating','Rating'],['price','Giá']].map(([k,l]) => chipBtn(sortBy===k, ()=>setSortBy(k), l))}
            </div>
          </div>
          <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
            Hiển thị {filtered.length}/{D.tours.length} tour
          </div>
        </div>
      </section>

      <section className="section">
        <div className="stage">
          {/* Destination Hubs — featured */}
          <div className="label" style={{ marginBottom: 16, color: 'var(--accent)' }}>DESTINATION HUBS · NGHIÊN CỨU ĐẦY ĐỦ</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 48 }}>

            {/* Hà Nội Hub */}
            <div style={{
              border: '2px solid var(--ink)', padding: 28, background: 'var(--paper)', cursor: 'pointer',
            }} onClick={() => go({ tab: 'tours', id: 'hanoi-hub' })}>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>HÀ NỘI · 8 SẢN PHẨM</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>Hà Nội Hub</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                $180M GMV · 8 sản phẩm tour · 4 food variants + 4 skeleton (cultural walking, egg coffee, Bát Tràng, water puppet). Top 3 đối thủ · OTA matrix · 7 trends.
              </p>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Food Walking', 'Motorbike Food', 'Cultural Walk ↗', 'Egg Coffee ↗', 'Bát Tràng ↗'].map((v) => (
                  <span key={v} style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', border: '1px solid var(--rule)', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{v}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ Vào hub</div>
            </div>

            {/* Halong Hub */}
            <div style={{
              border: '2px solid var(--ink)', padding: 28, background: 'var(--paper)', cursor: 'pointer',
            }} onClick={() => go({ tab: 'tours', id: 'halong-hub' })}>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>HẠ LONG · 6 BIẾN THỂ</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>Cruise Vịnh Hạ Long</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                $580–680M · 6 biến thể cruise · Top 3 đối thủ · OTA × thị trường · 7 pain points · Design levers theo quốc tịch.
              </p>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Day Cruise', 'Overnight 1N2D', 'Premium 2N3D', 'Lan Hạ ↑', 'Luxury', 'Seaplane ↑'].map((v) => (
                  <span key={v} style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', border: '1px solid var(--rule)', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{v}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ Vào hub</div>
            </div>

            {/* Hà Giang Hub */}
            <div style={{
              border: '2px solid var(--ink)', padding: 28, background: 'var(--paper)', cursor: 'pointer',
            }} onClick={() => go({ tab: 'tours', id: 'hagiang-hub' })}>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>HÀ GIANG · 8 SẢN PHẨM</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>Hà Giang Loop Hub</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                ~$380M · 8 SKU (Loop easyrider/self-drive/Jeep · Buckwheat photo · Lô Lô homestay · Lũng Cú). Apr 2026 safety regulation reshapes competitive map. Premium tier tailwind.
              </p>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Easyrider 3N4D', 'Self-Drive', 'Jeep ↑', 'Buckwheat ↑', 'Lô Lô ↑', 'Lũng Cú ↗'].map((v) => (
                  <span key={v} style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', border: '1px solid var(--rule)', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{v}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ Vào hub</div>
            </div>

            {/* Sa Pa Hub */}
            <div style={{
              border: '2px solid var(--ink)', padding: 28, background: 'var(--paper)', cursor: 'pointer',
            }} onClick={() => go({ tab: 'tours', id: 'sapa-hub' })}>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>SA PA · 8 SẢN PHẨM</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>Sa Pa (Lào Cai) Hub</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                ~$1.8B tỉnh · 8 SKU (Trek homestay flagship · Fansipan · Rice photo · Winter KR · Bac Ha). **KR +333% H1 2025** · Revenue premiumize +70%. Expressway 4-lane end-2026.
              </p>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Trek 2N3D', 'Fansipan', 'Rice Photo ↑', 'Premium Ta Phin ↑', 'Winter KR ↑', 'Bac Ha'].map((v) => (
                  <span key={v} style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', border: '1px solid var(--rule)', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{v}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ Vào hub</div>
            </div>

            {/* Ninh Bình Hub */}
            <div style={{
              border: '2px solid var(--ink)', padding: 28, background: 'var(--paper)', cursor: 'pointer',
            }} onClick={() => go({ tab: 'tours', id: 'ninhbinh-hub' })}>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>NINH BÌNH · 8 SẢN PHẨM</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 10 }}>Ninh Bình Hub</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                ~$400M · 8 SKU (Tràng An day flagship · 2N3D overnight ↑ · Aman luxury ↑ · Rice photo T5). Aloha 7,905 reviews 5★ moat. Admin merger 1/7/2025. **HSR KHÔNG đến NB near-term.**
              </p>
              <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {['Tràng An 1D', 'Tam Cốc 1D', '2N3D ↑', 'Aman Luxury ↑', 'Rice T5 ↑', 'Cúc Phương'].map((v) => (
                  <span key={v} style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', border: '1px solid var(--rule)', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{v}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ Vào hub</div>
            </div>

          </div>

          <SectionHeader kicker={featured.length + ' tour có dữ liệu đầy đủ'} title="Chi tiết booking + thị trường." />
          <table className="t">
            <thead>
              <tr>
                <th>Tour</th>
                <th>Vùng</th>
                <th className="num">Giá</th>
                <th className="num">Rating</th>
                <th className="num">Reviews</th>
                <th className="num">Booking T7</th>
                <th>Thị trường</th>
                <th>Sàn</th>
              </tr>
            </thead>
            <tbody>
              {featured.length === 0 && (
                <tr><td colSpan={8} style={{ padding: 24, textAlign: 'center', fontStyle: 'italic', color: 'var(--ink-3)' }}>Không có tour phù hợp bộ lọc.</td></tr>
              )}
              {featured.map((t) => (
                <tr key={t.id} className="row-click" onClick={() => go({ tab: 'tours', id: t.id })}>
                  <td>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{t.name}</div>
                    <div className="label" style={{ marginTop: 4 }}>{t.province}</div>
                  </td>
                  <td>{t.region}</td>
                  <td className="num">{t.price}</td>
                  <td className="num">{t.rating}</td>
                  <td className="num">{t.reviews.toLocaleString()}</td>
                  <td className="num">{t.bookings && t.bookings[7] ? t.bookings[7].toLocaleString() : '—'}</td>
                  <td style={{ fontSize: 16 }}>
                    {(t.markets || []).slice(0, 3).map((mid) => {
                      const m = D.markets.find((x) => x.id === mid);
                      return m ? <span key={mid} title={m.name} style={{ marginRight: 4 }}>{m.flag}</span> : null;
                    })}
                  </td>
                  <td style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--ink-3)' }}>
                    {(t.otas || []).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader kicker="Trong danh mục" title="Mười hai tour đang chờ dữ liệu." dek="Khung đã có: vùng, giá, thị trường. Chi tiết T7 sẽ bổ sung sau." />
          <div className="grid-3">
            {placeholders.map((t) => (
              <div key={t.id} className="panel" style={{ background: 'var(--paper)' }}>
                <h4 className="h-display" style={{ fontSize: 18, marginBottom: 8 }}>{t.name}</h4>
                <div className="label" style={{ marginBottom: 12 }}>{t.region} · {t.province}</div>
                <div className="kv"><span className="kv-k">Giá</span><span className="kv-v num">{t.price}</span></div>
                <div className="kv"><span className="kv-k">Khách</span><span className="kv-v">
                  {t.markets.map((mid) => {
                    const m = D.markets.find((x) => x.id === mid);
                    return m ? m.flag : mid;
                  }).join(' ')}
                </span></div>
                <div className="label" style={{ marginTop: 16, color: 'var(--ink-4)' }}>ĐANG CẬP NHẬT</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TourDetail({ id, go }) {
  const D = DATA;
  const t = D.tours.find((x) => x.id === id);
  const [activeVariant, setActiveVariant] = useState(0);
  if (!t) return <div className="stage section">Tour không tồn tại</div>;

  if (!t.hasDetail) {
    return (
      <div className="page-anim">
        <section className="section">
          <div className="stage">
            <div className="h-kicker">Tour</div>
            <h1 className="h-display" style={{ fontSize: 64, marginBottom: 20 }}>{t.name}</h1>
            <p className="dek">{t.region} · {t.province} · {t.price}</p>
            <div style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {t.markets.map((mid) => <MarketChip key={mid} id={mid} go={go} />)}
              {t.otas.map((oid) => <OtaChip key={oid} id={oid} go={go} />)}
            </div>
            <div style={{ marginTop: 48 }}>
              <Placeholder label="CHI TIẾT T7 CHƯA CÓ">
                Tour này hiện chỉ có thông tin khung. Dữ liệu chi tiết (booking, competitor, USP) sẽ được cập nhật.<br />
                Xem <a className="xlink" onClick={(e) => { e.preventDefault(); go({ tab: 'tours', id: 'ha-giang-jeep' }); }}>Hà Giang Jeep</a> làm ví dụ.
              </Placeholder>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const hasDays = t.itinerary && t.itinerary.some((s) => s.day);
  const otaMatrixCols = t.otaMatrix && t.otaMatrix.length > 0
    ? Object.keys(t.otaMatrix[0]).filter((k) => k !== 'market')
    : ['booking', 'agoda', 'gyg', 'klook', 'viator', 'direct'];
  const otaColLabels = { booking: 'Booking.com', agoda: 'Agoda', gyg: 'GetYourGuide', klook: 'Klook', viator: 'Viator', direct: 'Direct', makemytrip: 'MakeMyTrip' };

  // Derive seasonality index from bookings (100 = avg)
  const bookingsArr = DATA.months.map((m) => ({ id: m.id, short: m.short, val: (t.bookings && t.bookings[m.id]) || 0 }));
  const validBookings = bookingsArr.filter((b) => b.val > 0);
  const avgBooking = validBookings.length > 0 ? validBookings.reduce((s, b) => s + b.val, 0) / validBookings.length : 0;
  const seasonality = bookingsArr.map((b) => ({
    id: b.id, short: b.short,
    index: avgBooking > 0 && b.val > 0 ? Math.round((b.val / avgBooking) * 100) : 0,
    val: b.val,
  }));
  const peakSeason = [...seasonality].sort((a, b) => b.index - a.index)[0];
  const troughSeason = [...seasonality].filter((s) => s.index > 0).sort((a, b) => a.index - b.index)[0];
  const maxIndex = peakSeason ? peakSeason.index : 100;

  // Use topCompetitors rich format if available, else fall back to compDetail
  const competitorList = t.topCompetitors || t.compDetail;

  return (
    <div className="page-anim">

      {/* Hero */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>TOUR · {t.region.toUpperCase()}</span>
            <span className="folio">{t.province}</span>
          </div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>{t.name}</h1>
          <p className="dek" style={{ fontSize: 22 }}>{t.desc}</p>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'baseline', gap: 40 }}>
            <div>
              <div className="label">Giá niêm yết</div>
              <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 4 }}>{t.price}</div>
            </div>
            <div>
              <div className="label">Rating</div>
              <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 4 }}>
                {t.rating} <span style={{ color: 'var(--ink-3)', fontSize: 18 }}>/ 5</span>
              </div>
            </div>
            <div>
              <div className="label">Reviews</div>
              <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 4 }}>{t.reviews.toLocaleString()}</div>
            </div>
            <div>
              <div className="label">Booking T7</div>
              <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 4, color: 'var(--accent)' }}>
                {t.bookings[7].toLocaleString()}
              </div>
            </div>
          </div>

          {/* Market stat bar */}
          {t.market && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
              {[
                { label: 'GMV niche 2025', val: t.market.size, sub: 'thị trường VN' },
                { label: 'Khách/năm', val: t.market.guests, sub: 'phân khúc này' },
                { label: 'Tăng trưởng', val: t.market.growthCAGR, sub: 'CAGR 2026–2028' },
                { label: 'Số operator', val: t.market.operators, sub: 'cạnh tranh' },
                { label: 'GMV 2028F', val: t.market.gmv2028, sub: 'base case' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '20px 0', paddingRight: 24, borderRight: i < 4 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                  <div className="label" style={{ marginBottom: 8 }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>{s.val}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Seasonality chart */}
      {avgBooking > 0 && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 64 }}>
              <div>
                <div className="h-kicker">Thời vụ</div>
                <h3 className="h-display" style={{ fontSize: 28, marginBottom: 16 }}>Booking volume 12 tháng.</h3>
                <p className="body" style={{ fontSize: 14, color: 'var(--ink-3)' }}>
                  Index 100 = trung bình năm. Peak <strong>T{peakSeason && peakSeason.id}</strong> (index {peakSeason && peakSeason.index}), đáy <strong>T{troughSeason && troughSeason.id}</strong> (index {troughSeason && troughSeason.index}). Tỷ số peak/trough: <strong>{troughSeason && troughSeason.index > 0 ? (peakSeason.index / troughSeason.index).toFixed(1) + '×' : '—'}</strong>.
                </p>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, fontFamily: 'var(--sans)' }}>
                    <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent)' }} />
                    <span>Cao điểm (index ≥130)</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, fontFamily: 'var(--sans)' }}>
                    <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent-soft)' }} />
                    <span>Trung bình (100–129)</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, fontFamily: 'var(--sans)' }}>
                    <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--paper-3)' }} />
                    <span>Thấp (&lt;100)</span>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 160, borderBottom: '1px solid var(--rule)', marginBottom: 8 }}>
                  {seasonality.map((s) => {
                    const pct = maxIndex > 0 ? s.index / maxIndex : 0;
                    const bg = s.index >= 130 ? 'var(--accent)' : s.index >= 100 ? 'var(--accent-soft)' : s.index > 0 ? 'var(--paper-3)' : 'var(--paper)';
                    return (
                      <div key={s.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)' }}>{s.index > 0 ? s.index : '—'}</div>
                        <div style={{ width: '100%', height: Math.round(pct * 120) + 'px', background: bg, outline: s.id === 7 ? '2px solid var(--ink)' : 'none', outlineOffset: 2, border: s.index === 0 ? '1px dashed var(--rule)' : 'none' }} />
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  {seasonality.map((s) => (
                    <div key={s.id} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: s.id === 7 ? 'var(--ink)' : 'var(--ink-4)', fontWeight: s.id === 7 ? 500 : 400 }}>
                      {s.short}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                  Tháng T7 được highlight · Peak {peakSeason && peakSeason.short} · Đáy {troughSeason && troughSeason.short}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* USP */}
      <section className="section thin">
        <div className="stage">
          <div className="callout">
            <span className="callout-label">USP</span>
            <div className="body" style={{ fontSize: 19, fontStyle: 'italic' }}>{t.usp}</div>
          </div>
        </div>
      </section>

      {/* Vì sao T7 + Peak months */}
      <section className="section">
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <div className="h-kicker">Vì sao T7</div>
              <h3 className="h-display" style={{ fontSize: 32, marginBottom: 16 }}>{t.hotInMonth[7]}</h3>
              <p className="body" style={{ fontSize: 15, color: 'var(--ink-3)' }}>
                Đang trong <XLink to={{ tab: 'months', id: 7 }} go={go}>Tháng 7</XLink>, mùa vụ của tour này.
              </p>
            </div>
            <div>
              <div className="h-kicker">Mùa trong năm</div>
              <h4 className="h-display" style={{ fontSize: 18, marginBottom: 16 }}>Đỉnh & shoulder</h4>
              <div className="month-strip">
                {DATA.months.map((m) => {
                  const peak = t.peakMonths && t.peakMonths.includes(m.id);
                  const shoulder = t.shoulderMonths && t.shoulderMonths.includes(m.id);
                  return (
                    <div
                      key={m.id}
                      className={'month-strip-cell ' + (peak ? 'peak' : shoulder ? 'shoulder' : '') + (m.id === 7 ? ' cur' : '')}
                      style={{ cursor: m.hasData ? 'pointer' : 'default' }}
                      onClick={() => m.hasData && go({ tab: 'months', id: m.id })}
                    >
                      <div>{m.short}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 16, marginTop: 16, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--accent)', marginRight: 6, verticalAlign: 'middle' }} />Đỉnh</span>
                <span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--accent-soft)', marginRight: 6, verticalAlign: 'middle' }} />Shoulder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market share + Top OTAs */}
      {(t.marketShare || t.topOtas) && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader kicker="Thị trường & Kênh phân phối" title="Ai đang book — và qua đâu." />
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>

              {t.marketShare && (
                <div>
                  <div className="h-kicker" style={{ marginBottom: 16 }}>Thị trường nguồn</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {t.marketShare.map((m, i) => (
                      <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <span style={{ fontSize: 18 }}>{m.flag}</span>
                            <span style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{m.name}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>Peak {m.peak}</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--accent)', minWidth: 36, textAlign: 'right' }}>{m.pct}%</div>
                          </div>
                        </div>
                        <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                          <div style={{ height: '100%', width: m.pct + '%', background: 'var(--accent)', borderRadius: 2 }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>Booking T7</span>
                          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500, color: 'var(--ink-2)' }}>{m.bookings7.toLocaleString()}</span>
                        </div>
                        <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {t.topOtas && (
                <div>
                  <div className="h-kicker" style={{ marginBottom: 16 }}>Sàn OTA đứng đầu</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {t.topOtas.map((o, i) => (
                      <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                          <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{o.name}</div>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--ok)' }}>{o.share}</div>
                        </div>
                        <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                          <div style={{ height: '100%', width: o.share, background: 'var(--ok)', borderRadius: 2 }} />
                        </div>
                        <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{o.strength}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* Itinerary (hide when variants exist — each variant has own itinerary) */}
      {t.itinerary && !t.variants && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Lịch trình chi tiết" title="Từng bước trong tour." />
            {hasDays ? (
              (() => {
                const days = [...new Set(t.itinerary.map((s) => s.day))];
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {days.map((d) => (
                      <div key={d}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
                          Ngày {d}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                          {t.itinerary.filter((s) => s.day === d).map((s, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)', paddingTop: 2 }}>{s.time}</div>
                              <div style={{ fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.5, color: 'var(--ink)' }}>{s.stop}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {t.itinerary.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)', paddingTop: 2 }}>{s.time}</div>
                    <div style={{ fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.5, color: 'var(--ink)' }}>{s.stop}</div>
                  </div>
                ))}
              </div>
            )}
            {t.itineraryNote && (
              <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', lineHeight: 1.6 }}>
                ⚠ {t.itineraryNote}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Variants */}
      {t.variants && t.variants.length > 0 && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Biến thể sản phẩm"
              title={t.variants.length + ' loại — ' + t.variants.length + ' đối thủ khác nhau.'}
              dek="Nhấp vào biến thể để xem phân tích đối thủ, khoảng trống, và market mix riêng."
            />
            <div style={{ display: 'flex', gap: 4, marginBottom: 32, flexWrap: 'wrap' }}>
              {t.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVariant(i)}
                  style={{
                    border: '1px solid ' + (activeVariant === i ? 'var(--ink)' : 'var(--rule)'),
                    background: activeVariant === i ? 'var(--ink)' : 'var(--paper)',
                    color: activeVariant === i ? 'var(--paper)' : 'var(--ink-2)',
                    fontFamily: 'var(--mono)', fontSize: 11, padding: '8px 14px',
                    cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: 8,
                    transition: 'all 0.12s',
                  }}>
                  {v.name}
                  {v.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 5px', borderRadius: 2 }}>MỚI</span>}
                </button>
              ))}
            </div>

            {(() => {
              const v = t.variants[Math.min(activeVariant, t.variants.length - 1)];
              if (!v) return null;
              const vHasDays = v.itinerary && v.itinerary.some((s) => s.day);
              return (
                <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 32 }}>

                  {/* Header row */}
                  <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 40 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
                        <h3 className="h-display" style={{ fontSize: 32 }}>{v.name}</h3>
                        {v.segment && (
                          <span style={{
                            fontFamily: 'var(--mono)', fontSize: 11, padding: '4px 10px',
                            border: '1px solid var(--rule)', color: 'var(--ink-3)',
                            textTransform: 'uppercase', letterSpacing: '0.08em',
                          }}>{v.segment}</span>
                        )}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                        <div>
                          <div className="label" style={{ marginBottom: 4 }}>Giá thị trường</div>
                          <div className="num" style={{ fontSize: 22, fontFamily: 'var(--serif)', fontWeight: 500 }}>{v.price}</div>
                        </div>
                        <div>
                          <div className="label" style={{ marginBottom: 4 }}>Thị phần</div>
                          <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink-2)' }}>{v.share}</div>
                        </div>
                      </div>

                      {v.emerging && (
                        <div style={{ background: 'var(--ok)', color: 'var(--paper)', padding: '12px 16px', marginBottom: 24 }}>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', marginBottom: 6 }}>↑ ĐANG TĂNG NHANH</div>
                          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, lineHeight: 1.5 }}>{v.emergingNote}</div>
                        </div>
                      )}

                      {v.topComp && (
                        <>
                          <div className="h-kicker" style={{ marginBottom: 12 }}>Đối thủ dẫn đầu phân khúc</div>
                          <div style={{ padding: 20, border: '1px solid var(--rule)', background: 'var(--paper)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
                              <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>{v.topComp.name}</div>
                              <div className="num" style={{ fontSize: 14 }}>{v.topComp.price}</div>
                            </div>
                            <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                              {v.topComp.rating && (
                                <div>
                                  <div className="label" style={{ marginBottom: 2 }}>Rating</div>
                                  <div className="num" style={{ fontSize: 16 }}>{v.topComp.rating}</div>
                                </div>
                              )}
                              {v.topComp.reviews != null && (
                                <div>
                                  <div className="label" style={{ marginBottom: 2 }}>Reviews</div>
                                  <div className="num" style={{ fontSize: 16 }}>{v.topComp.reviews.toLocaleString()}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      {v.compStrength && (
                        <div className="callout" style={{ margin: 0 }}>
                          <span className="callout-label">Điểm mạnh của đối thủ</span>
                          {v.compStrength}
                        </div>
                      )}
                      {v.compGap && (
                        <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                          <span className="callout-label" style={{ color: 'var(--ok)' }}>Khoảng trống họ bỏ sót</span>
                          {v.compGap}
                        </div>
                      )}
                      {v.markets && (
                        <div style={{ padding: '16px 0', borderTop: '1px solid var(--rule)' }}>
                          <div className="label" style={{ marginBottom: 8 }}>Thị trường chính</div>
                          <div style={{ fontSize: 22, letterSpacing: 2 }}>{v.markets.join('  ')}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Per-variant market share + top OTAs */}
                  {(v.marketShare || v.topOtas) && (
                    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 32, marginBottom: 40 }}>
                      <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                        {v.marketShare && (
                          <div>
                            <div className="h-kicker" style={{ marginBottom: 16 }}>Thị trường nguồn — ai đang book</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                              {v.marketShare.map((m, i) => (
                                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                      <span style={{ fontSize: 18 }}>{m.flag}</span>
                                      <span style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{m.name}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                      {m.peak && <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>Peak {m.peak}</div>}
                                      <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--accent)', minWidth: 36, textAlign: 'right' }}>{m.pct}%</div>
                                    </div>
                                  </div>
                                  <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                                    <div style={{ height: '100%', width: m.pct + '%', background: 'var(--accent)', borderRadius: 2 }} />
                                  </div>
                                  {m.note && <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.note}</div>}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {v.topOtas && (
                          <div>
                            <div className="h-kicker" style={{ marginBottom: 16 }}>Sàn OTA đứng đầu — đưa lên đâu</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                              {v.topOtas.map((o, i) => (
                                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                                    <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{o.name}</div>
                                    <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--ok)' }}>{o.share}</div>
                                  </div>
                                  <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                                    <div style={{ height: '100%', width: o.share, background: 'var(--ok)', borderRadius: 2 }} />
                                  </div>
                                  {o.strength && <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{o.strength}</div>}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Per-variant itinerary */}
                  {v.itinerary && (
                    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 32 }}>
                      <div className="h-kicker" style={{ marginBottom: 16 }}>Lịch trình chi tiết</div>
                      {vHasDays ? (
                        (() => {
                          const days = [...new Set(v.itinerary.map((s) => s.day))];
                          return (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                              {days.map((d) => (
                                <div key={d}>
                                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>Ngày {d}</div>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                    {v.itinerary.filter((s) => s.day === d).map((s, i) => (
                                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                                        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)', paddingTop: 2 }}>{s.time}</div>
                                        <div style={{ fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.5, color: 'var(--ink)' }}>{s.stop}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        })()
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                          {v.itinerary.map((s, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)', paddingTop: 2 }}>{s.time}</div>
                              <div style={{ fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.5, color: 'var(--ink)' }}>{s.stop}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {v.itineraryNote && (
                        <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em', lineHeight: 1.6 }}>
                          ⚠ {v.itineraryNote}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* OTA Matrix */}
      {t.otaMatrix && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Ma trận OTA × Thị trường"
              title="Từng quốc gia book qua đâu."
              dek="5 = sàn chủ đạo · 3–4 = có dùng nhiều · 1–2 = ít dùng. Dùng bảng này để quyết định listing nào đẩy cho market nào."
            />
            <div style={{ overflowX: 'auto' }}>
              <table className="t" style={{ minWidth: 560 }}>
                <thead>
                  <tr>
                    <th>Thị trường</th>
                    {otaMatrixCols.map((col) => (
                      <th key={col} className="num" style={{ minWidth: 80 }}>{otaColLabels[col] || col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.otaMatrix.map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: 'var(--sans)', fontSize: 14, whiteSpace: 'nowrap' }}>{row.market}</td>
                      {otaMatrixCols.map((col, j) => {
                        const val = row[col] || 0;
                        return (
                          <td key={j} style={{ textAlign: 'center', padding: '12px 8px' }}>
                            <div style={{
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              width: 36, height: 36,
                              background: val >= 4 ? 'var(--accent)' : val >= 3 ? 'var(--accent-soft)' : val >= 2 ? 'var(--paper-3)' : 'var(--paper)',
                              color: val >= 4 ? 'var(--paper)' : 'var(--ink)',
                              fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
                              border: val >= 4 ? 'none' : '1px solid var(--rule)',
                            }}>
                              {val}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 16, display: 'flex', gap: 20, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em', flexWrap: 'wrap' }}>
              <span><span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent)', marginRight: 6, verticalAlign: 'middle' }} />5 — Sàn chủ đạo</span>
              <span><span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent-soft)', marginRight: 6, verticalAlign: 'middle' }} />3–4 — Có dùng nhiều</span>
              <span><span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--paper-3)', border: '1px solid var(--rule)', marginRight: 6, verticalAlign: 'middle' }} />1–2 — Ít dùng</span>
            </div>
          </div>
        </section>
      )}

      {/* Competitor detail */}
      {(competitorList || t.competitors) && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Top đối thủ cạnh tranh" title="Mạnh ở đâu, hở ở đâu." dek="Phân tích từ OTA listing scrape Q1/2026. Tập trung vào gap — đó là nơi bạn có thể chen vào." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
              {(competitorList || t.competitors).map((c, i) => {
                const strengthsArr = c.strengths || (c.compStrength ? c.compStrength.split(/;\s+/) : null);
                const gapsArr = c.gaps || (c.compGap ? c.compGap.split(/;\s+/) : null);
                const opp = c.opp || c.opportunity;
                return (
                  <div key={i} style={{ padding: '36px 0', borderBottom: '1px solid var(--rule)' }}>
                    <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 48 }}>
                      <div>
                        {c.tier && <div className="label" style={{ marginBottom: 8 }}>{c.tier}</div>}
                        <h3 className="h-display" style={{ fontSize: 26, marginBottom: 12 }}>{c.name}</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Sàn</span><span className="kv-v"><OtaChip id={c.ota} go={go} /></span></div>
                          <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Giá</span><span className="kv-v num">{c.priceRange || c.price}</span></div>
                          {c.rating != null && <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Rating</span><span className="kv-v num">{c.rating}{c.reviews != null ? ' · ' + c.reviews.toLocaleString() : ''}</span></div>}
                          {c.channelMix && <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Kênh</span><span className="kv-v" style={{ fontSize: 12 }}>{c.channelMix}</span></div>}
                        </div>
                      </div>
                      {strengthsArr ? (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                          <div>
                            <div className="h-kicker" style={{ marginBottom: 12 }}>Điểm mạnh</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {strengthsArr.map((s, j) => (
                                <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.4 }}>
                                  <span style={{ color: 'var(--ok)', flexShrink: 0, marginTop: 2 }}>+</span>
                                  <span>{s}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="h-kicker" style={{ marginBottom: 12 }}>Khoảng trống / Điểm yếu</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {gapsArr && gapsArr.map((g, j) => (
                                <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.4 }}>
                                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>–</span>
                                  <span>{g}</span>
                                </div>
                              ))}
                            </div>
                            {opp && (
                              <div style={{ marginTop: 16, padding: '12px 16px', background: 'var(--paper)', border: '1px solid var(--ink)' }}>
                                <div className="label" style={{ marginBottom: 4, color: 'var(--accent)' }}>Cơ hội cho Sondax</div>
                                <div style={{ fontSize: 13, fontFamily: 'var(--sans)', lineHeight: 1.5 }}>{opp}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink-3)', paddingTop: 8, fontStyle: 'italic' }}>{c.diff}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Pain points */}
      {t.painPoints && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Pain points từ OTA reviews 1–3★"
              title="Lý do khách cho điểm thấp — và cơ hội."
              dek="Giải quyết 3 pain đầu tiên là đủ để vào top 10% operator phân khúc này."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {t.painPoints.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '32px 1fr 120px 1fr',
                  gap: 24, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start',
                }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: p.severity >= 5 ? 'var(--accent)' : 'var(--ink-3)' }}>
                    #{i + 1}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500, marginBottom: 8 }}>{p.issue}</div>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} style={{ color: s <= p.severity ? 'var(--accent)' : 'var(--rule)', fontSize: 14 }}>★</span>
                      ))}
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginLeft: 8 }}>mức độ nghiêm trọng</span>
                    </div>
                  </div>
                  <div>
                    <div className="label" style={{ marginBottom: 4 }}>Tần suất</div>
                    <div className="num" style={{ fontSize: 18, fontFamily: 'var(--serif)', fontWeight: 500, color: 'var(--accent)' }}>{p.freq}</div>
                  </div>
                  {(() => {
                    const pos = p.positioning || (t.painPointPositioning && t.painPointPositioning[i]);
                    return (
                      <div className="callout" style={{ margin: 0 }}>
                        <span className="callout-label" style={{ color: 'var(--ok)' }}>Cơ hội cải thiện</span>
                        <div style={{ fontStyle: 'normal', marginBottom: pos ? 8 : 0 }}>{p.opportunity}</div>
                        {pos && (
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>
                            "{pos}"
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design levers */}
      {t.designLevers && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker="Design levers theo thị trường"
              title="Thay đổi gì để pull từng market."
              dek="Áp dụng theo thị trường — thay đổi nhỏ trong listing có thể tạo chênh lệch 15–30% conversion."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
              {t.designLevers.map((d, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 180px', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>{d.market}</div>
                  <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink)', lineHeight: 1.6 }}>{d.lever}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="label" style={{ marginBottom: 4 }}>Tác động</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ok)', fontWeight: 500, lineHeight: 1.5 }}>{d.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trends */}
      {t.trends && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Xu hướng định hình 2026–2028"
              title="Ai đầu tư sớm, ai bị bỏ lại."
              dek="Xu hướng đặc thù cho phân khúc tour này — dùng để prioritize roadmap và budget."
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
              {t.trends.map((tr, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '280px 80px 100px 1fr', gap: 32, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>{tr.name}</div>
                  <div style={{ fontSize: 14, letterSpacing: 1, color: 'var(--accent)' }}>
                    {typeof tr.stars === 'number' ? '★'.repeat(tr.stars) + '☆'.repeat(5 - tr.stars) : tr.stars}
                  </div>
                  <div>
                    <div className="label" style={{ marginBottom: 4 }}>Đỉnh</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{tr.peak}</div>
                  </div>
                  <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink-2)', lineHeight: 1.55 }}>{tr.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

export default ToursPage;
