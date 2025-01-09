import CardDamageValues from "./CardDamageValues";
import CardImage from "./CardImage";
import CardOverheatValues from "./CardOverheatValues";
import CardUnitType from "./CardUnitType";

function CardUpperSection({ unitSkill }) {
  return (
    <div className="grid grid-cols-5 grid-rows-8 flex-grow gap-1 p-1">
      <CardUnitType unitSkill={unitSkill} />
      <CardDamageValues />
      <CardOverheatValues />
      <CardImage />
    </div>
  );
}

export default CardUpperSection;
