import { useState } from "react";

function CardHitPointButton({ bg = "bg-white", cardDisabled }) {
  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <div>
      <button
        onClick={() => setBtnToggle(!btnToggle)}
        disabled={cardDisabled}
        className={`
          h-4 w-4 rounded-full border border-black inline-block
          ${btnToggle ? "bg-red-600" : bg}`}
      ></button>
    </div>
  );
}

export default CardHitPointButton;
