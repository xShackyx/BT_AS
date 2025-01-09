import CardHeader from "./CardHeader.jsx";
import CardUpperSection from "./CardUpperSection.jsx";
import CardLowerSection from "./CardLowerSection.jsx";
import CardFooter from "./CardFooter.jsx";
import CardBody from "./CardBody.jsx";
import { UnitProvider } from "../contexts/UnitContext.jsx";

function Card({ selectedUnit, unitCustomName, unitSkill }) {
  return (
    <div className="relative border-8 bg-white border-black z-10 w-full h-[27rem] flex flex-col">
      <UnitProvider unit={selectedUnit}>
        <CardHeader unitCustomName={unitCustomName} />
        <CardBody>
          <CardUpperSection unitSkill={unitSkill} />
          <CardLowerSection />
          <CardFooter />
        </CardBody>
      </UnitProvider>
    </div>
  );
}

export default Card;
