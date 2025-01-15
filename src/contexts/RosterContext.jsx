import { createContext, useContext, useEffect, useState } from "react";

const RosterContext = createContext();

const RosterProvider = function ({ children }) {
  const [roster, setRoster] = useState([]);

  useEffect(function () {
    const local = JSON.parse(localStorage.getItem("roster"));
    setRoster(local);
  }, []);

  function setNewRoster(squads) {
    localStorage.setItem("roster", JSON.stringify(squads));
    setRoster(squads);
  }

  function getRoster() {}

  async function getSingleSquad(id) {
    return roster.find(function (squad) {
      return squad.Id === id;
    });
  }

  return (
    <RosterContext.Provider value={{ roster, setNewRoster, getSingleSquad }}>
      {children}
    </RosterContext.Provider>
  );
};

function useRoster() {
  const context = useContext(RosterContext);
  if (context === undefined)
    throw new Error("RosterContext was used outside of RosterProvider");
  return context;
}

export { RosterProvider, useRoster };
