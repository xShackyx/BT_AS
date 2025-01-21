function UnitStats({ unit, isCustomUnit = true }) {
  return (
    <>
      {" "}
      {unit.CustomName ? (
        <p className="font-semibold">{unit.CustomName}</p>
      ) : (
        ""
      )}
      <div className="px-1">
        <span className="font-semibold">{unit.Name} </span> | PV:{" "}
        {unit.CustomBFPointValue ? unit.CustomBFPointValue : unit.BFPointValue}{" "}
        | MV: {unit.BFMove} | Skill: {isCustomUnit ? unit.Skill : 4}
      </div>
      <div className="px-1">
        A/S: {unit.BFArmor}/{unit.BFStructure} | Damage: {unit.BFDamageShort}/
        {unit.BFDamageMedium}/{unit.BFDamageLong}{" "}
        {unit.BFAbilities ? `| Special: ${unit.BFAbilities}` : ""}
      </div>
    </>
  );
}

export default UnitStats;
