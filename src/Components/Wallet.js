import React, { useState, useEffect } from "react";

import btcIcon from "../assets/ICONBITCOIN.png";
import arrowdownIcon from "../assets/ICONARROWDOWN.png";

import Graph from "./Graph";
import Trade from "./Trade";

import "aos/dist/aos.css";
import AOS from "aos";

const Wallet = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="wallet">
        <div data-aos="zoom-in-up" className="wallet-container">
          <div className="wallet-balance">
            <div data-aos="fade-down" data-aos-duration="1100" className="coin">
              <img src={btcIcon} alt="" />

              <p> Bitcoin </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              className="coin-acro"
            >
              <p> BTC </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1100"
            className="balance-fig"
          >
            <h3> 3.529020 BTC </h3>
          </div>

          <div className="value">
            <div className="usd">
              <p> $19.153 USD </p>
            </div>

            <div className="value-notification">
              <p> - 2.32% </p>
            </div>
          </div>

          <div className="dropdown" onClick={toggleShow}>
            <img src={arrowdownIcon} alt="" />
          </div>
        </div>
      </div>

      <div data-aos="fade-down" data-aos-duration="900" className="components">
        {show && <Graph />}

        {show && <Trade />}
      </div>
    </>
  );
};

export default Wallet;
