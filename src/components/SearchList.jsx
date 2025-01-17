import BigButton from "./BigButton";
import UnitStats from "./UnitStats";

function SearchList({
  units,
  selectedUnit,
  setSelectedUnit,
  squadUnits,
  setSquadUnits,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
  setUnitSkill,
}) {
  function saveUnit() {
    const newUnit = {
      ...selectedUnit,
      CustomName: unitCustomName,
      Skill: unitSkill,
    };
    const newUnits = [...squadUnits, newUnit];
    squadUnits = newUnits;
    setSquadUnits(squadUnits);
    setUnitCustomName("");
    setUnitSkill(4);
  }

  return (
    <ul className="flex flex-col gap-1 overflow-hidden overflow-y-scroll">
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
          <UnitStats unit={unit} isCustomUnit={false} />
          {unit.Id === selectedUnit?.Id ? (
            <BigButton color={"bg-green-500"} onClick={saveUnit}>
              💾
            </BigButton>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
