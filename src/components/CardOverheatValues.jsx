import { useUnit } from "../contexts/UnitContext";

function CardOverheatValues() {
  const { unit } = useUnit();

  return (
    <div className="p-1 col-span-3 bg-gray-300 border border-black rounded">
      overheat
    </div>
  );
}

export default CardOverheatValues;
