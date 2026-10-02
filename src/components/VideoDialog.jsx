import Modal from './Modal';

export default function VideoDialog({ videoId, onClose }) {
  return (
    <Modal open={!!videoId} onClose={onClose} label="Video" className="vdlg">
      <iframe
        title="PGE video"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
}
