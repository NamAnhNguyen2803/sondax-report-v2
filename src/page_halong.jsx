// Halong Hub — dedicated market research page for cruise tour design
import React, { useState } from 'react';
import DATA from './data.js';
import { SectionHeader } from './shell.jsx';

function HalongHubPage({ go }) {
  const H = DATA.halongHub;
  const [activeVariant, setActiveVariant] = useState(0);

  return (
    <div className="page-anim">

      {/* Hero */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>NGHIÊN CỨU THỊ TRƯỜNG · MKT-001</span>
            <span className="folio">Cập nhật 04/2026</span>
          </div>
          <div className="h-kicker">Cruise Vịnh Hạ Long — Báo cáo thiết kế tour</div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>
            Thị trường<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>$580–680M.</em>
          </h1>
          <p className="dek" style={{ fontSize: 22, maxWidth: 760 }}>
            70–80% khách quốc tế đến Hà Nội đặt cruise Hạ Long. Cạnh tranh không phải tạo demand — mà là giành phần trong {H.market.guests2025} lượt/năm đang book qua OTA.
          </p>

          {/* Market stat bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'GMV 2025', val: H.market.gmv2025, sub: 'toàn thị trường' },
              { label: 'Khách cruise', val: H.market.guests2025, sub: 'lượt/năm' },
              { label: 'Tăng trưởng', val: H.market.growthCAGR, sub: 'CAGR 2026–2028' },
              { label: 'Số operator', val: H.market.operators, sub: 'chủ tàu' },
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
                100 = trung bình năm. T7 là peak (145), T2 là đáy (65). Tỷ số peak/trough: <strong>2.3×</strong>.
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
                {H.seasonality.map((s) => {
                  const pct = s.index / 145;
                  const bg = s.index >= 130 ? 'var(--accent)' : s.index >= 100 ? 'var(--accent-soft)' : 'var(--paper-3)';
                  return (
                    <div key={s.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)' }}>{s.index}</div>
                      <div style={{ width: '100%', height: Math.round(pct * 120) + 'px', background: bg, outline: s.id === 7 ? '2px solid var(--ink)' : 'none', outlineOffset: 2 }} />
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {H.seasonality.map((s) => (
                  <div key={s.id} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 10, color: s.id === 7 ? 'var(--ink)' : 'var(--ink-4)', fontWeight: s.id === 7 ? 500 : 400 }}>
                    {s.short}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>
                Bão T7–T9: cancel rate 5–12% · Khách Âu: T3–T4 & T10–T11 · Khách Á: T6–T8 & T11–T1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Biến thể sản phẩm"
            title="Sáu loại cruise — sáu đối thủ khác nhau."
            dek="Nhấp vào biến thể để xem phân tích đối thủ, khoảng trống, và xu hướng mới nổi."
          />
          <div style={{ display: 'flex', gap: 4, marginBottom: 32, flexWrap: 'wrap' }}>
            {H.variants.map((v, i) => (
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
            const v = H.variants[activeVariant];
            return (
              <div style={{ borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
                <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
                      <h3 className="h-display" style={{ fontSize: 32 }}>{v.name}</h3>
                      <span style={{
                        fontFamily: 'var(--mono)', fontSize: 11, padding: '4px 10px',
                        border: '1px solid var(--rule)', color: 'var(--ink-3)',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                      }}>{v.segment}</span>
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

                    <div className="h-kicker" style={{ marginBottom: 12 }}>Đối thủ dẫn đầu phân khúc</div>
                    <div style={{ padding: 20, border: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
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
                        <div>
                          <div className="label" style={{ marginBottom: 2 }}>Reviews</div>
                          <div className="num" style={{ fontSize: 16 }}>{v.topComp.reviews}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="callout" style={{ margin: 0 }}>
                      <span className="callout-label">Điểm mạnh của đối thủ</span>
                      {v.compStrength}
                    </div>
                    <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                      <span className="callout-label" style={{ color: 'var(--ok)' }}>Khoảng trống họ bỏ sót</span>
                      {v.compGap}
                    </div>
                    <div style={{ padding: '16px 0', borderTop: '1px solid var(--rule)' }}>
                      <div className="label" style={{ marginBottom: 8 }}>Thị trường chính</div>
                      <div style={{ fontSize: 22, letterSpacing: 2 }}>{v.markets.join('  ')}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Top 3 competitors */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="Top 3 đối thủ cạnh tranh"
            title="Mạnh ở đâu, hở ở đâu."
            dek="Phân tích từ OTA listing scrape Q1/2026. Tập trung vào gap — đó là nơi bạn có thể chen vào."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
            {H.topCompetitors.map((c, i) => (
              <div key={i} style={{ padding: '36px 0', borderBottom: '1px solid var(--rule)' }}>
                <div className="grid-2" style={{ gridTemplateColumns: '280px 1fr', gap: 48 }}>
                  <div>
                    <div className="label" style={{ marginBottom: 8 }}>{c.tier}</div>
                    <h3 className="h-display" style={{ fontSize: 28, marginBottom: 12 }}>{c.name}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div className="kv" style={{ padding: '6px 0' }}>
                        <span className="kv-k">Fleet</span>
                        <span className="kv-v num">{c.ships}</span>
                      </div>
                      <div className="kv" style={{ padding: '6px 0' }}>
                        <span className="kv-k">Giá/cặp</span>
                        <span className="kv-v num">{c.priceRange}</span>
                      </div>
                      <div className="kv" style={{ padding: '6px 0' }}>
                        <span className="kv-k">Rating</span>
                        <span className="kv-v num">{c.rating} · {c.reviews}</span>
                      </div>
                      <div className="kv" style={{ padding: '6px 0' }}>
                        <span className="kv-k">Kênh</span>
                        <span className="kv-v" style={{ fontSize: 12 }}>{c.channelMix}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div>
                      <div className="h-kicker" style={{ marginBottom: 12 }}>Điểm mạnh</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {c.strengths.map((s, j) => (
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
                        {c.gaps.map((g, j) => (
                          <div key={j} style={{ display: 'flex', gap: 10, fontSize: 14, fontFamily: 'var(--sans)', lineHeight: 1.4 }}>
                            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>–</span>
                            <span>{g}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 16, padding: '12px 16px', background: 'var(--paper)', border: '1px solid var(--ink)' }}>
                        <div className="label" style={{ marginBottom: 4, color: 'var(--accent)' }}>Cơ hội cho bạn</div>
                        <div style={{ fontSize: 13, fontFamily: 'var(--sans)', lineHeight: 1.5 }}>{c.opp}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTA by market matrix */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Ma trận OTA × Thị trường"
            title="Từng quốc gia book qua đâu."
            dek="5 = sàn chủ đạo · 3 = có dùng · 1 = ít dùng. Màu đậm = ưu tiên cao. Dùng bảng này để quyết định listing nào đẩy cho market nào."
          />
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
                    <td style={{ fontFamily: 'var(--sans)', fontSize: 14, whiteSpace: 'nowrap' }}>{row.market}</td>
                    {[row.booking, row.agoda, row.gyg, row.klook, row.viator, row.direct].map((val, j) => (
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
                    ))}
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

      {/* Pain points */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="Pain points từ OTA reviews 1–3★"
            title="7 lý do khách cho điểm thấp — và 7 cơ hội."
            dek="Tần suất = % xuất hiện trong review ≤3★. Giải quyết 3 pain đầu tiên là đủ để vào top 10% operator."
          />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {H.painPoints.map((p) => (
              <div key={p.rank} style={{
                display: 'grid', gridTemplateColumns: '32px 1fr 120px 1fr',
                gap: 24, padding: '24px 0', borderBottom: '1px solid var(--rule)',
                alignItems: 'start',
              }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
                  color: p.sev >= 5 ? 'var(--accent)' : 'var(--ink-3)',
                }}>#{p.rank}</div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, marginBottom: 6 }}>{p.pain}</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} style={{ color: s <= p.sev ? 'var(--accent)' : 'var(--rule)', fontSize: 14 }}>★</span>
                    ))}
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginLeft: 8 }}>mức độ nghiêm trọng</span>
                  </div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Tần suất</div>
                  <div className="num" style={{ fontSize: 18, fontFamily: 'var(--serif)', fontWeight: 500, color: 'var(--accent)' }}>{p.freq}</div>
                </div>
                <div>
                  <div className="callout" style={{ margin: 0 }}>
                    <span className="callout-label" style={{ color: 'var(--ok)' }}>Positioning opportunity</span>
                    <div style={{ fontStyle: 'normal', marginBottom: 8 }}>{p.opp}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>
                      "{p.positioning}"
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Xu hướng */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="7 xu hướng định hình 2026–2028"
            title="Ai đầu tư sớm, ai bị bỏ lại."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
            {H.trends.map((t, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '280px 80px 100px 1fr', gap: 32, padding: '24px 0', borderBottom: '1px solid var(--rule)', alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontSize: 14, letterSpacing: 1, color: 'var(--accent)' }}>{t.stars}</div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Đỉnh</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12 }}>{t.peak}</div>
                </div>
                <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink-2)', lineHeight: 1.55 }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design levers */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="Design levers theo thị trường"
            title="Cùng 1 tàu, 5 câu chuyện khác nhau."
            dek="Thay đổi gì trong tour design để pull từng thị trường — và justify tăng giá."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '2px solid var(--ink)' }}>
            {H.designLevers.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 160px 1fr 140px', gap: 32, padding: '28px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, marginBottom: 6 }}>{d.market}</div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Loại khách</div>
                  <div style={{ fontSize: 13, fontFamily: 'var(--sans)', color: 'var(--ink-2)', lineHeight: 1.4 }}>{d.type}</div>
                </div>
                <div>
                  <div className="label" style={{ marginBottom: 8 }}>Thay đổi gì trong thiết kế tour</div>
                  <div style={{ fontSize: 14, fontFamily: 'var(--sans)', color: 'var(--ink)', lineHeight: 1.6 }}>{d.lever}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="label" style={{ marginBottom: 4 }}>Tác động</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ok)', fontWeight: 500 }}>{d.impact}</div>
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
            <div>MKT-001 · CRUISE VỊNH HẠ LONG · PHÂN TÍCH THỊ TRƯỜNG</div>
            <div>NGUỒN: OTA SCRAPE Q1/2026 · SỞ DU LỊCH QUẢNG NINH · EUROMONITOR</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HalongHubPage;
