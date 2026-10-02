import { useEffect, useRef } from 'react';
import { Close } from './Icons';

/** Native <dialog>. Children are only mounted while open, so an embedded video stops on close. */
export default function Modal({ open, onClose, label, className = '', closeClass = '', children }) {
  const ref = useRef(null);
  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={className}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
    >
      {open && (
        <div className="dlg">
          <button className={`dlg-x ${closeClass}`} type="button" aria-label="Close" onClick={onClose}>
            <Close />
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
