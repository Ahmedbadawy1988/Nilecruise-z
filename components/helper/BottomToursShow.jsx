import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";

function BottomToursShow() {
  const { handleShowTours, ToursShow, setToursShow } = useStateContext();
  return (
    <div className="container mx-auto pt-11">
      <div className="flex gap-1">
        <button
          onClick={() => handleShowTours("Popular")}
          className={ToursShow.Popular ? "flex-1 border rounded-lg text-xl font-serif font-bold bg-[#029e9d] text-white  py-3" 
                    : "flex-1 border rounded-lg text-xl font-serif font-bold  py-3"
        }
        >
          Popular
        </button>
        <button
          onClick={() => handleShowTours("Recent")}
          className={ToursShow.Recent ? "flex-1 border rounded-lg text-xl font-serif font-bold bg-[#029e9d]  text-white   py-3" 
                    : "flex-1 border rounded-lg text-xl font-serif font-bold  py-3"}
        >
          Recent
        </button>
      </div>
    </div>
  );
}

export default BottomToursShow;
