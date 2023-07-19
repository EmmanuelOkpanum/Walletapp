import React, { useEffect } from "react";
import buydollar from "../assets/ICONDOLLAR.png";
import selldollar from "../assets/ICONDOLLAR1.png";

import "aos/dist/aos.css";
import AOS from "aos";

const Trade = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="trade">
        <div className="trade-details">
          <div data-aos="zoom-in-up" className="trade-box">
            <img src={buydollar} alt="" />

            <p>Buy BTC </p>
          </div>

          <div data-aos="zoom-in-up" className="trade-box">
            <img src={selldollar} alt="" />

            <p>Sell BTC </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trade;
