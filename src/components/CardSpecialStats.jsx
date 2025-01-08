import { useUnit } from "../contexts/UnitContext";

function CardSpecialStats() {
  const { unit } = useUnit();

  return (
    <div className="p-1 flex text-balance bg-gray-300 border border-black rounded">
      <p className="pr-1">SPECIAL:</p>
      <span className="flex flex-wrap font-semibold">
        {unit && unit.BFAbilities ? unit.BFAbilities.replaceAll(",", ", ") : ""}
      </span>
    </div>
  );
}

export default CardSpecialStats;
