import CardButton from "./CardButton";

function SavedSection({ roster, setRoster, selectedUnit, setSelectedUnit }) {
  function removeUnit(id, i) {
    setRoster([
      ...roster.filter((unit) => unit.Id.toString() + i !== id.toString() + i),
    ]);
  }

  return (
    <div className="flex flex-col w-1/3 h-screen">
      <p className="font-bold text-center">Saved Units</p>
      <ul className="flex flex-col gap-1 overflow-auto">
        {roster?.map((unit, i) => (
          <li
            className={`relative p-1 border border-black bg-white rounded cursor-pointer flex flex-col ${
              selectedUnit !== null
                ? unit.Id === selectedUnit.Id
                  ? "bg-yellow-400"
                  : ""
                : ""
            }`}
            onClick={() => setSelectedUnit(unit)}
            key={unit.Id.toString() + i}
          >
            <div>
              <span className="font-semibold">{unit.Name} </span> | PV:{" "}
              {unit.BFPointValue}| MV: {unit.BFMove}
            </div>
            <div>
              A/S: {unit.BFArmor}/{unit.BFStructure} | Damage:{" "}
              {unit.BFDamageShort}/{unit.BFDamageMedium}/{unit.BFDamageLong}{" "}
              {unit.BFAbilities ? `| Special: ${unit.BFAbilities}` : ""}-
              {unit.Id.toString() + i}
            </div>
            {unit.Id === selectedUnit.Id ? (
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
