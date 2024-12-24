// import {
//   createContext,
//   useContext,
//   useEffect,
//   useReducer,
//   useState,
// } from "react";
// import { useDebounce } from "../hooks/useDebounce";
// import Axios from "axios";

// const UnitContext = createContext();

// const initialState = {
//   units: [],
//   searchQuery: "",
//   selectedUnit: {},
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "query/changed":
//       return { ...state, searchQuery: action.payload };
//     case "units/loaded":
//       return { ...state, units: action.payload };
//     case "units/reset":
//       return { ...state, units: [] };
//     case "unit/selected":
//       return { ...state, selectedUnit: action.payload };
//     default:
//       throw new Error("Unknown action type");
//   }
// }

// const UnitProvider = function ({ children }) {
//   const [{ units, selectedUnit }, dispatch] = useReducer(reducer, initialState);
//   const debouncedQuery = useDebounce(searchQuery, 1);

//   // const [searchQuery, setSearchQuery] = useState("");
//   // const [units, setUnits] = useState([]);
//   // const [selectedUnit, setSelectedUnit] = useState(null);

//   useEffect(
//     function () {
//       async function fetchUnitList() {
//         try {
//           const res = await Axios({
//             url: `https://masterunitlist.azurewebsites.net/Unit/QuickList`,
//             params: { MinPV: 1, MaxPV: 999, Name: debouncedQuery },
//           });
//           // setUnits(res.data.Units);
//           dispatch({ type: "units/loaded", payload: res.data.Units });
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       // if (debouncedQuery.length < 3) {
//       //   // return setUnits([]);
//       //   dispatch({ type: "units/reset" });
//       // }
//       fetchUnitList();
//     },
//     [debouncedQuery]
//   );

//   function getSearchQuery(query) {
//     if (query.length < 3) dispatch({ type: "units/reset" });
//     dispatch({ type: "query/changed", payload: query });
//   }

//   return (
//     <UnitContext.Provider
//       value={(units, searchQuery, getSearchQuery, selectedUnit)}
//     >
//       {children}
//     </UnitContext.Provider>
//   );
// };

// function useUnit() {
//   const context = useContext(UnitContext);
//   if (context === undefined)
//     throw new Error("UnitContext was used outside of UnitProvide");
//   return context;
// }

// export { UnitProvider, useUnit };
