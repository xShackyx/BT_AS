import { useUnit } from "../contexts/UnitContext";

function CardHitPointsValues() {
  const { unit } = useUnit();

  return <div className="p-1  bg-gray-300 border border-black rounded">hp</div>;
}

export default CardHitPointsValues;
