function SearchList({ units, selectedUnit, setSelectedUnit }) {
  return (
    <ul>
      {units?.map((unit) => (
        <button
          className={`px-1 border border-b-black rounded ${
            selectedUnit !== null
              ? unit.Id === selectedUnit.Id
                ? "bg-yellow-400"
                : ""
              : ""
          }`}
          onClick={() => setSelectedUnit(unit)}
          key={unit.Id}
        >
          {unit.Name}
        </button>
      ))}
    </ul>
  );
}

export default SearchList;
