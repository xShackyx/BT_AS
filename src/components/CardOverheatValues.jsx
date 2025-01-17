import { useState } from "react";
import { useUnit } from "../contexts/UnitContext";
import CardOverheatButton from "./CardOverheatButton";

function CardOverheatValues({ cardDisabled }) {
  const { unit } = useUnit();
  const [overheatToggle, setOverheatToggle] = useState(0);

  return (
    <div className="p-1 col-span-3 row-span-2 flex gap-5 items-center bg-gray-300 border border-black rounded">
      <div className="flex gap-1">
        <p>OV:</p>
        <p className="font-bold">{unit.BFOverheat}</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="uppercase font-semibold">| heat scale</p>
        <div className="flex outline outline-black rounded-lg bg-gray-500">
          <CardOverheatButton
            borderType="border-r"
            overheatColor="bg-green-500"
            overheatToggle={overheatToggle}
            setOverheatToggle={setOverheatToggle}
            cardDisabled={cardDisabled}
            id="0"
          >
            0
          </CardOverheatButton>
          <CardOverheatButton
            borderType="border-x"
            overheatColor="bg-yellow-500"
            overheatToggle={overheatToggle}
            setOverheatToggle={setOverheatToggle}
            cardDisabled={cardDisabled}
            id="1"
          >
            1
          </CardOverheatButton>
          <CardOverheatButton
            borderType="border-x"
            overheatColor="bg-orange-500"
            overheatToggle={overheatToggle}
            setOverheatToggle={setOverheatToggle}
            cardDisabled={cardDisabled}
            id="2"
          >
            2
          </CardOverheatButton>
          <CardOverheatButton
            borderType="border-x"
            overheatColor="bg-orange-600"
            overheatToggle={overheatToggle}
            setOverheatToggle={setOverheatToggle}
            cardDisabled={cardDisabled}
            id="3"
          >
            3
          </CardOverheatButton>
          <CardOverheatButton
            borderType="border-l"
            overheatColor="bg-red-600"
            overheatToggle={overheatToggle}
            setOverheatToggle={setOverheatToggle}
            cardDisabled={cardDisabled}
            id="4"
          >
            S
          </CardOverheatButton>
        </div>
      </div>
    </div>
  );
}

export default CardOverheatValues;
