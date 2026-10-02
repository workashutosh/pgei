import { Link } from 'react-router-dom';
import { Arrow } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found | PGE Industries', '');
  return (
    <section className="section">
      <div className="wrap empty">
        <h2>Page not found</h2>
        <p style={{ margin: '18px 0 28px' }}>The page you are looking for does not exist.</p>
        <Link className="btn" to="/">Home <Arrow /></Link>
      </div>
    </section>
  );
}
