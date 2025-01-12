import { useState } from "react";
import CardButton from "./CardButton";

function SavedSection({
  totalPV,
  roster,
  setRoster,
  selectedUnit,
  setSelectedUnit,
}) {
  function removeUnit(id, i) {
    setRoster([
      ...roster.filter(
        (unit, unitIndex) =>
          unit.Id.toString() + unitIndex !== id.toString() + i
      ),
    ]);
  }

  const [hoveredEl, setHoveredEl] = useState(null);

  return (
    <div className="flex flex-col w-1/3 h-screen">
      <p className="font-bold text-center">Saved Units | Total PV: {totalPV}</p>
      <ul className="flex flex-col gap-1 overflow-auto">
        {roster?.map((unit, i) => (
          <li
            className={`relative p-1 border border-black bg-white rounded cursor-pointer flex flex-col`}
            key={unit.Id.toString() + i}
            onMouseEnter={() => setHoveredEl(i)}
            onMouseLeave={() => setHoveredEl(null)}
          >
            {unit.customName ? (
              <p className="font-semibold">{unit.customName}</p>
            ) : (
              ""
            )}
            <div>
              <span className="font-semibold">{unit.Name} </span> | PV:{" "}
              {unit.BFPointValue} | MV: {unit.BFMove} | Skill: {unit.skill}
            </div>
            <div>
              A/S: {unit.BFArmor}/{unit.BFStructure} | Damage:{" "}
              {unit.BFDamageShort}/{unit.BFDamageMedium}/{unit.BFDamageLong}{" "}
              {unit.BFAbilities ? `| Special: ${unit.BFAbilities}` : ""}
            </div>
            {hoveredEl === i ? (
              <CardButton
                color={"bg-red-600"}
                onClick={() => removeUnit(unit.Id, i)}
              >
                ❌
              </CardButton>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedSection;
