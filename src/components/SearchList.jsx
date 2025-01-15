import BigButton from "./BigButton";
import UnitStats from "./UnitStats";

function SearchList({
  units,
  selectedUnit,
  setSelectedUnit,
  selectedSquad,
  setSelectedSquad,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
}) {
  function saveUnit() {
    const newUnit = {
      ...selectedUnit,
      CustomName: unitCustomName,
      Skill: unitSkill,
    };
    console.log(selectedSquad);
    const newUnits = [...selectedSquad.Units, newUnit];
    selectedSquad.Units = newUnits;
    setSelectedSquad(selectedSquad);
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
          <UnitStats unit={unit} />
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
