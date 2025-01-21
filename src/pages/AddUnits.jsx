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
  const [isLoading, setIsLoading] = useState(false);
  const [unitPV, setUnitPV] = useState(null);

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
      const skillValue = Number(unitSkill);
      const basePV = selectedUnit?.BFPointValue;
      let PVmodifier = 0;
      let skillStep = 0;
      if (skillValue === 4) setUnitPV(basePV);
      if (skillValue > 4) {
        skillStep = skillValue - 4;

        if (basePV >= 0 && basePV <= 14) PVmodifier = 1;
        if (basePV >= 15 && basePV <= 24) PVmodifier = 2;
        if (basePV >= 25 && basePV <= 34) PVmodifier = 3;
        if (basePV >= 35 && basePV <= 44) PVmodifier = 4;
        if (basePV >= 45 && basePV <= 54) PVmodifier = 5;
        if (basePV >= 55 && basePV <= 64) PVmodifier = 6;
        if (basePV >= 65 && basePV <= 74) PVmodifier = 7;
        if (basePV >= 75 && basePV <= 84) PVmodifier = 8;
        if (basePV >= 85 && basePV <= 94) PVmodifier = 9;
        if (basePV >= 95 && basePV <= 104) PVmodifier = 10;

        setUnitPV(basePV - PVmodifier * skillStep);
      }
      if (skillValue < 4) {
        skillStep = 4 - skillValue;

        if (basePV >= 0 && basePV <= 7) PVmodifier = 1;
        if (basePV >= 8 && basePV <= 12) PVmodifier = 2;
        if (basePV >= 13 && basePV <= 17) PVmodifier = 3;
        if (basePV >= 18 && basePV <= 22) PVmodifier = 4;
        if (basePV >= 23 && basePV <= 27) PVmodifier = 5;
        if (basePV >= 28 && basePV <= 32) PVmodifier = 6;
        if (basePV >= 33 && basePV <= 37) PVmodifier = 7;
        if (basePV >= 38 && basePV <= 42) PVmodifier = 8;
        if (basePV >= 43 && basePV <= 47) PVmodifier = 9;
        if (basePV >= 48 && basePV <= 52) PVmodifier = 10;
        if (basePV >= 53 && basePV <= 57) PVmodifier = 11;
        if (basePV >= 58 && basePV <= 62) PVmodifier = 12;
        if (basePV >= 63 && basePV <= 67) PVmodifier = 13;
        if (basePV >= 68 && basePV <= 72) PVmodifier = 14;
        if (basePV >= 73 && basePV <= 77) PVmodifier = 15;
        if (basePV >= 78 && basePV <= 82) PVmodifier = 16;
        if (basePV >= 83 && basePV <= 87) PVmodifier = 17;
        if (basePV >= 88 && basePV <= 92) PVmodifier = 18;
        if (basePV >= 93 && basePV <= 107) PVmodifier = 19;

        setUnitPV(basePV + PVmodifier * skillStep);
      }
      console.log(unitPV);
      setSelectedUnit({ ...selectedUnit, CustomBFPointValue: unitPV });
    },
    [unitSkill, selectedUnit]
  );

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
      setIsLoading(true);
      const res = await Axios({
        url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
        params: { ...filterQuery, Name: query },
      });
      setIsLoading(false);
      return res.data.Units;
    } catch (error) {
      setIsLoading(false);
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
        setUnitCustomName("");
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
        unitPV={unitPV}
        isLoading={isLoading}
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
