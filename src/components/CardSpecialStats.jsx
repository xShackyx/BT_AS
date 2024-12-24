import { useUnit } from "../contexts/UnitContext";

function CardSpecialStats() {
  const { unit } = useUnit();

  return (
    <div className="p-1 bg-gray-300 border border-black rounded">
      SPECIAL: {unit ? unit.BFAbilities : ""}
    </div>
  );
}

export default CardSpecialStats;
