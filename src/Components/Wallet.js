import React from 'react'

import btcIcon from "../assets/ICONBITCOIN.png"; 
import arrowdownIcon from "../assets/ICONARROWDOWN.png"; 


import Graph from './Graph';
import Trade from './Trade';


const Wallet = () => {
  return (
    <>


    <div className="wallet">

        <div className="wallet-container">
            
        


        <div className="wallet-balance">

            <div className="coin">

                <img src={btcIcon} alt="" />

                <p> Bitcoin </p>
            </div>






            <div className="coin-acro">
                <p> BTC </p>
            </div>




        </div>



        <div className="balance-fig">
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





        <div className="dropdown">
            <img src={arrowdownIcon} alt="" />
        </div>





            


</div>





    </div>

    
    
    <Graph />

            <Trade />
    
    
    </>
  )
}

export default Wallet