function Avatar({ src, fallback = "U" }) {
  return (
    <div>
      {/* TODO: Make this a circle with a border */}
      {src ? <img src={src} alt="profile" /> : <span>{fallback}</span>}
    </div>
  );
}

export default Avatar;
