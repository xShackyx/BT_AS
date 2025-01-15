import Card from "./Card";
import ModifyCard from "./ModifyCard";
import { NavLink } from "react-router";

function PreviewCardSection({
  selectedUnit,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
  setUnitSkill,
}) {
  return (
    <div className="w-1/3 flex flex-col gap-1 items-center">
      <NavLink className="w-full" to="/">
        <button className="w-full p-2 border border-black rounded bg-green-500 text-white font-bold active:translate-y-[0.10rem] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
          Done
        </button>
      </NavLink>
      {selectedUnit ? (
        <>
          <Card
            selectedUnit={selectedUnit}
            unitCustomName={unitCustomName}
            unitSkill={unitSkill}
          />
          <ModifyCard
            unitCustomName={unitCustomName}
            setUnitCustomName={setUnitCustomName}
            unitSkill={unitSkill}
            setUnitSkill={setUnitSkill}
          />
        </>
      ) : (
        "Search and select an unit to start"
      )}
    </div>
  );
}

export default PreviewCardSection;
