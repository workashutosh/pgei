import { useState } from 'react';
import Card from '../components/Card';
import PageHead from '../components/PageHead';
import ProductCard from '../components/ProductCard';
import usePageMeta from '../hooks/usePageMeta';
import { FAMILIES, HUBS, SEAL_GROUPS, familyCover, inCategory, productImage, products, slugOfGroup } from '../data/products';

const TABS = [
  ['all', 'All'],
  ['gasket', 'Gasket'],
  ['semi', 'Semi Metallic and Metallic Gaskets'],
  ['gland', 'Gland Packing'],
  ['solutions', 'Sealing Solutions'],
];

function Group({ id, anchor, tab, current, title, note, children }) {
  if (current !== 'all' && current !== tab) return null;
  return (
    <div className="pgroup" id={anchor || id}>
      <div className="pgroup__head"><h2>{title}</h2>{note && <p>{note}</p>}</div>
      {children}
    </div>
  );
}

function Sealings() {
  const [tab, setTab] = useState('all');
  const grid = (list) => <div className="cards cards--4">{list.map((p) => <ProductCard key={p.url} product={p} />)}</div>;
  const sub = (name) => products.filter((p) => p.sub === name);
  const g = (name) => products.filter((p) => p.group === name);

  return (
    <div className="wrap">
      <div className="tabs" role="tablist" aria-label="Product groups">
        {TABS.map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={tab === key} onClick={() => setTab(key)}>{label}</button>
        ))}
      </div>

      <Group id="gasket" tab="gasket" current={tab} title="Gasket" note="CNAF Cut Gaskets and Sheets">
        <div className="cards cards--5">
          {FAMILIES.map((f) => <Card key={f.slug} to={`/products/${f.slug}`} image={productImage(familyCover(f.title))} title={f.title} />)}
        </div>
      </Group>
      <Group anchor={slugOfGroup(SEAL_GROUPS[0])} tab="semi" current={tab} title={SEAL_GROUPS[0]}>{grid(g(SEAL_GROUPS[0]))}</Group>
      <Group anchor={slugOfGroup(SEAL_GROUPS[1])} tab="gland" current={tab} title={SEAL_GROUPS[1]}>{grid(g(SEAL_GROUPS[1]))}</Group>
      <Group anchor={slugOfGroup(SEAL_GROUPS[2])} tab="solutions" current={tab} title={SEAL_GROUPS[2]}>
        {['PTFE', 'Rubber', 'Others'].map((s, i) => (
          <div className="subgroup" key={s} style={i === 0 ? { marginTop: 0 } : undefined}>
            <h3>{s}</h3>
            {grid(sub(s))}
          </div>
        ))}
      </Group>
    </div>
  );
}

export default function Hub({ hub }) {
  const h = HUBS[hub];
  usePageMeta(...h.seo);
  return (
    <>
      <PageHead
        title={h.heading}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }, { label: h.title }]}
        image={h.banner}
        focus="50% 38%"
        alt={h.alt}
      />
      <section className="section">
        {hub === 'sealings' ? (
          <Sealings />
        ) : (
          <div className="wrap">
            <div className="cards cards--4">{inCategory(hub).map((p) => <ProductCard key={p.url} product={p} />)}</div>
          </div>
        )}
      </section>
    </>
  );
}
