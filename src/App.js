import React from "react";
import WalletHeader from "./WalletHeader";
import Wallet from "./Components/Wallet";
import WalletFooter from "./WalletFooter";

import "./index.css";
import "./style.scss";

const App = () => {
  return (
    <>
      <WalletHeader />

      <Wallet />

      <WalletFooter />
    </>
  );
};

export default App;
