function Label({ children, className = "", ...props }) {
  return (
    <label
      className={`text-sm font-bold leading-none text-slate-700 ml-1 mb-2 block ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}
export default Label;
