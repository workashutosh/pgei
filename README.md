# PGE Industries – website (React + Vite)

```
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve dist/
```

- `src/pages/` – Home, About, Services, Contact, Blog, Hub (Sealings / Insulations / Miscellaneous), Family, ProductDetail
- `src/components/` – Layout (top bar, header + products menu, footer), PageHead, Card, Modal, Testimonials, VideoCard …
- `src/data/site.js` – company details and page copy; `src/data/products.json` – all 57 products (copy, specs, tables)
- `src/styles/main.css` – all styles (palette: logo red `#dd2d1f` + white)
- `public/img/` – optimised images

Routing uses `BrowserRouter`: the host must serve `index.html` for unknown paths (Netlify, Vercel, Cloudflare Pages
and `vite preview` do this automatically; on Apache/nginx add a fallback rule).
