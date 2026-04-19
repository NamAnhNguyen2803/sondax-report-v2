// Home page: masthead, hero, 4 tab intros, quick stats
import React from 'react';
import DATA from './data.js';
import { MonthChip, TourChip, MarketChip, OtaChip, XLink, SectionHeader } from './shell.jsx';

function parseBookings(str) {
  return parseInt((str || '').replace(/[^0-9]/g, '')) || 0;
}

function Home({ go }) {
  const D = DATA;
  const months = D.months;
  const totalYear = months.reduce((acc, m) => acc + parseBookings(m.summary?.totalBookings), 0);
  const peakMonth = months.reduce((a, b) =>
    parseBookings(a.summary?.totalBookings) >= parseBookings(b.summary?.totalBookings) ? a : b
  );
  const topOta = D.otas.reduce((a, b) => (a.share7 >= b.share7 ? a : b));
  const topMarket = D.markets.find(m => m.hasDetail) || D.markets[0];

  return (
    <div className="page-anim">
      {/* Hero */}
      <section className="section" style={{ paddingBlock: '80px 64px' }}>
        <div className="stage">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32 }}>
            <span className="folio">Ấn bản 2026 · 12 tháng đầy đủ</span>
            <span className="folio">Phát hành nội bộ · v1.0</span>
          </div>
          <div className="h-kicker">Báo cáo thị trường khách quốc tế đến Việt Nam</div>
          <h1 className="h-display" style={{ fontSize: 96, lineHeight: 0.98, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Mười hai tháng,<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>một thị trường.</em>
          </h1>
          <p className="dek" style={{ fontSize: 24, maxWidth: 760 }}>
            Dữ liệu booking inbound Việt Nam theo từng tháng — điểm đến, tour, thị trường nguồn, sàn OTA.
            Đọc để biết <em>khi nào</em> bán cái gì, cho ai, qua đâu.
          </p>
        </div>
      </section>

      {/* Quick stats — 4 big numbers từ data */}
      <section className="section thin" style={{ paddingBlock: 32, background: 'var(--paper-2)' }}>
        <div className="stage">
          <div className="grid-4">
            <div className="stat-cell">
              <div className="label">Tổng booking ước tính / năm</div>
              <div className="bigtext num">~{Math.round(totalYear / 1000)}K</div>
              <div className="note">Ấn bản 2026 · {months.filter(m => m.hasData).length}/12 tháng có data</div>
            </div>
            <div className="stat-cell">
              <div className="label">Tháng cao điểm</div>
              <div className="bigtext">{peakMonth.short}</div>
              <div className="note">{peakMonth.name} · ~{Math.round(parseBookings(peakMonth.summary?.totalBookings) / 1000)}K booking</div>
            </div>
            <div className="stat-cell">
              <div className="label">Thị trường dẫn đầu</div>
              <div className="bigtext" style={{ fontSize: 42 }}>{topMarket.flag} {topMarket.name}</div>
              <div className="note">{topMarket.budget} · {topMarket.leadTime}</div>
            </div>
            <div className="stat-cell">
              <div className="label">Sàn OTA chủ lực</div>
              <div className="bigtext">{topOta.name}</div>
              <div className="note">{topOta.share7}% thị phần T7 · {topOta.commission}% commission</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 tab intros — editorial section cards */}
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Bốn chiều đọc báo cáo</div>
          <h2 className="h-display" style={{ marginBottom: 48 }}>
            Mỗi chủ thể là một chương — và tất cả <em style={{ color: 'var(--accent)' }}>liên kết chéo.</em>
          </h2>

          <div className="grid-2" style={{ rowGap: 56 }}>
            <TabIntro
              num="01"
              title="Tháng"
              sub="12 tháng trong năm, theo mùa vụ khách"
              body={<>Mỗi tháng có một tính cách riêng — thị trường khác, tour khác, sàn khác. T1–T3 là Tết + Xmas tail. T7–T8 là hè Tây. T10–T11 là harvest Bắc VN. Đọc tháng để hiểu <em>khi nào</em> bán cái gì.</>}
              cta="Xem lịch 12 tháng"
              ctaSub={`${months.filter(m => m.hasData).length} tháng có dữ liệu đầy đủ`}
              onClick={() => go({ tab: 'months' })}
              preview={<MonthPreview months={months} />}
            />
            <TabIntro
              num="02"
              title="Tour"
              sub={D.tours.length + ' tour chính — theo vùng, giá, mùa'}
              body={<>Từ Hà Giang Jeep 4 ngày đến street food Hà Nội 3 giờ. Mỗi tour có thị trường riêng, sàn riêng, tháng cao điểm riêng. Đọc tour để hiểu <em>bán cái gì</em> cho ai.</>}
              cta="Xem danh mục tour"
              ctaSub={`${D.tours.filter(t => !t.placeholder).length} tour dữ liệu đầy đủ`}
              onClick={() => go({ tab: 'tours' })}
              preview={<TourPreview />}
            />
            <TabIntro
              num="03"
              title="Khách"
              sub={D.markets.length + ' thị trường nguồn'}
              body={<>Chân dung khách Mỹ, Úc, Ấn, Phi, Anh — ngân sách, lead time, tour ưa chuộng, sàn book. Đọc khách để hiểu <em>ai đang đến</em>, vì sao, và họ muốn gì.</>}
              cta="Xem chân dung khách"
              ctaSub={D.markets.filter(m => m.hasDetail).map(m => m.flag).join(' ')}
              onClick={() => go({ tab: 'markets' })}
              preview={<MarketPreview />}
            />
            <TabIntro
              num="04"
              title="Sàn OTA"
              sub={D.otas.length + ' sàn phân phối chính'}
              body={<>Viator, GetYourGuide, Klook, MakeMyTrip, Direct. Mỗi sàn mạnh một khu vực, một loại tour, một mức commission. Đọc sàn để hiểu <em>đưa lên đâu</em> và với giá nào.</>}
              cta="Xem bản đồ OTA"
              ctaSub={D.otas.map(o => `${o.name} ${o.share7}%`).slice(0,3).join(' · ')}
              onClick={() => go({ tab: 'otas' })}
              preview={<OtaPreview />}
            />
          </div>
        </div>
      </section>

      {/* Yearly demand heatmap */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="stage">
          <SectionHeader
            kicker="Lịch nhu cầu 12 tháng"
            title="Ai đi lúc nào."
            dek="Mỗi hàng là một thị trường nguồn. Màu đậm = đỉnh, nhạt = shoulder, trống = off-season. Nhấp vào tháng có màu để đi tới báo cáo tháng đó."
          />
          <DemandHeatmap go={go} />
        </div>
      </section>

      {/* Tour × Market matrix */}
      <section className="section">
        <div className="stage">
          <SectionHeader
            kicker="Ma trận Tour × Khách"
            title="Tour nào cho ai."
            dek="Mỗi ô = tour đó bán được cho thị trường đó. Đen đậm = chủ lực, nhạt = có bán, trống = không phải target."
          />
          <TourMarketMatrix go={go} />
        </div>
      </section>

      {/* Cross-link demo */}
      <section className="section">
        <div className="stage">
          <div className="h-kicker">Cách đọc</div>
          <h3 className="h-display" style={{ marginBottom: 24 }}>Mọi thứ trong báo cáo đều có thể nhảy qua lại.</h3>
          <p className="body" style={{ fontSize: 18, maxWidth: 740 }}>
            Khi bạn đang đọc <MonthChip id={7} go={go} />, bạn có thể nhấp vào
            {' '}<TourChip id="ha-giang-jeep" go={go} /> để xem tour đó chi tiết —
            từ tour lại nhấp qua <MarketChip id="au" go={go} /> để xem ai đang book,
            rồi qua <OtaChip id="gyg" go={go} /> để xem họ book qua sàn nào.
            Thanh lịch sử phía trên ghi lại đường đi để bạn không bị lạc.
          </p>
          <p className="body" style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 16, fontStyle: 'italic' }}>
            Chip có dấu ↗ là link hoạt động. Dấu ○ là placeholder — mục chưa có dữ liệu chi tiết.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="stage">
        <div className="footer">
          <div className="row">
            <div>BÁO CÁO INBOUND VN · ẤN BẢN T7/2026</div>
            <div>DỮ LIỆU NỘI BỘ · KHÔNG PHÁT HÀNH</div>
            <div>v1.0 · 04.2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabIntro({ num, title, sub, body, cta, ctaSub, onClick, preview }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 12 }}>
        <span className="folio" style={{ fontSize: 14, color: 'var(--accent)' }}>{num}</span>
        <h3 className="h-display" style={{ fontSize: 40 }}>{title}</h3>
      </div>
      <div className="label" style={{ marginBottom: 16 }}>{sub}</div>
      <p className="body" style={{ fontSize: 16, marginBottom: 24 }}>{body}</p>
      {preview && <div style={{ marginBottom: 24 }}>{preview}</div>}
      <button
        onClick={onClick}
        style={{
          border: '1px solid var(--ink)',
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '12px 20px',
          fontFamily: 'var(--mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <span>{cta} →</span>
        <span style={{ opacity: 0.6, fontSize: 10 }}>{ctaSub}</span>
      </button>
    </div>
  );
}

function MonthPreview({ months }) {
  const max = Math.max(...months.map(m => parseBookings(m.summary?.totalBookings)));
  return (
    <div className="month-strip">
      {months.map((m) => {
        const val = parseBookings(m.summary?.totalBookings);
        const isPeak = val === max;
        const isHigh = val >= max * 0.75;
        return (
          <div
            key={m.id}
            className={'month-strip-cell ' + (isPeak ? 'peak cur' : isHigh ? 'shoulder' : '')}
          >
            <div style={{ fontSize: 13, fontWeight: isPeak ? 600 : 500 }}>{m.short}</div>
          </div>
        );
      })}
    </div>
  );
}

function TourPreview() {
  const tours = DATA.tours.slice(0, 4);
  return (
    <div style={{ borderTop: '1px solid var(--rule)' }}>
      {tours.map((t) => (
        <div key={t.id} style={{
          padding: '10px 0', borderBottom: '1px solid var(--rule-soft)',
          display: 'flex', justifyContent: 'space-between', fontSize: 13, fontFamily: 'var(--sans)',
        }}>
          <span>{t.name}</span>
          <span className="num" style={{ color: 'var(--ink-3)' }}>{t.price}</span>
        </div>
      ))}
    </div>
  );
}

function MarketPreview() {
  const mk = DATA.markets.filter((m) => m.hasDetail || ['in', 'ph', 'uk'].includes(m.id)).slice(0, 5);
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {mk.map((m) => (
        <div key={m.id} style={{
          border: '1px solid var(--rule)', padding: '8px 12px',
          fontFamily: 'var(--sans)', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 16 }}>{m.flag}</span>
          <span>{m.name}</span>
          <span className="num" style={{ color: 'var(--ink-3)', fontSize: 11 }}>{m.demand7}</span>
        </div>
      ))}
    </div>
  );
}

function OtaPreview() {
  return (
    <div>
      {DATA.otas.map((o) => (
        <div key={o.id} className="bar-row" style={{ gridTemplateColumns: '120px 1fr 50px', padding: '8px 0' }}>
          <span className="bar-row-label" style={{ fontSize: 12 }}>{o.name}</span>
          <div className="bar accent"><span style={{ width: (o.share7 / 40 * 100) + '%' }} /></div>
          <span className="bar-row-val" style={{ fontSize: 12 }}>{o.share7}%</span>
        </div>
      ))}
    </div>
  );
}

function DemandHeatmap({ go }) {
  const D = DATA;
  const markets = D.markets;
  const months = D.months;
  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '180px repeat(12, 1fr)',
        gap: 4,
        fontFamily: 'var(--mono)',
        fontSize: 11,
      }}>
        <div />
        {months.map((m) => (
          <div
            key={m.id}
            onClick={() => m.hasData && go({ tab: 'months', id: m.id })}
            style={{
              textAlign: 'center',
              padding: '6px 0',
              letterSpacing: '0.1em',
              color: m.hasData ? 'var(--ink)' : 'var(--ink-4)',
              fontWeight: m.hasData ? 500 : 400,
              cursor: m.hasData ? 'pointer' : 'default',
              borderBottom: m.id === 7 ? '2px solid var(--accent)' : 'none',
            }}
          >
            {m.short}
          </div>
        ))}
        {markets.map((mk) => (
          <React.Fragment key={mk.id}>
            <div
              onClick={() => go({ tab: 'markets', id: mk.id })}
              style={{
                padding: '10px 0',
                display: 'flex', alignItems: 'center', gap: 10,
                fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)',
                cursor: 'pointer',
                borderBottom: '1px solid var(--rule-soft)',
              }}
            >
              <span style={{ fontSize: 18 }}>{mk.flag}</span>
              <span>{mk.name}</span>
              {!mk.hasDetail && <span style={{ color: 'var(--ink-4)', fontSize: 10 }}>○</span>}
            </div>
            {months.map((m) => {
              const peak = mk.peakMonths && mk.peakMonths.includes(m.id);
              const shoulder = mk.shoulderMonths && mk.shoulderMonths.includes(m.id);
              const bg = peak ? 'var(--accent)' : shoulder ? 'var(--accent-soft)' : 'var(--paper-3)';
              return (
                <div
                  key={m.id}
                  onClick={() => m.hasData && go({ tab: 'months', id: m.id })}
                  style={{
                    background: bg,
                    minHeight: 36,
                    borderBottom: '1px solid var(--rule-soft)',
                    cursor: m.hasData ? 'pointer' : 'default',
                    outline: m.id === 7 ? '2px solid var(--ink)' : 'none',
                    outlineOffset: -2,
                  }}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 20, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <span><span style={{ display: 'inline-block', width: 14, height: 14, background: 'var(--accent)', marginRight: 8, verticalAlign: 'middle' }} />Đỉnh</span>
        <span><span style={{ display: 'inline-block', width: 14, height: 14, background: 'var(--accent-soft)', marginRight: 8, verticalAlign: 'middle' }} />Shoulder</span>
        <span><span style={{ display: 'inline-block', width: 14, height: 14, background: 'var(--paper-3)', marginRight: 8, verticalAlign: 'middle' }} />Off</span>
        <span><span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid var(--ink)', marginRight: 8, verticalAlign: 'middle' }} />T7 hiện tại</span>
      </div>
    </div>
  );
}

function TourMarketMatrix({ go }) {
  const D = DATA;
  const tours = D.tours.filter((t) => !t.placeholder);
  const markets = D.markets.filter((m) => m.hasDetail || ['in','ph','uk'].includes(m.id));

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px ' + markets.map(() => '1fr').join(' '),
        gap: 3,
        minWidth: 600,
      }}>
        {/* Header row */}
        <div />
        {markets.map((m) => (
          <div
            key={m.id}
            onClick={() => go({ tab: 'markets', id: m.id })}
            style={{
              textAlign: 'center', padding: '10px 4px', cursor: 'pointer',
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em',
              color: 'var(--ink-2)', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 4,
            }}
          >
            <span style={{ fontSize: 20 }}>{m.flag}</span>
            <span style={{ textTransform: 'uppercase', fontSize: 10 }}>{m.name}</span>
          </div>
        ))}
        {/* Tour rows */}
        {tours.map((t) => (
          <React.Fragment key={t.id}>
            <div
              onClick={() => go({ tab: 'tours', id: t.id })}
              style={{
                padding: '12px 0', borderTop: '1px solid var(--rule-soft)',
                fontFamily: 'var(--serif)', fontSize: 14, cursor: 'pointer',
                color: 'var(--ink)', lineHeight: 1.3,
              }}
            >
              {t.name}
              <div className="label" style={{ marginTop: 4 }}>{t.region}</div>
            </div>
            {markets.map((m) => {
              const isPrimary = (t.markets || []).includes(m.id);
              const isFav = m.favTours && m.favTours.includes(t.id);
              const strength = isPrimary && isFav ? 'primary' : isPrimary ? 'secondary' : isFav ? 'secondary' : 'none';
              return (
                <div
                  key={m.id}
                  onClick={() => strength !== 'none' && go({ tab: 'tours', id: t.id })}
                  title={strength !== 'none' ? `${t.name} → ${m.name}` : ''}
                  style={{
                    borderTop: '1px solid var(--rule-soft)',
                    background: strength === 'primary' ? 'var(--accent)' : strength === 'secondary' ? 'var(--accent-soft)' : 'var(--paper)',
                    cursor: strength !== 'none' ? 'pointer' : 'default',
                    minHeight: 48,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16,
                    transition: 'opacity 0.12s',
                  }}
                >
                  {strength === 'primary' && <span style={{ color: 'var(--paper)', fontSize: 14, fontFamily: 'var(--mono)' }}>●</span>}
                  {strength === 'secondary' && <span style={{ color: 'var(--ink)', fontSize: 12, fontFamily: 'var(--mono)', opacity: 0.6 }}>◌</span>}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 16, fontSize: 11, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <span><span style={{ color: 'var(--accent)', marginRight: 8, fontSize: 14 }}>●</span> Thị trường chủ lực</span>
        <span><span style={{ color: 'var(--ink-3)', marginRight: 8, fontSize: 12 }}>◌</span> Có bán</span>
      </div>
    </div>
  );
}

export default Home;
