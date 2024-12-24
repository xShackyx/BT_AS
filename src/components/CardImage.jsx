import { useUnit } from "../contexts/UnitContext";

function CardImage() {
  const { unit } = useUnit();

  return (
    <img
      className="absolute right-0 bottom-0 -z-10 overflow-hidden"
      src={unit ? unit.ImageUrl : ""}
    />
  );
}

export default CardImage;
