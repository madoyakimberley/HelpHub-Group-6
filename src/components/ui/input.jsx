function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      className={`flex h-12 w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-2 text-base transition-all focus:border-[#1A66FF] focus:ring-4 focus:ring-blue-50 outline-none disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
export default Input;
