import { useUnit } from "../contexts/UnitContext";

function CardHeader({ unitCustomName }) {
  const { unit } = useUnit();

  return (
    <div className="flex justify-between">
      <div className="grid grid-rows-2 px-1">
        {unitCustomName || unit.customName ? (
          <>
            <p className="text-xl">{unitCustomName || unit.customName}</p>
            <p className="font-extrabold uppercase text-xl drop-shadow-[0_1px_1.5px_rgba(255,255,255)]">
              {unit.Name}
            </p>
          </>
        ) : (
          <>
            <p className="row-start-1 font-extrabold uppercase text-xl drop-shadow-[0_1px_1.5px_rgba(255,255,255)]">
              {unit.Name}
            </p>
          </>
        )}
      </div>
      <div className="px-5 font-bold text-2xl">PV:{unit.BFPointValue}</div>
    </div>
  );
}

export default CardHeader;
