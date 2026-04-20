// Shell: masthead, nav, breadcrumb, chips — shared primitives
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import DATA from './data.js';

// -------- Router / history --------
// route: { tab: 'home'|'months'|'tours'|'markets'|'otas', id?: string|number }

function useRouter() {
  const [route, _setRoute] = useState(() => {
    try {
      const saved = localStorage.getItem('bcvn.route');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return { tab: 'home' };
  });
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('bcvn.history');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return [{ tab: 'home' }];
  });

  useEffect(() => {
    localStorage.setItem('bcvn.route', JSON.stringify(route));
  }, [route]);
  useEffect(() => {
    localStorage.setItem('bcvn.history', JSON.stringify(history));
  }, [history]);

  const go = useCallback((next) => {
    _setRoute(next);
    setHistory((h) => {
      const last = h[h.length - 1];
      if (last && last.tab === next.tab && last.id === next.id) return h;
      const nh = [...h, next];
      return nh.slice(-8);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const back = useCallback(() => {
    setHistory((h) => {
      if (h.length <= 1) return h;
      const nh = h.slice(0, -1);
      _setRoute(nh[nh.length - 1]);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return nh;
    });
  }, []);

  const goBreadcrumb = useCallback((idx) => {
    setHistory((h) => {
      const nh = h.slice(0, idx + 1);
      _setRoute(nh[nh.length - 1]);
      window.scrollTo({ top: 0, behavior: 'instant' });
      return nh;
    });
  }, []);

  return { route, history, go, back, goBreadcrumb };
}

// Label a route for breadcrumb display
function labelRoute(r) {
  const D = DATA;
  if (r.tab === 'home') return 'Trang chủ';
  if (r.tab === 'months') {
    if (r.id) {
      const m = D.months.find((x) => x.id === r.id);
      return m ? m.name : 'Tháng';
    }
    return 'Tháng';
  }
  if (r.tab === 'tours') {
    if (r.id) {
      const t = D.tours.find((x) => x.id === r.id);
      return t ? t.name : 'Tour';
    }
    return 'Tour';
  }
  if (r.tab === 'markets') {
    if (r.id) {
      const m = D.markets.find((x) => x.id === r.id);
      return m ? `${m.flag} ${m.name}` : 'Khách';
    }
    return 'Khách';
  }
  if (r.tab === 'otas') {
    if (r.id) {
      const o = D.otas.find((x) => x.id === r.id);
      return o ? o.name : 'Sàn';
    }
    return 'Sàn';
  }
  if (r.tab === 'halong') return 'Cruise Hạ Long — Thị trường';
  return '';
}

// -------- Masthead --------

function Masthead({ route, go }) {
  const tabs = [
    { id: 'months', label: 'Tháng', count: '12' },
    { id: 'tours', label: 'Tour', count: DATA.tours.length },
    { id: 'markets', label: 'Khách', count: DATA.markets.length },
    { id: 'otas', label: 'Sàn OTA', count: DATA.otas.length },
  ];
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="brand" onClick={() => go({ tab: 'home' })}>
          <div className="brand-mark">
            Báo Cáo <span className="sep">·</span> Inbound VN
          </div>
          <div className="brand-sub">ấn bản T7 / 2026</div>
        </div>
        <nav className="nav">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={'nav-item ' + (route.tab === t.id ? 'active' : '')}
              onClick={() => go({ tab: t.id })}
            >
              {t.label} <span className="count">{t.count}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// -------- Breadcrumb --------

function Breadcrumb({ history, back, goBreadcrumb }) {
  if (history.length <= 1) {
    return (
      <div className="breadcrumb">
        <div className="breadcrumb-inner">
          <button className="breadcrumb-back" disabled>← Quay lại</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-crumb current">{labelRoute(history[0])}</span>
          <span style={{ marginLeft: 'auto', color: 'var(--ink-4)', fontSize: '10.5px', letterSpacing: '0.12em' }}>
            LỊCH SỬ ĐIỀU HƯỚNG
          </span>
        </div>
      </div>
    );
  }
  const visible = history.slice(-5);
  const startIdx = history.length - visible.length;
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-inner">
        <button className="breadcrumb-back" onClick={back}>← Quay lại</button>
        {visible.map((r, i) => {
          const realIdx = startIdx + i;
          const isLast = realIdx === history.length - 1;
          return (
            <React.Fragment key={realIdx}>
              <span className="breadcrumb-sep">/</span>
              <span
                className={'breadcrumb-crumb ' + (isLast ? 'current' : '')}
                onClick={() => !isLast && goBreadcrumb(realIdx)}
              >
                {labelRoute(r)}
              </span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// -------- Crumbs (semantic hierarchy — always shows on subpages) --------

function buildCrumbs(route) {
  const D = DATA;
  const tabLabels = { months: 'Tháng', tours: 'Tour', markets: 'Khách', otas: 'Sàn OTA' };
  if (!route.tab || route.tab === 'home') return [];
  const crumbs = [{ label: tabLabels[route.tab] || route.tab, to: { tab: route.tab } }];
  if (!route.id) return crumbs;

  if (route.tab === 'tours') {
    if (route.id === 'hanoi-hub') {
      crumbs.push({ label: 'Hà Nội Hub', to: { tab: 'tours', id: 'hanoi-hub' } });
    } else if (route.id === 'halong-hub') {
      crumbs.push({ label: 'Hạ Long Hub', to: { tab: 'tours', id: 'halong-hub' } });
    } else if (route.id === 'hagiang-hub') {
      crumbs.push({ label: 'Hà Giang Hub', to: { tab: 'tours', id: 'hagiang-hub' } });
    } else if (route.id === 'sapa-hub') {
      crumbs.push({ label: 'Sa Pa Hub', to: { tab: 'tours', id: 'sapa-hub' } });
    } else if (route.id === 'ninhbinh-hub') {
      crumbs.push({ label: 'Ninh Bình Hub', to: { tab: 'tours', id: 'ninhbinh-hub' } });
    } else if (typeof route.id === 'string' && route.id.startsWith('hn-')) {
      crumbs.push({ label: 'Hà Nội Hub', to: { tab: 'tours', id: 'hanoi-hub' } });
      const v = D.hanoiHub && D.hanoiHub.variants && D.hanoiHub.variants.find((x) => x.id === route.id);
      crumbs.push({ label: v ? v.name : route.id, to: { tab: 'tours', id: route.id } });
    } else if (typeof route.id === 'string' && route.id.startsWith('hl-')) {
      crumbs.push({ label: 'Hạ Long Hub', to: { tab: 'tours', id: 'halong-hub' } });
      const v = D.halongHub && D.halongHub.variants && D.halongHub.variants.find((x) => x.id === route.id);
      crumbs.push({ label: v ? v.name : route.id, to: { tab: 'tours', id: route.id } });
    } else if (typeof route.id === 'string' && route.id.startsWith('hg-')) {
      crumbs.push({ label: 'Hà Giang Hub', to: { tab: 'tours', id: 'hagiang-hub' } });
      const v = D.hagiangHub && D.hagiangHub.variants && D.hagiangHub.variants.find((x) => x.id === route.id);
      crumbs.push({ label: v ? v.name : route.id, to: { tab: 'tours', id: route.id } });
    } else if (typeof route.id === 'string' && route.id.startsWith('sp-')) {
      crumbs.push({ label: 'Sa Pa Hub', to: { tab: 'tours', id: 'sapa-hub' } });
      const v = D.sapaHub && D.sapaHub.variants && D.sapaHub.variants.find((x) => x.id === route.id);
      crumbs.push({ label: v ? v.name : route.id, to: { tab: 'tours', id: route.id } });
    } else if (typeof route.id === 'string' && route.id.startsWith('nb-')) {
      crumbs.push({ label: 'Ninh Bình Hub', to: { tab: 'tours', id: 'ninhbinh-hub' } });
      const v = D.ninhbinhHub && D.ninhbinhHub.variants && D.ninhbinhHub.variants.find((x) => x.id === route.id);
      crumbs.push({ label: v ? v.name : route.id, to: { tab: 'tours', id: route.id } });
    } else {
      const t = D.tours.find((x) => x.id === route.id);
      crumbs.push({ label: t ? t.name : route.id, to: { tab: 'tours', id: route.id } });
    }
  } else if (route.tab === 'months') {
    const m = D.months.find((x) => x.id === route.id);
    crumbs.push({ label: m ? m.name : `Tháng ${route.id}`, to: { tab: 'months', id: route.id } });
  } else if (route.tab === 'markets') {
    const m = D.markets.find((x) => x.id === route.id);
    crumbs.push({ label: m ? `${m.flag} ${m.name}` : route.id, to: { tab: 'markets', id: route.id } });
  } else if (route.tab === 'otas') {
    const o = D.otas.find((x) => x.id === route.id);
    crumbs.push({ label: o ? o.name : route.id, to: { tab: 'otas', id: route.id } });
  }
  return crumbs;
}

function Crumbs({ route, go }) {
  const crumbs = buildCrumbs(route);
  if (crumbs.length <= 1) return null;
  return (
    <div style={{ borderBottom: '1px solid var(--rule)', background: 'var(--paper)' }}>
      <div className="stage" style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '14px 0' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em' }}>←</span>
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-4)' }}>/</span>}
              {isLast ? (
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.label}</span>
              ) : (
                <button
                  onClick={() => go(c.to)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--ink-3)')}>
                  {c.label}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// -------- Chips / cross-links --------

function Chip({ to, go, children, placeholder }) {
  if (placeholder) {
    return <span className="chip placeholder" title="Chưa có dữ liệu chi tiết">{children}</span>;
  }
  return (
    <a className="chip" onClick={(e) => { e.preventDefault(); go(to); }}>
      {children}
    </a>
  );
}

function XLink({ to, go, children, placeholder }) {
  if (placeholder) {
    return <span className="xlink placeholder">{children}</span>;
  }
  return (
    <a className="xlink" onClick={(e) => { e.preventDefault(); go(to); }}>{children}</a>
  );
}

// Entity-typed chips that know where to go
function MonthChip({ id, go }) {
  const m = DATA.months.find((x) => x.id === id);
  if (!m) return null;
  return <Chip to={{ tab: 'months', id }} go={go} placeholder={!m.hasData}>{m.name}</Chip>;
}
function TourChip({ id, go }) {
  const t = DATA.tours.find((x) => x.id === id);
  if (!t) return null;
  return <Chip to={{ tab: 'tours', id }} go={go} placeholder={!t.hasDetail && t.placeholder}>{t.name}</Chip>;
}
function MarketChip({ id, go }) {
  const m = DATA.markets.find((x) => x.id === id);
  if (!m) return null;
  return <Chip to={{ tab: 'markets', id }} go={go} placeholder={!m.hasDetail && m.placeholder}>{m.flag} {m.name}</Chip>;
}
function OtaChip({ id, go }) {
  const o = DATA.otas.find((x) => x.id === id);
  if (!o) return null;
  return <Chip to={{ tab: 'otas', id }} go={go} placeholder={!o.hasDetail && o.placeholder}>{o.name}</Chip>;
}

// -------- Dot / status --------

function Dot({ status }) {
  return <span className={`dot ${status || 'gray'}`} />;
}
function StatusPill({ status, label }) {
  return (
    <span className="status-pill"><Dot status={status} />{label}</span>
  );
}

// -------- Section header --------

function SectionHeader({ kicker, title, dek }) {
  return (
    <div style={{ marginBottom: 32 }}>
      {kicker && <div className="h-kicker">{kicker}</div>}
      <h2 className="h-display">{title}</h2>
      {dek && <p className="dek" style={{ marginTop: 16 }}>{dek}</p>}
    </div>
  );
}

// -------- Placeholder block --------

function Placeholder({ label, children }) {
  return (
    <div className="placeholder-block">
      {label && <span className="label">{label}</span>}
      {children || 'Đang cập nhật'}
    </div>
  );
}

// -------- Tweaks panel --------

function TweaksPanel({ tweaks, setTweaks, onClose }) {
  const update = (k, v) => setTweaks({ ...tweaks, [k]: v });
  return (
    <div className="tweaks">
      <h4>
        TWEAKS
        <button onClick={onClose} title="Ẩn">✕</button>
      </h4>
      <div className="tweaks-row">
        <label>Tone</label>
        <div className="tweaks-seg">
          {['neutral', 'warm', 'cool'].map((t) => (
            <button key={t} className={tweaks.tone === t ? 'active' : ''} onClick={() => update('tone', t)}>
              {t === 'neutral' ? 'Trung' : t === 'warm' ? 'Ấm' : 'Mát'}
            </button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label>Font</label>
        <div className="tweaks-seg">
          {[['serif', 'Serif'], ['sans', 'Sans']].map(([k, l]) => (
            <button key={k} className={tweaks.type === k ? 'active' : ''} onClick={() => update('type', k)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label>Mật độ</label>
        <div className="tweaks-seg">
          {[['normal', 'Thoáng'], ['compact', 'Dày']].map(([k, l]) => (
            <button key={k} className={tweaks.density === k ? 'active' : ''} onClick={() => update('density', k)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <label>Chế độ</label>
        <div className="tweaks-seg">
          {[['light', 'Sáng'], ['dark', 'Tối']].map(([k, l]) => (
            <button key={k} className={tweaks.mode === k ? 'active' : ''} onClick={() => update('mode', k)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export {
  useRouter, labelRoute,
  Masthead, Breadcrumb, Crumbs,
  Chip, XLink, MonthChip, TourChip, MarketChip, OtaChip,
  Dot, StatusPill, SectionHeader, Placeholder,
  TweaksPanel,
};
