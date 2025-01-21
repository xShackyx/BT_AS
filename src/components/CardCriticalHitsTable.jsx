import { useUnit } from "../contexts/UnitContext";
import CardHitPointButton from "./CardHitPointButton";

function CardCriticalHitsTable({ cardDisabled }) {
  const { unit } = useUnit();

  return (
    <div className="flex flex-col items-center justify-between p-1 bg-gray-300 border border-black rounded">
      <p className="uppercase font-bold">critical hits</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col justify-around gap-2 col-span-1">
          <p className="font-bold uppercase text-xs">engine</p>
          <p className="font-bold uppercase text-xs">fire control</p>
          <p className="font-bold uppercase text-xs">mp</p>
          <p className="font-bold uppercase text-xs">weapons</p>
        </div>
        <div className="col-span-2 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <span className="text-xs">+1 Heat/Firing weapons</span>
          </div>
          <div className="flex items-center gap-1">
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <span className="text-xs">+2 To-Hit Each</span>
          </div>
          <div className="flex items-center gap-1">
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <span className="text-xs">&frac12; MV Each</span>
          </div>
          <div className="flex items-center gap-1">
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <CardHitPointButton cardDisabled={cardDisabled} />
            <span className="text-xs">-1 Damage Each</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCriticalHitsTable;
