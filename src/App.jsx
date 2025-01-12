import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import Axios from "axios";

import SearchSection from "./components/SearchSection";
import SavedSection from "./components/SavedSection";
import PreviewCardSection from "./components/PreviewCardSection";

function App() {
  const [units, setUnits] = useState([]);
  const [filterQuery, setFilterQuery] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 1);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [roster, setRoster] = useState([]);
  const [unitCustomName, setUnitCustomName] = useState("");
  const [unitSkill, setUnitSkill] = useState(4);
  const [totalPV, setTotalPV] = useState(0);

  useEffect(
    function () {
      setTotalPV(0);
      roster.forEach((unit) =>
        setTotalPV((prevPv) => prevPv + unit.BFPointValue)
      );
    },
    [roster]
  );

  async function getUnitList(query) {
    try {
      const res = await Axios({
        url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
        params: { MinPV: 1, MaxPV: 999, Name: query },
      });
      return res.data.Units;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(
    function () {
      async function fetchUnitList(query) {
        const unitList = await getUnitList(query);
        setUnits(unitList);
      }

      if (debouncedQuery.length < 3) {
        setSelectedUnit(null);
        return setUnits([]);
      }
      fetchUnitList(debouncedQuery);
    },
    [debouncedQuery]
  );

  return (
    <div className="p-5 flex justify-evenly bg-slate-200 gap-2">
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        roster={roster}
        setRoster={setRoster}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
      />
      <PreviewCardSection
        selectedUnit={selectedUnit}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
        setUnitSkill={setUnitSkill}
      />
      <SavedSection
        totalPV={totalPV}
        roster={roster}
        setRoster={setRoster}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
      />
    </div>
  );
}

export default App;
