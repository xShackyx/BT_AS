function ModifyCard({
  unitCustomName,
  setUnitCustomName,
  unitSkill,
  setUnitSkill,
}) {
  return (
    <div className="flex w-full gap-3">
      <input
        className="flex-auto"
        value={unitCustomName}
        onChange={(e) => setUnitCustomName(e.target.value)}
        type="text"
        id="unitCustomName"
        name="unitCustomName"
        placeholder=" Add a custom unit name"
        maxLength="25"
      />
      <select
        className="w-10"
        value={unitSkill}
        onChange={(e) => setUnitSkill(e.target.value)}
        id="unitSkill"
        name="unitSkill"
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
  );
}

export default ModifyCard;
