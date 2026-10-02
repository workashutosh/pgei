import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Arrow } from '../components/Icons';
import Modal from '../components/Modal';
import { Crumbs } from '../components/PageHead';
import usePageMeta from '../hooks/usePageMeta';
import { asset, openMail, Reg } from '../utils';
import { HUBS, neighbours, productImage } from '../data/products';

const strip = (s) => s.replace(/<[^>]+>/g, '');
const TICK_RE = /^[a-d]\)\s*/;

/** Description column: paragraphs, ticked lists, and the label/value spec list. */
function Details({ product }) {
  const info = [];
  const specs = [];
  const notes = [];
  for (const { label, text } of product.pairs) {
    if (label === 'Information' || label === '') info.push({ lines: text });
    else if (label === 'Features') info.push({ lines: text, ticks: true });
    else if (label === 'Temperature' && text.length > 1) { specs.push({ label, text: [text[0]] }); notes.push(...text.slice(1)); }
    else specs.push({ label, text });
  }

  const blocks = [];
  info.forEach(({ lines, ticks }, bi) => {
    if (ticks) {
      blocks.push(<ul className="ticks" key={`f${bi}`}>{lines.map((t) => <li key={t}><Reg>{t.replace(/^\d+\.\s*/, '')}</Reg></li>)}</ul>);
      return;
    }
    for (let i = 0; i < lines.length; ) {
      if (TICK_RE.test(lines[i])) {
        const items = [];
        while (i < lines.length && TICK_RE.test(lines[i])) items.push(lines[i++].replace(TICK_RE, ''));
        blocks.push(<ul className="ticks" key={`${bi}-${i}`}>{items.map((t) => <li key={t}><Reg>{t}</Reg></li>)}</ul>);
      } else {
        blocks.push(<p key={`${bi}-${i}`}><Reg>{lines[i]}</Reg></p>);
        i += 1;
      }
    }
  });

  return (
    <>
      {blocks}
      {notes.map((n) => <p key={n}><Reg>{n}</Reg></p>)}
      {specs.length > 0 && (
        <dl className="spec">
          {specs.map(({ label, text }) => (
            <div key={label}><dt>{label}</dt><dd>{text.map((t) => <p key={t}><Reg>{t}</Reg></p>)}</dd></div>
          ))}
        </dl>
      )}
    </>
  );
}

function TechTable({ rows }) {
  if (!rows.length) return null;

  if (rows[0].length === 7) {
    const [head, ...body] = rows;
    return (
      <div className="tech">
        <div className="tscroll">
          <table className="compare">
            <thead><tr><th>Sr. No.</th><th>Property</th><th>Unit</th>{head.slice(2).map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {body.filter((r) => r[0] !== 'Properties').map((r, i) =>
                r.length === 3 ? (
                  <tr key={i}><td>{r[0]}</td><td>{r[1]}</td><td colSpan={6}>{r[2]}</td></tr>
                ) : (
                  <tr key={i}>{[...r, '', '', '', '', '', '', '', ''].slice(0, 8).map((c, k) => <td key={k}>{c}</td>)}</tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="tech">
      <div className="tscroll">
        <table>
          <thead><tr><th>Property</th><th>Standard</th><th>Unit</th><th className="num">Value</th></tr></thead>
          <tbody>
            {rows.map((r, i) => {
              if (r.length === 1 || (r.length >= 2 && !r.slice(1).some(Boolean))) {
                return <tr className="grp" key={i}><td colSpan={4}>{r[0].replace('OperatinG', 'Operating')}</td></tr>;
              }
              const [a, b, c, d] = [...r, '', '', '', ''];
              return <tr key={i}><td>{a}</td><td>{b}</td><td>{c}</td><td className="num">{d}</td></tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DocDialog({ product, open, onClose }) {
  const [f, setF] = useState({ name: '', company: '', email: '', phone: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    openMail(`Technical document request – ${strip(product.title)}`, [
      `Product: ${strip(product.title)}`, `Full Name: ${f.name}`, `Company Name: ${f.company}`, `Email ID: ${f.email}`, `Mobile Number: ${f.phone}`,
    ]);
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose} label="Download Technical Document" className="ddlg">
      <h3>Download Technical Document</h3>
      <p className="sub">To receive brochure, please fill credentials. *All fields are mandatory.</p>
      <form onSubmit={submit}>
        <div className="field"><label htmlFor="d-name">Full Name*</label><input id="d-name" required autoComplete="name" value={f.name} onChange={set('name')} /></div>
        <div className="field"><label htmlFor="d-co">Company Name*</label><input id="d-co" required autoComplete="organization" value={f.company} onChange={set('company')} /></div>
        <div className="field"><label htmlFor="d-em">Email ID*</label><input id="d-em" type="email" required autoComplete="email" value={f.email} onChange={set('email')} /></div>
        <div className="field"><label htmlFor="d-ph">Mobile Number*</label><input id="d-ph" type="tel" required autoComplete="tel" value={f.phone} onChange={set('phone')} /></div>
        <button className="btn" type="submit">Submit <Arrow /></button>
      </form>
    </Modal>
  );
}

export default function ProductDetail({ product: p }) {
  const [doc, setDoc] = useState(false);
  const { prev, next } = neighbours(p);
  const firstLong = p.pairs.flatMap((x) => x.text).find((t) => t.length > 60) || p.title;
  usePageMeta(`${strip(p.title)} | PGE Industries`, firstLong.replace(/\s+/g, ' ').slice(0, 155));

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Products' },
    { label: HUBS[p.category].title, to: `/products/${p.category}` },
    ...(p.family ? [{ label: p.family, to: `/products/${p.family.toLowerCase()}` }] : []),
    { label: p.card },
  ];

  return (
    <>
      <div className="crumbbar"><div className="wrap"><Crumbs items={crumbs} /></div></div>
      <section className="section section--detail">
        <div className="wrap">
          <div className="pd">
            <div className="pd__img"><img src={asset(productImage(p))} width="590" height="760" alt={strip(p.title)} /></div>
            <div className="pd__info">
              <span className="cat">{p.family || p.sub || p.group}</span>
              <h1><Reg>{p.title}</Reg></h1>
              <Details product={p} />
              <div className="pd__actions">
                {p.form && <button className="btn" type="button" onClick={() => setDoc(true)}>Download Technical Document <Arrow /></button>}
                <Link className="btn btn--ghost" to="/contact">Enquire Now <Arrow /></Link>
              </div>
            </div>
          </div>
          <TechTable rows={p.rows} />
          <nav className="pnav" aria-label="More products">
            <Link to={`/products/${prev.url}`}><small>Previous</small><span><Reg>{prev.card}</Reg></span></Link>
            <Link to={`/products/${next.url}`}><small>Next</small><span><Reg>{next.card}</Reg></span></Link>
          </nav>
        </div>
      </section>
      {p.form && (
        <section className="query band-red">
          <div className="wrap">
            <h2>Need More info or Got Queries ?</h2>
            <Link className="btn btn--white" to="/contact">Contact Us <Arrow /></Link>
          </div>
        </section>
      )}
      {p.form && <DocDialog product={p} open={doc} onClose={() => setDoc(false)} />}
    </>
  );
}
