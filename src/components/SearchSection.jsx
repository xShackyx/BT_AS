import Searchbar from "./Searchbar";
import SearchList from "./SearchList";

function SearchSection({
  searchQuery,
  setSearchQuery,
  filterQuery,
  setFilterQuery,
  units,
  selectedUnit,
  setSelectedUnit,
  roster,
  setRoster,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
}) {
  return (
    <div className="flex flex-col gap-2 w-1/3 h-screen">
      <Searchbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
      />
      <SearchList
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        roster={roster}
        setRoster={setRoster}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
      />
    </div>
  );
}

export default SearchSection;
