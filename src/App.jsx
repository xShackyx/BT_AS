import { BrowserRouter, Route, Routes } from "react-router";
import { RosterProvider } from "./contexts/RosterContext";

import Homepage from "./pages/Homepage";
import AddUnits from "./pages/AddUnits";
import PlayMode from "./pages/PlayMode";

function App() {
  return (
    <div className="h-full overflow-scroll bg-slate-200">
      <RosterProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="squad/:squadId" element={<AddUnits />} />
            <Route path="play" element={<PlayMode />} />
          </Routes>
        </BrowserRouter>
      </RosterProvider>
    </div>
  );
}

export default App;
