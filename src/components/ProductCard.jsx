import Card from './Card';
import { productImage } from '../data/products';

export default function ProductCard({ product }) {
  return <Card to={`/products/${product.url}`} image={productImage(product)} title={product.card} />;
}
