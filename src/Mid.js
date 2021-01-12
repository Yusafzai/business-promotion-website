import React from 'react';
import './Mid.css';
import Laga from './hair.png';
import Lege from './suzan.png';

function Mid() {
    return (
        <div className="Mid bg-white">
            
         <div className="cent flex justify-center">
          <h1 className="text-black text-4xl top-20 left-80 relative font-semibold">“le meilleur endroit pour la coiffure<br/> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; coiffure jamais existé.”</h1>
          <p className="top-56 text-2xl right-72 relative text-gray-400">Hi! I'm <a className="text-black hover:text-purple-300" href="https://twitter.com/SusanWojcicki">Susan</a> the Hair Stylist who has been working since 2010 <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br/> irure dolor in reprehenderit in voluptate velit esse cillum <br/>dolore eu fugiat nulla pariatur.</p>
          
         </div>
         
         <div className="imager bottom-96 relative flex justify-center">
         <img className="pic" src={Laga} alt="this"/>
          <p className="para text-2xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/>laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br/> irure dolor in reprehenderit in voluptate velit esse cillum <br/>dolore eu fugiat nulla pariatur.</p>
         </div>
        
         

         <div className="flex justify-center">
         <img src={Lege} alt="leges"/>
         </div>

        </div>
    )
}

export default Mid
