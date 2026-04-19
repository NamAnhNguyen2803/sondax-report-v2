import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { useRouter, labelRoute, Masthead, Breadcrumb, TweaksPanel } from './shell.jsx';
import Home from './page_home.jsx';
import MonthsPage from './page_months.jsx';
import ToursPage from './page_tours.jsx';
import MarketsPage from './page_markets.jsx';
import OtasPage from './page_otas.jsx';

const TWEAK_DEFAULTS = {
  tone: 'neutral',
  type: 'serif',
  density: 'normal',
  mode: 'light',
};

function applyTweaks(t) {
  const b = document.body;
  b.classList.remove('tone-warm', 'tone-cool', 'type-sans', 'density-compact', 'dark');
  if (t.tone === 'warm') b.classList.add('tone-warm');
  if (t.tone === 'cool') b.classList.add('tone-cool');
  if (t.type === 'sans') b.classList.add('type-sans');
  if (t.density === 'compact') b.classList.add('density-compact');
  if (t.mode === 'dark') b.classList.add('dark');
}

function App() {
  const { route, history, go, back, goBreadcrumb } = useRouter();
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [tweaks, setTweaks] = useState(() => {
    try {
      const saved = localStorage.getItem('bcvn.tweaks');
      if (saved) return { ...TWEAK_DEFAULTS, ...JSON.parse(saved) };
    } catch (e) {}
    return TWEAK_DEFAULTS;
  });

  useEffect(() => {
    applyTweaks(tweaks);
    localStorage.setItem('bcvn.tweaks', JSON.stringify(tweaks));
  }, [tweaks]);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setTweaksOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const onSetTweaks = (next) => {
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
  };

  let page;
  if (route.tab === 'home') page = <Home go={go} />;
  else if (route.tab === 'months') page = <MonthsPage route={route} go={go} />;
  else if (route.tab === 'tours') page = <ToursPage route={route} go={go} />;
  else if (route.tab === 'markets') page = <MarketsPage route={route} go={go} />;
  else if (route.tab === 'otas') page = <OtasPage route={route} go={go} />;
  else page = <Home go={go} />;

  return (
    <div data-screen-label={labelRoute(route)}>
      <Masthead route={route} go={go} />
      <Breadcrumb history={history} back={back} goBreadcrumb={goBreadcrumb} />
      {page}
      {tweaksOpen && <TweaksPanel tweaks={tweaks} setTweaks={onSetTweaks} onClose={() => setTweaksOpen(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
