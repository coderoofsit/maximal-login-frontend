// // Modal.tsx
import React from 'react';
import './styles/Modal.css'; // We'll add styles separately

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children: React.ReactNode;
// }

// const Popup: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>asdasd
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         {title && <h2 className="modal-title">{title}</h2>}
//         <button className="modal-close-btn" onClick={onClose}>
//           ×
//         </button>
//         <div className="modal-body">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Popup;


const Popup = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay bg-black-600 fixed w-full h-full" onClick={onClose}>asdasdsalkndlkaskdandlkas
      {/* <div className="modal-content" onClick={e => e.stopPropagation()}>
        {title && <h2 className="modal-title">{title}</h2>}
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">{children}</div>
      </div> */}
    </div>
  );
};

export default Popup;
 