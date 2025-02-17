import CardDamageValues from "./CardDamageValues";
import CardImage from "./CardImage";
import CardOverheatValues from "./CardOverheatValues";
import CardUnitType from "./CardUnitType";

function CardUpperSection({ unitSkill, cardDisabled }) {
  return (
    <div className="grid grid-cols-5 flex-grow gap-1 p-1">
      <CardUnitType unitSkill={unitSkill} />
      <CardDamageValues />
      <CardOverheatValues cardDisabled={cardDisabled} />
      <CardImage />
    </div>
  );
}

export default CardUpperSection;
