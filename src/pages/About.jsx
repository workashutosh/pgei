import { useState } from 'react';
import { approvalItems, clientItems } from '../components/Marquee';
import { Rings } from '../components/Icons';
import Modal from '../components/Modal';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import Timeline from '../components/Timeline';
import usePageMeta from '../hooks/usePageMeta';
import { asset } from '../utils';
import { CERTIFICATES, DEALS } from '../data/site';

/** Bento wall: a red title tile followed by one large tile per logo, filling a 4-column grid. */
function LogoWall({ title, items, variant }) {
  return (
    <div className={`wall${variant ? ` wall--${variant}` : ''}`}>
      <div className="wall__title"><Rings /><h2>{title}</h2></div>
      {items.map(({ src, alt }) => (
        <Reveal key={src} className="wall__tile">
          <img src={asset(src)} alt={alt} loading="lazy" />
          <span>{alt}</span>
        </Reveal>
      ))}
    </div>
  );
}

export default function About() {
  usePageMeta('Industrial Gaskets Manufacturers | Gasket Company in India', 'PGE Industries is the best Gasket Company in India. We are Industrial Gaskets Manufacturers and offer a wide range of gaskets.');
  const [cert, setCert] = useState(null);

  return (
    <>
      <PageHead
        title="About Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image="banners/about.webp"
        alt="Engineer in a hard hat with a refinery superimposed"
        sub="We provide the innovative & economical industrial solutions"
      />

      <section className="section">
        <div className="wrap about-grid">
          <Reveal as="h2" className="lead-st">Established in <span>1981</span></Reveal>
          <Reveal>
            <p>Established in 1981, PGE India (PILOT Gaskets) is the prominent manufacturer of Sealing and Insulating products. We are dedicated to being customer-oriented and proactively providing solutions to their needs. We specialise in a variety of high-quality Non-Asbestos Gaskets, Metallic Gaskets and Semi-Metallic Gaskets along with a myriad of insulating products. With an array of the latest in-house manufacturing facilities, we have come to the fore as the fastest suppliers in the gasket industries. We strive towards being environmentally conscious and showcase it in our work and our products. Our work spans diverse sectors, aiming at customer satisfaction and sustainable development.</p>
            <p>Our promise towards customer satisfaction has made us a pioneer in several products ranging from Non-Metallic Gaskets to Metal Jacketed Gaskets, to name a few. We aim to make India Asbestos-Free, reduce fugitive emissions and ensure there is consistent quality in our deliverables.</p>
          </Reveal>
        </div>
      </section>

      <section className="mv" aria-label="Mission and vision">
        <div>
          <h2>Our Mission</h2>
          <p>“To provide innovative, economical and environmentally friendly industrial solutions to ensure a holistic and incremental satisfaction of our clients”</p>
        </div>
        <div>
          <h2>Our <span>Vision</span></h2>
          <p>“Our vision is to become the industry leader by being customer-centric, growth-oriented and consistent in our mission to make India Asbestos free and contribute towards Occupational Health and Safety at the factory level.”</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>Certificates &amp; <span>Registration</span></h2></div>
          <div className="certs">
            {CERTIFICATES.map((c) => (
              <Reveal as="button" type="button" className="cert" key={c.name} onClick={() => setCert(c)}>
                <span className="cert__img"><img src={asset(`certs/thumb-${c.thumb}.webp`)} alt={`${c.name} certificate`} width="331" height="422" loading="lazy" /></span>
                <span>{c.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
        <Modal open={!!cert} onClose={() => setCert(null)} label="Certificate" className="ldlg" closeClass="dlg-x--fixed">
          {cert && <img src={asset(`certs/full-${cert.full}.webp`)} alt={`${cert.name} certificate`} />}
        </Modal>
      </section>

      <section className="section wall-sec">
        <div className="wrap">
          <LogoWall title={<>Our <span>Clients</span></>} items={clientItems} />
          <LogoWall title={<>Type <span>Approval</span></>} items={approvalItems} variant="approvals" />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="sec-head"><h2>Product We <span>Deal In</span></h2></div>
          <Reveal as="ul" className="deals">{DEALS.map((d) => <li key={d}>{d}</li>)}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Timeline heading={<h2>PGE <span>Milestones</span></h2>} />
        </div>
      </section>
    </>
  );
}
