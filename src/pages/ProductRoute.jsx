import Family from './Family';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';
import { findFamily, findProduct } from '../data/products';

/** /products/:slug is either a family listing (tesnit…) or a single product. */
export default function ProductRoute() {
  const { slug } = useParams();
  const family = findFamily(slug);
  if (family) return <Family family={family} />;
  const product = findProduct(slug);
  return product ? <ProductDetail key={slug} product={product} /> : <NotFound />;
}
