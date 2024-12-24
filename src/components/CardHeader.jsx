import { useUnit } from "../contexts/UnitContext";

function CardHeader() {
  const { selectedUnit } = useUnit();
  // const selectedUnit = {};

  return (
    <div className="flex justify-between">
      <div className="flex flex-col px-1">
        <p className="text-xl">
          {selectedUnit ? selectedUnit.Variant : "TestModel"}
        </p>
        <p className="font-extrabold uppercase text-4xl ">
          {selectedUnit ? selectedUnit.Class : "testName"}
        </p>
      </div>
      <div className="px-5 font-bold text-2xl">
        PV:{selectedUnit ? selectedUnit.BFPointValue : 0}
      </div>
    </div>
  );
}

export default CardHeader;
