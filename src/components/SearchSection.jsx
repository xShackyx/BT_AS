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
  squadUnits,
  setSquadUnits,
  unitCustomName,
  setUnitCustomName,
  unitSkill,
  setUnitSkill,
  isLoading,
}) {
  return (
    <div className="flex flex-col gap-2 xl:w-1/3">
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
        squadUnits={squadUnits}
        setSquadUnits={setSquadUnits}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
        setUnitSkill={setUnitSkill}
        isLoading={isLoading}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default SearchSection;
