import { useUnit } from "../contexts/UnitContext";

function CardImage() {
  const { unit } = useUnit();

  return (
    <img
      className="absolute h-full w-1/2 object-contain right-0 top-0 -z-10"
      src={unit ? unit.ImageUrl : ""}
    />
  );
}

export default CardImage;
