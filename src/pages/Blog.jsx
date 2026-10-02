import { useState } from 'react';
import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import usePageMeta from '../hooks/usePageMeta';
import { openMail } from '../utils';

export default function Blog() {
  usePageMeta('Engineering Gasket Company | Gasket suppliers in India', 'PGE Industries Pvt Ltd is an Engineering Gasket Company that manufactures and Gasket suppliers in India.');
  const [email, setEmail] = useState('');
  return (
    <>
      <PageHead title="Blog" crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} image="banners/blog.webp" alt="Hands typing on a laptop" />
      <section className="section">
        <div className="wrap">
          <Reveal className="empty"><h2>Blog Not Found</h2></Reveal>
          <Reveal className="subscribe">
            <h3>Subscribe to our newsletter and stay updated on the latest news</h3>
            <form onSubmit={(e) => { e.preventDefault(); openMail('Newsletter subscription', [`Please subscribe: ${email}`]); }}>
              <label className="sr" htmlFor="sub-email">Email</label>
              <input id="sub-email" type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="btn" type="submit">Subscribe</button>
            </form>
            <small>We Promise not to spam your inbox!</small>
          </Reveal>
        </div>
      </section>
    </>
  );
}
