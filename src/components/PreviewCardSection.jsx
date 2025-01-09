import { useState } from "react";
import Card from "./Card";
import ModifyCard from "./ModifyCard";

function PreviewCardSection({
  selectedUnit,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
  setUnitSkill,
}) {
  return (
    <div className="w-1/3 flex flex-col gap-1 items-center">
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
