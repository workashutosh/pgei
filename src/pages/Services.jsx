import PageHead from '../components/PageHead';
import Reveal from '../components/Reveal';
import usePageMeta from '../hooks/usePageMeta';
import { asset } from '../utils';
import { SERVICES } from '../data/site';

export default function Services() {
  usePageMeta('Indian Gasket Company | Gasket manufacturers in India', 'Indian Gasket Company PGE Industries is Located in Mumbai. We are Gasket Manufacturers in India, we offer Laser & CNC Cutting services.');
  return (
    <>
      <PageHead
        title="Our Service"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image="banners/services.webp"
        alt="CNC spindle cutting a metal part"
      />
      <section className="section">
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <div className="srow" id={s.id} key={s.id}>
              <Reveal className="srow__img"><img src={asset(s.image)} alt={s.alt} width="695" height="435" loading="lazy" /></Reveal>
              <Reveal>
                <span className="srow__n">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
