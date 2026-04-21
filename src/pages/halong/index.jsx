// Hạ Long Hub — slim overview hub + per-variant detail page (mirrors page_hanoi.jsx template)
import React from 'react';
import { halongHub } from '../../data/hub-halong.js';
import { SectionHeader } from '../../components/ui/index.js';
import { SubVariantsSection, SondaxPlaybookSection } from '../hanoi/index.jsx';

function HalongHubPage({ go }) {
  const H = halongHub;
  const peakMonth = [...H.seasonality].sort((a, b) => b.index - a.index)[0];
  const troughMonth = [...H.seasonality].sort((a, b) => a.index - b.index)[0];
  const maxSeasonIdx = peakMonth.index;
  const flagship = H.variants.find((x) => x.isFlagship);

  return (
    <div className="page-anim">

      {/* Hero */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>DESTINATION HUB · HẠ LONG</span>
            <span className="folio">Cập nhật 04/2026</span>
          </div>
          <div className="h-kicker">Vịnh Hạ Long + Lan Hạ — Portfolio 8 loại sản phẩm cruise</div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>
            Thị trường<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>{H.market.bookingVolumeTotalEst}.</em>
          </h1>
          <p className="dek" style={{ fontSize: 22, maxWidth: 760 }}>
            Tour-addressable market (est 18-22% của $2.19B total tourism Quảng Ninh). 21.28M khách tỉnh · 4.5M foreign (21.1%) · Hạ Long Bay riêng 3.5M. Cruise segment GMV $580-680M — đầu 2026 foreign-dominant 10:1. Post-Yagi fleet turnover + Lan Hạ UNESCO 2023.
          </p>

          {/* Market stat bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Booking/năm', val: H.market.bookingVolumeTotalEst, sub: 'tổng các variant · Halong' },
              { label: 'Booking rate', val: H.market.bookingRate, sub: 'bay visitors → overnight booking' },
              { label: 'Tăng trưởng', val: H.market.growthCAGR, sub: 'CAGR 2026–2028' },
              { label: 'Số operator', val: H.market.operators, sub: 'chủ tàu' },
              { label: 'Tour market', val: H.market.tourMarket2025, sub: 'GMV addressable 2025' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 0', paddingRight: 24, borderRight: i < 4 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonality */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Thời vụ</div>
              <h3 className="h-display" style={{ fontSize: 28, marginBottom: 16 }}>Occupancy index 12 tháng.</h3>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-3)' }}>
                100 = trung bình. Peak <strong>{peakMonth.short} ({peakMonth.index})</strong>, đáy <strong>{troughMonth.short} ({troughMonth.index})</strong>. Tỷ số peak/trough <strong>{(peakMonth.index / troughMonth.index).toFixed(1)}×</strong>.
              </p>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent)' }} />
                  <span>Cao điểm (≥130)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent-soft)' }} />
                  <span>Trung bình (100–129)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--paper-3)' }} />
                  <span>Thấp (&lt;100)</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 160, borderBottom: '1px solid var(--rule)', marginBottom: 8 }}>
                {H.seasonality.map((s) => {
                  const pct = s.index / maxSeasonIdx;
                  const bg = s.index >= 130 ? 'var(--accent)' : s.index >= 100 ? 'var(--accent-soft)' : 'var(--paper-3)';
                  return (
                    <div key={s.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)' }}>{s.index}</div>
                      <div style={{ width: '100%', height: Math.round(pct * 120) + 'px', background: bg }} />
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {H.seasonality.map((s) => (
                  <div key={s.id} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-4)' }}>{s.short}</div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>
                Peak Thu–Đông (T10–T12 · Western NY). Storm T7–T9 cancel 8–15%. KR đảo chiều T6–T8.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview: Top markets + Top OTAs */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Tổng quan thị trường" title="Ai đến Hạ Long — và book qua đâu." dek="Tổng hợp toàn bộ market Hạ Long cruise. Chi tiết từng sản phẩm bên dưới." />
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
            <div>
              <div className="h-kicker" style={{ marginBottom: 20 }}>Top thị trường nguồn</div>
              {H.topMarkets.map((m, i) => (
                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{m.flag}</span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{m.name}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 500, color: 'var(--accent)' }}>{m.pct}%</div>
                  </div>
                  <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                    <div style={{ height: '100%', width: m.pct + '%', background: 'var(--accent)', borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.note}</div>
                </div>
              ))}
            </div>
            <div>
              <div className="h-kicker" style={{ marginBottom: 20 }}>Top sàn OTA</div>
              {H.topOtas.map((o, i) => (
                <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{o.name}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 500, color: 'var(--ok)' }}>{o.pct}%</div>
                  </div>
                  <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                    <div style={{ height: '100%', width: o.pct + '%', background: 'var(--ok)', borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>{o.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship — #1 product (Overnight 1N2D) */}
      {flagship && (
        <section className="section" style={{ background: 'var(--paper-3)' }}>
          <div className="stage">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
              <span className="folio" style={{ color: 'var(--accent)' }}>SẢN PHẨM DẪN ĐẦU HẠ LONG</span>
              <span className="folio" style={{ color: 'var(--ink-3)' }}>#1 TRONG 8 LOẠI</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1.3fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div className="h-kicker" style={{ marginBottom: 8 }}>{flagship.segment} · {flagship.price}</div>
                <h2 className="h-display" style={{ fontSize: 44, lineHeight: 1.05, marginBottom: 16 }}>{flagship.name}</h2>
                <p className="body" style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 20, lineHeight: 1.55 }}>
                  Tier lớn nhất về revenue. 3 operator top Bhaya (6.8k reviews · 4.9★) + Indochina Junk (7.9k · 4.8★) + Paradise (~8.9k · 4.8★) tích lũy 23k+ reviews — demand + pricing trưởng thành. Sondax vào bằng curation, không phải bằng scale.
                </p>
                <button
                  onClick={() => go({ tab: 'tours', id: flagship.id })}
                  style={{
                    fontFamily: 'var(--mono)', fontSize: 11, padding: '10px 18px',
                    background: 'var(--ink)', color: 'var(--paper)', border: 'none',
                    cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                  Xem chi tiết sản phẩm này →
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderLeft: '1px solid var(--rule)' }}>
                {[
                  { label: 'Traffic', val: flagship.traffic, sub: flagship.trafficNote || '#1 Halong' },
                  { label: 'Giá thị trường', val: flagship.price, sub: 'mid tier' },
                  { label: 'Thị phần GMV', val: '35–40%', sub: 'trong 8 loại sản phẩm' },
                  { label: 'Đà tăng', val: flagship.growth, sub: 'YoY 2024→2025', highlight: true },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderBottom: i < 2 ? '1px solid var(--rule)' : 'none', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none' }}>
                    <div className="label" style={{ marginBottom: 6 }}>{s.label}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', color: s.highlight ? 'var(--ok)' : 'var(--ink)' }}>{s.val}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8 loại sản phẩm — primary product list với Entry cost + TTM */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="8 loại sản phẩm Hạ Long"
            title="Loại nào hot, Lan Hạ 2 SKU mới."
            dek="Traffic booking/năm + đà tăng + entry cost + time-to-market. Bấm tên sản phẩm để mở trang chi tiết."
          />
          {(() => {
            const maxTraffic = Math.max(...H.variants.map((x) => x.trafficNum || 0));
            const rows = [...H.variants]
              .map((x, idx) => ({ ...x, _origIdx: idx, _growthNum: parseInt((x.growth || '0').replace(/[^0-9-]/g, '')) || 0 }))
              .sort((a, b) => (b.deprecated ? -1 : 0) - (a.deprecated ? -1 : 0) || b.trafficNum - a.trafficNum);
            return (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '36px 1.4fr 150px 90px 110px 120px 0.9fr', gap: 18, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
                  <div className="label">#</div>
                  <div className="label">Sản phẩm</div>
                  <div className="label">Booking/năm</div>
                  <div className="label">Đà tăng</div>
                  <div className="label">Thị phần</div>
                  <div className="label">Time-to-mkt</div>
                  <div className="label">Ghi chú</div>
                </div>
                {rows.map((t, i) => {
                  const up = t.growth && t.growth.startsWith('+');
                  const flat = t.growth === 'Stable' || t.growth === 'New launch';
                  const down = t.growth && t.growth.startsWith('-');
                  const trafficPct = t.trafficNum ? (t.trafficNum / maxTraffic) * 100 : 0;
                  return (
                    <div key={t.id} style={{ display: 'grid', gridTemplateColumns: '36px 1.4fr 150px 90px 110px 120px 0.9fr', gap: 18, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'center', opacity: t.deprecated ? 0.55 : 1 }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>#{i + 1}</div>
                      <div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                          {t.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP</span>}
                          {t.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SONDAX NEW SKU</span>}
                          {t.deprecated && <span style={{ background: 'var(--ink-3)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>DEPRECATED</span>}
                        </div>
                        <button
                          onClick={() => go({ tab: 'tours', id: t.id })}
                          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, color: 'var(--ink)', textAlign: 'left', textDecoration: 'underline', textDecorationColor: 'var(--rule)', textUnderlineOffset: 4, lineHeight: 1.25 }}>
                          {t.name} →
                        </button>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {t.segment} · {t.price}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{t.traffic || '—'}</div>
                        <div style={{ height: 3, background: 'var(--rule)' }}>
                          <div style={{ height: '100%', width: trafficPct + '%', background: 'var(--accent)' }} />
                        </div>
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: up ? 'var(--ok)' : down ? 'var(--accent)' : flat ? 'var(--ink-3)' : 'var(--accent)' }}>
                        {up && '↑ '}{flat && '→ '}{down && '↓ '}{t.growth || '—'}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500 }}>
                        {t.share || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                        {t.timeToMarket || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                        {t.deprecated
                          ? 'Hai Au Aviation ceased 2026-04-01. Tier legacy — no active booking.'
                          : t.emergingNote
                            ? t.emergingNote
                            : t.isFlagship
                              ? 'Flagship — Sondax curation (Bhaya/Indochina/Paradise). Lan Hạ-first routing.'
                              : t._growthNum >= 30
                                ? 'UNESCO 2023 halo. Cửa sổ 12–18 tháng trước khi operator consolidate.'
                                : t._growthNum >= 15
                                  ? 'Đà tăng ổn định. Market đủ lớn entry nếu có differentiation.'
                                  : 'Đà tăng chậm hoặc luxury niche. Không ưu tiên phase 1.'}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* OTA × Market matrix */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Ma trận OTA × Thị trường" title="Từng quốc gia book qua đâu." dek="5 = sàn chủ đạo · 3 = có dùng · 1 = ít dùng." />
          <div style={{ overflowX: 'auto' }}>
            <table className="t" style={{ minWidth: 600 }}>
              <thead>
                <tr>
                  <th>Thị trường</th>
                  {['Booking', 'Agoda', 'GYG', 'Klook', 'Viator', 'Direct'].map((ota) => (
                    <th key={ota} className="num" style={{ minWidth: 80 }}>{ota}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {H.otaByMarket.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontSize: 14, whiteSpace: 'nowrap' }}>{row.market}</td>
                    {[row.booking, row.agoda, row.gyg, row.klook, row.viator, row.direct].map((val, j) => (
                      <td key={j} style={{ textAlign: 'center', padding: '12px 8px' }}>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: 36, height: 36,
                          background: val >= 4 ? 'var(--accent)' : val >= 3 ? 'var(--accent-soft)' : val >= 2 ? 'var(--paper-3)' : 'var(--paper)',
                          color: val >= 4 ? 'var(--paper)' : 'var(--ink)',
                          fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
                          border: val >= 4 ? 'none' : '1px solid var(--rule)',
                        }}>{val}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>HALONG-HUB · DESTINATION HUB · PHÂN TÍCH THỊ TRƯỜNG</div>
            <div>NGUỒN: VNAT · TRIPADVISOR · VIATOR SCRAPE · OPERATOR INTERVIEWS Q1/2026</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// HalongVariantDetail — per-variant detail page (mirror HanoiProductDetail)
// ═════════════════════════════════════════════════════════════════════════════

function HalongVariantDetail({ id, go }) {
  const H = halongHub;
  const v = H.variants.find((x) => x.id === id);
  if (!v) return (
    <div className="page-anim">
      <section className="section"><div className="stage">
        <h2 className="h-display">Không tìm thấy sản phẩm.</h2>
        <button onClick={() => go({ tab: 'tours', id: 'halong-hub' })} style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, padding: '10px 18px', background: 'var(--ink)', color: 'var(--paper)', border: 'none', cursor: 'pointer' }}>← Về Hạ Long Hub</button>
      </div></section>
    </div>
  );
  const vHasDays = v.itinerary && v.itinerary.some((s) => s.day);
  const up = v.growth && v.growth.startsWith('+');

  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section" style={{ paddingBlock: '48px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {v.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP HẠ LONG</span>}
            {v.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SONDAX NEW SKU</span>}
            {v.deprecated && <span style={{ background: 'var(--ink-3)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>DEPRECATED · Hai Au ceased 2026-04</span>}
          </div>
          <div className="h-kicker">{v.segment}</div>
          <h1 className="h-display" style={{ fontSize: 64, lineHeight: 1.05, marginBottom: 20 }}>{v.name}</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, marginTop: 32, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Traffic', val: v.traffic || '—', sub: v.trafficNote || 'booking/năm' },
              { label: 'Giá thị trường', val: v.price, sub: v.segment },
              { label: 'Entry cost', val: v.entryCost || '—', sub: 'upfront build' },
              { label: 'Đà tăng', val: v.growth || '—', sub: 'YoY', highlight: up },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 0', paddingRight: 24, borderRight: i < 3 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', color: s.highlight ? 'var(--ok)' : 'var(--ink)', marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Compact overview pills (if flagship-rolled-up available) */}
          {(v.productTopMarkets || v.productTopOtas) && (
            <div style={{ marginTop: 24, display: 'flex', gap: 32, flexWrap: 'wrap', paddingTop: 24, borderTop: '1px solid var(--rule)' }}>
              {v.productTopMarkets && (
                <div style={{ flex: '1 1 320px' }}>
                  <div className="label" style={{ marginBottom: 10 }}>Top khách · toàn sản phẩm</div>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    {v.productTopMarkets.slice(0, 5).map((m, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 13 }}>
                        <span style={{ fontSize: 16 }}>{m.flag}</span>
                        <span style={{ color: 'var(--ink-2)' }}>{m.name}</span>
                        <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{m.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {v.productTopOtas && (
                <div style={{ flex: '1 1 320px' }}>
                  <div className="label" style={{ marginBottom: 10 }}>Top OTA · toàn sản phẩm</div>
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                    {v.productTopOtas.slice(0, 5).map((o, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 13 }}>
                        <span style={{ color: 'var(--ink-2)' }}>{o.name}</span>
                        <span style={{ color: 'var(--ok)', fontWeight: 500 }}>{o.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Deprecated placeholder */}
      {v.deprecated && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <div style={{ padding: '28px 32px', border: '1px solid var(--ink-3)', background: 'var(--paper-3)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', marginBottom: 10, color: 'var(--ink-3)' }}>⚠ TIER DEPRECATED</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Hai Au Aviation — sole seaplane operator Halong — ceased operations 2026-04-01. Tier kept for historical reference. Re-enters only if new operator takes over route. Tracking: Q3 2026 review.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Thời vụ — Halong-style seasonality (flagship only) */}
      {v.seasonality && (() => {
        const peakM = [...v.seasonality].sort((a, b) => b.index - a.index)[0];
        const troughM = [...v.seasonality].sort((a, b) => a.index - b.index)[0];
        const maxIdx = peakM.index;
        const peakId = v.seasonalityPeakId || peakM.id;
        return (
          <section className="section" style={{ background: 'var(--paper-2)' }}>
            <div className="stage">
              <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 64 }}>
                <div>
                  <div className="h-kicker">Thời vụ sản phẩm</div>
                  <h3 className="h-display" style={{ fontSize: 28, marginBottom: 16 }}>Occupancy index 12 tháng.</h3>
                  <p className="body" style={{ fontSize: 14, color: 'var(--ink-3)' }}>
                    100 = trung bình năm. Peak <strong>{peakM.short} ({peakM.index})</strong>, đáy <strong>{troughM.short} ({troughM.index})</strong>. Tỷ số peak/trough <strong>{(peakM.index / troughM.index).toFixed(1)}×</strong>.
                  </p>
                  <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                      <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent)' }} />
                      <span>Cao điểm (≥130)</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                      <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent-soft)' }} />
                      <span>Trung bình (100–129)</span>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                      <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--paper-3)' }} />
                      <span>Thấp (&lt;100)</span>
                    </div>
                  </div>
                  {v.seasonalityNote && (
                    <div className="callout" style={{ marginTop: 24, marginBottom: 0, borderLeftColor: 'var(--accent)' }}>
                      <span className="callout-label" style={{ color: 'var(--accent)' }}>Action</span>
                      {v.seasonalityNote}
                    </div>
                  )}
                </div>
                <div>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 160, borderBottom: '1px solid var(--rule)', marginBottom: 8 }}>
                    {v.seasonality.map((s) => {
                      const pct = s.index / maxIdx;
                      const bg = s.index >= 130 ? 'var(--accent)' : s.index >= 100 ? 'var(--accent-soft)' : 'var(--paper-3)';
                      const isPeak = s.id === peakId;
                      return (
                        <div key={s.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)' }}>{s.index}</div>
                          <div style={{ width: '100%', height: Math.round(pct * 120) + 'px', background: bg, outline: isPeak ? '2px solid var(--ink)' : 'none', outlineOffset: 2 }} />
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {v.seasonality.map((s) => {
                      const isPeak = s.id === peakId;
                      return (
                        <div key={s.id} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: isPeak ? 'var(--ink)' : 'var(--ink-4)', fontWeight: isPeak ? 500 : 400 }}>{s.short}</div>
                      );
                    })}
                  </div>
                  {v.seasonalityFootnote && (
                    <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.06em' }}>
                      {v.seasonalityFootnote}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Historical trend (flagship only) */}
      {v.history && (() => {
        const forecast = v.historyForecast || [];
        const all = [...v.history, ...forecast];
        const maxBook = Math.max(...all.map((x) => x.bookings));
        return (
          <section className="section">
            <div className="stage">
              <SectionHeader
                kicker="Xu hướng sản phẩm qua các năm"
                title={`Đà tăng trưởng ${v.history[0].year} → ${all[all.length - 1].year}F.`}
                dek="Bookings/năm + driver từng năm. Cột đậm = actual, cột đứt = forecast."
              />
              {v.whyHot && (
                <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 24, paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--rule)' }}>
                  <div className="h-kicker" style={{ marginBottom: 12 }}>Vì sao sản phẩm này đang hot — 4 drivers hiện tại</div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
                    {v.whyHot.map((w, i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, alignItems: 'start' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)', fontWeight: 500 }}>#{i + 1}</div>
                        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{w}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ borderTop: v.whyHot ? 'none' : '2px solid var(--ink)', paddingTop: v.whyHot ? 0 : 32 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', height: 200, borderBottom: '1px solid var(--rule)', marginBottom: 12, paddingInline: 20 }}>
                  {all.map((y, i) => {
                    const pct = y.bookings / maxBook;
                    const isForecast = i >= v.history.length;
                    return (
                      <div key={y.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500 }}>
                          {(y.bookings / 1000).toFixed(0)}K
                        </div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: y.growth && y.growth.startsWith('+') ? (isForecast ? 'var(--ink-3)' : 'var(--ok)') : y.growth && y.growth.startsWith('-') ? 'var(--accent)' : 'var(--ink-4)', fontWeight: 500, minHeight: 14 }}>
                          {y.growth || '—'}
                        </div>
                        <div style={{
                          width: '100%',
                          height: Math.round(pct * 140) + 'px',
                          background: isForecast ? 'var(--paper-3)' : 'var(--accent)',
                          border: isForecast ? '2px dashed var(--accent)' : 'none',
                        }} />
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', gap: 16, marginBottom: 32, paddingInline: 20 }}>
                  {all.map((y, i) => {
                    const isForecast = i >= v.history.length;
                    return (
                      <div key={y.year} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500, color: isForecast ? 'var(--ink-3)' : 'var(--ink)' }}>
                        {y.year}{isForecast ? 'F' : ''}
                      </div>
                    );
                  })}
                </div>

                <div className="h-kicker" style={{ marginBottom: 16 }}>Driver từng năm</div>
                <div style={{ borderTop: '1px solid var(--rule)' }}>
                  {all.map((y, i) => {
                    const isForecast = i >= v.history.length;
                    return (
                      <div key={y.year} style={{ display: 'grid', gridTemplateColumns: '80px 130px 1fr', gap: 20, padding: '16px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 14, fontWeight: 500, color: isForecast ? 'var(--ink-3)' : 'var(--ink)' }}>
                          {y.year}{isForecast ? 'F' : ''}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 500 }}>{(y.bookings / 1000).toFixed(0)}K booking</div>
                          {y.growth && <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: isForecast ? 'var(--ink-3)' : (y.growth.startsWith('-') ? 'var(--accent)' : 'var(--ok)'), fontWeight: 500, marginTop: 2 }}>{y.growth}</div>}
                        </div>
                        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{y.driver}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Trends 2026-2028 */}
      {v.trends && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker={`${v.trends.length} xu hướng định hình 2026–2028`}
              title="Sau đường forecast — cái nào đi sớm thì thắng."
              dek="Xu hướng macro thị trường cho phân khúc này. Bổ sung cho forecast ở trên."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {v.trends.map((t, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '300px 90px 140px 1fr', gap: 28, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: 14, letterSpacing: 1, color: 'var(--accent)' }}>{t.stars}</div>
                  <div>
                    <div className="label" style={{ marginBottom: 4 }}>Đỉnh</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{t.peak}</div>
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{t.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Biến thể sản phẩm (sub-variants) */}
      {v.subVariants && <SubVariantsSection subVariants={v.subVariants} />}

      {/* Fallback: itinerary + market + OTA at product level (non-flagship variants) */}
      {!v.subVariants && v.itinerary && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader kicker="Lịch trình chi tiết" title="Stop-by-stop sản phẩm này." />
            <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
              {vHasDays ? (
                (() => {
                  const days = [...new Set(v.itinerary.map((s) => s.day))];
                  return days.map((d) => (
                    <div key={d} style={{ marginBottom: 24 }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>Ngày {d}</div>
                      {v.itinerary.filter((s) => s.day === d).map((s, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)' }}>{s.time}</div>
                          <div style={{ fontSize: 14, lineHeight: 1.5 }}>{s.stop}</div>
                        </div>
                      ))}
                    </div>
                  ));
                })()
              ) : (
                v.itinerary.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)' }}>{s.time}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5 }}>{s.stop}</div>
                  </div>
                ))
              )}
              {v.itineraryNote && (
                <div style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  ⚠ {v.itineraryNote}
                </div>
              )}
            </div>

            {(v.marketShare || v.topOtas) && (
              <div style={{ marginTop: 40, borderTop: '1px solid var(--rule)', paddingTop: 24 }}>
                <div className="h-kicker" style={{ marginBottom: 16 }}>Thị trường + OTA sản phẩm này</div>
                <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                  {v.marketShare && (
                    <div>
                      <div className="label" style={{ marginBottom: 12 }}>Thị trường nguồn</div>
                      {v.marketShare.map((m, i) => (
                        <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span style={{ fontSize: 17 }}>{m.flag}</span>
                              <span style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 500 }}>{m.name}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)' }}>Peak {m.peak}</div>
                              <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 500, color: 'var(--accent)' }}>{m.pct}%</div>
                            </div>
                          </div>
                          <div style={{ height: 3, background: 'var(--rule)', marginBottom: 6 }}>
                            <div style={{ height: '100%', width: m.pct + '%', background: 'var(--accent)' }} />
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{m.note}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {v.topOtas && (
                    <div>
                      <div className="label" style={{ marginBottom: 12 }}>OTA đứng đầu</div>
                      {v.topOtas.map((o, i) => (
                        <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                            <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 500 }}>{o.name}</div>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 500, color: 'var(--ok)' }}>{o.share}</div>
                          </div>
                          <div style={{ height: 3, background: 'var(--rule)', marginBottom: 6 }}>
                            <div style={{ height: '100%', width: o.share, background: 'var(--ok)' }} />
                          </div>
                          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{o.strength}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Top 3 đối thủ cạnh tranh */}
      {v.topCompetitors && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker={`Top ${v.topCompetitors.length} đối thủ cạnh tranh`}
              title="Ai đang chạy sản phẩm này — mạnh ở đâu, hở ở đâu."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {v.topCompetitors.map((c, i) => (
                <div key={i} style={{ padding: '36px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 48 }}>
                    <div>
                      <div className="label" style={{ marginBottom: 8 }}>{c.tier}</div>
                      <h3 className="h-display" style={{ fontSize: 26, marginBottom: 12 }}>{c.name}</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Quy mô</span><span className="kv-v" style={{ fontSize: 12 }}>{c.ships}</span></div>
                        <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Giá</span><span className="kv-v num">{c.priceRange}</span></div>
                        <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Rating</span><span className="kv-v num">{c.rating} · {c.reviews}</span></div>
                        <div className="kv" style={{ padding: '6px 0' }}><span className="kv-k">Kênh</span><span className="kv-v" style={{ fontSize: 12 }}>{c.channelMix}</span></div>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div>
                        <div className="h-kicker" style={{ marginBottom: 12 }}>Điểm mạnh</div>
                        {c.strengths.map((s, j) => (
                          <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.45, marginBottom: 8 }}>
                            <span style={{ color: 'var(--ok)', flexShrink: 0 }}>+</span>
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="h-kicker" style={{ marginBottom: 12 }}>Khoảng trống</div>
                        {c.gaps.map((g, j) => (
                          <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.45, marginBottom: 8 }}>
                            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>–</span>
                            <span>{g}</span>
                          </div>
                        ))}
                        <div style={{ marginTop: 16, padding: '14px 16px', background: 'var(--paper-2)', border: '1px solid var(--ink)' }}>
                          <div className="label" style={{ marginBottom: 4, color: 'var(--accent)' }}>Cơ hội cho Sondax</div>
                          <div style={{ fontSize: 13, lineHeight: 1.55 }}>{c.opp}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pain points + Voice of customer (merged) */}
      {(v.painPoints || v.reviewSnippets) && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Pain points + Voice of customer"
              title={v.painPoints ? `${v.painPoints.length} lý do khách 1–3★ + quote thực tế.` : 'Khách nói gì về sản phẩm này.'}
              dek="Mined từ TripAdvisor + Viator 2024–2025. Mỗi pain → một cơ hội differentiation + quote hỗ trợ."
            />

            {v.painPoints && (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                {v.painPoints.map((p, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 100px 80px 1.2fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: p.sev >= 5 ? 'var(--accent)' : 'var(--ink-3)' }}>#{i + 1}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500, lineHeight: 1.4, marginBottom: 6 }}>{p.pain}</div>
                      <div style={{ display: 'flex', gap: 3 }}>
                        {[1,2,3,4,5].map((s) => (
                          <span key={s} style={{ color: s <= p.sev ? 'var(--accent)' : 'var(--rule)', fontSize: 12 }}>★</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="label" style={{ marginBottom: 2 }}>Tần suất</div>
                      <div className="num" style={{ fontSize: 16, color: 'var(--accent)' }}>{p.freq}</div>
                    </div>
                    <div>
                      <div className="label" style={{ marginBottom: 2 }}>Độ nặng</div>
                      <div className="num" style={{ fontSize: 16, color: p.sev >= 5 ? 'var(--accent)' : 'var(--ink-2)' }}>{p.sev}/5</div>
                    </div>
                    <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                      <span className="callout-label" style={{ color: 'var(--ok)' }}>Cơ hội Sondax</span>
                      {p.opp}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Verbatim reviews — inline VOC */}
            {v.reviewSnippets && (
              <div style={{ marginTop: 40, paddingTop: 32, borderTop: '2px solid var(--ink)' }}>
                <div className="h-kicker" style={{ marginBottom: 16 }}>Quote khách thật — hỗ trợ pain points phía trên</div>
                <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                  <div>
                    <div className="h-kicker" style={{ color: 'var(--accent)', marginBottom: 12 }}>★ 1–3 · Pain driver</div>
                    {v.reviewSnippets.low.map((r, i) => (
                      <div key={i} style={{ marginBottom: 14, padding: '14px 18px', background: 'var(--paper)', borderLeft: '3px solid var(--accent)' }}>
                        <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
                          {[1,2,3,4,5].map((s) => (
                            <span key={s} style={{ color: s <= r.star ? 'var(--accent)' : 'var(--rule)', fontSize: 11 }}>★</span>
                          ))}
                        </div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', lineHeight: 1.55, color: 'var(--ink)', marginBottom: 8 }}>"{r.quote}"</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.source}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="h-kicker" style={{ color: 'var(--ok)', marginBottom: 12 }}>★ 4–5 · What to preserve</div>
                    {v.reviewSnippets.high.map((r, i) => (
                      <div key={i} style={{ marginBottom: 14, padding: '14px 18px', background: 'var(--paper)', borderLeft: '3px solid var(--ok)' }}>
                        <div style={{ display: 'flex', gap: 2, marginBottom: 6 }}>
                          {[1,2,3,4,5].map((s) => (
                            <span key={s} style={{ color: s <= r.star ? 'var(--ok)' : 'var(--rule)', fontSize: 11 }}>★</span>
                          ))}
                        </div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic', lineHeight: 1.55, color: 'var(--ink)', marginBottom: 8 }}>"{r.quote}"</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.source}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Sondax Playbook — unified */}
      {(v.sondaxPlay || v.designLevers || v.userJourney) && <SondaxPlaybookSection v={v} />}

      {/* Risk factors */}
      {v.riskFactors && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker={`${v.riskFactors.length} rủi ro chính`}
              title="Điều gì có thể làm sản phẩm này flop."
              dek="Downside scenario + likelihood + mitigation."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {v.riskFactors.map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '36px 1fr 80px 1fr 1fr', gap: 20, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: r.severity >= 4 ? 'var(--accent)' : 'var(--ink-3)' }}>#{i + 1}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500, lineHeight: 1.35, marginBottom: 6 }}>{r.risk}</div>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} style={{ color: s <= r.severity ? 'var(--accent)' : 'var(--rule)', fontSize: 12 }}>●</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="label" style={{ marginBottom: 2 }}>Severity</div>
                    <div className="num" style={{ fontSize: 15, color: r.severity >= 4 ? 'var(--accent)' : 'var(--ink-2)' }}>{r.severity}/5</div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                    <div className="label" style={{ marginBottom: 4 }}>Likelihood</div>
                    {r.likelihood}
                  </div>
                  <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                    <span className="callout-label" style={{ color: 'var(--ok)' }}>Mitigation</span>
                    {r.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to hub */}
      <section className="section">
        <div className="stage">
          <button
            onClick={() => go({ tab: 'tours', id: 'halong-hub' })}
            style={{
              fontFamily: 'var(--mono)', fontSize: 11, padding: '12px 20px',
              background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--ink)',
              cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
            ← Quay lại Hạ Long Hub
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>HALONG-HUB · {v.id.toUpperCase()} · PHÂN TÍCH SẢN PHẨM</div>
            <div>NGUỒN: VNAT · TRIPADVISOR · VIATOR SCRAPE Q1/2026 · OPERATOR SITES</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HalongPage({ id, go, variant }) {
  if (variant && id) return <HalongVariantDetail id={id} go={go} />;
  return <HalongHubPage go={go} />;
}
export default HalongPage;
export { HalongVariantDetail };
