import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import AddUnits from "./pages/AddUnits";
import { RosterProvider } from "./contexts/RosterContext";

function App() {
  return (
    <div className="h-screen bg-slate-200">
      <RosterProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="squad/:squadId" element={<AddUnits />} />
          </Routes>
        </BrowserRouter>
      </RosterProvider>
    </div>
  );
}

export default App;
