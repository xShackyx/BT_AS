import { useUnit } from "../contexts/UnitContext";

function CardSpecialStats() {
  const { unit } = useUnit();

  return (
    <div className="p-1 flex text-balance bg-gray-300 border border-black rounded">
      <p>SPECIAL:</p>
      <span>{unit ? unit.BFAbilities : ""}</span>
    </div>
  );
}

export default CardSpecialStats;
