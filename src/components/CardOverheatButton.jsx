function CardOverheatButton({
  children,
  borderType,
  overheatColor,
  overheatToggle,
  setOverheatToggle,
  id,
}) {
  return (
    <button
      onClick={() => setOverheatToggle(id)}
      className={`borderType border-black text-white px-3 ${borderType} ${
        overheatToggle >= id ? overheatColor : ""
      }`}
    >
      {children}
    </button>
  );
}

export default CardOverheatButton;
