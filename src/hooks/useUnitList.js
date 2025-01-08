// import { Axios } from "axios";
// import { useEffect, useState } from "react";

// async function getUnitList(query) {
//   try {
//     const res = await Axios({
//       url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
//       params: { MinPV: 1, MaxPV: 999, Name: query },
//     });
//     return res.data.Units;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export function useUnitList(debouncedQuery) {
//   const [units, setUnits] = useState([]);

//   useEffect(
//     function () {
//       async function fetchUnitList(query) {
//         const unitList = await getUnitList(query);
//         setUnits(unitList);
//       }
//       if (debouncedQuery.length < 3) {
//         return setUnits([]);
//       }
//       fetchUnitList(debouncedQuery);
//     },
//     [debouncedQuery]
//   );
//   return units;
// }
