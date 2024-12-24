import CardCriticalHitsTable from "./CardCriticalHitsTable";
import CardSpecialStats from "./CardSpecialStats";
import CardHitPointsValues from "./CardHitPointsValues";

function CardLowerSection() {
  return (
    <div className="grid grid-cols-2 flex-grow gap-1 px-1 pb-1">
      <div className="grid grid-rows-2 gap-1">
        <CardHitPointsValues />
        <CardSpecialStats />
      </div>
      <CardCriticalHitsTable />
    </div>
  );
}

export default CardLowerSection;
