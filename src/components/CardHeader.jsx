import { useUnit } from "../contexts/UnitContext";

function CardHeader({ unitCustomName }) {
  const { unit } = useUnit();

  return (
    <div className="flex justify-between">
      <div className="grid grid-rows-2 items-center px-1">
        {unitCustomName || unit.CustomName ? (
          <>
            <p className=" font-semibold">
              {unitCustomName || unit.CustomName}
            </p>
            <p className="font-extrabold uppercase  drop-shadow-[0_1px_1.5px_rgba(255,255,255)]">
              {unit.Name}
            </p>
          </>
        ) : (
          <>
            <p className="row-start-1 font-extrabold uppercase drop-shadow-[0_1px_1.5px_rgba(255,255,255)]">
              {unit.Name}
            </p>
          </>
        )}
      </div>
      <div className="px-5 font-bold text-2xl">
        PV:
        {unit.CustomBFPointValue ? unit.CustomBFPointValue : unit.BFPointValue}
      </div>
    </div>
  );
}

export default CardHeader;
