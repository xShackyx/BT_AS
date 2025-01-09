import { useUnit } from "../contexts/UnitContext";

function CardHeader({ unitCustomName }) {
  const { unit } = useUnit();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col px-1">
        <p className="text-xl ">{unitCustomName ? unitCustomName : ""}</p>
        <p className="font-extrabold uppercase text-xl drop-shadow-[0_1px_1.5px_rgba(255,255,255)]">
          {unit ? unit.Name : "Unit Name"}
        </p>
      </div>
      <div className="px-5 font-bold text-2xl">
        PV:{unit ? unit.BFPointValue : 0}
      </div>
    </div>
  );
}

export default CardHeader;
