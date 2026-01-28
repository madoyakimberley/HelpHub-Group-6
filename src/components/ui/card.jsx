function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
}
export default Card;
