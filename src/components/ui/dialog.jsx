function Dialog({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-4xl bg-white p-6 shadow-xl animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-400 text-2xl"
        >
          &times;
        </button>
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
export default Dialog;
