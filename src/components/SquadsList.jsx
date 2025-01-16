import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useRoster } from "../contexts/RosterContext";

import BigButton from "./BigButton";
import UnitStats from "./UnitStats";
import ConfirmModal from "./ConfirmModal";

function SquadsList({ handleRemoveSquad }) {
  const { roster, setNewRoster } = useRoster();
  const [list, setList] = useState(roster);
  const [selectedSquad, setSelectedSquad] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleShowUnits(squad, i) {
    const newList = [...list];
    newList[i].ShowUnits = !newList[i].ShowUnits;
    setList(newList);
    setNewRoster(newList);
  }

  function openModal(squad) {
    setIsModalOpen(true);
    setSelectedSquad(squad);
  }

  useEffect(
    function () {
      setList(roster);
    },
    [roster]
  );

  return (
    <ul className="flex gap-1 flex-wrap">
      <ConfirmModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        confirmedModal={handleRemoveSquad}
        element={selectedSquad}
      />
      {list?.map((squad, i) => (
        <li className="relative w-[30rem] p-2 flex flex-col gap-1" key={i}>
          <div className="h-20 border border-black rounded bg-blue-300">
            <h3 className="p-1 text-2xl font-bold">{squad.Name}</h3>
            <p className="p-1 text-xl font-semibold">
              Total PV: {squad.totalPV ? squad.totalPV : 0}
            </p>
            {squad.ShowUnits ? (
              <BigButton
                color="bg-green-500"
                xAxys={"right-10"}
                onClick={() => handleShowUnits(squad, i)}
              >
                ➖
              </BigButton>
            ) : (
              <BigButton
                color="bg-green-500"
                xAxys={"right-10"}
                onClick={() => handleShowUnits(squad, i)}
              >
                ➕
              </BigButton>
            )}
            <NavLink to={`/squad/${squad.Id}`}>
              <BigButton color="bg-blue-500">🛠</BigButton>
            </NavLink>
            <BigButton
              color="bg-red-500"
              yAxys="top-10"
              onClick={() => openModal(squad)}
            >
              ✖
            </BigButton>
          </div>
          <div>
            {squad.ShowUnits ? (
              <ul className="flex flex-col gap-1">
                {squad.Units.map((unit, i) => (
                  <li className="border border-black rounded" key={unit.Id + i}>
                    <UnitStats unit={unit} />
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SquadsList;
