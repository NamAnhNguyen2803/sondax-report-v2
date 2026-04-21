// Hà Nội Hub — destination-level hub page + per-product detail
import React, { useState } from 'react';
import { hanoiHub } from '../../data/hub-hanoi.js';
import { SectionHeader } from '../../components/ui/index.js';

function SubVariantsSection({ subVariants }) {
  const [active, setActive] = useState(0);
  const sv = subVariants[active];
  return (
    <section className="section" style={{ background: 'var(--paper-3)' }}>
      <div className="stage">
        <SectionHeader
          kicker={`${subVariants.length} biến thể sản phẩm`}
          title="Cùng chủ đề, khác audience — mỗi biến thể một segment."
          dek="Bấm tab xem audience, USP, lịch trình, thị trường nguồn, và OTA của từng biến thể."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10, marginBottom: 32 }}>
          {subVariants.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  border: '1px solid ' + (isActive ? 'var(--ink)' : 'var(--rule)'),
                  background: isActive ? 'var(--ink)' : 'var(--paper)',
                  color: isActive ? 'var(--paper)' : 'var(--ink-2)',
                  fontFamily: 'var(--sans)', fontSize: 13, padding: '14px',
                  cursor: 'pointer', textAlign: 'left',
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}>
                <div style={{ minHeight: 16 }}>
                  {s.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>MỚI</span>}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.25 }}>{s.name}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, color: isActive ? 'var(--paper)' : 'var(--ink-3)', borderTop: '1px solid ' + (isActive ? 'var(--ink-3)' : 'var(--rule)'), paddingTop: 8, marginTop: 'auto' }}>
                  <span>{s.tag}</span>
                  <span>{s.price}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Top row: audience + USP */}
        <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 28, marginBottom: 40 }}>
          <div className="grid-2" style={{ gridTemplateColumns: '1.3fr 1fr', gap: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                <h3 className="h-display" style={{ fontSize: 30, lineHeight: 1.1 }}>{sv.name}</h3>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, padding: '3px 8px', background: 'var(--accent)', color: 'var(--paper)', letterSpacing: '0.08em' }}>{sv.tag}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--rule)' }}>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Giá</div>
                  <div className="num" style={{ fontSize: 18, fontWeight: 500 }}>{sv.price}</div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Thời lượng</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>{sv.duration}</div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Nhóm</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>{sv.group}</div>
                </div>
              </div>
              <div style={{ marginBottom: 20 }}>
                <div className="h-kicker" style={{ marginBottom: 8 }}>Đối tượng khách</div>
                <div style={{ fontSize: 15, lineHeight: 1.55 }}>{sv.audience}</div>
              </div>
              <div>
                <div className="h-kicker" style={{ marginBottom: 8 }}>Highlight</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>{sv.highlight}</div>
              </div>
            </div>
            <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--accent)' }}>
              <span className="callout-label" style={{ color: 'var(--accent)' }}>USP biến thể này</span>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>{sv.usp}</div>
            </div>
          </div>
        </div>

        {/* Itinerary for this sub-variant */}
        {sv.itinerary && (
          <div style={{ marginBottom: 40 }}>
            <div className="h-kicker" style={{ marginBottom: 16 }}>Lịch trình chi tiết — {sv.name}</div>
            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {sv.itinerary.map((s, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)' }}>{s.time}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.55 }}>{s.stop}</div>
                </div>
              ))}
            </div>
            {sv.itineraryNote && (
              <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                ⚠ {sv.itineraryNote}
              </div>
            )}
          </div>
        )}

        {/* Market + OTA for this sub-variant */}
        {(sv.marketShare || sv.topOtas) && (
          <div>
            <div className="h-kicker" style={{ marginBottom: 16 }}>Thị trường + OTA — {sv.name}</div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 40, borderTop: '1px solid var(--rule)', paddingTop: 20 }}>
              {sv.marketShare && (
                <div>
                  <div className="label" style={{ marginBottom: 12 }}>Thị trường nguồn</div>
                  {sv.marketShare.map((m, i) => (
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
              {sv.topOtas && (
                <div>
                  <div className="label" style={{ marginBottom: 12 }}>OTA đứng đầu</div>
                  {sv.topOtas.map((o, i) => (
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
  );
}

function HanoiHubPage({ go }) {
  const H = hanoiHub;
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
            <span className="folio" style={{ color: 'var(--accent)' }}>DESTINATION HUB · HÀ NỘI</span>
            <span className="folio">Cập nhật 04/2026</span>
          </div>
          <div className="h-kicker">Thủ đô Hà Nội — Portfolio 8 loại sản phẩm</div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>
            Hà Nội vượt xa<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>chỉ phở và food tour.</em>
          </h1>
          <p className="dek" style={{ fontSize: 22, maxWidth: 760 }}>
            **7.82M khách foreign/năm (+22.76% YoY · 23.2% intensity)** transit qua Hà Nội — gateway lớn nhất inbound VN. Total tourism $5.11B · tour-addressable $765M–$1.02B. Operator hiện tại tập trung food tour — 7 segment khác còn mở.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Booking/năm', val: H.market.bookingVolumeTotalEst, sub: 'tổng các variant · HN' },
              { label: 'Booking rate', val: H.market.bookingRate, sub: 'foreign visitor → booking' },
              { label: 'Tăng trưởng', val: H.market.growthCAGR, sub: 'CAGR 2026–2028' },
              { label: 'Số operator', val: H.market.operators, sub: 'tour companies' },
              { label: 'Tour market', val: H.market.tourMarket2025, sub: 'GMV addressable 2025' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '20px 0', paddingRight: 24, borderRight: i < 4 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em' }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.sub}</div>
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
                100 = trung bình. Peak <strong>{peakMonth.short} ({peakMonth.index})</strong>, đáy <strong>{troughMonth.short} ({troughMonth.index})</strong>. Tỷ số peak/trough: <strong>{(peakMonth.index / troughMonth.index).toFixed(1)}×</strong>.
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
                Peak Thu Hà Nội (T10–T11) · Shoulder Xuân (T3–T4) · Đáy Hè nóng (T5–T7)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview: Top markets + Top OTAs */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Tổng quan thị trường" title="Ai đến Hà Nội — và book qua đâu." dek="Tổng hợp toàn bộ tour market Hà Nội. Chi tiết từng sản phẩm bên dưới." />
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
            <div>
              <div className="h-kicker" style={{ marginBottom: 20 }}>Top thị trường nguồn</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
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
                    <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{m.note}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-kicker" style={{ marginBottom: 20 }}>Top sàn OTA</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {H.topOtas.map((o, i) => (
                  <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{o.name}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 18, fontWeight: 500, color: 'var(--ok)' }}>{o.pct}%</div>
                    </div>
                    <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8, borderRadius: 2 }}>
                      <div style={{ height: '100%', width: o.pct + '%', background: 'var(--ok)', borderRadius: 2 }} />
                    </div>
                    <div style={{ fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-3)', lineHeight: 1.5 }}>{o.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship — #1 product in Hanoi market */}
      {flagship && (
        <section className="section" style={{ background: 'var(--paper-3)' }}>
          <div className="stage">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
              <span className="folio" style={{ color: 'var(--accent)' }}>SẢN PHẨM DẪN ĐẦU HÀ NỘI</span>
              <span className="folio" style={{ color: 'var(--ink-3)' }}>#1 TRONG 8 LOẠI</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1.3fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div className="h-kicker" style={{ marginBottom: 8 }}>{flagship.segment}</div>
                <h2 className="h-display" style={{ fontSize: 48, lineHeight: 1.05, marginBottom: 16 }}>{flagship.name}</h2>
                <p className="body" style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 20, lineHeight: 1.55 }}>
                  Tour được book nhiều nhất ở Hà Nội. Mọi operator lớn đều có phiên bản này. Sondax đi sau = phải khác biệt rõ.
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
                  { label: 'Traffic', val: flagship.traffic, sub: flagship.trafficNote || '#1 Hà Nội' },
                  { label: 'Giá thị trường', val: flagship.price, sub: 'mainstream tier' },
                  { label: 'Thị phần', val: flagship.share, sub: 'trong 8 loại sản phẩm' },
                  { label: 'Đà tăng', val: flagship.growth, sub: 'YoY 2024→2025' },
                ].map((s, i) => (
                  <div key={i} style={{ padding: '20px 24px', borderBottom: i < 2 ? '1px solid var(--rule)' : 'none', borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none' }}>
                    <div className="label" style={{ marginBottom: 6 }}>{s.label}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', color: s.label === 'Đà tăng' ? 'var(--ok)' : 'var(--ink)' }}>{s.val}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8 loại sản phẩm — primary product list */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="8 loại sản phẩm Hà Nội"
            title="Loại nào đang hot, loại nào chững."
            dek="Traffic booking/năm + đà tăng YoY. Bấm tên sản phẩm để mở trang chi tiết."
          />
          {(() => {
            const maxTraffic = Math.max(...H.variants.map((x) => x.trafficNum || 0));
            const rows = [...H.variants]
              .map((x, idx) => ({ ...x, _origIdx: idx, _growthNum: parseInt((x.growth || '0').replace(/[^0-9-]/g, '')) || 0 }))
              .sort((a, b) => b._growthNum - a._growthNum);
            return (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '36px 1.3fr 150px 90px 110px 110px 0.9fr', gap: 18, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
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
                  const flat = t.growth === 'Stable';
                  const trafficPct = t.trafficNum ? (t.trafficNum / maxTraffic) * 100 : 0;
                  return (
                    <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '36px 1.3fr 150px 90px 110px 110px 0.9fr', gap: 18, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>#{i + 1}</div>
                      <div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                          {t.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP</span>}
                          {t.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>MỚI</span>}
                          {t.skeleton && <span style={{ background: 'var(--paper-3)', color: 'var(--ink-3)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SKELETON</span>}
                        </div>
                        <button
                          onClick={() => go({ tab: 'tours', id: t.id })}
                          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, color: 'var(--ink)', textAlign: 'left', textDecoration: 'underline', textDecorationColor: 'var(--rule)', textUnderlineOffset: 4, lineHeight: 1.25 }}>
                          {t.name} →
                        </button>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {t.segment}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{t.traffic || '—'}</div>
                        <div style={{ height: 3, background: 'var(--rule)' }}>
                          <div style={{ height: '100%', width: trafficPct + '%', background: 'var(--accent)' }} />
                        </div>
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: up ? 'var(--ok)' : flat ? 'var(--ink-3)' : 'var(--accent)' }}>
                        {up && '↑ '}{flat && '→ '}{t.growth || '—'}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500 }}>
                        {t.share || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                        {t.timeToMarket || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                        {t.emergingNote
                          ? t.emergingNote
                          : t.isFlagship
                            ? 'Flagship, mọi operator đều có. Cần khác biệt rõ.'
                            : t._growthNum >= 30
                              ? 'Niche đang nổi nhanh — cửa sổ 12–18 tháng.'
                              : t._growthNum >= 15
                                ? 'Đà ổn định, market đủ lớn entry.'
                                : flat
                                  ? 'Bão hoà — chỉ vào nếu differentiation mạnh.'
                                  : 'Đà tăng chậm. Không ưu tiên phase 1.'}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Booking volume chart — monthly breakdown */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Booking theo tháng"
            title="Lượt booking phân bổ 12 tháng — top 4 variants."
            dek="Dữ liệu ước tính từ review proxy × 20–30x. Confidence level ghi chú trên từng bar."
          />
          <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
            {H.variants.filter(v => v.trafficNum && v.trafficNum > 0 && !v.skeleton).slice(0, 4).map((v) => {
              // distribute bookings by seasonality index (variant-level if exists, else hub-level)
              const seasons = v.seasonality && Array.isArray(v.seasonality) ? v.seasonality : H.seasonality;
              const totalIdx = seasons.reduce((s, m) => s + m.index, 0);
              const monthly = seasons.map(m => ({
                ...m,
                bookings: Math.round((m.index / totalIdx) * v.trafficNum),
              }));
              const maxBookings = Math.max(...monthly.map(m => m.bookings));
              const confColor = v.trafficConfidence === 'high' ? 'var(--ok)' : v.trafficConfidence === 'low' ? 'var(--ink-3)' : 'var(--accent)';
              return (
                <div key={v.id} style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid var(--rule)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
                    <div>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>{v.name}</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginLeft: 12 }}>{v.traffic}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: confColor, border: '1px solid ' + confColor, padding: '2px 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        confidence: {v.trafficConfidence || 'medium'}
                      </span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ok)' }}>{v.growth}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 120, borderBottom: '1px solid var(--rule)', marginBottom: 8 }}>
                    {monthly.map((m) => {
                      const pct = m.bookings / maxBookings;
                      const isHigh = m.index >= 130;
                      return (
                        <div key={m.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)' }}>
                            {m.bookings >= 1000 ? (m.bookings/1000).toFixed(1)+'K' : m.bookings}
                          </div>
                          <div style={{ width: '100%', height: Math.round(pct * 90) + 'px', background: isHigh ? confColor : 'var(--paper-3)', border: '1px solid var(--rule)' }} />
                        </div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {monthly.map((m) => (
                      <div key={m.id} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-4)' }}>{m.short}</div>
                    ))}
                  </div>
                  {v.trafficNote && (
                    <div style={{ marginTop: 10, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', lineHeight: 1.6, borderLeft: '2px solid var(--rule)', paddingLeft: 10 }}>
                      {v.trafficNote}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
                  {['Booking.com', 'Agoda', 'GetYourGuide', 'Klook', 'Viator', 'Direct'].map((ota) => (
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
            <div>HANOI-HUB · DESTINATION HUB · PHÂN TÍCH THỊ TRƯỜNG</div>
            <div>NGUỒN: OTA SCRAPE Q1/2026 · TỔNG CỤC DU LỊCH · VỀ PHƯỢT</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SondaxPlaybookSection({ v }) {
  const tabs = [
    v.sondaxPlay  && { id: 'strategy', label: 'Strategy' },
    v.designLevers && { id: 'market',  label: 'Per-market' },
    v.userJourney && { id: 'ops',     label: 'Operational' },
  ].filter(Boolean);
  const [active, setActive] = useState(tabs[0]?.id || 'strategy');

  return (
    <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="stage">
        <div className="folio" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>SONDAX PLAYBOOK · {v.name.toUpperCase()}</div>
        <h2 className="h-display" style={{ fontSize: 40, lineHeight: 1.1, marginBottom: 20, color: 'var(--paper)' }}>Cách Sondax thắng phân khúc này.</h2>
        <p className="dek" style={{ fontSize: 18, maxWidth: 820, color: 'var(--paper)', opacity: 0.8, marginBottom: 32 }}>
          3 góc nhìn: chiến lược tổng (Strategy) · đòn bẩy per-market (Per-market) · flow vận hành (Operational).
        </p>

        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 32, flexWrap: 'wrap' }}>
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                fontFamily: 'var(--mono)', fontSize: 11, padding: '10px 18px',
                background: isActive ? 'var(--paper)' : 'transparent',
                color: isActive ? 'var(--ink)' : 'var(--paper)',
                border: '1px solid ' + (isActive ? 'var(--paper)' : 'rgba(255,255,255,0.3)'),
                cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>{t.label}</button>
            );
          })}
        </div>

        {/* Tab 1: Strategy */}
        {active === 'strategy' && v.sondaxPlay && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 28 }}>
            <p className="body" style={{ fontSize: 20, maxWidth: 820, color: 'var(--paper)', opacity: 0.95, marginBottom: 32, lineHeight: 1.5, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>
              "{v.sondaxPlay.positioning}"
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
              <div>
                <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 6 }}>Chiến lược giá</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500, lineHeight: 1.35 }}>{v.sondaxPlay.priceStrategy}</div>
              </div>
              <div>
                <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 6 }}>Break-even ước tính</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500, lineHeight: 1.35 }}>{v.sondaxPlay.breakeven}</div>
              </div>
            </div>
            <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>{v.sondaxPlay.moves.length} nước đi cụ thể</div>
            {v.sondaxPlay.moves.map((m, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 240px', gap: 20, padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'center' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ok)', fontWeight: 500 }}>#{i + 1}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{m.move}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ok)', textAlign: 'right' }}>→ {m.impact}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Per-market design levers */}
        {active === 'market' && v.designLevers && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 28 }}>
            <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>Mỗi thị trường một đòn bẩy riêng</div>
            {v.designLevers.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 160px 1fr 180px', gap: 24, padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>{d.market}</div>
                <div style={{ fontSize: 11, color: 'var(--paper)', opacity: 0.5, lineHeight: 1.4, fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{d.type}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.9 }}>{d.lever}</div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ok)', fontWeight: 500 }}>→ {d.impact}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Operational user journey */}
        {active === 'ops' && v.userJourney && (
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 28 }}>
            <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>6 giai đoạn khách book — chỗ Sondax can thiệp</div>
            <div style={{ display: 'grid', gridTemplateColumns: '40px 140px 180px 1fr', gap: 20, padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
              <div className="label" style={{ color: 'var(--paper)', opacity: 0.5 }}>#</div>
              <div className="label" style={{ color: 'var(--paper)', opacity: 0.5 }}>Giai đoạn</div>
              <div className="label" style={{ color: 'var(--paper)', opacity: 0.5 }}>Kênh</div>
              <div className="label" style={{ color: 'var(--paper)', opacity: 0.5 }}>Chi tiết</div>
            </div>
            {v.userJourney.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 140px 180px 1fr', gap: 20, padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--paper)', opacity: 0.5 }}>#{i + 1}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{s.stage}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ok)' }}>{s.channel}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.9 }}>{s.detail}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function HanoiProductDetail({ id, go }) {
  const H = hanoiHub;
  const v = H.variants.find((x) => x.id === id);
  if (!v) return (
    <div className="page-anim">
      <section className="section"><div className="stage">
        <h2 className="h-display">Không tìm thấy sản phẩm.</h2>
        <button onClick={() => go({ tab: 'tours', id: 'hanoi-hub' })} style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, padding: '10px 18px', background: 'var(--ink)', color: 'var(--paper)', border: 'none', cursor: 'pointer' }}>← Về Hà Nội Hub</button>
      </div></section>
    </div>
  );
  const vHasDays = v.itinerary && v.itinerary.some((s) => s.day);
  const up = v.growth && v.growth.startsWith('+');
  const flat = v.growth === 'Stable';

  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section" style={{ paddingBlock: '48px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {v.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP HÀ NỘI</span>}
            {v.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>MỚI · ĐANG TĂNG</span>}
            {v.skeleton && <span style={{ background: 'var(--paper-3)', color: 'var(--ink-3)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SKELETON · DATA CẬP NHẬT Q2/26</span>}
          </div>
          <div className="h-kicker">{v.segment}</div>
          <h1 className="h-display" style={{ fontSize: 64, lineHeight: 1.05, marginBottom: 20 }}>{v.name}</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, marginTop: 32, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Traffic', val: v.traffic || '—', sub: v.trafficNote || 'booking/năm' },
              { label: 'Giá thị trường', val: v.price, sub: 'mainstream tier' },
              { label: 'Thị phần', val: v.share, sub: 'trong 8 loại sản phẩm' },
              { label: 'Đà tăng', val: v.growth || '—', sub: 'YoY 2024→2025', highlight: up },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 0', paddingRight: 24, borderRight: i < 3 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', color: s.highlight ? 'var(--ok)' : 'var(--ink)', marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Compact overview pills: top markets + top OTAs */}
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

      {/* Skeleton placeholder */}
      {v.skeleton && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <div style={{ padding: '28px 32px', border: '1px dashed var(--ink-3)', background: 'var(--paper-3)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', marginBottom: 10, color: 'var(--ink-3)' }}>DỮ LIỆU ĐANG CẬP NHẬT</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', marginBottom: 20 }}>
                Sản phẩm mới — research Q2/2026 sẽ bổ sung itinerary chi tiết, market breakdown 3 thị trường, OTA analysis 3 sàn, và pain points.
              </div>
              {v.topComp && (
                <div>
                  <div className="h-kicker" style={{ marginBottom: 10 }}>Đối thủ dẫn đầu (sơ bộ)</div>
                  <div style={{ background: 'var(--paper)', padding: 16, border: '1px solid var(--rule)' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{v.topComp.name}</div>
                    <div className="num" style={{ fontSize: 14, color: 'var(--ink-2)', marginBottom: 12 }}>{v.topComp.price}{v.topComp.rating && ` · ${v.topComp.rating}`}{v.topComp.reviews && ` (${v.topComp.reviews} reviews)`}</div>
                    {v.compStrength && <div style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 8, lineHeight: 1.5 }}><b style={{ color: 'var(--ok)' }}>+ </b>{v.compStrength}</div>}
                    {v.compGap && <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}><b style={{ color: 'var(--accent)' }}>– </b>{v.compGap}</div>}
                  </div>
                </div>
              )}
              {v.markets && (
                <div style={{ marginTop: 20 }}>
                  <div className="label" style={{ marginBottom: 6 }}>Thị trường chính</div>
                  <div style={{ fontSize: 26, letterSpacing: 3 }}>{v.markets.join('  ')}</div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Emerging callout (non-skeleton) */}
      {!v.skeleton && v.emerging && (
        <section className="section" style={{ background: 'var(--ok)', color: 'var(--paper)' }}>
          <div className="stage">
            <div className="h-kicker" style={{ color: 'var(--paper)', opacity: 0.7, marginBottom: 8 }}>↑ ĐANG TĂNG NHANH {v.growth}</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, maxWidth: 800 }}>{v.emergingNote}</div>
          </div>
        </section>
      )}

      {/* 2. Thời vụ — Halong-style seasonality with legend + peak outline + market footnote */}
      {!v.skeleton && Array.isArray(v.seasonality) && (() => {
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

      {/* 3a. History text (new agent schema: string) */}
      {!v.skeleton && v.history && typeof v.history === 'string' && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Lịch sử & bối cảnh" title="Nguồn gốc sản phẩm." />
            <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 820 }}>{v.history}</p>
            </div>
          </div>
        </section>
      )}

      {/* 3b. Xu hướng sản phẩm qua các năm (legacy array schema) */}
      {!v.skeleton && Array.isArray(v.history) && (() => {
        const forecast = v.historyForecast || [];
        const all = [...v.history, ...forecast];
        const maxBook = Math.max(...all.map((x) => x.bookings));
        return (
          <section className="section">
            <div className="stage">
              <SectionHeader
                kicker="Xu hướng sản phẩm qua các năm"
                title={`Đà tăng trưởng ${v.history[0].year} → ${all[all.length - 1].year}F.`}
                dek="Bookings/năm + driver từng năm + inflection points. Cột đậm = actual, cột đứt = forecast."
              />

              {/* Why hot — 4 drivers hiện tại (merged from standalone) */}
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
                {/* Year bars */}
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', height: 200, borderBottom: '1px solid var(--rule)', marginBottom: 12, paddingInline: 20 }}>
                  {all.map((y, i) => {
                    const pct = y.bookings / maxBook;
                    const isForecast = i >= v.history.length;
                    return (
                      <div key={y.year} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500 }}>
                          {(y.bookings / 1000).toFixed(0)}K
                        </div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: y.growth && y.growth.startsWith('+') ? (isForecast ? 'var(--ink-3)' : 'var(--ok)') : 'var(--ink-4)', fontWeight: 500, minHeight: 14 }}>
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

                {/* Drivers per year */}
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
                          {y.growth && <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: isForecast ? 'var(--ink-3)' : 'var(--ok)', fontWeight: 500, marginTop: 2 }}>{y.growth}</div>}
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

      {/* Trends 2026–2028 — moved up next to Historical for temporal flow */}
      {!v.skeleton && v.trends && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker={`${v.trends.length} xu hướng định hình 2026–2028`}
              title="Sau đường forecast — cái nào đi sớm thì thắng."
              dek="Xu hướng macro thị trường riêng cho phân khúc này. Bổ sung cho forecast 2026F–2027F ở trên."
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

      {/* Biến thể sản phẩm (sub-variants with itinerary + market + OTA inside) */}
      {!v.skeleton && v.subVariants && <SubVariantsSection subVariants={v.subVariants} />}

      {/* 3. Top 3 đối thủ cạnh tranh */}
      {!v.skeleton && v.topCompetitors && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker={`Top ${v.topCompetitors.length} đối thủ cạnh tranh`}
              title="Ai đang chạy sản phẩm này — mạnh ở đâu, hở ở đâu."
              dek="3 operator chính phân khúc food walking Hà Nội. Phân tích để tìm gap Sondax vào."
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

      {/* 4. Pain points + Voice of customer (merged, non-skeleton) */}
      {!v.skeleton && (v.painPoints || v.reviewSnippets) && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker="Pain points + Voice of customer"
              title={v.painPoints ? `${v.painPoints.length} lý do khách 1–3★ + quote thực tế.` : 'Khách nói gì về sản phẩm này.'}
              dek="Lấy từ OTA reviews Viator + GYG 2025. Mỗi pain → một cơ hội differentiation + quote hỗ trợ."
            />

            {v.painPoints && (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                {v.painPoints.map((p, i) => {
                  const isNewSchema = p.issue !== undefined;
                  return isNewSchema ? (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 140px 1fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: 'var(--ink-3)' }}>#{i + 1}</div>
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500, lineHeight: 1.4, marginBottom: 6 }}>{p.issue}</div>
                        <div style={{ fontSize: 13, color: 'var(--accent)', letterSpacing: 1 }}>{p.severity}</div>
                      </div>
                      <div />
                      <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                        <span className="callout-label" style={{ color: 'var(--ok)' }}>Quote khách</span>
                        {p.quote}
                      </div>
                    </div>
                  ) : (
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
                  );
                })}
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
                      <div key={i} style={{ marginBottom: 14, padding: '14px 18px', background: 'var(--paper-2)', borderLeft: '3px solid var(--accent)' }}>
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
                      <div key={i} style={{ marginBottom: 14, padding: '14px 18px', background: 'var(--paper-2)', borderLeft: '3px solid var(--ok)' }}>
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

      {/* Sondax Playbook — unified (strategy + per-market + operational tabs) */}
      {!v.skeleton && (v.sondaxPlay || v.designLevers || v.userJourney) && (
        <SondaxPlaybookSection v={v} />
      )}

      {/* Risk factors — điều gì có thể làm product này flop */}
      {!v.skeleton && v.riskFactors && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker={`${v.riskFactors.length} rủi ro chính`}
              title="Điều gì có thể làm sản phẩm này flop."
              dek="Downside scenario + likelihood + mitigation. Đọc trước khi commit entry cost."
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
            onClick={() => go({ tab: 'tours', id: 'hanoi-hub' })}
            style={{
              fontFamily: 'var(--mono)', fontSize: 11, padding: '12px 20px',
              background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--ink)',
              cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
            ← Quay lại Hà Nội Hub
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>HANOI-HUB · {v.id.toUpperCase()} · PHÂN TÍCH SẢN PHẨM</div>
            <div>NGUỒN: OTA SCRAPE Q1/2026 · TỔNG CỤC DU LỊCH</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HanoiPage({ id, go, variant }) {
  if (variant && id) return <HanoiProductDetail id={id} go={go} />;
  return <HanoiHubPage go={go} />;
}
export default HanoiPage;
export { HanoiProductDetail, SubVariantsSection, SondaxPlaybookSection };
