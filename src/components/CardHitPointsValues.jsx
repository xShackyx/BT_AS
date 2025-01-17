import { useUnit } from "../contexts/UnitContext";
import CardHitPointButton from "./CardHitPointButton";

function CardHitPointsValues({ cardDisabled }) {
  const { unit } = useUnit();

  return (
    <div className="p-1  bg-gray-300 border border-black rounded">
      <div className="flex items-center gap-1">
        <div>A: </div>
        <div className="flex gap-[0.10rem]">
          {[...Array(unit.BFArmor)].map((e, i) => {
            return <CardHitPointButton key={i} cardDisabled={cardDisabled} />;
          })}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <div>S: </div>
        <div className="flex gap-[0.10rem]">
          {[...Array(unit.BFStructure)].map((e, i) => {
            return (
              <CardHitPointButton
                key={i}
                bg="bg-gray-400"
                cardDisabled={cardDisabled}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardHitPointsValues;
