// Projections fitted to a frame: a longitude/latitude window laid out WIDTH units across. Pure functions over geo.mjs; nothing here reads a file.
import { albers } from './geo.mjs';

export const WIDTH = 1000;
export const WORLD_VIEW = { lon: [-180, 180], lat: [-90, 90] };

// one projection, its frame the bounding box of a longitude/latitude window, scaled to WIDTH units across
export function singlePart(raw, view) {
  const flip = (lon, lat) => { const [x, y] = raw(lon, lat); return [x, -y]; };
  const edge = [];
  for (let lon = view.lon[0]; lon <= view.lon[1]; lon += 0.25) edge.push([lon, view.lat[0]], [lon, view.lat[1]]);
  for (let lat = view.lat[0]; lat <= view.lat[1]; lat += 0.25) edge.push([view.lon[0], lat], [view.lon[1], lat]);
  const xs = edge.map(([lon, lat]) => flip(lon, lat)[0]), ys = edge.map(([lon, lat]) => flip(lon, lat)[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)], s = WIDTH / (x1 - x0);
  return { size: [WIDTH, (y1 - y0) * s], parts: [{ id: 'main', project: (lon, lat) => { const [x, y] = flip(lon, lat); return [(x - x0) * s, (y - y0) * s]; }, rect: [0, 0, WIDTH, (y1 - y0) * s] }] };
}
// Albers conic equal-area on its own meridian and two standard parallels, y up (singlePart flips it): a window the width of Canada or Russia reads true to shape
export function conic(lon0, p1, p2) {
  const f = albers({ lon0, parallels: [p1, p2], center: [lon0, (p1 + p2) / 2], scale: 1, translate: [0, 0] });
  return (lon, lat) => { const [x, y] = f(lon, lat); return [x, -y]; };
}
