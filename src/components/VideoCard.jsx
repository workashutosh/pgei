import { Play } from './Icons';
import Reveal from './Reveal';
import { asset } from '../utils';

export default function VideoCard({ image, alt, caption, w, h, onPlay }) {
  return (
    <Reveal as="button" type="button" className="video" onClick={onPlay} aria-label={`Play video: ${caption}`}>
      <span className="video__img"><img src={asset(image)} alt={alt} width={w} height={h} loading="lazy" decoding="async" /></span>
      <span className="video__cap">{caption}<Play /></span>
    </Reveal>
  );
}
