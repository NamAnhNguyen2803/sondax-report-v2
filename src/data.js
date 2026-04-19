// Entry point — assembles all domain modules into a single DATA object.
// Edit individual sections in src/data/:
//   months.js   → 12 tháng (otaBookings, destinations, insight…)
//   tours.js    → tours[] + halongHub (Hạ Long cruise hub)
//   markets.js  → markets[] (US, AU, IN, PH, UK…)
//   otas.js     → otas[] (Viator, Klook, Trip.com, MakeMyTrip…)

import months       from './data/months.js';
import tours, { halongHub, hanoiHub } from './data/tours.js';
import markets      from './data/markets.js';
import otas         from './data/otas.js';
import destinations, { MONTH_GROUPS, CATEGORY_CATALOG, monthGroup, tourDestinationIndex } from './data/destinations.js';

const DATA = {
  halongHub,
  hanoiHub,
  months,
  tours,
  markets,
  otas,
  destinations,
  MONTH_GROUPS,
  CATEGORY_CATALOG,
  monthGroup,
  tourDestinationIndex,
};

export default DATA;
