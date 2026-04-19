// Month tab — index (12 months) + detail (July fully filled)
import React from 'react';
import DATA from './data.js';
import { SectionHeader, Placeholder, XLink, Dot } from './shell.jsx';

function MonthsPage({ route, go }) {
  if (route.id) {
    return <MonthDetail id={route.id} go={go} />;
  }
  return <MonthsIndex go={go} />;
}

function parseBookings(str) {
  return parseInt((str || '').replace(/[^0-9]/g, '')) || 0;
}

function MonthsIndex({ go }) {
  const D = DATA;
  const months = D.months;
  const maxBookings = Math.max(...months.map(m => parseBookings(m.summary?.totalBookings)));
  const totalYear = months.reduce((acc, m) => acc + parseBookings(m.summary?.totalBookings), 0);
  const peakMonth = months.reduce((a, b) =>
    parseBookings(a.summary?.totalBookings) >= parseBookings(b.summary?.totalBookings) ? a : b
  );
  const destRegions = months[0].destinations.map(d => d.region);
  const phaseColors = { execute: 'var(--ink)', book: 'var(--accent)', prepare: 'var(--paper-3)' };
  const phaseText   = { execute: 'var(--paper)', book: 'var(--paper)', prepare: 'var(--ink-3)' };
  const phaseLabel  = { execute: '▶ EXECUTE', book: '◎ BOOK', prepare: '○ PREP' };

  return (
    <div className="page-anim">

      {/* ── Hero ── */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div className="h-kicker">Chương 01 · Tháng</div>
          <h1 className="h-display" style={{ fontSize: 72, marginBottom: 20 }}>
            Mười hai <em style={{ color: 'var(--accent)' }}>tính cách</em>,<br />
            một năm inbound.
          </h1>
          <p className="dek" style={{ maxWidth: 720 }}>
            Mỗi tháng là một thị trường con — thời tiết khác, khách khác, tour khác. Toàn bộ 12 tháng đã có dữ liệu.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 48, borderTop: '2px solid var(--ink)' }}>
            {[
              { label: 'Tổng booking ước tính / năm', value: `~${Math.round(totalYear / 1000)}K`, note: 'Ấn bản 2026' },
              { label: 'Tháng cao điểm', value: peakMonth.short, note: `${parseBookings(peakMonth.summary?.totalBookings).toLocaleString()} booking` },
              { label: 'Tháng thấp điểm', value: 'T2', note: 'Post-Tết recovery, ~52K' },
              { label: 'Mùa peak chính', value: 'T7–T8', note: 'UK / US / AU summer đồng thời' },
            ].map((s, i) => (
              <div key={i} className="stat-cell" style={{ paddingRight: 32 }}>
                <div className="label" style={{ marginBottom: 12 }}>{s.label}</div>
                <div className="bigtext" style={{ fontSize: 48 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--sans)', marginTop: 6, lineHeight: 1.4 }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Volume Timeline ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="h-kicker">Volume theo tháng</div>
          <h2 className="h-display" style={{ marginBottom: 32 }}>Nhịp booking cả năm.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {months.map(m => {
              const bookings = parseBookings(m.summary?.totalBookings);
              const pct = maxBookings > 0 ? bookings / maxBookings * 100 : 0;
              const isPeak = bookings === maxBookings;
              const mode = m.phase?.mode || 'prepare';
              const barColor = isPeak ? 'var(--accent)' : mode === 'execute' ? 'var(--ink)' : mode === 'book' ? 'var(--ok)' : 'var(--ink-4)';
              return (
                <div key={m.id}
                  onClick={() => go({ tab: 'months', id: m.id })}
                  style={{ display: 'grid', gridTemplateColumns: '52px 1fr 72px', gap: 14, alignItems: 'center', cursor: 'pointer', padding: '2px 0' }}
                >
                  <span className="folio" style={{ color: isPeak ? 'var(--accent)' : 'var(--ink-3)', fontWeight: isPeak ? 600 : 400, textAlign: 'right' }}>
                    {m.short}
                  </span>
                  <div style={{ position: 'relative', height: 30, background: 'var(--paper-3)', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: pct + '%', background: barColor, opacity: 0.8, transition: 'width 0.4s ease' }} />
                    <div style={{
                      position: 'absolute', left: 12, top: 0, bottom: 0, display: 'flex', alignItems: 'center', zIndex: 1,
                      fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, lineHeight: 1,
                      color: pct > 28 ? 'var(--paper)' : 'var(--ink-3)',
                    }}>
                      {m.headline?.split('—')[0]?.trim()}
                    </div>
                  </div>
                  <div className="num" style={{ fontSize: 13, textAlign: 'right', color: isPeak ? 'var(--accent)' : 'var(--ink-3)' }}>
                    {bookings > 0 ? `~${Math.round(bookings / 1000)}K` : '—'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Destination Heatmap ── */}
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Lịch mùa vụ điểm đến</div>
          <h2 className="h-display" style={{ marginBottom: 8 }}>Vùng nào đang vào mùa.</h2>
          <p className="dek" style={{ marginBottom: 32 }}>6 vùng × 12 tháng — nên push mạnh, cần cẩn thận, hay tránh hoàn toàn.</p>
          <div style={{ overflowX: 'auto' }}>
            {/* Month header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '192px repeat(12, 1fr)', gap: 3, marginBottom: 3 }}>
              <div />
              {months.map(m => (
                <div key={m.id} className="label" style={{ textAlign: 'center', fontSize: 9.5, letterSpacing: '0.06em' }}>{m.short}</div>
              ))}
            </div>
            {/* Destination rows */}
            {destRegions.map((region, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '192px repeat(12, 1fr)', gap: 3, marginBottom: 3 }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', paddingRight: 8 }}>
                  {region}
                </div>
                {months.map(m => {
                  const dest = m.destinations?.[ri];
                  const bg = dest?.status === 'green' ? 'var(--ok)' : dest?.status === 'yellow' ? 'var(--warn)' : dest?.status === 'red' ? 'var(--bad)' : 'var(--paper-3)';
                  return (
                    <div key={m.id}
                      title={dest ? `${m.name}: ${dest.label}` : m.name}
                      onClick={() => go({ tab: 'months', id: m.id })}
                      style={{ height: 32, background: bg, opacity: 0.8, cursor: 'pointer', transition: 'opacity 0.12s' }}
                      onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
                      onMouseLeave={e => { e.currentTarget.style.opacity = 0.8; }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          {/* Legend */}
          <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
            {[['var(--ok)', 'Push mạnh'], ['var(--warn)', 'Cẩn thận'], ['var(--bad)', 'Tránh']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                <span style={{ width: 14, height: 14, background: c, display: 'inline-block', opacity: 0.8 }} />
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Month Cards ── */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="h-kicker">12 tháng · Toàn bộ dữ liệu</div>
          <h2 className="h-display" style={{ marginBottom: 32 }}>Chọn tháng để đọc chi tiết.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {months.map(m => {
              const bookings = parseBookings(m.summary?.totalBookings);
              const markets = (m.featuredMarkets || []).slice(0, 3)
                .map(id => D.markets.find(mk => mk.id === id)).filter(Boolean);
              const mode = m.phase?.mode || 'prepare';
              return (
                <div key={m.id}
                  className="panel"
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 200 }}
                  onClick={() => go({ tab: 'months', id: m.id })}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="folio" style={{ color: 'var(--accent)', fontSize: 12 }}>{m.short}</span>
                    <span style={{
                      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '3px 7px', background: phaseColors[mode], color: phaseText[mode],
                    }}>
                      {phaseLabel[mode]}
                    </span>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 22, lineHeight: 1.1 }}>{m.name}</h3>
                  <p style={{
                    fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.45,
                    flexGrow: 1, margin: 0, fontStyle: 'italic',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {m.headline}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid var(--rule)', paddingTop: 10 }}>
                    <div>
                      <div className="label" style={{ marginBottom: 3, fontSize: 9 }}>Booking</div>
                      <div className="num" style={{ fontSize: 17, color: 'var(--ink)' }}>
                        {bookings > 0 ? `~${Math.round(bookings / 1000)}K` : '—'}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {markets.map(mk => (
                        <span key={mk.id} style={{ fontSize: 18 }} title={mk.name}>{mk.flag}</span>
                      ))}
                    </div>
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

function MonthDetail({ id, go }) {
  const D = DATA;
  const m = D.months.find((x) => x.id === id);
  if (!m) return <div className="stage section">Tháng không tồn tại</div>;

  if (!m.hasData) {
    return (
      <div className="page-anim">
        <section className="section">
          <div className="stage">
            <span className="folio" style={{ color: 'var(--accent)' }}>{m.short} / 2026</span>
            <h1 className="h-display" style={{ fontSize: 64, marginTop: 16, marginBottom: 24 }}>{m.name}</h1>
            <p className="dek" style={{ marginBottom: 48 }}>{m.note}</p>
            <Placeholder label="CHƯA CÓ DỮ LIỆU ĐẦY ĐỦ">
              Tháng này sẽ được bổ sung trong ấn bản sau.<br />
              Xem <a className="xlink" onClick={(e) => { e.preventDefault(); go({ tab: 'months', id: 7 }); }}>Tháng 7</a> để có ví dụ dữ liệu đầy đủ.
            </Placeholder>
          </div>
        </section>
      </div>
    );
  }

  const [showTopOta, setShowTopOta] = React.useState(true);
  const [showAllTours, setShowAllTours] = React.useState(false);
  const tours = m.featuredTours.map((id) => D.tours.find((t) => t.id === id)).filter(Boolean);
  const markets = m.featuredMarkets.map((id) => D.markets.find((t) => t.id === id)).filter(Boolean);
  const otaBookings = m.otaBookings || [];

  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>
              {m.short} / 2026 {m.id === 7 ? '· ẤN BẢN HIỆN TẠI' : ''}
            </span>
            <span className="folio">Chương 01 · Tháng</span>
          </div>
          <div className="h-kicker">{m.name}</div>
          <h1 className="h-display" style={{ fontSize: 88, lineHeight: 1, marginBottom: 24 }}>
            {m.id === 7 && <>Mùa hè đôi,<br /><em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>không đều.</em></>}
            {m.id === 1 && <>Mùa đỉnh <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>nối tiếp.</em></>}
            {m.id === 2 && <>Hai mặt <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>của tháng Tết.</em></>}
            {m.id === 3 && <>Spring break <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>3 tuần vàng.</em></>}
            {m.id === 10 && <>Cửa sổ <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>vàng.</em></>}
            {m.id === 11 && <>Châu Âu <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>quay lại.</em></>}
            {m.id === 12 && <>Holiday <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>peak.</em></>}
          </h1>
          <p className="dek" style={{ fontSize: 24, maxWidth: 760 }}>{m.headline}</p>
          <p className="body" style={{ fontSize: 17, maxWidth: 700, marginTop: 12 }}>{m.sub}</p>

          {/* Phase badge */}
          {m.phase && (
            <div style={{
              marginTop: 32,
              display: 'inline-flex',
              alignItems: 'flex-start',
              gap: 16,
              padding: '16px 20px',
              background: m.phase.mode === 'execute' ? 'var(--ink)' : m.phase.mode === 'book' ? 'var(--accent)' : 'var(--paper-2)',
              color: m.phase.mode === 'prepare' ? 'var(--ink)' : 'var(--paper)',
              maxWidth: 640,
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, paddingTop: 2, whiteSpace: 'nowrap' }}>
                {m.phase.mode === 'execute' ? '▶ ĐANG CHẠY' : m.phase.mode === 'book' ? '◎ ĐANG MỞ BOOK' : '○ CHUẨN BỊ'}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{m.phase.label}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, opacity: 0.8, lineHeight: 1.5 }}>{m.phase.sub}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Summary stat bar */}
      {m.summary && (
        <section className="section thin" style={{ background: 'var(--paper-2)', paddingBlock: 24 }}>
          <div className="stage">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, borderTop: '1.5px solid var(--ink)', paddingTop: 20 }}>
              <div>
                <div className="label" style={{ marginBottom: 8 }}>Tổng booking ước tính</div>
                <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 400 }}>{m.summary.totalBookings}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ok)', marginTop: 4 }}>{m.summary.vsLastYear} so với năm ngoái</div>
              </div>
              <div>
                <div className="label" style={{ marginBottom: 8 }}>Thời gian lưu trú TB</div>
                <div className="num" style={{ fontSize: 32, fontFamily: 'var(--serif)', fontWeight: 400 }}>{m.summary.avgStay}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>/ khách</div>
              </div>
              <div>
                <div className="label" style={{ marginBottom: 8 }}>Vùng dẫn đầu</div>
                <div style={{ fontSize: 24, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 4 }}>{m.summary.topRegion}</div>
              </div>
              <div>
                <div className="label" style={{ marginBottom: 8 }}>So với T7 (peak)</div>
                <div style={{ marginTop: 12 }}>
                  <div className="bar" style={{ height: 8, marginBottom: 6 }}>
                    <span style={{
                      width: (parseInt(m.summary.totalBookings.replace(/[^0-9]/g,'')) / 148000 * 100) + '%',
                      background: 'var(--accent)',
                    }} />
                  </div>
                  <div className="num" style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                    {Math.round(parseInt(m.summary.totalBookings.replace(/[^0-9]/g,'')) / 148000 * 100)}% của T7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Opening essay with drop cap */}
      {m.id === 7 && (
      <section className="section">
        <div className="stage">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48 }}>
            <div>
              <div className="h-kicker">Tổng quan</div>
              <h3 className="h-display" style={{ fontSize: 22 }}>Vì sao tháng 7 là mỏ vàng — và là mỏ rủi ro.</h3>
            </div>
            <div className="body dropcap" style={{ fontSize: 18, lineHeight: 1.65 }}>
              <p>
                Tháng 7 là giao điểm kỳ lạ của lịch nghỉ toàn cầu: các trường
                {' '}<XLink to={{ tab: 'markets', id: 'us' }} go={go}>Mỹ</XLink>,
                {' '}<XLink to={{ tab: 'markets', id: 'au' }} go={go}>Úc</XLink>,
                {' '}<XLink to={{ tab: 'markets', id: 'uk' }} go={go}>Anh</XLink>,
                {' '}<XLink to={{ tab: 'markets', id: 'ph' }} go={go}>Philippines</XLink> đồng loạt đóng cửa.
                Cùng lúc, summer break ở
                {' '}<XLink to={{ tab: 'markets', id: 'in' }} go={go}>Ấn Độ</XLink> kéo dài và nhiệt độ trong nước đẩy gia đình đi Đông Nam Á lánh nóng.
              </p>
              <p>
                Nhưng tháng 7 cũng là lúc bão nhiệt đới đầu mùa tấn công vịnh Bắc Bộ. Hạ Long — viên ngọc của tour cruise — phải tạm đóng ít nhất 1–2 ngày/tuần. Miền Trung lại đẹp nhất năm. Báo cáo này đọc tháng 7 theo ba trục: điểm đến (nóng/nguội), tour (đỉnh của đỉnh), và sàn OTA (ai đang gặt).
              </p>
            </div>
          </div>

          <blockquote className="pullquote" style={{ marginTop: 48, maxWidth: 960 }}>
            Tháng 7 là tháng duy nhất trong năm bạn có thể bán cùng một tour Hội An cho khách Mỹ, Úc, Ấn, Phi — với bốn câu chuyện hoàn toàn khác nhau.
          </blockquote>
        </div>
      </section>
      )}

      {m.id !== 7 && (
      <section className="section">
        <div className="stage">
          {m.pullquote && (
            <blockquote className="pullquote" style={{ maxWidth: 960 }}>
              {m.pullquote}
            </blockquote>
          )}
          {!m.pullquote && (
            <blockquote className="pullquote" style={{ maxWidth: 960 }}>
              {m.id === 10 && 'Tháng 10 là cửa sổ duy nhất trong năm bạn có thể đẩy cả Sapa lúa chín lẫn Phú Quốc biển lặng — cùng lúc.'}
              {m.id === 11 && 'Khách Pháp và Đức quay lại Việt Nam vào tháng 11 như thể cả năm họ chờ đúng bốn tuần này.'}
              {m.id === 12 && 'Tháng 12 không cần bán rẻ — khách đã book từ tháng 8 và họ biết chính xác họ muốn gì.'}
            </blockquote>
          )}
        </div>
      </section>
      )}

      {/* Featured tours */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
            <div>
              <div className="h-kicker">{`Tour đang nóng · ${tours.length} tour`}</div>
              <h3 className="h-display" style={{ marginBottom: 8 }}>Đáng đẩy trong tháng.</h3>
              <p className="dek" style={{ fontSize: 16, margin: 0 }}>Mỗi tour đến từ một thị trường khác, với một lý do riêng tháng này.</p>
            </div>
            {tours.length > 3 && (
              <button
                onClick={() => setShowAllTours(!showAllTours)}
                style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em',
                  textTransform: 'uppercase', background: 'none',
                  border: '1px solid var(--rule)', padding: '8px 16px',
                  cursor: 'pointer', color: 'var(--ink-2)', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 32,
                }}
              >
                {showAllTours ? 'Thu gọn ↑' : `Xem tất cả ${tours.length} tour ↓`}
              </button>
            )}
          </div>
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {(showAllTours ? tours : tours.slice(0, 3)).map((t) => {
              const booking = t.bookings && t.bookings[m.id];
              const peakBooking = t.bookings && Math.max(...Object.values(t.bookings));
              const pct = booking && peakBooking ? Math.round(booking / peakBooking * 100) : null;
              const tMarkets = (t.markets || []).slice(0,3).map(mid => D.markets.find(x => x.id === mid)).filter(Boolean);
              const tOtas = (t.otas || []).slice(0,2);
              const hotNote = t.hotInMonth && t.hotInMonth[m.id];
              return (
              <div key={t.id} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 200px 100px 120px 100px',
                borderBottom: '1px solid var(--rule)',
                alignItems: 'start',
                cursor: 'pointer',
              }} onClick={() => go({ tab: 'tours', id: t.id })}>
                {/* Tour name + note */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <h4 className="h-display" style={{ fontSize: 20, margin: 0 }}>{t.name}</h4>
                    {t.trending && (
                      <span style={{ fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--accent)', color: '#fff', padding: '2px 8px', borderRadius: 2, whiteSpace: 'nowrap' }}>
                        ↑ trending{t.trendingNote ? ` · ${t.trendingNote}` : ''}
                      </span>
                    )}
                  </div>
                  <div className="label" style={{ color: 'var(--ink-3)', marginBottom: 8 }}>{t.region} · {t.province}</div>
                  {hotNote && (
                    <div style={{ fontSize: 13, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent)', lineHeight: 1.4 }}>
                      {hotNote}
                    </div>
                  )}
                </div>
                {/* Thị trường */}
                <div>
                  <div className="label" style={{ marginBottom: 8 }}>Khách mục tiêu</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {tMarkets.map(mk => (
                      <span key={mk.id} onClick={(e) => { e.stopPropagation(); go({ tab: 'markets', id: mk.id }); }}
                        style={{ fontSize: 20, cursor: 'pointer' }}>
                        {mk.flag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Sàn */}
                <div>
                  <div className="label" style={{ marginBottom: 8 }}>Sàn chính</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {tOtas.map(oid => (
                      <span key={oid} onClick={(e) => { e.stopPropagation(); go({ tab: 'otas', id: oid }); }}
                        style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-2)', cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'var(--rule)' }}>
                        {oid}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Giá + Booking tháng này */}
                <div>
                  <div className="label" style={{ marginBottom: 4 }}>Giá</div>
                  <div className="num" style={{ fontSize: 14, marginBottom: 12 }}>{t.price}</div>
                  <div className="label" style={{ marginBottom: 4 }}>Booking {m.short}</div>
                  <div className="num" style={{ fontSize: 20, fontWeight: 500, fontFamily: 'var(--serif)', color: booking ? 'var(--ink)' : 'var(--ink-4)' }}>
                    {booking ? booking.toLocaleString() : '—'}
                  </div>
                </div>
                {/* vs Peak bar */}
                <div>
                  <div className="label" style={{ marginBottom: 8 }}>vs Peak</div>
                  {pct !== null ? (
                    <>
                      <div className="bar" style={{ marginBottom: 6 }}>
                        <span style={{ width: pct + '%', background: pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--accent)' : 'var(--ink-4)' }} />
                      </div>
                      <div className="num" style={{ fontSize: 12, color: 'var(--ink-3)' }}>{pct}% of peak</div>
                    </>
                  ) : <span style={{ color: 'var(--ink-4)', fontSize: 12, fontFamily: 'var(--mono)' }}>—</span>}
                </div>
              </div>
              );
            })}
            {!showAllTours && tours.length > 3 && (
              <div
                onClick={() => setShowAllTours(true)}
                style={{ padding: '16px 0', color: 'var(--ink-4)', fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.08em', cursor: 'pointer' }}
              >
                + {tours.length - 3} tour khác...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Điểm đến tháng này"
            title={`Đi đâu ${m.short}?`}
            dek="Xếp theo mức độ thuận lợi — từ điểm đang vào mùa đến nơi nên tránh."
          />
          {(() => {
            // Province → destination region key (partial match against d.region)
            const provinceRegion = {
              'Hà Giang': 'Sapa / Hà Giang',
              'Lào Cai':  'Sapa / Hà Giang',
              'Thanh Hóa':'Sapa / Hà Giang',
              'Hội An':   'Đà Nẵng / Hội An / Nha Trang',
              'Đà Nẵng':  'Đà Nẵng / Hội An / Nha Trang',
              'Khánh Hòa':'Đà Nẵng / Hội An / Nha Trang',
              'Huế':      'Đà Nẵng / Hội An / Nha Trang',
              'Bình Định':'Đà Nẵng / Hội An / Nha Trang',
              'HCMC':     'HCMC / Đà Lạt / Mekong',
              'Tiền Giang':'HCMC / Đà Lạt / Mekong',
              'Lâm Đồng': 'HCMC / Đà Lạt / Mekong',
              'BR-VT':    'HCMC / Đà Lạt / Mekong',
              'Hà Nội':   'Hà Nội',
              'Ninh Bình':'Hà Nội',
              'Kiên Giang':'Phú Quốc',
              'Hạ Long':  'Hạ Long Bay',
              'Hải Phòng':'Hạ Long Bay',
              'Quảng Ninh':'Hạ Long Bay',
            };
            // For each destination region, find tours (from ALL tours, not just featuredTours) whose province maps here
            const toursForRegion = (region) =>
              D.tours.filter(t => !t.placeholder && provinceRegion[t.province] === region && t.bookings?.[m.id]);

            return (
              <div style={{ borderTop: '2px solid var(--ink)' }}>
                {[...m.destinations].sort((a, b) => {
                  const order = { green: 0, yellow: 1, red: 2 };
                  return order[a.status] - order[b.status] || (b.visitors || 0) - (a.visitors || 0);
                }).map((d, i) => {
                  const regionTours = toursForRegion(d.region);
                  return (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '40px 1fr 140px 1.5fr',
                      gap: 24, padding: '20px 0',
                      borderBottom: '1px solid var(--rule)',
                      alignItems: 'start',
                    }}>
                      <div style={{ paddingTop: 4 }}><Dot status={d.status} /></div>
                      <div>
                        <h4 className="h-display" style={{ fontSize: 22, marginBottom: 4 }}>{d.region}</h4>
                        {d.visitors && <div className="label" style={{ color: 'var(--ink-4)', fontSize: 11, marginTop: 4 }}>~{d.visitors}k khách/tháng</div>}
                        {regionTours.length > 0 && (
                          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {regionTours.map(t => {
                              const bk = t.bookings[m.id];
                              return (
                                <div key={t.id}
                                  onClick={() => go({ tab: 'tours', id: t.id })}
                                  style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                  <span style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--ink-2)' }}>{t.name}</span>
                                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.05em' }}>
                                    ~{bk >= 1000 ? (bk / 1000).toFixed(1) + 'k' : bk} booking
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <div className="label" style={{
                        color: d.status === 'green' ? 'var(--ok)' : d.status === 'yellow' ? 'var(--warn)' : 'var(--bad)',
                        paddingTop: 4,
                      }}>{d.label}</div>
                      <div className="body" style={{ fontSize: 15 }}>{d.note}</div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Markets */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Khách từ đâu tháng này?"
            title={m.id === 7 ? 'Năm quốc tịch, năm câu chuyện hè.' : 'Thị trường đang vào mùa.'}
          />
          <div className="grid-12">
            {markets.map((mk, i) => (
              <div key={mk.id} style={{
                gridColumn: 'span 4',
                padding: '24px 0',
                borderTop: '2px solid var(--ink)',
                cursor: 'pointer',
              }} onClick={() => go({ tab: 'markets', id: mk.id })}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{mk.flag}</span>
                  <span className="label" style={{
                    color: mk.demand7 === 'CAO' ? 'var(--ok)' : 'var(--warn)'
                  }}>CẦU {mk.demand7}</span>
                </div>
                <h4 className="h-display" style={{ fontSize: 24, marginBottom: 8 }}>{mk.name}</h4>
                <div className="body" style={{ fontSize: 14, marginBottom: 12, color: 'var(--ink-2)' }}>
                  <em>{mk.why7 || mk.peakMonths && mk.peakMonths.includes(m.id) ? (mk.why7 || 'Đang trong mùa cao điểm.') : 'Nhu cầu ở mức trung bình.'}</em>
                </div>
                <div className="label" style={{ marginBottom: 6 }}>Ngân sách</div>
                <div className="num" style={{ fontSize: 14, marginBottom: 12 }}>{mk.budget}</div>
                <div className="label" style={{ marginTop: 16 }}>Xem chi tiết →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTA share */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1.5fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Booking theo sàn · {m.short}</div>
              <h3 className="h-display">Sàn nào đang gặt?</h3>
              <p className="body" style={{ fontSize: 15, marginTop: 20, color: 'var(--ink-3)' }}>
                Ước tính lượt booking theo sàn — xếp từ cao xuống thấp. Nhấp vào sàn có mũi tên để xem chi tiết.
              </p>
              <button
                onClick={() => setShowTopOta(!showTopOta)}
                style={{
                  marginTop: 24,
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: '1px solid var(--rule)',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  color: 'var(--ink-2)',
                }}
              >
                {showTopOta ? `Xem tất cả ${otaBookings.length} sàn ↓` : 'Thu gọn ↑'}
              </button>
            </div>
            <div>
              {(() => {
                const maxEst = Math.max(...otaBookings.map(b => b.est));
                const displayed = showTopOta ? otaBookings.slice(0, 5) : otaBookings;
                return (<>
                  {displayed.map((b) => {
                    const ota = D.otas.find((o) => o.id === b.id);
                    const clickable = !!ota;
                    return (
                      <div key={b.id} className="bar-row" style={{ cursor: clickable ? 'pointer' : 'default' }}
                        onClick={() => clickable && go({ tab: 'otas', id: b.id })}>
                        <span className="bar-row-label">
                          {b.name}
                          {clickable && <span style={{ color: 'var(--ink-4)', fontSize: 11 }}> ↗</span>}
                          {b.note && <span style={{ color: 'var(--ink-4)', fontSize: 11, marginLeft: 6 }}>· {b.note}</span>}
                        </span>
                        <div className="bar accent"><span style={{ width: (b.est / maxEst * 100) + '%' }} /></div>
                        <span className="bar-row-val">~{(b.est / 1000).toFixed(1)}k</span>
                      </div>
                    );
                  })}
                  {showTopOta && otaBookings.length > 5 && (
                    <div style={{ marginTop: 8, color: 'var(--ink-4)', fontSize: 12, fontFamily: 'var(--mono)', paddingLeft: 4 }}>
                      + {otaBookings.length - 5} sàn khác...
                    </div>
                  )}
                </>);
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* OTA recommendation */}
      {m.otaRec && (
        <section className="section thin" style={{ background: 'var(--paper)' }}>
          <div className="stage">
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, alignItems: 'baseline' }}>
              <div>
                <div className="h-kicker">Sàn ưu tiên tháng</div>
                <div style={{ fontSize: 36, fontFamily: 'var(--serif)', fontWeight: 500, marginTop: 8 }}>
                  {m.otaRec.ota === 'viator' ? 'Viator' : m.otaRec.ota === 'gyg' ? 'GetYourGuide' : m.otaRec.ota === 'direct' ? 'Direct' : m.otaRec.ota === 'klook' ? 'Klook' : 'MakeMyTrip'}
                </div>
                <div className="label" style={{ marginTop: 8, color: 'var(--accent)' }}>
                  {(() => {
                    const b = m.otaBookings && m.otaBookings.find(x => x.id === m.otaRec.ota);
                    return b ? `~${(b.est/1000).toFixed(1)}k lượt · ${m.short}` : m.short;
                  })()}
                </div>
              </div>
              <div className="callout" style={{ margin: 0 }}>
                <span className="callout-label">Tại sao sàn này tháng này</span>
                {m.otaRec.reason}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Editorial insight block */}
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Nhận định thị trường</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {m.insight ? <>
              <div className="callout">
                <span className="callout-label">Cơ hội nổi bật</span>
                {m.insight.opp}
              </div>
              <div className="callout">
                <span className="callout-label">Rủi ro / Action cần làm ngay</span>
                {m.insight.risk}
              </div>
            </> : <>
              {m.id === 7 && <>
                <div className="callout">
                  <span className="callout-label">Cơ hội nổi bật</span>
                  Hội An Lantern Festival 25/7: bán tour 3 ngày với đêm hội đèn như điểm nhấn thay vì background. Khách Mỹ sẵn trả thêm $40–80 cho "specific date experience".
                </div>
                <div className="callout">
                  <span className="callout-label">Rủi ro cần quản lý</span>
                  Typhoon risk Hạ Long — cần cancellation policy rõ 48h và option refund hoặc reschedule. Không có policy này sẽ mất khách Úc và Anh.
                </div>
              </>}
              {m.id === 10 && <>
                <div className="callout">
                  <span className="callout-label">Cơ hội nổi bật</span>
                  Tháng 10 là tháng duy nhất Sapa lúa chín vàng + Hội An khô + Hạ Long trong — push bundle "đỉnh Bắc + nghỉ Trung" cho khách Âu 10–14 ngày. Margin cao nhất năm.
                </div>
                <div className="callout">
                  <span className="callout-label">Action ngay</span>
                  Đây là tháng GetYourGuide mạnh nhất. Cập nhật hero image theo seasonal (lúa vàng) và thêm tag "Autumn Vietnam" để bắt traffic tìm kiếm từ UK, Đức, Pháp.
                </div>
              </>}
              {m.id === 11 && <>
                <div className="callout">
                  <span className="callout-label">Cơ hội nổi bật</span>
                  Khách Pháp book tour Huế–Hội An 10–14 ngày, budget $3,000–4,500. Họ muốn "lịch sử có chiều sâu" — package Cố Đô + làng nghề + ẩm thực authentic sẽ hơn hẳn day-trip thông thường.
                </div>
                <div className="callout">
                  <span className="callout-label">Action ngay</span>
                  Direct booking tháng 11 chiếm phần quan trọng — đẩy email campaign tới repeat clients từ năm ngoái với early-bird T11 discount 10%. ROI cao hơn OTA listing mới.
                </div>
              </>}
              {m.id === 12 && <>
                <div className="callout">
                  <span className="callout-label">Cơ hội nổi bật</span>
                  Christmas–New Year: khách Mỹ, Anh book từ tháng 8–9. Nếu bạn chưa đầy lịch T12, vấn đề nằm ở listing visibility, không phải demand. Audit Viator ranking ngay.
                </div>
                <div className="callout">
                  <span className="callout-label">Action ngay</span>
                  Phú Quốc + Nha Trang peak beach. Thêm "New Year countdown" experience vào mô tả — đơn giản như đặt chỗ rooftop party là đủ để justify tăng giá 20–30%.
                </div>
              </>}
            </>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MonthsPage;
