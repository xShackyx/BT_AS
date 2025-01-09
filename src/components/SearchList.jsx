import CardButton from "./CardButton";

function SearchList({
  units,
  selectedUnit,
  setSelectedUnit,
  roster,
  setRoster,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
}) {
  function saveUnit() {
    const newUnit = {
      ...selectedUnit,
      customName: unitCustomName,
      skill: unitSkill,
    };
    setRoster([...roster, newUnit]);
    setUnitCustomName("");
  }

  return (
    <ul className="flex flex-col gap-1 overflow-auto">
      {units?.map((unit) => (
        <li
          className={`relative p-1 border border-black bg-white rounded cursor-pointer flex flex-col ${
            selectedUnit !== null
              ? unit.Id === selectedUnit.Id
                ? "bg-yellow-400"
                : ""
              : ""
          }`}
          onClick={() => setSelectedUnit(unit)}
          key={unit.Id}
        >
          <div>
            <span className="font-semibold">{unit.Name} </span> | PV:{" "}
            {unit.BFPointValue}| MV: {unit.BFMove}
          </div>
          <div>
            A/S: {unit.BFArmor}/{unit.BFStructure} | Damage:{" "}
            {unit.BFDamageShort}/{unit.BFDamageMedium}/{unit.BFDamageLong}{" "}
            {unit.BFAbilities ? `| Special: ${unit.BFAbilities}` : ""}
          </div>
          {unit.Id === selectedUnit?.Id ? (
            <CardButton color={"bg-green-500"} onClick={saveUnit}>
              💾
            </CardButton>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
