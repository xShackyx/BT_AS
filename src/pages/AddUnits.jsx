import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useParams } from "react-router";
import { useRoster } from "../contexts/RosterContext";

import Axios from "axios";

import SearchSection from "../components/SearchSection";
import SavedSection from "../components/SavedSection";
import PreviewCardSection from "../components/PreviewCardSection";

function AddUnits() {
  const [units, setUnits] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitCustomName, setUnitCustomName] = useState("");
  const [unitSkill, setUnitSkill] = useState(4);
  const [squadUnits, setSquadUnits] = useState([]);
  const [squadName, setSquadName] = useState("");
  const [totalPV, setTotalPV] = useState(0);

  const [filterQuery, setFilterQuery] = useState({
    MinPV: 1,
    MaxPV: 999,
    Name: "",
  });

  const debouncedQuery = useDebounce(searchQuery, 1);
  const { roster, setNewRoster, getSingleSquad } = useRoster();
  const { squadId } = useParams();

  useEffect(() => {
    async function fetchSingleSquad() {
      const res = await getSingleSquad(Number(squadId));
      const data = await res;
      setSquadUnits(data?.Units);
      setSquadName(data?.Name);
    }
    fetchSingleSquad();
  }, [squadId, getSingleSquad]);

  useEffect(
    function () {
      setTotalPV(0);
      squadUnits?.forEach((unit) =>
        setTotalPV((prevPv) => prevPv + unit.BFPointValue)
      );
    },
    [squadUnits]
  );

  function handleSaveSquadUnits() {
    const newRoster = roster.map((squad) =>
      squad.Id === Number(squadId)
        ? { ...squad, totalPV, Units: squadUnits }
        : squad
    );
    setNewRoster(newRoster);
    setSquadUnits([]);
  }

  async function getUnitList(query) {
    try {
      const res = await Axios({
        url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
        params: { ...filterQuery, Name: query },
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
    [debouncedQuery, filterQuery]
  );

  return (
    <div className="p-5 flex h-screen justify-evenly gap-2">
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        units={units}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        squadUnits={squadUnits}
        setSquadUnits={setSquadUnits}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
        setUnitSkill={setUnitSkill}
      />
      <PreviewCardSection
        selectedUnit={selectedUnit}
        unitCustomName={unitCustomName}
        setUnitCustomName={setUnitCustomName}
        unitSkill={unitSkill}
        setUnitSkill={setUnitSkill}
        handleSaveSquadUnits={handleSaveSquadUnits}
      />
      <SavedSection
        totalPV={totalPV}
        squadName={squadName}
        squadUnits={squadUnits}
        setSquadUnits={setSquadUnits}
      />
    </div>
  );
}

export default AddUnits;
