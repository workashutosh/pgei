import { useState } from 'react';
import PageHead from '../components/PageHead';
import ProductCard from '../components/ProductCard';
import VideoCard from '../components/VideoCard';
import VideoDialog from '../components/VideoDialog';
import usePageMeta from '../hooks/usePageMeta';
import { VIDEO_ID } from '../data/site';
import { inFamily } from '../data/products';

export default function Family({ family }) {
  usePageMeta('PGE Industries Pvt Ltd', `PGE Industries Pvt Ltd – ${family.title}`);
  const [video, setVideo] = useState(null);
  return (
    <>
      <PageHead
        title={family.title}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }, { label: 'Sealings', to: '/products/sealings' }, { label: family.title }]}
        image="banners/products.webp"
        focus="50% 38%"
        alt="Cylinder-head gasket laid over an engine block"
      />
      <section className="section">
        <div className="wrap">
          <div className="cards cards--4">{inFamily(family.title).map((p) => <ProductCard key={p.url} product={p} />)}</div>
          {family.slug === 'tesnit' && (
            <div className="videos videos--one">
              <VideoCard image="home/video-tesnit.webp" alt="DONIT Tesnit video thumbnail" w={825} h={422} caption="DONIT Tesnit" onPlay={() => setVideo(VIDEO_ID)} />
            </div>
          )}
        </div>
      </section>
      <VideoDialog videoId={video} onClose={() => setVideo(null)} />
    </>
  );
}
