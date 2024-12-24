import { useUnit } from "../contexts/UnitContext";

function CardOverheatValues() {
  const { unit } = useUnit();

  return (
    <div className="p-1 col-span-3 row-span-2 flex gap-5 items-center bg-gray-300 border border-black rounded">
      <div className="flex gap-1">
        <p>OV:</p>
        <p className="font-bold">{unit.BFOverheat}</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="uppercase font-semibold">| heat scale</p>
        <div className="flex outline outline-black rounded-lg bg-gray-500">
          <div className="border-r border-black text-white px-4">1</div>
          <div className="border-x border-black text-white px-4">2</div>
          <div className="border-x border-black text-white px-4">3</div>
          <div className="border-l border-black text-white px-4">S</div>
        </div>
      </div>
    </div>
  );
}

export default CardOverheatValues;
