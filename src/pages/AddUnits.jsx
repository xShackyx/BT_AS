import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useParams } from "react-router";
import { useRoster } from "../contexts/RosterContext";

import Axios from "axios";

import SearchSection from "../components/SearchSection";
import SavedSection from "../components/SavedSection";
import PreviewCardSection from "../components/PreviewCardSection";

function AddUnits({ totalPV, setTotalPV }) {
  const [units, setUnits] = useState([]);
  const [filterQuery, setFilterQuery] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitCustomName, setUnitCustomName] = useState("");
  const [unitSkill, setUnitSkill] = useState(4);
  const [selectedSquad, setSelectedSquad] = useState({});

  const debouncedQuery = useDebounce(searchQuery, 1);
  const { roster, getSingleSquad } = useRoster();
  const { squadId } = useParams();

  // useEffect(
  //   function () {
  //     setSelectedSquad(getSingleSquad(Number(squadId)));

  //     console.log(selectedSquad);
  //   },
  //   [squadId, getSingleSquad]
  // );

  useEffect(() => {
    // Test
    async function fetchSingleSquad() {
      const res = await getSingleSquad(Number(squadId));
      const data = await res;
      console.log(data);
      setSelectedSquad(data);
    }
    fetchSingleSquad();
    //    console.log(selectedSquad);
  }, [squadId, getSingleSquad]);

  // useEffect(
  //   function () {
  //     console.log(selectedSquad);
  //   },
  //   [selectedSquad.Units]
  // );

  useEffect(
    function () {
      setTotalPV(0);
      roster.forEach((unit) =>
        setTotalPV((prevPv) => prevPv + unit.BFPointValue)
      );
    },
    [roster]
  );

  function handleUnits(units) {
    selectedSquad.Units = units;
  }

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
    <div className="p-5 flex justify-evenly gap-2">
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        selectedSquad={selectedSquad}
        setSelectedSquad={setSelectedSquad}
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
        selectedSquad={selectedSquad}
        handleUnits={handleUnits}
      />
    </div>
  );
}

export default AddUnits;
