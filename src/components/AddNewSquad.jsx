function AddNewSquad({
  newSquadName,
  handleChangeNewSquadName,
  handleAddNewSquad,
}) {
  return (
    <form className="flex w-1/3 gap-1">
      <label>Squad Name:</label>
      <input
        className="flex-auto border border-black rounded"
        type="text"
        value={newSquadName}
        placeholder=" New Squad"
        onChange={handleChangeNewSquadName}
        maxLength="20"
      />
      <button
        className="flex-auto border border-black rounded"
        onClick={handleAddNewSquad}
      >
        ADD
      </button>
    </form>
  );
}

export default AddNewSquad;
