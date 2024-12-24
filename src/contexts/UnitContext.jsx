import { createContext, useContext } from "react";

const UnitContext = createContext();

const UnitProvider = function ({ unit, children }) {
  return (
    <UnitContext.Provider value={{ unit }}>{children}</UnitContext.Provider>
  );
};

function useUnit() {
  const context = useContext(UnitContext);
  if (context === undefined)
    throw new Error("UnitContext was used outside of UnitProvide");
  return context;
}

export { UnitProvider, useUnit };
