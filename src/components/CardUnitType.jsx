import { useUnit } from "../contexts/UnitContext";

function CardUnitType() {
  const { unit } = useUnit();

  return (
    <div className="py-1 px-3 flex flex-col gap-2 col-span-3 row-span-2 bg-gray-300 border border-black rounded uppercase">
      <div className="flex justify-between">
        <p>
          {"Tp: "}
          <span className="font-bold">{unit ? unit.BFType : ""}</span>
        </p>
        <p>
          {"Sz: "}
          <span className="font-bold">{unit ? unit.BFSize : ""}</span>
        </p>
        <p>
          {"Tmm: "}
          <span className="font-bold">{unit ? unit.BFTmm : ""}</span>
        </p>
        <p>
          {"Mv: "}
          <span className="font-bold">{unit ? unit.BFMove : ""}</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p>
          {"Role: "}
          <span className="font-bold">{unit ? unit.Role?.Name : ""}</span>
        </p>
        <p>
          {"Skill: "} {unit ? unit.Skill : " "}
        </p>
      </div>
    </div>
  );
}

export default CardUnitType;
