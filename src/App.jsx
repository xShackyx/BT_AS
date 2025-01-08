import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import Axios from "axios";

import Card from "./components/Card";
import SearchSection from "./components/SearchSection";
import SavedSection from "./components/SavedSection";

function App() {
  const [units, setUnits] = useState([]);
  const [filterQuery, setFilterQuery] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 1);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [roster, setRoster] = useState([]);

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
        return setUnits([]);
      }
      fetchUnitList(debouncedQuery);
    },
    [debouncedQuery]
  );

  return (
    <div className="p-1 flex justify-evenly bg-slate-200 gap-1">
      {/* <img className="w-[42rem] h-[27rem]" src={testCard} /> */}

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
      />
      {selectedUnit ? (
        <Card selectedUnit={selectedUnit} />
      ) : (
        "Search and select an unit to start"
      )}
      {/* <button onClick={() => console.log(roster)}>pippo</button> */}
      <SavedSection
        roster={roster}
        setRoster={setRoster}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
      />
    </div>
  );
}

export default App;
