import CardHeader from "./CardHeader.jsx";
import CardUpperSection from "./CardUpperSection.jsx";
import CardLowerSection from "./CardLowerSection.jsx";
import CardFooter from "./CardFooter.jsx";
import CardBody from "./CardBody.jsx";
import { UnitProvider } from "../contexts/UnitContext.jsx";

function Card({
  selectedUnit,
  unitCustomName,
  unitSkill,
  cardDisabled = false,
}) {
  return (
    <div className="relative rounded border-8 bg-white border-black z-10 w-full flex flex-col">
      <UnitProvider unit={selectedUnit}>
        <CardHeader unitCustomName={unitCustomName} />
        <CardBody>
          <CardUpperSection unitSkill={unitSkill} cardDisabled={cardDisabled} />
          <CardLowerSection cardDisabled={cardDisabled} />
          <CardFooter />
        </CardBody>
      </UnitProvider>
    </div>
  );
}

export default Card;
