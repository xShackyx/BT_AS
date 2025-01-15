import { useEffect, useState } from "react";
import BigButton from "./BigButton";
import UnitStats from "./UnitStats";

function SavedSection({ totalPV, selectedSquad, handleUnits }) {
  const [unitList, setUnitList] = useState([]);

  function removeUnit(id, i) {
    const newUnits = selectedSquad.Units.filter(
      (unit, unitIndex) => unit.Id.toString() + unitIndex !== id.toString() + i
    );
    handleUnits(newUnits);
    // selectedSquad.Units = newUnits;
    // setUnitList(newUnits);
    // setSelectedSquad(selectedSquad);
  }

  useEffect(
    function () {
      setUnitList(selectedSquad?.Units);
    },
    [selectedSquad?.Units]
  );

  const [hoveredEl, setHoveredEl] = useState(null);

  return (
    <div className="flex flex-col w-1/3 h-screen">
      <h2 className="font-bold text-center">
        Saved Units | Total PV: {totalPV ? totalPV : 0}
      </h2>
      <ul className="flex flex-col gap-1 overflow-auto">
        {unitList?.map((unit, i) => (
          <li
            className={`relative p-1 border border-black bg-white rounded cursor-pointer flex flex-col`}
            key={unit.Id.toString() + i}
            onMouseEnter={() => setHoveredEl(i)}
            onMouseLeave={() => setHoveredEl(null)}
          >
            <UnitStats unit={unit} />
            {hoveredEl === i ? (
              <BigButton
                color={"bg-red-600"}
                onClick={() => removeUnit(unit.Id, i)}
              >
                ✖
              </BigButton>
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
