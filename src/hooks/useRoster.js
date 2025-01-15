// import { useEffect, useState } from "react";

// export function useRoster() {
//   const [roster, setRoster] = useState([]);

//   useEffect(function () {
//     const local = JSON.parse(localStorage.getItem("roster"));
//     setRoster(local);
//   }, []);

//   function setNewRoster(squads) {
//     localStorage.setItem("roster", JSON.stringify(squads));
//     setRoster(squads);
//   }

//   function getRoster() {}

//   function getSingleSquad(id) {
//     return roster.find(function (squad) {
//       return squad.Id === id;
//     });
//   }

//   return { roster, setNewRoster, getSingleSquad };
// }
