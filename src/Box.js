import React from 'react';
import './Box.css';
import Lugu from './comma.png';
import Lags from './arrow.svg';


function Box() {
    return (
        <div className="">
            
         <div className="box bg-gray-800 h-96 relative">

             <div className="flex justify-center">
                 <p className="text-gray-200 text-3xl top-44 left-56 relative animate-pulse">" I’d  put money on it: will be the best hair style ever "</p>
                 <a href="https://twitter.com/SusanWojcicki" className="susan top-64 text-xl text-gray-500 relative font-medium hover:text-gray-200 transition duration-700">Susan Wojociki</a>

                 <img className="coma" src={Lugu} alt="coma"/>
                 <img className="comas" src={Lugu} alt="comas"/>
                 <img className="arrow animate-bounce" src={Lags} alt="lager"/>
             </div>

         </div>

        </div>
    )
}

export default Box
