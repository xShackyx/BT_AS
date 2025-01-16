import { useState } from "react";
import { useRoster } from "../contexts/RosterContext";

import AddNewSquad from "../components/AddNewSquad";
import SquadsList from "../components/SquadsList";

function Homepage() {
  const [newSquadName, setNewSquadName] = useState("");
  const { roster, setNewRoster } = useRoster();

  function handleChangeNewSquadName(e) {
    setNewSquadName(e.target.value);
  }

  function handleAddNewSquad(e) {
    e.preventDefault();
    if (newSquadName.length <= 0) return;
    const newsquadList = roster.concat({
      Name: newSquadName,
      Id: new Date().getTime(),
      ShowUnits: false,
      Units: [],
    });

    setNewRoster(newsquadList);
    setNewSquadName("");
  }

  function handleRemoveSquad(squad) {
    const newSquadList = roster.filter((s) => s.Id !== squad.Id);
    setNewRoster(newSquadList);
  }

  return (
    <div className="flex flex-col p-1 gap-5">
      <div className="border border-black rounded p-5">
        <h2>Squads</h2>
      </div>
      <AddNewSquad
        newSquadName={newSquadName}
        handleChangeNewSquadName={handleChangeNewSquadName}
        handleAddNewSquad={handleAddNewSquad}
      />

      <SquadsList handleRemoveSquad={handleRemoveSquad} />
    </div>
  );
}

export default Homepage;
