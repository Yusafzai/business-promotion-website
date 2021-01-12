import React from 'react';
import './End.css';
import Lugu from './comma.png';
import Lags from './arrow.svg';


function End() {
    return (
        <div>
            
               
         <div className="box bg-gray-800 h-96 relative">

         <div className="flex justify-center">
         <p className="text-gray-200 text-3xl top-44 left-64 relative animate-pulse">“Smoking marijuana, eating Cheetos do not constitute plans in my book.”</p>
         <a href="https://twitter.com/BryanCranston" className="susan top-64 text-xl text-gray-500 relative font-medium hover:text-gray-200 transition duration-700">Walter White</a>

         <img className="coma" src={Lugu} alt="coma"/>
         <img className="comas" src={Lugu} alt="comas"/>
         <img className="arrow animate-bounce" src={Lags} alt="lager"/>
         </div>

        </div>

        </div>
    )
}

export default End
