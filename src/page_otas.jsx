// OTAs tab — index + detail
import React from 'react';
import DATA from './data.js';
import { SectionHeader, Placeholder, OtaChip } from './shell.jsx';

function OtasPage({ route, go }) {
  if (route.id) return <OtaDetail id={route.id} go={go} />;
  return <OtasIndex go={go} />;
}

/* ── INDEX ─────────────────────────────────────────── */

function OtasIndex({ go }) {
  const D = DATA;
  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Chương 04 · Sàn OTA</div>
          <h1 className="h-display" style={{ fontSize: 72, marginBottom: 20 }}>
            Năm kênh,<br />
            <em style={{ color: 'var(--accent)' }}>năm độc giả</em> khác nhau.
          </h1>
          <p className="dek" style={{ maxWidth: 720 }}>
            Viator là nhà phát hành quốc tế. Klook là báo địa phương châu Á. Direct là mối quan hệ khách VIP.
            Đưa đúng tour lên đúng sàn quan trọng hơn giá.
          </p>
        </div>
      </section>

      {/* Market context strip */}
      <section className="section thin" style={{ background: 'var(--paper-2)', borderTop: '1px solid var(--rule)' }}>
        <div className="stage">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            <div className="stat-cell">
              <div className="label">Tours &amp; Activities toàn cầu 2025</div>
              <div className="bigtext num" style={{ fontSize: 40, color: 'var(--accent)' }}>$271B</div>
              <div className="note">→ $342B vào 2029</div>
            </div>
            <div className="stat-cell">
              <div className="label">Bookings thực hiện online</div>
              <div className="bigtext num" style={{ fontSize: 40 }}>33%</div>
              <div className="note">67% vẫn là offline / in-destination</div>
            </div>
            <div className="stat-cell">
              <div className="label">Thị phần OTA trong ngành</div>
              <div className="bigtext num" style={{ fontSize: 40 }}>~⅓</div>
              <div className="note">Tăng từ 24% năm 2019 — đang shift nhanh</div>
            </div>
          </div>
          <p className="body" style={{ fontSize: 13, marginTop: 24, color: 'var(--ink-4)' }}>
            Nguồn: Arival &amp; Phocuswright 2025–2026. Operator nào chiếm vị trí tốt trên OTA sớm sẽ hưởng lợi từ đợt chuyển dịch online này.
          </p>
        </div>
      </section>

      {/* Western vs Asian stack callout */}
      <section className="section thin">
        <div className="stage">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ padding: 28, background: 'var(--paper-2)', border: '1px solid var(--rule)' }}>
              <div className="label" style={{ marginBottom: 10 }}>Western Stack</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                {['viator', 'gyg'].map(id => {
                  const o = D.otas.find(x => x.id === id);
                  return <span key={id} style={{
                    fontFamily: 'var(--mono)', fontSize: 12, padding: '5px 10px',
                    border: '1px solid var(--ink)', background: 'var(--paper)', cursor: 'pointer',
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                  }} onClick={() => go({ tab: 'otas', id })}>{o.name}</span>;
                })}
              </div>
              <div className="body" style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                US · UK · AU · CA · NZ · EU — pre-trip research, desktop-dominant, Google → TripAdvisor funnel
              </div>
            </div>
            <div style={{ padding: 28, background: 'var(--paper-2)', border: '1px solid var(--rule)' }}>
              <div className="label" style={{ marginBottom: 10 }}>Asian Stack</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                {['klook', 'makemytrip'].map(id => {
                  const o = D.otas.find(x => x.id === id);
                  return <span key={id} style={{
                    fontFamily: 'var(--mono)', fontSize: 12, padding: '5px 10px',
                    border: '1px solid var(--ink)', background: 'var(--paper)', cursor: 'pointer',
                    textTransform: 'uppercase', letterSpacing: '0.07em',
                  }} onClick={() => go({ tab: 'otas', id })}>{o.name}</span>;
                })}
              </div>
              <div className="body" style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                SG · IN · PH · KR — mobile-first, in-destination, flash sale behavior
              </div>
            </div>
          </div>
          <p className="body" style={{ fontSize: 13, marginTop: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>
            Operator phải list trên CẢ HAI stacks để cover đủ 10 source markets.
          </p>
        </div>
      </section>

      {/* Platform list */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Thị phần T7" title="Ai đang gặt, ai đang thua phí." />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {D.otas.map((o) => (
              <div key={o.id} className="row-click" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 100px 1.5fr 180px',
                gap: 24, padding: '28px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'baseline', cursor: 'pointer',
              }} onClick={() => go({ tab: 'otas', id: o.id })}>
                <div>
                  <h3 className="h-display" style={{ fontSize: 28, marginBottom: 4 }}>{o.name}</h3>
                  {o.parent && <div className="label" style={{ color: 'var(--ink-4)' }}>{o.parent}</div>}
                </div>
                <div>
                  <div className="label">Thị phần</div>
                  <div className="num" style={{ fontSize: 22, fontFamily: 'var(--serif)', fontWeight: 500, color: 'var(--accent)', marginTop: 2 }}>{o.share7}%</div>
                </div>
                <div>
                  <div className="label">Phí</div>
                  <div className="num" style={{ fontSize: 16, marginTop: 4 }}>{o.commission}%</div>
                </div>
                <div className="body" style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--ink-2)' }}>{o.note}</div>
                <div>
                  <div className="label" style={{ marginBottom: 6 }}>Khách chính</div>
                  <div style={{ fontSize: 18 }}>
                    {o.markets.slice(0, 4).map((mid) => {
                      const m = D.markets.find((x) => x.id === mid);
                      return m ? <span key={mid} style={{ marginRight: 6 }}>{m.flag}</span> : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'baseline' }}>
            <div>
              <div className="h-kicker">Cách đọc</div>
              <h3 className="h-display">Sàn không chỉ là kênh bán.</h3>
            </div>
            <p className="body" style={{ fontSize: 17 }}>
              Mỗi sàn có thuật toán ranking, audience, và kỳ vọng content riêng. Cùng một tour,
              nếu lên <OtaChip id="viator" go={go} /> với ảnh không đủ sáng sẽ chìm —
              lên <OtaChip id="gyg" go={go} /> với mô tả không đủ cấu trúc sẽ không hiện.
              Click vào từng sàn để xem listing playbook chi tiết.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── DETAIL ─────────────────────────────────────────── */

function OtaDetail({ id, go }) {
  const D = DATA;
  const o = D.otas.find((x) => x.id === id);
  if (!o) return <div className="stage section">Sàn không tồn tại</div>;

  if (!o.hasDetail) {
    return (
      <div className="page-anim">
        <section className="section">
          <div className="stage">
            <div className="h-kicker">Sàn OTA</div>
            <h1 className="h-display" style={{ fontSize: 64, marginBottom: 20 }}>{o.name}</h1>
            <p className="dek">Thị phần T7: {o.share7}% · Phí {o.commission}%</p>
            <p className="body" style={{ fontSize: 17, marginTop: 24, maxWidth: 640 }}>{o.note}</p>
            <div style={{ marginTop: 32 }}>
              <Placeholder label="CHI TIẾT CHỜ CẬP NHẬT">
                Xem <a className="xlink" onClick={(e) => { e.preventDefault(); go({ tab: 'otas', id: 'viator' }); }}>Viator</a> làm ví dụ.
              </Placeholder>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const markets = o.markets.map((mid) => D.markets.find((m) => m.id === mid)).filter(Boolean);
  const strongTours = o.strongTours.map((tid) => D.tours.find((t) => t.id === tid)).filter(Boolean);

  const stackColor = o.stack === 'western' ? 'var(--accent)' : o.stack === 'asian' ? 'var(--gold)' : 'var(--ok)';
  const stackLabel = o.stack === 'western' ? 'Western Stack' : o.stack === 'asian' ? 'Asian Stack' : 'Cross-stack';

  return (
    <div className="page-anim">

      {/* ── HERO ── */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>SÀN OTA</span>
            <span className="folio">Chương 04</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 16 }}>
            <h1 className="h-display" style={{ fontSize: 96, lineHeight: 1 }}>{o.name}</h1>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em',
              padding: '5px 10px', border: `1px solid ${stackColor}`, color: stackColor,
              textTransform: 'uppercase', whiteSpace: 'nowrap',
            }}>{stackLabel}</span>
          </div>
          {o.parent && <div className="label" style={{ marginBottom: 24 }}>{o.parent}</div>}
          <p className="dek" style={{ fontSize: 22, maxWidth: 760 }}>{o.note}</p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section thin" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            <div className="stat-cell">
              <div className="label">Thị phần T7</div>
              <div className="bigtext num" style={{ color: 'var(--accent)' }}>{o.share7}%</div>
              <div className="note">trong tổng bookings inbound VN</div>
            </div>
            <div className="stat-cell">
              <div className="label">Hoa hồng</div>
              <div className="bigtext num">{o.commission}%</div>
              <div className="note">{o.commission === 0 ? 'Không phí — owned channel' : o.commission > 22 ? 'Cao — bù bằng volume' : 'Trung bình'}</div>
            </div>
            <div className="stat-cell">
              <div className="label">Thanh toán</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, marginTop: 4 }}>{o.paymentTerms}</div>
              <div className="note">{o.boostOption ? 'Có boost option' : 'Không có paid boost'}</div>
            </div>
            <div className="stat-cell">
              <div className="label">Ước tính listings VN</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, marginTop: 4 }}>{o.listingVolume}</div>
              <div className="note">Directional estimate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING BEHAVIOR ── */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Hành vi booking" title="Khách đặt lúc nào, ở đâu." />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* Split bar */}
            <div>
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="label">Pre-trip (desktop, tuần trước)</span>
                  <span className="num" style={{ fontSize: 18, fontFamily: 'var(--serif)' }}>{o.preTrip}%</span>
                </div>
                <div style={{ height: 10, background: 'var(--rule)', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${o.preTrip}%`, background: 'var(--accent)' }} />
                </div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="label">In-destination (mobile, 0–2 ngày trước)</span>
                  <span className="num" style={{ fontSize: 18, fontFamily: 'var(--serif)' }}>{o.inDest}%</span>
                </div>
                <div style={{ height: 10, background: 'var(--rule)', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${o.inDest}%`, background: 'var(--accent-soft)' }} />
                </div>
              </div>
              <p className="body" style={{ fontSize: 14, color: 'var(--ink-3)', fontStyle: 'italic' }}>
                Directional estimate — dựa trên platform design, forum analysis, industry signals.
              </p>
            </div>
            {/* Funnel */}
            <div>
              <div className="label" style={{ marginBottom: 16 }}>Discovery funnel điển hình</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {o.funnel.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: i === 0 ? 'var(--ink)' : i === o.funnel.length - 1 ? 'var(--accent)' : 'var(--paper-3)',
                        border: '1px solid var(--rule)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--mono)', fontSize: 10, color: i === 0 || i === o.funnel.length - 1 ? 'var(--paper)' : 'var(--ink-3)',
                        flexShrink: 0,
                      }}>{i + 1}</div>
                      {i < o.funnel.length - 1 && <div style={{ width: 1, flexGrow: 1, minHeight: 20, background: 'var(--rule)', margin: '2px 0' }} />}
                    </div>
                    <div style={{ paddingBottom: i < o.funnel.length - 1 ? 16 : 0, paddingTop: 4 }}>
                      <div className="body" style={{ fontSize: 15 }}>{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LISTING REQUIREMENTS ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader kicker="Yêu cầu listing" title="Sàn này cần gì để rank." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--rule)' }}>
            {o.listingTips.map((tip, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '32px 1fr',
                gap: 20, padding: '20px 0', borderBottom: '1px solid var(--rule-soft)',
                alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)', paddingTop: 2 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="body" style={{ fontSize: 16 }}>{tip}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALGORITHM SIGNALS ── */}
      <section className="section">
        <div className="stage">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <SectionHeader kicker="Thuật toán ranking" title="Sàn đo gì để quyết định vị trí." />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {o.algorithmSignals.map((sig, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 16, padding: '16px 20px',
                    background: 'var(--paper-2)', border: '1px solid var(--rule)',
                    alignItems: 'baseline',
                  }}>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)',
                      letterSpacing: '0.08em', flexShrink: 0, paddingTop: 2,
                    }}>SIG</div>
                    <div className="body" style={{ fontSize: 14 }}>{sig}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Boost option */}
            <div>
              <SectionHeader kicker="Paid Boost" title="Cách mua vị trí tốt hơn." />
              {o.boostOption ? (
                <div style={{ padding: 24, border: '1px solid var(--accent)', background: 'var(--paper)' }}>
                  <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>Có boost option</div>
                  <div className="body" style={{ fontSize: 16 }}>{o.boostOption}</div>
                </div>
              ) : (
                <div style={{ padding: 24, border: '1px solid var(--rule)', background: 'var(--paper-2)' }}>
                  <div className="body" style={{ fontSize: 16, color: 'var(--ink-3)' }}>Không có paid boost — organic ranking toàn bộ.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PEAK MONTHS + CATEGORIES ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Mùa cao điểm</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Khi sàn này gặt mạnh nhất.</h3>
              <div className="month-strip">
                {D.months.map((m) => {
                  const peak = o.peakMonths && o.peakMonths.includes(m.id);
                  return (
                    <div key={m.id}
                      className={'month-strip-cell ' + (peak ? 'peak' : '') + (m.id === 7 ? ' cur' : '')}
                      style={{ cursor: m.hasData ? 'pointer' : 'default' }}
                      onClick={() => m.hasData && go({ tab: 'months', id: m.id })}>
                      <div>{m.short}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="h-kicker">Loại tour mạnh</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Thuật toán ưu tiên gì.</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {o.strongCategories.map((c, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.08em',
                    padding: '6px 12px', border: '1px solid var(--ink)',
                    background: 'var(--paper)', textTransform: 'uppercase',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRONG TOURS + MARKETS ── */}
      <section className="section">
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Tour bán chạy trên sàn</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Những listing làm mưa làm gió.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {strongTours.map((t) => (
                  <div key={t.id} style={{
                    padding: 16, background: 'var(--paper-2)', border: '1px solid var(--rule)', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  }} onClick={() => go({ tab: 'tours', id: t.id })}>
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{t.name}</div>
                      {t.reviews && <div className="label" style={{ marginTop: 4 }}>{t.reviews.toLocaleString()} reviews · ★ {t.rating}</div>}
                    </div>
                    <div className="num" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{t.price}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-kicker">Khách chính của sàn</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Ai đang lướt và bấm mua.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {markets.map((m) => (
                  <div key={m.id} style={{
                    padding: 16, background: 'var(--paper-2)', border: '1px solid var(--rule)', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  }} onClick={() => go({ tab: 'markets', id: m.id })}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 22 }}>{m.flag}</span>
                      <div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{m.name}</div>
                        <div className="label" style={{ marginTop: 2 }}>Cầu T7: {m.demand7}</div>
                      </div>
                    </div>
                    <div className="label" style={{ color: 'var(--ink-3)' }}>→</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NET REVENUE ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader kicker="Kinh tế sàn" title="Net về tay sau phí." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[80, 150, 300].map(gross => {
              const net = Math.round(gross * (1 - o.commission / 100));
              const fee = gross - net;
              return (
                <div key={gross} style={{ padding: 24, border: '1px solid var(--rule)', background: 'var(--paper)' }}>
                  <div className="label" style={{ marginBottom: 12 }}>Tour giá ${gross}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="body" style={{ fontSize: 14, color: 'var(--ink-3)' }}>Gross</span>
                      <span className="num" style={{ fontSize: 14 }}>${gross}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="body" style={{ fontSize: 14, color: 'var(--bad)' }}>Phí {o.commission}%</span>
                      <span className="num" style={{ fontSize: 14, color: 'var(--bad)' }}>−${fee}</span>
                    </div>
                    <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                      <span className="body" style={{ fontSize: 15, fontWeight: 500 }}>Net về tay</span>
                      <span className="num" style={{ fontSize: 18, color: 'var(--ok)', fontFamily: 'var(--serif)' }}>${net}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="body" style={{ fontSize: 13, marginTop: 16, color: 'var(--ink-4)', fontStyle: 'italic' }}>
            Thanh toán: {o.paymentTerms}. {o.boostOption ? `Boost option: ${o.boostOption}.` : ''}
          </p>
        </div>
      </section>

      {/* ── OPERATOR CHECKLIST ── */}
      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Operator Playbook" title="Làm gì, làm khi nào." />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {['once', 'seasonal', 'monthly'].map(freq => {
              const items = o.checklist.filter(c => c.freq === freq);
              if (!items.length) return null;
              const freqLabel = freq === 'once' ? 'Setup một lần' : freq === 'seasonal' ? 'Theo mùa' : 'Hàng tháng';
              const freqColor = freq === 'once' ? 'var(--ok)' : freq === 'seasonal' ? 'var(--warn)' : 'var(--accent)';
              return (
                <div key={freq} style={{ marginBottom: 32 }}>
                  <div style={{
                    display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px', border: `1px solid ${freqColor}`, color: freqColor,
                    marginBottom: 16,
                  }}>{freqLabel}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {items.map((item, i) => (
                      <div key={i} style={{
                        display: 'grid', gridTemplateColumns: '20px 1fr',
                        gap: 16, padding: '16px 0',
                        borderBottom: '1px solid var(--rule-soft)',
                        alignItems: 'start',
                      }}>
                        <div style={{
                          width: 18, height: 18, border: '1.5px solid var(--rule)',
                          flexShrink: 0, marginTop: 2,
                        }} />
                        <div className="body" style={{ fontSize: 16 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

export default OtasPage;
