function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-[#1A66FF] text-white",
    secondary: "bg-slate-100 text-slate-600",
    success: "bg-[#00C48C]/10 text-[#00C48C]",
    destructive: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
export default Badge;
