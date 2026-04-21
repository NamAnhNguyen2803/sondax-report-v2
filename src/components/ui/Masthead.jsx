import React from 'react';
import DATA from '../../data.js';

export function Masthead({ route, go }) {
  const tabs = [
    { id: 'months',  label: 'Tháng',   count: '12' },
    { id: 'tours',   label: 'Tour',    count: DATA.tours.length },
    { id: 'markets', label: 'Khách',   count: DATA.markets.length },
    { id: 'otas',    label: 'Sàn OTA', count: DATA.otas.length },
  ];
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <div className="brand" onClick={() => go({ tab: 'home' })}>
          <img
            src="/assets/header.png"
            alt="Sondax Travel"
            className="brand-logo"
          />
        </div>
        <nav className="nav">
          {tabs.map((t) => (
            <button key={t.id} className={'nav-item ' + (route.tab === t.id ? 'active' : '')} onClick={() => go({ tab: t.id })}>
              {t.label} <span className="count">{t.count}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
