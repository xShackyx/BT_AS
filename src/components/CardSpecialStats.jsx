import { useUnit } from "../contexts/UnitContext";

function CardSpecialStats() {
  const { selectedUnit } = useUnit();

  return (
    <div className="p-1 bg-gray-300 border border-black rounded">
      SPECIAL: {selectedUnit ? selectedUnit.BFAbilities : ""}
    </div>
  );
}

export default CardSpecialStats;
