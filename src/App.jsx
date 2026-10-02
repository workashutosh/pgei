import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Hub from './pages/Hub';
import NotFound from './pages/NotFound';
import ProductRoute from './pages/ProductRoute';
import Services from './pages/Services';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="products/sealings" element={<Hub hub="sealings" />} />
        <Route path="products/insulations" element={<Hub hub="insulations" />} />
        <Route path="products/miscellaneous" element={<Hub hub="miscellaneous" />} />
        <Route path="products/:slug" element={<ProductRoute />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
