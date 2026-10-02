import { useEffect, useRef, useState } from 'react';
import { asset } from '../utils';
import { MILESTONES } from '../data/site';

/*
 * Milestones as a cascade: a red line fills down the rail as you scroll, and each
 * milestone unfolds (year drops in, dot pops, card slides in, photo wipes open) the
 * moment the line reaches it. The sticky heading shows the year currently reached.
 */
export default function Timeline({ heading }) {
  const list = useRef(null);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const ol = list.current;
    const items = Array.from(ol.children);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { ol.style.setProperty('--fill', 1); setReached(items.length - 1); return undefined; }

    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.62; // the "reading line"
      const r = ol.getBoundingClientRect();
      const fill = Math.min(1, Math.max(0, (line - r.top) / r.height));
      ol.style.setProperty('--fill', fill.toFixed(4));
      let last = -1;
      items.forEach((li, i) => {
        const dot = li.getBoundingClientRect().top + 22;
        if (dot <= line) last = i;
      });
      setReached(last);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = MILESTONES[Math.max(0, reached)][0];

  return (
    <div className="mile">
      <div className="mile__head">
        <div className="sec-head">{heading}</div>
        <div className="mile__now" aria-hidden="true">
          <span key={current} className="mile__year">{current}</span>
          <span className="mile__count">
            {String(Math.max(1, reached + 1)).padStart(2, '0')} / {String(MILESTONES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
      <ol className="timeline cascade" ref={list}>
        {MILESTONES.map(([year, text, alt], i) => (
          <li className={`tl${i <= reached ? ' on' : ''}`} key={year}>
            <span className="tl__y"><span>{year}</span></span>
            <span className="tl__rail" aria-hidden="true" />
            <div className="tl__body">
              <span className="tl__img"><img src={asset(`milestones/m-${i + 1}.webp`)} alt={alt} width="227" height="143" loading="lazy" /></span>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
