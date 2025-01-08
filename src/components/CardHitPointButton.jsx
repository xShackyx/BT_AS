import { useState } from "react";

function CardHitPointButton({ bg = "bg-white" }) {
  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setBtnToggle(!btnToggle)}
        className={`
          h-4 w-4 rounded-full border border-black inline-block
          ${btnToggle ? "bg-red-600" : bg}`}
      ></button>
    </div>
  );
}

export default CardHitPointButton;
