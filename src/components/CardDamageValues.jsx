import { useUnit } from "../contexts/UnitContext";

function CardDamageValues() {
  const { unit } = useUnit();

  return (
    <div className="p-1 col-span-3 row-span-2 bg-gray-300 border border-black rounded">
      damage
    </div>
  );
}

export default CardDamageValues;
