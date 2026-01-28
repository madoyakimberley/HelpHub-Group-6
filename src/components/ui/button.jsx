function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {/* TODO: Add Tailwind styling from Figma */}
      {children}
    </button>
  );
}

export default Button;
