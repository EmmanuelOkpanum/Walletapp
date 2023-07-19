import React, { useState } from "react";

import backIcon from "./assets/ICONBACK.png";
import moreIcon from "./assets/ICONMORE.png";

const Wallet = () => {
  const [showmore, setShowmore] = useState(true);

  const toggleShowmore = () => {
    setShowmore(!showmore);
  };

  return (
    <>
      <div className="header">    
        <div className="header-contents">
          <div className="backbutton">
            <img src={backIcon} alt="back icon" />
          </div>

          <div className="headertxt">
            <h4> Bitcoin Wallet </h4>
          </div>

          <div className="morebutton" onClick={toggleShowmore}>
            <img src={moreIcon} alt="back icon" />

            <div
              className={`more-items ${
                showmore ? "more-items-vis" : "more-items"
              }`}
            >
              <ul>
                <li> edit</li>
                <li> courier info</li>
                <li> share</li>
                <li> remove</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
