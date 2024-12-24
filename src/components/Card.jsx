import CardHeader from "./CardHeader.jsx";
import CardUpperSection from "./CardUpperSection.jsx";
import CardLowerSection from "./CardLowerSection.jsx";
import CardFooter from "./CardFooter.jsx";
import CardBody from "./CardBody.jsx";
import { UnitProvider } from "../contexts/UnitContext.jsx";

function Card({ selectedUnit }) {
  return (
    <div className="relative border-8 border-black w-[42rem] h-[27rem] flex flex-col">
      <UnitProvider unit={selectedUnit}>
        <CardHeader />
        <CardBody>
          <CardUpperSection />
          <CardLowerSection />
          <CardFooter />
        </CardBody>
      </UnitProvider>
    </div>
  );
}

export default Card;
