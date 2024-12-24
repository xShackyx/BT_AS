import { useUnit } from "../contexts/UnitContext";

function SearchList() {
  const { units, setSelectedUnit } = useUnit();

  return (
    <ul>
      {units?.map((unit) => (
        <button
          className="px-1 border border-b-black rounded"
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
