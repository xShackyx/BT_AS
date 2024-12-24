import { createContext, useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import Axios from "axios";

import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import testCard from "./assets/test-card.jpg";
import SearchList from "./components/SearchList";
// import { UnitProvider } from "./contexts/UnitContext";

function App() {
  const [units, setUnits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 1);
  const [selectedUnit, setSelectedUnit] = useState({});

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
    <>
      <div className="flex items-center align-middle">
        <Card selectedUnit={selectedUnit} />
        <img className="w-[42rem] h-[27rem]" src={testCard} />
      </div>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchList
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
      />
    </>
  );
}

export default App;
