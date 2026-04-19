// Tours tab — index + detail
import React, { useState } from 'react';
import DATA from './data.js';
import { SectionHeader, Placeholder, MarketChip, OtaChip, XLink } from './shell.jsx';
import HalongHubPage from './page_halong.jsx';

function ToursPage({ route, go }) {
  if (route.id === 'halong-hub') return <HalongHubPage go={go} />;
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
          {/* Halong Hub featured card */}
          <div style={{
            border: '2px solid var(--ink)',
            padding: 32,
            marginBottom: 48,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'center',
            cursor: 'pointer',
            background: 'var(--paper)',
          }} onClick={() => go({ tab: 'tours', id: 'halong-hub' })}>
            <div>
              <div className="label" style={{ marginBottom: 8, color: 'var(--accent)' }}>NGHIÊN CỨU THỊ TRƯỜNG ĐẦY ĐỦ</div>
              <h3 className="h-display" style={{ fontSize: 32, marginBottom: 12 }}>Cruise Vịnh Hạ Long</h3>
              <p className="body" style={{ fontSize: 16, color: 'var(--ink-2)', maxWidth: 600 }}>
                Thị trường $580–680M · 6 biến thể tour · Top 3 đối thủ · Ma trận OTA × thị trường · 7 pain points · Design levers theo từng quốc tịch.
              </p>
              <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Day Cruise', 'Overnight 1N2D', 'Premium 2N3D', 'Lan Hạ Bay ↑', 'Luxury', 'Seaplane ↑'].map((v) => (
                  <span key={v} style={{
                    fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em',
                    padding: '4px 10px', border: '1px solid var(--rule)',
                    textTransform: 'uppercase', color: 'var(--ink-3)',
                  }}>{v}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 48, color: 'var(--accent)', lineHeight: 1 }}>↗</div>
              <div className="label" style={{ marginTop: 8 }}>Đọc báo cáo</div>
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

  const markets = t.markets.map((id) => D.markets.find((m) => m.id === id));
  const otas = t.otas.map((id) => D.otas.find((o) => o.id === id));

  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section" style={{ paddingBlock: '72px 48px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
            <span className="folio" style={{ color: 'var(--accent)' }}>TOUR · {t.region.toUpperCase()}</span>
            <span className="folio">{t.province}</span>
          </div>
          <h1 className="h-display" style={{ fontSize: 80, lineHeight: 1, marginBottom: 24 }}>
            {t.name}
          </h1>
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
        </div>
      </section>

      {/* USP callout */}
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
              <h3 className="h-display" style={{ fontSize: 32, marginBottom: 16 }}>
                {t.hotInMonth[7]}
              </h3>
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

      {/* Markets + OTAs */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div className="h-kicker">Thị trường nguồn</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Ai đang book.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {markets.map((m) => (
                  <div key={m.id} style={{ padding: 16, background: 'var(--paper)', border: '1px solid var(--rule)', cursor: 'pointer' }}
                       onClick={() => go({ tab: 'markets', id: m.id })}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 24 }}>{m.flag}</span>
                        <div>
                          <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>{m.name}</div>
                          <div className="label" style={{ marginTop: 2 }}>Cầu T7: {m.demand7}</div>
                        </div>
                      </div>
                      <span className="label" style={{ color: 'var(--ink-3)' }}>→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="h-kicker">Sàn phân phối</div>
              <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20 }}>Đưa lên đâu.</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {otas.map((o) => (
                  <div key={o.id} style={{ padding: 16, background: 'var(--paper)', border: '1px solid var(--rule)', cursor: 'pointer' }}
                       onClick={() => go({ tab: 'otas', id: o.id })}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>{o.name}</div>
                      <div className="label num">{o.share7}% T7 · {o.commission}% phí</div>
                    </div>
                    <div className="body" style={{ fontSize: 13, marginTop: 6, color: 'var(--ink-3)' }}>{o.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitors */}
      {t.competitors && (
        <section className="section">
          <div className="stage">
            <SectionHeader kicker="Đối thủ cạnh tranh" title="Ba tour ngang tầm cùng kiểu." />
            <table className="t">
              <thead>
                <tr>
                  <th>Tour</th>
                  <th>Sàn</th>
                  <th className="num">Rating</th>
                  <th className="num">Reviews</th>
                  <th className="num">Giá</th>
                  <th>Khác biệt</th>
                </tr>
              </thead>
              <tbody>
                {t.competitors.map((c, i) => (
                  <tr key={i}>
                    <td style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>{c.name}</td>
                    <td><OtaChip id={c.ota} go={go} /></td>
                    <td className="num">{c.rating}</td>
                    <td className="num">{c.reviews.toLocaleString()}</td>
                    <td className="num">{c.price}</td>
                    <td style={{ fontSize: 13, color: 'var(--ink-3)', fontStyle: 'italic' }}>{c.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

export default ToursPage;
