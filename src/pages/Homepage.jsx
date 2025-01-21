import { useState } from "react";
import { useRoster } from "../contexts/RosterContext";

import AddNewSquad from "../components/AddNewSquad";
import SquadsList from "../components/SquadsList";
import { NavLink } from "react-router";

function Homepage() {
  const [newSquadName, setNewSquadName] = useState("");
  const { roster, setNewRoster } = useRoster();

  function handleChangeNewSquadName(e) {
    setNewSquadName(e.target.value);
  }

  function handleAddNewSquad(e) {
    e.preventDefault();
    if (newSquadName.trim() === "") return;
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
    <div className="h-screen flex flex-col p-1 gap-5">
      <div className="flex items-center justify-around border border-black rounded p-5">
        <div className="flex-auto flex flex-col gap-1 items-center justify-center">
          <h1 className="font-bold text-2xl">
            BattleTech Alpha Strike Companion
          </h1>
          <h2 className="font-bold uppercase">Squads</h2>

          <AddNewSquad
            newSquadName={newSquadName}
            handleChangeNewSquadName={handleChangeNewSquadName}
            handleAddNewSquad={handleAddNewSquad}
          />
        </div>
        <NavLink to="play">
          <button className="w-full py-2 px-20 border border-black rounded bg-green-500 text-white uppercase font-bold active:translate-y-[0.10rem] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
            PLAY
          </button>
        </NavLink>
      </div>

      <SquadsList handleRemoveSquad={handleRemoveSquad} />
    </div>
  );
}

export default Homepage;
