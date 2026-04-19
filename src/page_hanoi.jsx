// Hà Nội Hub — destination-level hub page + per-product detail
import React from 'react';
import DATA from './data.js';
import { SectionHeader } from './shell.jsx';

function HanoiHubPage({ go }) {
  const H = DATA.hanoiHub;
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
            4.8M khách quốc tế/năm transit qua Hà Nội — nhưng operator hiện tại toàn food tour. Trang này: overview thị trường Hà Nội + 8 loại sản phẩm (bấm từng loại xem chi tiết).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'GMV 2025', val: H.market.gmv2025, sub: 'tour market HN' },
              { label: 'Khách quốc tế', val: H.market.guests2025, sub: 'lượt 2025' },
              { label: 'Tăng trưởng', val: H.market.growthCAGR, sub: 'CAGR 2026–2028' },
              { label: 'Số operator', val: H.market.operators, sub: 'tour companies' },
              { label: 'GMV 2028F', val: H.market.gmv2028base, sub: 'base case' },
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
                <div style={{ display: 'grid', gridTemplateColumns: '40px 1.4fr 200px 110px 1fr', gap: 24, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
                  <div className="label">#</div>
                  <div className="label">Sản phẩm</div>
                  <div className="label">Booking/năm</div>
                  <div className="label">Đà tăng YoY</div>
                  <div className="label">Ghi chú</div>
                </div>
                {rows.map((t, i) => {
                  const up = t.growth && t.growth.startsWith('+');
                  const flat = t.growth === 'Stable';
                  const trafficPct = t.trafficNum ? (t.trafficNum / maxTraffic) * 100 : 0;
                  return (
                    <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '40px 1.4fr 200px 110px 1fr', gap: 24, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>#{i + 1}</div>
                      <div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                          {t.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP</span>}
                          {t.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>MỚI</span>}
                          {t.skeleton && <span style={{ background: 'var(--paper-3)', color: 'var(--ink-3)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SKELETON</span>}
                        </div>
                        <button
                          onClick={() => go({ tab: 'tours', id: t.id })}
                          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, color: 'var(--ink)', textAlign: 'left', textDecoration: 'underline', textDecorationColor: 'var(--rule)', textUnderlineOffset: 4 }}>
                          {t.name} →
                        </button>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {t.segment}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{t.traffic || '—'}</div>
                        <div style={{ height: 3, background: 'var(--rule)' }}>
                          <div style={{ height: '100%', width: trafficPct + '%', background: 'var(--accent)' }} />
                        </div>
                        {t.trafficNote && (
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', marginTop: 4 }}>{t.trafficNote}</div>
                        )}
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 500, color: up ? 'var(--ok)' : flat ? 'var(--ink-3)' : 'var(--accent)' }}>
                          {up && '↑ '}{flat && '→ '}{t.growth || '—'}
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                        {t.emergingNote
                          ? t.emergingNote
                          : t.isFlagship
                            ? 'Flagship, mọi operator đều có. Sondax cần khác biệt rõ.'
                            : t._growthNum >= 30
                              ? 'Niche đang nổi nhanh. Chưa operator chuyên — cửa sổ 12–18 tháng.'
                              : t._growthNum >= 15
                                ? 'Đà tăng ổn định, market đủ lớn để entry.'
                                : flat
                                  ? 'Thị trường bão hoà — chỉ vào nếu có differentiation mạnh.'
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

      {/* Design levers */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader kicker="Design levers theo thị trường" title="Thay đổi gì để pull từng market." />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {H.designLevers.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 160px 1fr 140px', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500 }}>{d.market}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4 }}>{d.type}</div>
                <div style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.6 }}>{d.lever}</div>
                <div style={{ textAlign: 'right', fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ok)', fontWeight: 500 }}>{d.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Pain points từ OTA reviews 1–3★" title="7 lý do khách cho điểm thấp." />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {H.painPoints.map((p) => (
              <div key={p.rank} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 120px 1fr', gap: 24, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: p.sev >= 5 ? 'var(--accent)' : 'var(--ink-3)' }}>#{p.rank}</div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500, marginBottom: 8 }}>{p.pain}</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} style={{ color: s <= p.sev ? 'var(--accent)' : 'var(--rule)' }}>★</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Tần suất</div>
                  <div className="num" style={{ fontSize: 18, color: 'var(--accent)' }}>{p.freq}</div>
                </div>
                <div className="callout" style={{ margin: 0 }}>
                  <span className="callout-label" style={{ color: 'var(--ok)' }}>Cơ hội</span>
                  <div style={{ marginBottom: 8 }}>{p.opp}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>"{p.positioning}"</div>
                </div>
              </div>
            ))}
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

function HanoiProductDetail({ id, go }) {
  const H = DATA.hanoiHub;
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 32, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Traffic', val: v.traffic || '—', sub: v.trafficNote || 'booking/năm' },
              { label: 'Giá thị trường', val: v.price, sub: 'mainstream tier' },
              { label: 'Thị phần', val: v.share, sub: 'trong 8 loại sản phẩm' },
              { label: 'Đà tăng', val: v.growth || '—', sub: 'YoY 2024→2025', highlight: up },
            ].map((s, i) => (
              <div key={i} style={{ padding: '20px 0', paddingRight: 24, borderRight: i < 3 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', color: s.highlight ? 'var(--ok)' : 'var(--ink)' }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
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

      {/* Top competitor (non-skeleton) */}
      {!v.skeleton && v.topComp && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader kicker="Đối thủ dẫn đầu phân khúc này" title={v.topComp.name} />
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
                  <div>
                    <div className="label" style={{ marginBottom: 4 }}>Giá</div>
                    <div className="num" style={{ fontSize: 18 }}>{v.topComp.price}</div>
                  </div>
                  {v.topComp.rating && (
                    <div>
                      <div className="label" style={{ marginBottom: 4 }}>Rating</div>
                      <div className="num" style={{ fontSize: 18 }}>{v.topComp.rating}</div>
                    </div>
                  )}
                  {v.topComp.reviews && (
                    <div>
                      <div className="label" style={{ marginBottom: 4 }}>Reviews</div>
                      <div className="num" style={{ fontSize: 18 }}>{v.topComp.reviews}</div>
                    </div>
                  )}
                </div>
                {v.compStrength && (
                  <div className="callout" style={{ margin: '0 0 16px 0' }}>
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
              </div>
              <div>
                {v.markets && (
                  <>
                    <div className="h-kicker" style={{ marginBottom: 12 }}>Thị trường chính sản phẩm này</div>
                    <div style={{ fontSize: 32, letterSpacing: 4, marginBottom: 24 }}>{v.markets.join('  ')}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Market share + top OTAs (non-skeleton) */}
      {!v.skeleton && (v.marketShare || v.topOtas) && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Thị trường + OTA của sản phẩm này" title="Ai book, qua đâu." />
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              {v.marketShare && (
                <div>
                  <div className="h-kicker" style={{ marginBottom: 16 }}>Thị trường nguồn</div>
                  {v.marketShare.map((m, i) => (
                    <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <span style={{ fontSize: 18 }}>{m.flag}</span>
                          <span style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{m.name}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>Peak {m.peak}</div>
                          <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--accent)' }}>{m.pct}%</div>
                        </div>
                      </div>
                      <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8 }}>
                        <div style={{ height: '100%', width: m.pct + '%', background: 'var(--accent)' }} />
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{m.note}</div>
                    </div>
                  ))}
                </div>
              )}
              {v.topOtas && (
                <div>
                  <div className="h-kicker" style={{ marginBottom: 16 }}>OTA đứng đầu</div>
                  {v.topOtas.map((o, i) => (
                    <div key={i} style={{ padding: '14px 0', borderBottom: '1px solid var(--rule)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{o.name}</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 16, fontWeight: 500, color: 'var(--ok)' }}>{o.share}</div>
                      </div>
                      <div style={{ height: 3, background: 'var(--rule)', marginBottom: 8 }}>
                        <div style={{ height: '100%', width: o.share, background: 'var(--ok)' }} />
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{o.strength}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Itinerary (non-skeleton) */}
      {!v.skeleton && v.itinerary && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader kicker="Lịch trình chi tiết" title="Stop-by-stop." />
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
          </div>
        </section>
      )}

      {/* Why hot (non-skeleton) */}
      {!v.skeleton && v.whyHot && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Vì sao sản phẩm này hot" title="4 lý do đẩy demand 2025–2026." />
            <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
              {v.whyHot.map((w, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 20, padding: '18px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>#{i + 1}</div>
                  <div style={{ fontSize: 15, color: 'var(--ink)', lineHeight: 1.55 }}>{w}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* User journey (non-skeleton) */}
      {!v.skeleton && v.userJourney && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="User journey"
              title="Khách book tour này thế nào."
              dek="6 giai đoạn từ discover đến post-tour. Mỗi giai đoạn = chỗ Sondax có thể can thiệp."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '40px 160px 200px 1fr', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
                <div className="label">#</div>
                <div className="label">Giai đoạn</div>
                <div className="label">Kênh</div>
                <div className="label">Chi tiết</div>
              </div>
              {v.userJourney.map((s, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 160px 200px 1fr', gap: 20, padding: '18px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>#{i + 1}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{s.stage}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--accent)' }}>{s.channel}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{s.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pain points specific to this tour (non-skeleton) */}
      {!v.skeleton && v.painPoints && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker="Pain points sản phẩm này"
              title={`${v.painPoints.length} lý do khách 1–3★.`}
              dek="Lấy từ OTA reviews Viator + GYG 2025. Mỗi pain → một cơ hội differentiation."
            />
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
          </div>
        </section>
      )}

      {/* Sondax play (non-skeleton) */}
      {!v.skeleton && v.sondaxPlay && (
        <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <div className="stage">
            <div className="folio" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>SONDAX PLAYBOOK · {v.name.toUpperCase()}</div>
            <h2 className="h-display" style={{ fontSize: 40, lineHeight: 1.1, marginBottom: 20, color: 'var(--paper)' }}>Cách Sondax thắng phân khúc này.</h2>
            <p className="dek" style={{ fontSize: 20, maxWidth: 780, color: 'var(--paper)', opacity: 0.85, marginBottom: 32 }}>
              {v.sondaxPlay.positioning}
            </p>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 32 }}>
                <div>
                  <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 6 }}>Chiến lược giá</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, lineHeight: 1.3 }}>{v.sondaxPlay.priceStrategy}</div>
                </div>
                <div>
                  <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 6 }}>Break-even ước tính</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, lineHeight: 1.3 }}>{v.sondaxPlay.breakeven}</div>
                </div>
              </div>
              <div className="label" style={{ color: 'var(--paper)', opacity: 0.5, marginBottom: 16 }}>{v.sondaxPlay.moves.length} nước đi cụ thể</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
                {v.sondaxPlay.moves.map((m, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 240px', gap: 20, padding: '18px 0', borderBottom: '1px solid rgba(255,255,255,0.12)', alignItems: 'center' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ok)', fontWeight: 500 }}>#{i + 1}</div>
                    <div style={{ fontSize: 15, lineHeight: 1.5 }}>{m.move}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ok)', textAlign: 'right' }}>→ {m.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Review snippets (non-skeleton) */}
      {!v.skeleton && v.reviewSnippets && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Voice of customer"
              title="Khách nói gì — 1★ vs 5★."
              dek="Quote thật lấy từ Viator + GYG + Direct reviews 2025. So sánh 2 phía để thấy gap positioning."
            />
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div className="h-kicker" style={{ color: 'var(--accent)', marginBottom: 16 }}>★ 1–3 · Pain driver</div>
                {v.reviewSnippets.low.map((r, i) => (
                  <div key={i} style={{ marginBottom: 20, padding: '16px 20px', background: 'var(--paper)', borderLeft: '3px solid var(--accent)' }}>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} style={{ color: s <= r.star ? 'var(--accent)' : 'var(--rule)', fontSize: 11 }}>★</span>
                      ))}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, color: 'var(--ink)', marginBottom: 10 }}>"{r.quote}"</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.source}</div>
                  </div>
                ))}
              </div>
              <div>
                <div className="h-kicker" style={{ color: 'var(--ok)', marginBottom: 16 }}>★ 4–5 · What to preserve</div>
                {v.reviewSnippets.high.map((r, i) => (
                  <div key={i} style={{ marginBottom: 20, padding: '16px 20px', background: 'var(--paper)', borderLeft: '3px solid var(--ok)' }}>
                    <div style={{ display: 'flex', gap: 2, marginBottom: 8 }}>
                      {[1,2,3,4,5].map((s) => (
                        <span key={s} style={{ color: s <= r.star ? 'var(--ok)' : 'var(--rule)', fontSize: 11 }}>★</span>
                      ))}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, color: 'var(--ink)', marginBottom: 10 }}>"{r.quote}"</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.source}</div>
                  </div>
                ))}
              </div>
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

export default HanoiHubPage;
export { HanoiProductDetail };
