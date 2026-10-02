import { Link } from 'react-router-dom';
import { Arrow } from './Icons';
import Reveal from './Reveal';
import { asset, Reg } from '../utils';

export default function Card({ to, image, title, tall = true, small }) {
  return (
    <Reveal as={Link} to={to} className={`card${tall ? ' card--tall' : ''}`}>
      <span className="card__img"><img src={asset(image)} alt="" loading="lazy" decoding="async" /></span>
      <span className="card__bar">
        <h3>{small && <small>{small}</small>}<Reg>{title}</Reg></h3>
        <span className="card__go"><Arrow /></span>
      </span>
    </Reveal>
  );
}
