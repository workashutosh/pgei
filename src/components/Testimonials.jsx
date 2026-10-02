import { useEffect, useState } from 'react';
import { Arrow, ArrowLeft } from './Icons';
import { TESTIMONIALS } from '../data/site';

const AUTOPLAY_MS = 9500;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  const go = (k) => setI((k + n) % n);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, i, n]);

  return (
    <div
      className="testi"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="testi__label">What our clients say</span>
      <div className="slides" aria-live="polite">
        {TESTIMONIALS.map((t, k) => (
          <figure key={t.by} className={`slide${k === i ? ' active' : ''}`} aria-hidden={k !== i}>
            <blockquote>“{t.quote}”</blockquote>
            <cite>{t.by}</cite>
          </figure>
        ))}
      </div>
      <div className="testi__ctrl">
        <div className="testi__count"><b>{String(i + 1).padStart(2, '0')}</b> <i>/ {String(n).padStart(2, '0')}</i></div>
        <div className="progress">
          {TESTIMONIALS.map((t, k) => (
            <button key={t.by} type="button" aria-label={`Testimonial ${k + 1}`} aria-current={k === i} className={k <= i ? 'active' : undefined} onClick={() => go(k)} />
          ))}
        </div>
        <div className="arrows">
          <button className="arrow" type="button" aria-label="Previous testimonial" onClick={() => go(i - 1)}><ArrowLeft /></button>
          <button className="arrow" type="button" aria-label="Next testimonial" onClick={() => go(i + 1)}><Arrow /></button>
        </div>
      </div>
    </div>
  );
}
