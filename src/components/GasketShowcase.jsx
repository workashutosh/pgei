import Reveal from './Reveal';

/*
 * Animated line drawings of the three gasket types PGE lists as capabilities.
 * Animations start when the card scrolls into view (Reveal adds `.in`) and run once;
 * with reduced motion the finished drawing is shown straight away.
 */

const C = 150; // centre of the 300×300 viewBox

/** Archimedean spiral from radius r0 to r1 over `turns` turns, as an SVG path. */
function spiral(r0, r1, turns, phase = 0) {
  const steps = Math.round(turns * 72);
  let d = '';
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const a = phase + t * turns * Math.PI * 2;
    const r = r0 + (r1 - r0) * t;
    d += `${i ? 'L' : 'M'}${(C + Math.cos(a) * r).toFixed(2)} ${(C + Math.sin(a) * r).toFixed(2)}`;
  }
  return d;
}

const SPIRAL_METAL = spiral(64, 103, 13);
const SPIRAL_FILLER = spiral(65.5, 104.5, 13, Math.PI / 13);
const KAMM_GROOVES = Array.from({ length: 12 }, (_, i) => 66 + i * 3.6);
const BOLTS = Array.from({ length: 8 }, (_, i) => {
  const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
  return [C + Math.cos(a) * 93, C + Math.sin(a) * 93];
});

function SpiralWound() {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <g className="gs-spin">
        <circle className="gs-ring-outer" cx={C} cy={C} r="122" />
        <circle className="gs-ring-inner" cx={C} cy={C} r="60" />
        <path className="gs-draw gs-filler" d={SPIRAL_FILLER} pathLength="1" />
        <path className="gs-draw gs-metal" d={SPIRAL_METAL} pathLength="1" />
      </g>
    </svg>
  );
}

function KammProfile() {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <g className="gs-spin">
        <circle className="gs-ring-outer" cx={C} cy={C} r="122" />
        <circle className="gs-core" cx={C} cy={C} r="86" />
        {KAMM_GROOVES.map((r, i) => (
          <circle key={r} className="gs-draw gs-groove" cx={C} cy={C} r={r} pathLength="1" style={{ animationDelay: `${0.15 + i * 0.12}s` }} />
        ))}
        <circle className="gs-facing" cx={C} cy={C} r="86" />
      </g>
    </svg>
  );
}

function CutGasket() {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      <path
        className="gs-sheet"
        fillRule="evenodd"
        d={`M${C} ${C - 120}a120 120 0 1 1 0 240a120 120 0 1 1 0-240zM${C} ${C - 62}a62 62 0 1 0 0 124a62 62 0 1 0 0-124z${BOLTS.map(([x, y]) => `M${x} ${y - 10}a10 10 0 1 0 0 20a10 10 0 1 0 0-20z`).join('')}`}
      />
      <circle className="gs-draw gs-cut gs-cut--outer" cx={C} cy={C} r="120" pathLength="1" />
      <circle className="gs-draw gs-cut gs-cut--inner" cx={C} cy={C} r="62" pathLength="1" />
      {BOLTS.map(([x, y], i) => (
        <circle key={i} className="gs-draw gs-cut gs-hole" cx={x} cy={y} r="10" pathLength="1" style={{ animationDelay: `${3.1 + i * 0.12}s` }} />
      ))}
      <g className="gs-laser">
        <circle cx={C} cy={C - 120} r="9" className="gs-laser-glow" />
        <circle cx={C} cy={C - 120} r="3.5" className="gs-laser-dot" />
      </g>
    </svg>
  );
}

/** Flanged joint in section: the top flange closes, the gasket compresses, the leak stops and the line runs. */
function SealingJoint() {
  const half = (x, w) => <rect x={x} y="0" width={w} height="44" />;
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true" focusable="false">
      {/* bore: medium flowing once the joint is sealed */}
      <rect className="sj-bore" x="118" y="20" width="64" height="260" />
      <line className="sj-flow" x1="150" y1="22" x2="150" y2="278" />
      <line className="sj-flow sj-flow--2" x1="134" y1="22" x2="134" y2="278" />
      <line className="sj-flow sj-flow--2" x1="166" y1="22" x2="166" y2="278" />

      {/* bolt shanks */}
      <rect className="sj-bolt" x="56" y="62" width="12" height="176" />
      <rect className="sj-bolt" x="232" y="62" width="12" height="176" />

      {/* bottom flange + pipe */}
      <g className="sj-metal">
        <rect x="104" y="158" width="14" height="122" />
        <rect x="182" y="158" width="14" height="122" />
        <g transform="translate(0 158)">{half(30, 88)}{half(182, 88)}</g>
        <rect className="sj-nut" x="48" y="202" width="28" height="16" />
        <rect className="sj-nut" x="224" y="202" width="28" height="16" />
      </g>

      {/* gasket */}
      <rect className="sj-gasket" x="30" y="144" width="88" height="14" />
      <rect className="sj-gasket" x="182" y="144" width="88" height="14" />

      {/* leak while the joint is open */}
      {[[118, 0], [182, 1]].map(([x, k]) =>
        [0, 1, 2].map((j) => (
          <circle key={`${k}${j}`} className={`sj-drop sj-drop--${k ? 'r' : 'l'}`} cx={x} cy="151" r="3.2" style={{ animationDelay: `${0.25 + j * 0.32}s` }} />
        )),
      )}

      {/* top flange + pipe + nuts (moves down) */}
      <g className="sj-top">
        <g className="sj-metal">
          <rect x="104" y="20" width="14" height="124" />
          <rect x="182" y="20" width="14" height="124" />
          <g transform="translate(0 100)">{half(30, 88)}{half(182, 88)}</g>
          <rect className="sj-nut" x="48" y="82" width="28" height="16" />
          <rect className="sj-nut" x="224" y="82" width="28" height="16" />
        </g>
      </g>
    </svg>
  );
}

const ITEMS = [
  { title: 'Cut Gaskets Facilities', Art: CutGasket },
  { title: 'Spiral Wound Gasket', Art: SpiralWound },
  { title: 'KammProfile Gasket', Art: KammProfile },
  { title: 'Sealing Solutions', Art: SealingJoint },
];

export default function GasketShowcase() {
  return (
    <div className="showcase">
      {ITEMS.map(({ title, Art }, i) => (
        <Reveal key={title} className="gs-card">
          <div className="gs-art"><Art /></div>
          <div className="gs-bar">
            <i>{String(i + 1).padStart(2, '0')}</i>
            <h3>{title}</h3>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
