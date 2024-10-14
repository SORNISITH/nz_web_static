export default function Input(prob) {
  const { style, set, placeholder, focus, value, type } = prob;
  const handleInput = (e) => {
    set(e.target.value);
  };
  return (
    <input
      autoFocus={focus ?? false}
      placeholder={placeholder ?? " Placeholder"}
      style={{
        border: "1px solid lightgreen",
        backgroundColor: "white",
        background: "transparent",
        fontSize: "1.5rem",
        padding: "5px",
        width: "100%",
        margin: "5px",
        ...style,
      }}
      onChange={handleInput}
      type={type ?? "text"}
      value={value ?? ""}
    />
  );
}
