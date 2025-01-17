import { NavLink } from "react-router";
import { useRoster } from "../contexts/RosterContext";
import Card from "../components/Card";

function PlayMode() {
  const { roster } = useRoster();

  return (
    <div className="min-h-screen">
      <div className="py-2 px-10 border border-black">
        <NavLink to="/">
          <button className="w-1/6 py-2 px-20 border border-black rounded bg-green-500 text-white uppercase font-bold active:translate-y-[0.10rem] active:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
            Back to Home
          </button>
        </NavLink>
      </div>
      <div className="p-2">
        {roster.map((squad) => (
          <div className=" border border-black rounded" key={squad.Id}>
            <h3 className="text-2xl text-center font-semibold border-b border-black">
              {squad.Name}
            </h3>
            <div className="grid grid-cols-3 gap-1">
              {squad.Units?.map((unit, i) => (
                <div className="" key={squad.Id + i}>
                  <Card
                    selectedUnit={unit}
                    unitCustomName={unit.CustomName}
                    unitSkill={unit.Skill}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayMode;
