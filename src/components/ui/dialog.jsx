function Dialog({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div>
      {/* Background Overlay */}
      <div onClick={onClose}></div>

      {/* Modal Container */}
      <div>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Dialog;
