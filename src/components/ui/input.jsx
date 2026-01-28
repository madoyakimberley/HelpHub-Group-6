function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      {/* TODO: Add border and focus ring styling */}
    </div>
  );
}

export default Input;
