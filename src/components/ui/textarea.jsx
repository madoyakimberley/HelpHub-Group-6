function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`flex min-h-30 w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-base outline-none focus:border-[#1A66FF] focus:ring-4 focus:ring-blue-50 disabled:opacity-50 resize-none ${className}`}
      {...props}
    />
  );
}

export default Textarea;
