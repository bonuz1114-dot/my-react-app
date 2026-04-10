const Button = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 10px",
    fontSize: "12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",

    display: "inline-block", // ⭐ ใส่ตรงนี้
    width: "auto",           // ⭐ ใส่ตรงนี้
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;