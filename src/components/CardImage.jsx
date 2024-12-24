import { useUnit } from "../contexts/UnitContext";

function CardImage() {
  const { selectedUnit } = useUnit();

  return (
    <img
      className="absolute right-0 bottom-0 -z-10 overflow-hidden"
      src={selectedUnit ? selectedUnit.ImageUrl : ""}
    />
  );
}

export default CardImage;
