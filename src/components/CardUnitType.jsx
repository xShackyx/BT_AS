import { useUnit } from "../contexts/UnitContext";

function TMMCalc(BFMove) {
  const mv = BFMove?.split('"')[0];

  if (mv <= 0) return "-4";
  if (mv > 0 && mv < 4) return "0";
  if (mv >= 4 && mv < 9) return "1";
  if (mv >= 9 && mv < 13) return "2";
  if (mv >= 13 && mv < 19) return "3";
  if (mv >= 19 && mv < 35) return "4";
  if (mv >= 35) return "5";
}

function CardUnitType({ unitSkill }) {
  const { unit } = useUnit();

  return (
    <div className="py-1 px-3 flex flex-col gap-2 col-span-3 row-span-3 bg-gray-300 border border-black rounded uppercase">
      <div className="flex justify-between">
        <p>
          {"Tp: "}
          <span className="font-bold">{unit.BFType}</span>
        </p>
        <p>
          {"Sz: "}
          <span className="font-bold">{unit.BFSize}</span>
        </p>
        <p>
          {"Tmm: "}
          <span className="font-bold">{TMMCalc(unit.BFMove)}</span>
        </p>
        <p>
          {"Mv: "}
          <span className="font-bold">{unit.BFMove}</span>
        </p>
      </div>
      <div className="flex justify-between">
        <p>
          {"Role: "}
          <span className="font-bold">{unit.Role?.Name}</span>
        </p>
        <p>
          {"Skill: "} {unit.Skill ? unit.Skill : unitSkill}
        </p>
      </div>
    </div>
  );
}

export default CardUnitType;
