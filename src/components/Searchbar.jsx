import { useUnit } from "../contexts/UnitContext";

function Searchbar() {
  const { searchQuery, getSearchQuery } = useUnit();

  return (
    <form className="">
      <input
        className="w-1/4 border border-black"
        type="text"
        placeholder="Search for an unit"
        value={searchQuery}
        onChange={(e) => getSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default Searchbar;
