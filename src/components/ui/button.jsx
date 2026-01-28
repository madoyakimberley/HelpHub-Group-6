function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-[#1A66FF] text-white hover:bg-blue-700 shadow-md",
    success: "bg-[#00C48C] text-white hover:bg-emerald-600",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-bold transition-all active:scale-95 disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
