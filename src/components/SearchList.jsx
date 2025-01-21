import BigButton from "./BigButton";
import Spinner from "./Spinner";
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
  isLoading,
  searchQuery,
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

  function handleSelectUnit(unit) {
    setSelectedUnit(unit);
    setUnitCustomName("");
    setUnitSkill(4);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {units?.length === 0 && searchQuery.trim() !== "" ? (
            <p className="p-5 font-semibold text-xl text-center">
              No units found!
            </p>
          ) : (
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
                  onClick={() => handleSelectUnit(unit)}
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
          )}
        </>
      )}
    </>
  );
}

export default SearchList;
