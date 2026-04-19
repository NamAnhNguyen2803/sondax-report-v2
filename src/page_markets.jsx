// Markets tab — index + detail (v2 — chân dung đầy đủ)
import React from 'react';
import DATA from './data.js';
import { SectionHeader, Placeholder } from './shell.jsx';

function MarketsPage({ route, go }) {
  if (route.id) return <MarketDetail id={route.id} go={go} />;
  return <MarketsIndex go={go} />;
}

// ─── INDEX ───────────────────────────────────────────────────────────────────

function MarketsIndex({ go }) {
  const D = DATA;
  const full = D.markets.filter((m) => !m.placeholder);
  const placeholders = D.markets.filter((m) => m.placeholder);

  return (
    <div className="page-anim">
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Chương 03 · Khách</div>
          <h1 className="h-display" style={{ fontSize: 72, marginBottom: 20 }}>
            Mười thị trường,<br />
            <em style={{ color: 'var(--accent)' }}>năm chân dung</em> đầy đủ.
          </h1>
          <p className="dek" style={{ maxWidth: 720 }}>
            Khách T7 không phải một khối. Khách Mỹ đi 2–3 tuần với vợ con, khách Phi đi 4 ngày theo barkada, khách Ấn đi Hạ Long ăn chay. Đọc khách để biết bán câu chuyện nào cho ai.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="stage">
          <SectionHeader kicker="Chân dung đầy đủ T7" title="Năm thị trường dẫn dắt." />
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {full.map((m) => (
              <div key={m.id} className="row-click" style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 120px 160px 160px',
                gap: 24, padding: '32px 0',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'baseline', cursor: 'pointer',
              }} onClick={() => go({ tab: 'markets', id: m.id })}>
                <div style={{ fontSize: 36 }}>{m.flag}</div>
                <div>
                  <h3 className="h-display" style={{ fontSize: 28, marginBottom: 8 }}>{m.name}</h3>
                  <p className="body" style={{ fontSize: 14, color: 'var(--ink-3)', fontStyle: 'italic' }}>{m.why7}</p>
                </div>
                <div>
                  <div className="label">Cầu T7</div>
                  <div style={{ marginTop: 4, fontFamily: 'var(--mono)', fontSize: 13, color: m.demand7 === 'CAO' ? 'var(--ok)' : 'var(--warn)', fontWeight: 500 }}>
                    {m.demand7}
                  </div>
                </div>
                <div>
                  <div className="label">Ngân sách</div>
                  <div className="num" style={{ marginTop: 4, fontSize: 13 }}>{m.budget}</div>
                </div>
                <div>
                  <div className="label">Lead time</div>
                  <div className="num" style={{ marginTop: 4, fontSize: 13 }}>{m.leadTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader kicker="Chờ dữ liệu" title="Năm thị trường khung." dek="Có thông tin cơ bản, chờ chân dung đầy đủ." />
          <div className="grid-3">
            {placeholders.map((m) => (
              <div key={m.id} className="panel" style={{ background: 'var(--paper)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{m.flag}</span>
                  <span className="label" style={{ color: 'var(--ink-4)' }}>CHỜ DATA</span>
                </div>
                <h4 className="h-display" style={{ fontSize: 22, marginBottom: 8 }}>{m.name}</h4>
                <div className="kv"><span className="kv-k">Ngân sách</span><span className="kv-v num">{m.budget}</span></div>
                <div className="kv"><span className="kv-k">Cầu T7</span><span className="kv-v">{m.demand7}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── DETAIL ──────────────────────────────────────────────────────────────────

function MarketDetail({ id, go }) {
  const D = DATA;
  const m = D.markets.find((x) => x.id === id);
  if (!m) return <div className="stage section">Thị trường không tồn tại</div>;

  if (!m.hasDetail) {
    return (
      <div className="page-anim">
        <section className="section">
          <div className="stage">
            <div style={{ fontSize: 48, marginBottom: 16 }}>{m.flag}</div>
            <h1 className="h-display" style={{ fontSize: 64, marginBottom: 20 }}>{m.name}</h1>
            <p className="dek">Cầu T7: {m.demand7} · Ngân sách {m.budget} · Lead time {m.leadTime}</p>
            <div style={{ marginTop: 32 }}>
              <Placeholder label="CHÂN DUNG CHƯA ĐẦY ĐỦ">
                Dữ liệu chi tiết chờ cập nhật.<br />
                Xem <a className="xlink" onClick={(e) => { e.preventDefault(); go({ tab: 'markets', id: 'us' }); }}>Mỹ</a> làm ví dụ.
              </Placeholder>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const tours = (m.favTours || []).map((tid) => D.tours.find((t) => t.id === tid)).filter(Boolean);
  const otas = (m.favOtas || []).map((oid) => D.otas.find((o) => o.id === oid)).filter(Boolean);
  const hasPersonas = m.personas && m.personas.length > 0;
  const hasBooking = !!m.booking;
  const hasLocalization = m.localization && m.localization.length > 0;
  const hasOpRisk = m.opportunity || m.risk;

  return (
    <div className="page-anim">

      {/* ── 1. HERO ── */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>THỊ TRƯỜNG · {m.volume || ''}</span>
            <span className="folio">Chương 03 · Khách</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 32, marginBottom: 24 }}>
            <span style={{ fontSize: 96 }}>{m.flag}</span>
            <h1 className="h-display" style={{ fontSize: 88, lineHeight: 1 }}>{m.name}</h1>
          </div>
          <p className="dek" style={{ fontSize: 22, maxWidth: 760 }}>{m.portrait}</p>
        </div>
      </section>

      {/* ── 2. KEY STATS ── */}
      <section className="section thin" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-4">
            <div className="stat-cell">
              <div className="label">Cầu T7</div>
              <div className="bigtext" style={{ color: m.demand7 === 'CAO' ? 'var(--ok)' : 'var(--warn)', fontSize: 48 }}>{m.demand7}</div>
              <div className="note">{m.why7}</div>
            </div>
            <div className="stat-cell">
              <div className="label">Ngân sách trung bình</div>
              <div className="bigtext num" style={{ fontSize: 40 }}>{m.budget}</div>
              <div className="note">/ người / chuyến</div>
            </div>
            <div className="stat-cell">
              <div className="label">Lead time</div>
              <div className="bigtext num" style={{ fontSize: 40 }}>{m.leadTime}</div>
              <div className="note">trước khi khởi hành</div>
            </div>
            <div className="stat-cell">
              <div className="label">Nhóm đi</div>
              <div className="bigtext" style={{ fontSize: 40 }}>{m.party}</div>
              <div className="note">{m.visa}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PERSONA BREAKDOWN ── */}
      {hasPersonas && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Chân dung hành vi" title="Không phải một khối." />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {m.personas.map((p, i) => (
                <PersonaCard key={p.id} p={p} idx={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. LỊCH NĂM ── */}
      <section className="section" style={{ background: hasPersonas ? 'var(--paper-2)' : 'var(--paper)' }}>
        <div className="stage">
          <SectionHeader kicker="Lịch năm" title="Khi nào họ đến." />
          <div className="month-strip" style={{ maxWidth: 720 }}>
            {D.months.map((mm) => {
              const peak = m.peakMonths && m.peakMonths.includes(mm.id);
              const shoulder = m.shoulderMonths && m.shoulderMonths.includes(mm.id);
              return (
                <div
                  key={mm.id}
                  className={'month-strip-cell ' + (peak ? 'peak' : shoulder ? 'shoulder' : '') + (mm.id === 7 ? ' cur' : '')}
                  style={{ cursor: mm.hasData ? 'pointer' : 'default' }}
                  onClick={() => mm.hasData && go({ tab: 'months', id: mm.id })}
                >
                  <div>{mm.short}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 16, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--accent)', marginRight: 6, verticalAlign: 'middle' }} />Đỉnh</span>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--accent-soft)', marginRight: 6, verticalAlign: 'middle' }} />Shoulder</span>
            <span><span style={{ display: 'inline-block', width: 10, height: 10, border: '2px solid var(--ink)', marginRight: 6, verticalAlign: 'middle' }} />Hiện tại</span>
          </div>
        </div>
      </section>

      {/* ── 5. HÀNH VI ĐẶT TOUR ── */}
      {hasBooking && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Hành vi booking" title="Họ tìm, quyết định, và trả tiền như thế nào." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
              <div>
                <div className="h-kicker" style={{ marginBottom: 12 }}>Trigger chốt booking</div>
                <p className="body" style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>{m.booking.trigger}</p>
              </div>
              <div>
                <div className="h-kicker" style={{ marginBottom: 12 }}>Lead time · Device</div>
                <p className="body" style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>{m.booking.leadTime}</p>
                <p className="body" style={{ fontSize: 15, marginTop: 8, color: 'var(--ink-3)' }}>{m.booking.device}</p>
              </div>
              <div>
                <div className="h-kicker" style={{ marginBottom: 12 }}>Thanh toán</div>
                <p className="body" style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)' }}>{m.booking.payment}</p>
              </div>
            </div>

            {/* Channel stack */}
            <div className="h-kicker" style={{ marginBottom: 16 }}>Kênh đặt tour — thứ tự ưu tiên</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {m.booking.channels.map((ch, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '120px 80px 1fr',
                  gap: 20, padding: '16px 20px',
                  background: ch.role === 'PRIMARY' ? 'var(--paper-2)' : 'var(--paper)',
                  border: '1px solid var(--rule)',
                  alignItems: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500 }}>{ch.name}</div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
                      padding: '2px 8px',
                      background: ch.role === 'PRIMARY' ? 'var(--ink)' : ch.role === 'SECONDARY' ? 'var(--rule)' : 'transparent',
                      color: ch.role === 'PRIMARY' ? 'var(--paper)' : 'var(--ink-3)',
                      border: ch.role === 'TERTIARY' ? '1px solid var(--rule)' : 'none',
                    }}>{ch.role}</span>
                  </div>
                  <div className="body" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{ch.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. OTA + TOURS ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Tour ưa chuộng</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Họ đang book cái gì.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {tours.map((t) => (
                  <div key={t.id} style={{
                    padding: 16, background: 'var(--paper)', border: '1px solid var(--rule)',
                    cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  }} onClick={() => go({ tab: 'tours', id: t.id })}>
                    <div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{t.name}</div>
                      <div className="label" style={{ marginTop: 4 }}>{t.region} · {t.province}</div>
                    </div>
                    <div className="num" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{t.price}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-kicker">Sàn hay dùng</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Họ đặt qua đâu.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {otas.map((o) => (
                  <div key={o.id} style={{
                    padding: 16, background: 'var(--paper)', border: '1px solid var(--rule)', cursor: 'pointer',
                  }} onClick={() => go({ tab: 'otas', id: o.id })}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>{o.name}</div>
                      <div className="label num">{o.share7}% T7</div>
                    </div>
                    <div className="body" style={{ fontSize: 13, marginTop: 6, color: 'var(--ink-3)' }}>{o.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. LOCALIZATION ── */}
      {hasLocalization && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Localization" title="Phục vụ đúng, không phải dịch sai." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {m.localization.map((l, i) => (
                <div key={i} style={{
                  padding: '20px 24px',
                  border: '1px solid var(--rule)',
                  background: 'var(--paper)',
                }}>
                  <div className="h-kicker" style={{ marginBottom: 8 }}>{l.lever}</div>
                  <p className="body" style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)' }}>{l.what}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 8. CƠ HỘI & RỦI RO ── */}
      {hasOpRisk && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="stage">
            <SectionHeader kicker="Phân tích chiến lược" title="Cơ hội và rủi ro." />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              {m.opportunity && (
                <div style={{ padding: '28px 32px', background: 'var(--paper)', borderLeft: '3px solid var(--ok)' }}>
                  <div className="h-kicker" style={{ color: 'var(--ok)', marginBottom: 12 }}>Cơ hội</div>
                  <p className="body" style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)' }}>{m.opportunity}</p>
                </div>
              )}
              {m.risk && (
                <div style={{ padding: '28px 32px', background: 'var(--paper)', borderLeft: '3px solid var(--warn)' }}>
                  <div className="h-kicker" style={{ color: 'var(--warn)', marginBottom: 12 }}>Rủi ro</div>
                  <p className="body" style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)' }}>{m.risk}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. PULLQUOTE ── */}
      <section className="section thin">
        <div className="stage" style={{ maxWidth: 960 }}>
          <blockquote className="pullquote">
            {m.portrait.split('.')[0]}.
          </blockquote>
        </div>
      </section>

    </div>
  );
}

// ─── PERSONA CARD ─────────────────────────────────────────────────────────────

function PersonaCard({ p, idx }) {
  const [open, setOpen] = React.useState(idx === 0);
  const tierColor = p.tier === 'PRIMARY' ? 'var(--ink)' : p.tier === 'SECONDARY' ? 'var(--ink-3)' : 'var(--ink-4)';

  return (
    <div style={{ border: '1px solid var(--rule)', background: 'var(--paper)' }}>
      {/* Header row — always visible */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: 'grid',
          gridTemplateColumns: '80px 1fr 120px 180px 40px',
          gap: 20, padding: '20px 24px',
          cursor: 'pointer', alignItems: 'center',
        }}
      >
        <div>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
            padding: '3px 8px',
            background: p.tier === 'PRIMARY' ? 'var(--ink)' : 'transparent',
            color: p.tier === 'PRIMARY' ? 'var(--paper)' : tierColor,
            border: p.tier !== 'PRIMARY' ? `1px solid ${tierColor}` : 'none',
          }}>{p.tier}</span>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>{p.name}</div>
          <div className="label" style={{ marginTop: 4 }}>{p.age} · {p.size}</div>
        </div>
        <div>
          <div className="label">Share ước tính</div>
          <div className="num" style={{ fontSize: 20, marginTop: 2 }}>{p.share}%</div>
        </div>
        <div>
          <div className="label">Ngân sách</div>
          <div className="num" style={{ fontSize: 13, marginTop: 4 }}>{p.budget}</div>
        </div>
        <div style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: 16, color: 'var(--ink-3)' }}>
          {open ? '−' : '+'}
        </div>
      </div>

      {/* Expanded detail */}
      {open && (
        <div style={{
          padding: '0 24px 24px 24px',
          borderTop: '1px solid var(--rule)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 20 }}>
            <PersonaField label="Motivation" value={p.motivation} />
            <PersonaField label="Trigger chốt" value={p.trigger} />
            <PersonaField label="Pain point" value={p.pain} />
            <PersonaField label="Booking channel" value={p.booking} />
          </div>
          {p.device && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--rule)', display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="label">Device / Payment:</span>
              <span className="body" style={{ fontSize: 13, color: 'var(--ink-2)' }}>{p.device}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PersonaField({ label, value }) {
  return (
    <div>
      <div className="h-kicker" style={{ marginBottom: 8 }}>{label}</div>
      <p className="body" style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--ink-2)' }}>{value}</p>
    </div>
  );
}

export default MarketsPage;
