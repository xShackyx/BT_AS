// import { useUnit } from "../contexts/UnitContext-v1";

function SearchList({ units, selectedUnit, setSelectedUnit }) {
  // const { units, setSelectedUnit } = useUnit();

  function handleSelect(unit) {
    setSelectedUnit(unit);
    console.log(unit);
  }

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
          onClick={() => handleSelect(unit)}
          key={unit.Id}
        >
          {unit.Name}
        </button>
      ))}
    </ul>
  );
}

export default SearchList;
