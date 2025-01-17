function CardOverheatButton({
  children,
  borderType,
  overheatColor,
  overheatToggle,
  setOverheatToggle,
  id,
  cardDisabled,
}) {
  return (
    <button
      onClick={() => setOverheatToggle(id)}
      disabled={cardDisabled}
      className={`borderType border-black text-white px-3 ${borderType} ${
        overheatToggle >= id ? overheatColor : ""
      }`}
    >
      {children}
    </button>
  );
}

export default CardOverheatButton;
