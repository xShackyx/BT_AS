import logo from "../assets/BT_logo.webp";

function CardFooter() {
  return (
    <div className="h-4 text-white bg-black flex justify-between items-center">
      <p className="uppercase font-extrabold">Alpha strike</p>
      <img src={logo} className="w-32" alt="Battletech Logo" />
    </div>
  );
}

export default CardFooter;
