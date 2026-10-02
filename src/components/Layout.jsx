import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUp, ChevronDown, Facebook, LinkedIn, Mail, Phone, Rings, YouTube } from './Icons';
import { asset } from '../utils';
import { EMAIL, FACEBOOK, LINKEDIN, OFFICE, PHONE, PHONE_HREF, YOUTUBE } from '../data/site';
import { FAMILIES, SEAL_GROUPS, inCategory, slugOfGroup } from '../data/products';

const SOCIAL = [
  { href: LINKEDIN, label: 'LinkedIn', Icon: LinkedIn },
  { href: FACEBOOK, label: 'Facebook', Icon: Facebook },
  { href: YOUTUBE, label: 'YouTube', Icon: YouTube },
];

function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <ul>
          <li><a href={`tel:${PHONE_HREF}`}><Phone />{PHONE}</a></li>
          <li><a className="mail" href={`mailto:${EMAIL}`}><Mail /><span>{EMAIL}</span></a></li>
        </ul>
        <ul className="soc">
          {SOCIAL.map(({ href, label, Icon }) => (
            <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Mega() {
  return (
    <div className="mega" id="mega-products">
      <div className="wrap">
        <div>
          <h3><Link to="/products/sealings">Sealings</Link></h3>
          <ul className="cols2">
            {FAMILIES.map((f) => <li key={f.slug}><Link to={`/products/${f.slug}`}>{f.title}</Link></li>)}
            {SEAL_GROUPS.map((g) => <li key={g}><Link to={`/products/sealings#${slugOfGroup(g)}`}>{g}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3><Link to="/products/insulations">Insulation</Link></h3>
          <ul>{inCategory('insulations').map((p) => <li key={p.url}><Link to={`/products/${p.url}`}>{p.card}</Link></li>)}</ul>
        </div>
        <div>
          <h3><Link to="/products/miscellaneous">Miscellaneous</Link></h3>
          <ul>{inCategory('miscellaneous').map((p) => <li key={p.url}><Link to={`/products/${p.url}`}>{p.card}</Link></li>)}</ul>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hdr = useRef(null);
  const timer = useRef();
  const onProducts = pathname.startsWith('/products');
  const canHover = () => window.matchMedia('(hover:hover) and (min-width:961px)').matches;

  useEffect(() => { setMenu(false); setMega(false); }, [pathname]);
  useEffect(() => {
    const on = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      hdr.current?.style.setProperty('--p', h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { document.documentElement.classList.toggle('menu-open', menu); }, [menu]);
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setMega(false);
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);

  const link = ({ isActive }) => (isActive ? 'active' : undefined);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} ref={hdr}>
      <div className="wrap">
        <Link className="brand" to="/" aria-label="PGE Industries – Home">
          <img src={asset('brand/logo.png')} alt="PGE Industries Pvt. Ltd. – Sealing Solutions Simplified" width="168" height="96" />
        </Link>
        <button className="burger" type="button" aria-label="Menu" aria-expanded={menu} aria-controls="nav" onClick={() => setMenu(!menu)}>
          <span />
        </button>
        <div className="nav-wrap" id="nav">
          <ul className="nav">
            <li><NavLink to="/" end className={link}>Home</NavLink></li>
            <li><NavLink to="/about" className={link}>About Us</NavLink></li>
            <li
              className={`has-menu${mega ? ' open' : ''}`}
              onMouseEnter={() => { if (canHover()) { clearTimeout(timer.current); setMega(true); } }}
              onMouseLeave={() => { if (canHover()) timer.current = setTimeout(() => setMega(false), 120); }}
              onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMega(false); }}
            >
              <button type="button" className={onProducts ? 'current' : undefined} aria-expanded={mega} aria-controls="mega-products" onClick={() => setMega(!mega)}>
                Products <ChevronDown />
              </button>
              <Mega />
            </li>
            <li><NavLink to="/services" className={link}>Services</NavLink></li>
            <li><NavLink to="/blog" className={link}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={link}>Contact Us</NavLink></li>
            <li><Link className="btn enq" to="/contact">Enquire Now</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

const FOOTER_WORDS = ['Sealings', 'Insulation', 'Miscellaneous', 'Tesnit', 'Doniflon', 'Grafilit', 'Micalit', 'Doniflex', 'Gland Packing', 'Spiral Wound Gasket'];

function FooterWords() {
  const row = (hidden) => (
    <div className="fw__set" aria-hidden={hidden || undefined}>
      {FOOTER_WORDS.map((w) => (
        <span key={w} className="fw__item">{w}<Rings className="fw__dot" /></span>
      ))}
    </div>
  );
  return (
    <div className="fw" aria-hidden="true">
      <div className="fw__track">{row(false)}{row(true)}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-bg" aria-hidden="true">
        <Rings className="foot-ring foot-ring--a" />
        <Rings className="foot-ring foot-ring--b" />
        <span className="foot-mark">PGE</span>
      </div>

      <div className="foot-cta">
        <div className="wrap">
          <p>Connect with us for simplified solutions to your Sealings, Insulation, and Maintenance requirements.</p>
          <ul>
            <li><a href={`tel:${PHONE_HREF}`}><Phone />{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`}><Mail />{EMAIL}</a></li>
          </ul>
        </div>
      </div>

      <FooterWords />

      <div className="wrap foot-main">
        <div className="foot-grid">
          <div className="foot-logo">
            <Link to="/" className="foot-logo__plate" aria-label="PGE Industries – Home">
              <img src={asset('brand/logo.png')} alt="PGE Industries Pvt. Ltd." width="168" height="96" />
            </Link>
            <div className="foot-soc">
              {SOCIAL.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon /></a>
              ))}
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link to="/products/sealings">Sealings</Link></li>
              <li><Link to="/products/insulations">Insulation</Link></li>
              <li><Link to="/products/miscellaneous">Miscellaneous</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <address className="foot-addr">
              <p><b>Corporate office</b>{OFFICE.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)}</p>
              <p><b>Tel</b><a href={`tel:${PHONE_HREF}`}>{PHONE}</a></p>
              <p><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </address>
          </div>
        </div>
        <div className="legal">© Pilot Gaskets. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <button className={`top-btn${show ? ' show' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
      <ArrowUp />
    </button>
  );
}

/** New route: jump to the top, or to the #anchor if the link has one. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollManager />
      <TopBar />
      <Header />
      <main id="main" key={pathname} className="page-enter"><Outlet /></main>
      <Footer />
      <BackToTop />
    </>
  );
}
