const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const fill = { fill: 'currentColor' };

function make(paths, style = stroke) {
  return function Icon(props) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...style} {...props}>
        {paths}
      </svg>
    );
  };
}

export const Arrow = make(<path d="M4 12h16M14 6l6 6-6 6" />);
export const ArrowLeft = make(<path d="M20 12H4M10 6l-6 6 6 6" />);
export const ArrowUp = make(<path d="M12 20V4M6 10l6-6 6 6" />);
export const ChevronDown = make(<path d="M5 9l7 7 7-7" />);
export const Close = make(<path d="M5 5l14 14M19 5L5 19" />);
export const Phone = make(<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />);
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 7l9 6 9-6" /></>);
export const Pin = make(<><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>);
export const Play = make(<path d="M8 5v14l11-7z" />, fill);
export const LinkedIn = make(<path d="M4.5 9h3.8v11H4.5zM6.4 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4zM10.5 9h3.6v1.6c.6-1 1.9-1.9 3.8-1.9 3.6 0 4.1 2.4 4.1 5.4V20h-3.8v-5.2c0-1.3 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20h-3.8z" />, fill);
export const Facebook = make(<path d="M13.5 21v-7.8h2.7l.4-3.1h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.7v3.1h2.7V21z" />, fill);
export const YouTube = make(<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />, fill);

/** Gasket ring: flange outline with bolt holes. Decorative. */
export function Rings({ className = '' }) {
  const holes = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2;
    return [300 + Math.cos(a) * 252, 300 + Math.sin(a) * 252];
  });
  return (
    <svg className={`rings ${className}`} viewBox="0 0 600 600" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="300" cy="300" r="292" />
      <circle cx="300" cy="300" r="210" />
      <circle cx="300" cy="300" r="170" strokeDasharray="3 7" />
      <circle cx="300" cy="300" r="120" />
      <circle cx="300" cy="300" r="70" />
      {holes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="15" />)}
    </svg>
  );
}
