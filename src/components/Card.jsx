import CardHeader from "./CardTitle.jsx";
import CardUpperSection from "./CardUpperSection.jsx";
import CardLowerSection from "./CardLowerSection.jsx";
import CardFooter from "./CardFooter.jsx";
import CardBody from "./CardBody.jsx";

function Card() {
  return (
    <div className="relative border-8 border-black w-[42rem] h-[27rem] flex flex-col">
      <CardHeader />
      <CardBody>
        <CardUpperSection />
        <CardLowerSection />
        <CardFooter />
      </CardBody>
    </div>
  );
}

export default Card;
