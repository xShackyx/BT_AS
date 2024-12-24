import { useUnit } from "../contexts/UnitContext";

function CardCriticalHitsTable() {
  const { unit } = useUnit();

  return (
    <div className="p-1 bg-gray-300 border border-black rounded">critical</div>
  );
}

export default CardCriticalHitsTable;
