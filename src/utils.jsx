import { EMAIL } from './data/site';

export const asset = (path) => `${import.meta.env.BASE_URL}img/${path}`;

/** Renders ® and ™ as small superscripts. */
export function Reg({ children }) {
  return String(children)
    .split(/([®™])/)
    .map((part, i) => (part === '®' || part === '™' ? <sup key={i} className="reg">{part}</sup> : part));
}

/** No server behind the forms: compose an email to the company instead. */
export function openMail(subject, lines) {
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
