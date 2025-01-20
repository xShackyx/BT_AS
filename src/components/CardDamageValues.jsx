import { useUnit } from "../contexts/UnitContext";

function CardDamageValues() {
  const { unit } = useUnit();

  return (
    <div className="px-1 col-span-3 flex items-center  bg-gray-300 border border-black rounded">
      <p className="uppercase font-bold text-xs tracking-wide [writing-mode:vertical-rl] rotate-180">
        damage
      </p>
      <div className="flex items-center grow justify-between px-6">
        <div className="flex flex-col justify-center items-center ">
          <p>S (+0)</p>
          <p className="font-bold">{unit.BFDamageShort}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>M (+2)</p>
          <p className="font-bold">{unit.BFDamageMedium}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>L (+4)</p>
          <p className="font-bold">{unit.BFDamageLong}</p>
        </div>
      </div>
    </div>
  );
}

export default CardDamageValues;
