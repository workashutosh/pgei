import { asset } from '../utils';
import { APPROVALS, CLIENTS } from '../data/site';

/** Endlessly scrolling logo strip. The second copy is hidden from assistive tech. */
export default function Marquee({ label, name, items, className = '', id }) {
  const set = (hidden) => (
    <div className="marquee__set" aria-hidden={hidden || undefined}>
      {items.map(({ src, alt }) => <img key={src} src={asset(src)} alt={hidden ? '' : alt} height="76" />)}
    </div>
  );
  return (
    <section className={`marquee ${className}`.trim()} aria-label={name} id={id}>
      <div className="wrap">
        <span className="marquee__label">{label}</span>
        <div className="marquee__view">
          <div className="marquee__track">{set(false)}{set(true)}</div>
        </div>
      </div>
    </section>
  );
}

export const clientItems = CLIENTS.map((alt, i) => ({ src: `clients/c-${i + 1}.webp`, alt }));
export const approvalItems = APPROVALS.map((alt, i) => ({ src: `approvals/a-${i + 1}.webp`, alt }));
