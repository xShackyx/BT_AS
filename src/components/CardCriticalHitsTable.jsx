import { useUnit } from "../contexts/UnitContext";
import CardHitPointButton from "./CardHitPointButton";

function CardCriticalHitsTable() {
  const { unit } = useUnit();

  return (
    <div className="flex flex-col items-center justify-between p-1 bg-gray-300 border border-black rounded">
      <p className="uppercase font-bold">critical hits</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col justify-between col-span-1">
          <p className="font-bold uppercase text-xs">engine</p>
          <p className="font-bold uppercase text-xs">fire control</p>
          <p className="font-bold uppercase text-xs">mp</p>
          <p className="font-bold uppercase text-xs">weapons</p>
        </div>
        <div className="col-span-2">
          <div>
            <div className="flex items-center gap-1">
              <CardHitPointButton />
              <CardHitPointButton />
              <span className="text-sm">+1 Heat/Firing weapons</span>
            </div>
            <div className="flex items-center gap-1">
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <span className="text-sm">+2 To-Hit Each</span>
            </div>
            <div className="flex items-center gap-1">
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <span className="text-sm">&frac12; MV Each</span>
            </div>
            <div className="flex items-center gap-1">
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <CardHitPointButton />
              <span className="text-sm">-1 Damage Each</span>
            </div>
          </div>
        </div>
        {/* <div className="uppercase font-bold text-xs flex gap-1">
          engine
          <CardHitPointButton />
          <CardHitPointButton />
          <span className="font-normal normal-case">
            +1 Heat/Firing weapons
          </span>
        </div>
        <div className="uppercase font-bold text-xs flex  gap-1">
          fire control <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <span className="font-normal normal-case">+2 To-Hit Each </span>
        </div>
        <div className="uppercase font-bold text-xs flex  gap-1">
          mp
          <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <span className="font-normal normal-case">&frac12; MV Each</span>
        </div>
        <div className="uppercase font-bold text-xs flex  gap-1">
          weapons
          <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <CardHitPointButton />
          <span className="font-normal normal-case">-1 Damage Each</span>
        </div> */}
      </div>
    </div>
  );
}

export default CardCriticalHitsTable;
