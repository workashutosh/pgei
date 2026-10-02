import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Arrow, Rings } from '../components/Icons';
import Card from '../components/Card';
import Marquee, { approvalItems, clientItems } from '../components/Marquee';
import GasketShowcase from '../components/GasketShowcase';
import Reveal from '../components/Reveal';
import Testimonials from '../components/Testimonials';
import VideoCard from '../components/VideoCard';
import VideoDialog from '../components/VideoDialog';
import usePageMeta from '../hooks/usePageMeta';
import { asset } from '../utils';
import { APPROVALS, CLIENTS, FACTS, VIDEO_ID } from '../data/site';

function SectionHead({ children, center, id }) {
  return <div className={`sec-head${center ? ' center' : ''}`}><h2 id={id}>{children}</h2></div>;
}

/** Numbers count up the first time they scroll into view; text values render as-is. */
function CountUp({ value }) {
  const ref = useRef(null);
  const numeric = /^\d+$/.test(value);
  useEffect(() => {
    if (!numeric) return;
    const el = ref.current;
    const target = Number(value);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      el.textContent = '0';
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1600);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, numeric]);
  return <span ref={ref}>{value}</span>;
}

const HERO_SLIDES = [
  { src: 'home/hero-welder.webp', alt: 'A welder in a yellow hard hat and leather guard, sparks flying from the weld on a steel plate', focus: '50% 58%' },
  { src: 'home/hero-pumpjacks.webp', alt: 'Oil pumpjacks silhouetted against a red and gold sunset sky', focus: '50% 72%' },
];
const SLIDE_MS = 6500;

function HeroSlides() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = HERO_SLIDES.length;

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setI((x) => (x + 1) % n), SLIDE_MS);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  return (
    <div className="hero__img" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {HERO_SLIDES.map((s, k) => (
        <img
          key={s.src}
          className={`hslide${k === i ? ' active' : ''}`}
          src={asset(s.src)}
          alt={s.alt}
          aria-hidden={k !== i}
          style={{ objectPosition: s.focus }}
          loading="eager"
          decoding="async"
        />
      ))}
      <div className="hero__ctrl">
        <span className="hero__count"><b>{String(i + 1).padStart(2, '0')}</b> / {String(n).padStart(2, '0')}</span>
        <div className="hero__bars">
          {HERO_SLIDES.map((s, k) => (
            <button key={s.src} type="button" aria-label={`Show image ${k + 1}`} aria-current={k === i} className={k === i ? 'active' : undefined} onClick={() => setI(k)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <Rings />
        <div className="hero__copy">
          <h1><span><i>Industry leading</i></span><span><i>approved products</i></span></h1>
          <p className="lead">Sealing Solutions Simplified</p>
          <div className="hero__cta"><Link className="btn btn--line" to="/products/sealings">Our Products <Arrow /></Link></div>
        </div>
        <HeroSlides />
        <img className="hero__logo" src={asset('home/make-in-india-logo.webp')} width="832" height="445" alt="Make in India" />
      </section>
      <Marquee label={<>Our<br />Clients</>} name="Our clients" items={clientItems} />
      <Marquee label={<>Type<br />Approval</>} name="Type approval" items={approvalItems} className="marquee--approvals" id="type-approval" />
      <section className="facts" aria-label="At a glance">
        <div className="wrap">
          {FACTS.map(([big, text]) => <div className="fact" key={big}><b><CountUp value={big} /></b><span>{text}</span></div>)}
        </div>
      </section>
    </>
  );
}


function Special() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="special">
          <Reveal className="special__art">
            <img src={asset('home/hand-logo.webp')} width="677" height="552" alt="A hand lifting the PGE Industries logo on a red upward arrow" loading="lazy" />
          </Reveal>
          <Reveal className="special__text">
            <SectionHead>What Makes Us <span>Special</span></SectionHead>
            <p>PGE has always stood in the forefront executing challenging projects in India and worldwide. PGE is an EIL (Engineers India Ltd) registered company and a part of Government organization supporting for indigenisation of various spare parts. Our team of engineers strive to provide the best economical solution to our clients delivering best sustainable quality gaskets.</p>
            <p>PGE has successfully implemented KANBAN system in its well equipped factory at <strong>Bhiwandi</strong>, the plant capacity is of manufacturing over <strong>10000 gaskets</strong> per day.</p>
            <p>Today our name is more than an assurance of quality for our clients with a well equipped team we are here to provide world class product and services to our clients.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="section section--tint">
      <Rings />
      <div className="wrap">
        <SectionHead>Our <span>Products</span></SectionHead>
        <div className="cards cards--lg">
          <Card to="/products/sealings" image="home/product-sealings.webp" title="Sealings" tall={false} />
          <Card to="/products/insulations" image="home/product-insulations.webp" title="Insulations" tall={false} />
          <Card to="/products/miscellaneous" image="home/product-miscellaneous.webp" title="Miscellaneous" tall={false} />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section aria-labelledby="svc-h">
      <div className="wrap services-head"><SectionHead id="svc-h">Our <span>Services</span></SectionHead></div>
      <div className="split split--red">
        <div className="split__img"><img src={asset('home/service-cutting.webp')} width="652" height="368" alt="Laser cutting head cutting gasket sheet" loading="lazy" /></div>
        <div className="split__copy">
          <Rings />
          <h3>Cutting Facilities</h3>
          <p>The in-house availability of cutting facilities and the engineering abilities in designing along with proper nesting skills have made us more efficient in serviceability.</p>
          <Link className="btn btn--white" to="/services#cutting">Read More <Arrow /></Link>
        </div>
      </div>
      <div className="split split--rev">
        <div className="split__img"><img src={asset('home/service-testing.webp')} width="652" height="368" alt="Tensile testing machine with a specimen clamped in the grips" loading="lazy" /></div>
        <div className="split__copy">
          <h3>Testing Facilities</h3>
          <p>Our quality system complies with ISO 9001. We focus on delivering quality products as per standards to meet the most significant testing and quality parameters.</p>
          <Link className="btn" to="/services#testing">Read More <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const [video, setVideo] = useState(null);
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="sr">Videos</h2>
        <div className="videos videos--flush">
          <VideoCard image="home/video-installation.webp" alt="Gasket installation procedures video thumbnail" w={657} h={336} caption="Gasket Installation By PGE" onPlay={() => setVideo(VIDEO_ID)} />
          <VideoCard image="home/video-corporate.webp" alt="PGE corporate profile video thumbnail" w={657} h={336} caption="PGE (PILOT Gasket) Corporate Video" onPlay={() => setVideo(VIDEO_ID)} />
        </div>
      </div>
      <VideoDialog videoId={video} onClose={() => setVideo(null)} />
    </section>
  );
}

export default function Home() {
  usePageMeta('PGE Industries Pvt Ltd | Pilot Gasket', 'PGE Industries is a leading gasket manufacturing company in India. We manufacture and supply Pilot Gasket all Over World.');
  return (
    <>
      <Hero />
      <Special />
      <Products />
      <Services />
      <Clients />
      <section className="section section--tint showcase-sec">
        <Rings />
        <div className="wrap">
          <SectionHead>Sealing Solutions <span>Simplified</span></SectionHead>
          <GasketShowcase />
        </div>
      </section>
      <section className="section band-red">
        <Rings />
        <div className="wrap">
          <SectionHead>Our <span>Testimonials</span></SectionHead>
          <Testimonials />
        </div>
      </section>
    </>
  );
}
