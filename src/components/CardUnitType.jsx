// import { useUnit } from "../contexts/UnitContext-v1";

function CardUnitType() {
  // const { selectedUnit } = useUnit();
  const selectedUnit = {};

  return (
    <div className="py-1 px-3 flex flex-col gap-2 col-span-3 row-span-2 bg-gray-300 border border-black rounded uppercase">
      <div className="flex justify-between">
        <p>
          {"Tp: "}
          <span className="font-bold">
            {selectedUnit ? selectedUnit.BFType : ""}
          </span>
        </p>
        <p>
          {"Sz: "}
          <span className="font-bold">
            {selectedUnit ? selectedUnit.BFSize : ""}
          </span>
        </p>
        <p>
          {"Tmm: "}
          <span className="font-bold">
            {selectedUnit ? selectedUnit.BFTmm : ""}
          </span>
        </p>
        <p>
          {"Mv: "}
          <span className="font-bold">
            {selectedUnit ? selectedUnit.BFMove : ""}
          </span>
        </p>
      </div>
      <div className="flex justify-between">
        <p>
          {"Role: "}
          <span className="font-bold">
            {selectedUnit ? selectedUnit.Role.Name : ""}
          </span>
        </p>
        <p>
          {"Skill: "} {selectedUnit ? selectedUnit.Skill : " "}
        </p>
      </div>
    </div>
  );
}

export default CardUnitType;
