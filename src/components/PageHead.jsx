import { Link } from 'react-router-dom';
import { Rings } from './Icons';
import { asset } from '../utils';

/** Red title panel beside a banner photograph, used at the top of every inner page. */
export default function PageHead({ title, crumbs, image, alt, sub, focus }) {
  return (
    <section className="phead">
      <Rings />
      <div className="phead__copy">
        <Crumbs items={crumbs} />
        <h1>{title}</h1>
        {sub && <p className="phead__sub">{sub}</p>}
      </div>
      <div className={`phead__img${focus ? ' phead__img--fade' : ''}`}><img src={asset(image)} alt={alt} style={focus ? { objectPosition: focus } : undefined} /></div>
    </section>
  );
}

export function Crumbs({ items }) {
  return (
    <ol className="crumbs">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <li key={c.label} aria-current={last ? 'page' : undefined}>
            {c.to && !last ? <Link to={c.to}>{c.label}</Link> : c.label}
          </li>
        );
      })}
    </ol>
  );
}
