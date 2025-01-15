function UnitStats({ unit }) {
  return (
    <>
      {unit.CustomName ? (
        <p className="font-semibold">{unit.CustomName}</p>
      ) : (
        ""
      )}
      <div className="px-1">
        <span className="font-semibold">{unit.Name} </span> | PV:{" "}
        {unit.BFPointValue} | MV: {unit.BFMove} | Skill:{" "}
        {unit.Skill ? unit.Skill : unit.Skill}
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
