import CardCriticalHitsTable from "./CardCriticalHitsTable";
import CardSpecialStats from "./CardSpecialStats";
import CardHitPointsValues from "./CardHitPointsValues";

function CardLowerSection({ cardDisabled }) {
  return (
    <div className="grid grid-cols-2 flex-grow gap-1 px-1 pb-1">
      <div className="grid grid-rows-2 gap-1">
        <CardHitPointsValues cardDisabled={cardDisabled} />
        <CardSpecialStats />
      </div>
      <CardCriticalHitsTable cardDisabled={cardDisabled} />
    </div>
  );
}

export default CardLowerSection;
