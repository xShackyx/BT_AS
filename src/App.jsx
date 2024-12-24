// import { createContext, useEffect, useState } from "react";
// import { useDebounce } from "./hooks/useDebounce";
// import Axios from "axios";

import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import testCard from "./assets/test-card.jpg";
import SearchList from "./components/SearchList";
import { UnitProvider } from "./contexts/UnitContext";

function App() {
  // const [units, setUnits] = useState([]);
  // const [query, setQuery] = useState("");
  // const debouncedQuery = useDebounce(query, 1);
  // const [selectedUnit, setSelectedUnit] = useState(null);

  // useEffect(
  //   function () {
  //     async function fetchUnitList() {
  //       try {
  //         const res = await Axios({
  //           url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
  //           params: { MinPV: 1, MaxPV: 999, Name: debouncedQuery },
  //         });
  //         setUnits(res.data.Units);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     if (debouncedQuery.length < 3) {
  //       return setUnits([]);
  //     }
  //     fetchUnitList();
  //   },
  //   [debouncedQuery]
  // );

  // return (
  //
  //     <div className="flex items-center align-middle">
  //       <Card selectedUnit={selectedUnit} />
  //       <img className="w-[42rem] h-[27rem]" src={testCard} />
  //     </div>
  //     <Searchbar query={query} setQuery={setQuery} />
  //     <SearchList units={units} setSelectedUnit={setSelectedUnit} />
  //
  // );

  return (
    <UnitProvider>
      <div className="flex items-center align-middle">
        <Card />
        <img className="w-[42rem] h-[27rem]" src={testCard} />
      </div>
      <Searchbar />
      <SearchList />
    </UnitProvider>
  );
}

export default App;
