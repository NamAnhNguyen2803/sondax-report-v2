// Hà Giang Hub — market screening only. NO Sondax-specific sections (per workspace rule).
// Pattern mirrors page_halong.jsx but strips SondaxPlaybookSection + renames "Cơ hội Sondax" → "Market gap".
import React from 'react';
import DATA from './data.js';
import { SectionHeader } from './shell.jsx';
import { SubVariantsSection } from './page_hanoi.jsx';

function HagiangHubPage({ go }) {
  const H = DATA.hagiangHub;
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
            <span className="folio" style={{ color: 'var(--accent)' }}>DESTINATION HUB · HÀ GIANG</span>
            <span className="folio">Cập nhật 04/2026</span>
          </div>
          <div className="h-kicker">Hà Giang Loop · Đồng Văn Karst UNESCO · Portfolio 8 loại sản phẩm</div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>
            Thị trường<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>~$380M.</em>
          </h1>
          <p className="dek" style={{ fontSize: 22, maxWidth: 780 }}>
            2023 Hà Giang +33% YoY · foreign +296% sau NYT "52 places" + WTA "Asia's Leading Emerging Destination". Apr 2026 fatality shock → regulation tightening → premium-safety tier structural winner.
          </p>

          {/* Market stat bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 0, marginTop: 40, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'GMV 2025', val: H.market.gmv2025, sub: 'tour market Hà Giang' },
              { label: 'Khách 2025', val: H.market.guests2025, sub: 'target + foreign est' },
              { label: 'Tăng trưởng', val: H.market.growthCAGR, sub: '2022→2025 actual' },
              { label: 'Số operator', val: H.market.operators, sub: 'TripAdvisor + informal' },
              { label: 'GMV 2028F', val: H.market.gmv2028base, sub: 'projected' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '22px 0', paddingRight: 24, borderRight: i < 4 ? '1px solid var(--rule)' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="label" style={{ marginBottom: 10 }}>{s.label}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Market context callouts */}
          {H.marketContext && (
            <div style={{ marginTop: 40, padding: '24px 28px', background: 'var(--paper-2)', borderLeft: '3px solid var(--accent)' }}>
              <div className="h-kicker" style={{ marginBottom: 14 }}>Bối cảnh thị trường 2026</div>
              {H.marketContext.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10, padding: '8px 0', borderBottom: i < H.marketContext.length - 1 ? '1px solid var(--rule)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', fontWeight: 500 }}>{i + 1}.</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{c}</div>
                </div>
              ))}
            </div>
          )}
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
                100 = peak. Peak <strong>{peakMonth.short} ({peakMonth.index})</strong>, đáy <strong>{troughMonth.short} ({troughMonth.index})</strong>. Tỷ số peak/trough <strong>{(peakMonth.index / troughMonth.index).toFixed(1)}×</strong>.
              </p>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent)' }} />
                  <span>Cao điểm (≥90)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--accent-soft)' }} />
                  <span>Trung bình (60–89)</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: 'var(--paper-3)' }} />
                  <span>Thấp (&lt;60)</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 160, borderBottom: '1px solid var(--rule)', marginBottom: 8 }}>
                {H.seasonality.map((s) => {
                  const pct = s.index / maxSeasonIdx;
                  const bg = s.index >= 90 ? 'var(--accent)' : s.index >= 60 ? 'var(--accent-soft)' : 'var(--paper-3)';
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
              {H.seasonalityFootnote && (
                <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>
                  {H.seasonalityFootnote}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview: Top markets + Top OTAs */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Tổng quan thị trường" title="Ai đến Hà Giang — và book qua đâu." dek="Tổng hợp toàn tỉnh. Chi tiết từng sản phẩm bên dưới." />
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

      {/* Flagship — #1 product (Loop Easyrider 3N4D) */}
      {flagship && (
        <section className="section" style={{ background: 'var(--paper-3)' }}>
          <div className="stage">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
              <span className="folio" style={{ color: 'var(--accent)' }}>SẢN PHẨM DẪN ĐẦU HÀ GIANG</span>
              <span className="folio" style={{ color: 'var(--ink-3)' }}>#1 TRONG 8 LOẠI</span>
            </div>
            <div className="grid-2" style={{ gridTemplateColumns: '1.3fr 1fr', gap: 64, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div className="h-kicker" style={{ marginBottom: 8 }}>{flagship.segment} · {flagship.price}</div>
                <h2 className="h-display" style={{ fontSize: 44, lineHeight: 1.05, marginBottom: 16 }}>{flagship.name}</h2>
                <p className="body" style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 20, lineHeight: 1.55 }}>
                  SKU chiếm 38% thị phần loop segment. 3 operator top QT (2,000+ riders · 4.9★) + Jasmine (740 reviews · 4.9★) + Bong (172 · 5.0★) tích lũy 2.9k+ reviews platform chính. Apr 2026 regulation shock tái-định-hình competitive map.
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
                  { label: 'Traffic', val: flagship.traffic, sub: flagship.trafficNote || '#1 Hà Giang' },
                  { label: 'Giá thị trường', val: flagship.price, sub: flagship.segment },
                  { label: 'Thị phần', val: flagship.share, sub: 'loop segment' },
                  { label: 'Đà tăng', val: flagship.growth, sub: 'YoY actual', highlight: true },
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

      {/* 8 loại sản phẩm */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="8 loại sản phẩm Hà Giang"
            title="Loop dominant. Jeep emerging post-Apr-2026."
            dek="Traffic booking/năm + đà tăng + entry cost + time-to-market. Bấm tên để mở trang chi tiết."
          />
          {(() => {
            const maxTraffic = Math.max(...H.variants.map((x) => x.trafficNum || 0));
            const rows = [...H.variants]
              .map((x, idx) => ({ ...x, _origIdx: idx, _growthNum: parseInt((x.growth || '0').replace(/[^0-9-]/g, '')) || 0 }))
              .sort((a, b) => b.trafficNum - a.trafficNum);
            return (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '36px 1.4fr 150px 90px 110px 120px 0.9fr', gap: 18, padding: '14px 0', borderBottom: '1px solid var(--ink)' }}>
                  <div className="label">#</div>
                  <div className="label">Sản phẩm</div>
                  <div className="label">Booking/năm</div>
                  <div className="label">Đà tăng</div>
                  <div className="label">Entry cost</div>
                  <div className="label">Time-to-mkt</div>
                  <div className="label">Ghi chú</div>
                </div>
                {rows.map((t, i) => {
                  const up = t.growth && t.growth.startsWith('+');
                  const down = t.growth && t.growth.startsWith('-');
                  const trafficPct = t.trafficNum ? (t.trafficNum / maxTraffic) * 100 : 0;
                  return (
                    <div key={t.id} style={{ display: 'grid', gridTemplateColumns: '36px 1.4fr 150px 90px 110px 120px 0.9fr', gap: 18, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)' }}>#{i + 1}</div>
                      <div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 6 }}>
                          {t.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP</span>}
                          {t.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>ĐANG LÊN</span>}
                          {t.skeleton && <span style={{ background: 'var(--ink-3)', color: 'var(--paper)', fontSize: 9, padding: '2px 6px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SKELETON</span>}
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
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, color: up ? 'var(--ok)' : down ? 'var(--accent)' : 'var(--ink-3)' }}>
                        {up && '↑ '}{down && '↓ '}{t.growth || '—'}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500 }}>
                        {t.entryCost || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.4 }}>
                        {t.timeToMarket || <span style={{ color: 'var(--ink-4)' }}>—</span>}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                        {t.emergingNote
                          ? t.emergingNote
                          : t.isFlagship
                            ? 'Flagship segment — 38% loop share. Vetted drivers + maintained bikes = differentiation mở.'
                            : t.skeleton
                              ? 'Skeleton tier — thin volume. Monitor only. Expressway 2027+ có thể unlock.'
                              : t._growthNum >= 25
                                ? 'Đà tăng mạnh post-fatality. Cửa sổ 12–18 tháng consolidate.'
                                : t._growthNum >= 10
                                  ? 'Đà tăng ổn định. Market đủ lớn nếu differentiation.'
                                  : 'Đà tăng chậm hoặc crowded. Không ưu tiên.'}
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

      {/* Top competitors at hub level */}
      {H.topCompetitors && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker={`Top ${H.topCompetitors.length} đối thủ cạnh tranh`}
              title="Ai đang chạy loop market Hà Giang."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {H.topCompetitors.map((c, i) => (
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
                        <div style={{ marginTop: 16, padding: '14px 16px', background: 'var(--paper)', border: '1px solid var(--ink)' }}>
                          <div className="label" style={{ marginBottom: 4, color: 'var(--accent)' }}>Market gap</div>
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

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>HAGIANG-HUB · DESTINATION HUB · PHÂN TÍCH THỊ TRƯỜNG</div>
            <div>NGUỒN: VNAT · TRIPADVISOR · KLOOK · GYG · VIATOR · OPERATOR SITES Q2/2026</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// HagiangVariantDetail — per-variant detail. NO SondaxPlaybookSection per rule.
// ═════════════════════════════════════════════════════════════════════════════

function HagiangVariantDetail({ id, go }) {
  const H = DATA.hagiangHub;
  const v = H.variants.find((x) => x.id === id);
  if (!v) return (
    <div className="page-anim">
      <section className="section"><div className="stage">
        <h2 className="h-display">Không tìm thấy sản phẩm.</h2>
        <button onClick={() => go({ tab: 'tours', id: 'hagiang-hub' })} style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, padding: '10px 18px', background: 'var(--ink)', color: 'var(--paper)', border: 'none', cursor: 'pointer' }}>← Về Hà Giang Hub</button>
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
            {v.isFlagship && <span style={{ background: 'var(--accent)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>#1 FLAGSHIP HÀ GIANG</span>}
            {v.emerging && <span style={{ background: 'var(--ok)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>ĐANG LÊN</span>}
            {v.skeleton && <span style={{ background: 'var(--ink-3)', color: 'var(--paper)', fontSize: 10, padding: '3px 8px', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>SKELETON</span>}
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

      {/* Emerging callout */}
      {v.emerging && v.emergingNote && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <div style={{ padding: '20px 24px', borderLeft: '3px solid var(--ok)', background: 'var(--paper-3)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', marginBottom: 8, color: 'var(--ok)' }}>↑ ĐANG LÊN</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{v.emergingNote}</div>
            </div>
          </div>
        </section>
      )}

      {/* Skeleton callout */}
      {v.skeleton && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <div style={{ padding: '20px 24px', borderLeft: '3px solid var(--ink-3)', background: 'var(--paper-3)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', marginBottom: 8, color: 'var(--ink-3)' }}>• SKELETON TIER</div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                Skeleton SKU — thin volume + fragmented ops. Monitor only. Tuyên Quang–Hà Giang expressway 2027+ có thể unlock demand.
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Thời vụ (flagship only) */}
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
                    100 = peak. Peak <strong>{peakM.short} ({peakM.index})</strong>, đáy <strong>{troughM.short} ({troughM.index})</strong>. Tỷ số peak/trough <strong>{(peakM.index / troughM.index).toFixed(1)}×</strong>.
                  </p>
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
                      const bg = s.index >= 90 ? 'var(--accent)' : s.index >= 60 ? 'var(--accent-soft)' : 'var(--paper-3)';
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
              dek="Xu hướng macro thị trường cho phân khúc này."
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

      {/* Biến thể sản phẩm */}
      {v.subVariants && <SubVariantsSection subVariants={v.subVariants} />}

      {/* Fallback: itinerary + market + OTA for non-flagship */}
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

      {/* Top 3 đối thủ */}
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
                          <div className="label" style={{ marginBottom: 4, color: 'var(--accent)' }}>Market gap</div>
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

      {/* Pain points */}
      {v.painPoints && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader
              kicker="Pain points sản phẩm này"
              title={`${v.painPoints.length} lý do khách 1–3★.`}
              dek="Mined từ TripAdvisor + operator safety-explainer 2023–2025. Mỗi pain → market gap cho differentiation."
            />
            <div style={{ borderTop: '2px solid var(--ink)' }}>
              {v.painPoints.map((p, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr 140px 80px 1.2fr', gap: 20, padding: '22px 0', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>
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
                    <div className="num" style={{ fontSize: 13, color: 'var(--accent)' }}>{p.freq}</div>
                  </div>
                  <div>
                    <div className="label" style={{ marginBottom: 2 }}>Độ nặng</div>
                    <div className="num" style={{ fontSize: 16, color: p.sev >= 5 ? 'var(--accent)' : 'var(--ink-2)' }}>{p.sev}/5</div>
                  </div>
                  <div className="callout" style={{ margin: 0, borderLeftColor: 'var(--ok)' }}>
                    <span className="callout-label" style={{ color: 'var(--ok)' }}>Market gap</span>
                    {p.opp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Voice of customer */}
      {v.reviewSnippets && (
        <section className="section">
          <div className="stage">
            <SectionHeader
              kicker="Voice of customer"
              title="Khách nói gì — 1★ vs 5★."
              dek="Quote thật lấy từ TripAdvisor + operator sites 2023–2025."
            />
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, borderTop: '2px solid var(--ink)', paddingTop: 32 }}>
              <div>
                <div className="h-kicker" style={{ color: 'var(--accent)', marginBottom: 16 }}>★ 1–4 · Pain driver</div>
                {v.reviewSnippets.low.map((r, i) => (
                  <div key={i} style={{ marginBottom: 20, padding: '16px 20px', background: 'var(--paper-2)', borderLeft: '3px solid var(--accent)' }}>
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
                <div className="h-kicker" style={{ color: 'var(--ok)', marginBottom: 16 }}>★ 5 · What works</div>
                {v.reviewSnippets.high.map((r, i) => (
                  <div key={i} style={{ marginBottom: 20, padding: '16px 20px', background: 'var(--paper-2)', borderLeft: '3px solid var(--ok)' }}>
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

      {/* Risk factors */}
      {v.riskFactors && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
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
            onClick={() => go({ tab: 'tours', id: 'hagiang-hub' })}
            style={{
              fontFamily: 'var(--mono)', fontSize: 11, padding: '12px 20px',
              background: 'var(--paper)', color: 'var(--ink)', border: '1px solid var(--ink)',
              cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
            ← Quay lại Hà Giang Hub
          </button>
        </div>
      </section>

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>HAGIANG-HUB · {v.id.toUpperCase()} · PHÂN TÍCH SẢN PHẨM</div>
            <div>NGUỒN: TRIPADVISOR · KLOOK · GYG · VIATOR · OPERATOR SITES Q2/2026</div>
            <div>NỘI BỘ · KHÔNG PHÁT HÀNH · 04/2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HagiangHubPage;
export { HagiangVariantDetail };
