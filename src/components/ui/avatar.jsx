function Avatar({ src, fallback = "U", className = "" }) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-slate-100 ${className}`}
    >
      {src ? (
        <img
          src={src}
          className="aspect-square h-full w-full object-cover"
          alt="avatar"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-medium text-slate-500">
          {fallback}
        </div>
      )}
    </div>
  );
}
export default Avatar;
