import { useState } from 'react';
import { Arrow, Mail, Phone, Pin } from '../components/Icons';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import usePageMeta from '../hooks/usePageMeta';
import { openMail } from '../utils';
import { EMAIL, FACTORY, MAP, OFFICE, PHONE, PHONE_HREF } from '../data/site';

const EMPTY = { name: '', phone: '', email: '', product: '', message: '' };

export default function Contact() {
  usePageMeta('Manufactured Engineering Gaskets | PGE Industries', 'PGE Industries Pvt Ltd is one of the best Manufactured Engineering Gaskets, we manufacture over 10000 gaskets per day.');
  const [f, setF] = useState(EMPTY);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    openMail(`Enquiry from website${f.product ? ` – ${f.product}` : ''}`, [
      `Name: ${f.name}`, `Mobile: ${f.phone}`, `Email: ${f.email}`, `Product: ${f.product}`, '', f.message,
    ]);
  };

  return (
    <>
      <PageHead
        title="Contact Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        image="banners/contact.webp"
        alt="Wooden spheres bearing phone, mail, at-sign and chat icons"
        sub="Need a Gasket? Get In Touch"
      />
      <section className="section">
        <div className="wrap contact">
          <Reveal>
            <h2>Contact Us</h2>
            <dl className="cdl">
              <div>
                <Pin />
                <div>
                  <dt>Corporate office:</dt>
                  <dd>
                    {OFFICE.map((l) => <span key={l}>{l}<br /></span>)}
                    <a className="link" style={{ marginTop: 14 }} href={MAP} target="_blank" rel="noopener noreferrer">View on map <Arrow /></a>
                  </dd>
                </div>
              </div>
              <div><Pin /><div><dt>Factory:</dt><dd>{FACTORY}</dd></div></div>
              <div><Phone /><div><dt>Tel:</dt><dd><a href={`tel:${PHONE_HREF}`}>{PHONE}</a></dd></div></div>
              <div><Mail /><div><dt>Email Address:</dt><dd><a href={`mailto:${EMAIL}`}>{EMAIL}</a></dd></div></div>
            </dl>
          </Reveal>

          <Reveal as="form" className="form" onSubmit={submit}>
            <h2>Enquiry Form</h2>
            <div className="field--row">
              <div className="field"><label htmlFor="f-name">Name *</label><input id="f-name" type="text" maxLength={20} required autoComplete="name" value={f.name} onChange={set('name')} /></div>
              <div className="field"><label htmlFor="f-phone">Mobile *</label><input id="f-phone" type="tel" required autoComplete="tel" value={f.phone} onChange={set('phone')} /></div>
            </div>
            <div className="field"><label htmlFor="f-email">Email ID</label><input id="f-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} /></div>
            <div className="field">
              <label htmlFor="f-product">Product</label>
              <select id="f-product" value={f.product} onChange={set('product')}>
                <option value="" disabled>Product</option>
                <option>Sealings</option>
                <option>Insulation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field"><label htmlFor="f-msg">Your Message</label><textarea id="f-msg" rows={4} value={f.message} onChange={set('message')} /></div>
            <button className="btn" type="submit">Send <Arrow /></button>
            <p className="note">Sending opens your email application with this enquiry addressed to {EMAIL}.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
