// Entry point — assembles all domain modules into a single DATA object.
// Edit individual sections in src/data/:
//   months.js   → 12 tháng (otaBookings, destinations, insight…)
//   tours.js    → tours[] + halongHub (Hạ Long cruise hub)
//   markets.js  → markets[] (US, AU, IN, PH, UK…)
//   otas.js     → otas[] (Viator, Klook, Trip.com, MakeMyTrip…)

import months       from './data/months.js';
import tours, { halongHub } from './data/tours.js';
import markets      from './data/markets.js';
import otas         from './data/otas.js';

const DATA = {
  halongHub,
  months,
  tours,
  markets,
  otas,
};

export default DATA;
