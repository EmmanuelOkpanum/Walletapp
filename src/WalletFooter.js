import React from "react";

import walletIcon from "./assets/ICONWALLET.png";
import discoverIcon from "./assets/ICONEXPLORECOINS.png";
import notificationIcon from "./assets/ICONNOTIFICATION.png";
import settingsIcon from "./assets/ICONSETTINGS.png";

const WalletFooter = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-buttons">
          <a href>
            {" "}
            <img src={walletIcon} alt="" />{" "}
          </a>

          <a href>
            {" "}
            <img src={discoverIcon} alt="" />{" "}
          </a>

          <a href>
            {" "}
            <img src={notificationIcon} alt="" />{" "}
          </a>

          <a href>
            {" "}
            <img src={settingsIcon} alt="" />{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default WalletFooter;
