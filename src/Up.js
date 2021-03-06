import React from 'react'
import './Up.css';
import Logo from './poster.png';



function Up() {
    return (
        <div className="full">

        <div className="bg-purple-600 w-full h-8 animate-pulse"></div>
        
        <div className="lag flex justify-center">
        <div className="second z-10">
         <h1 className="left-24 top-24 text-xl text-gray-500 relative  justify-center">NOW AVAILABLE</h1>
         <p className="left-24 top-28 text-5xl text-gray-900 relative font-extrabold justify-center">Make your hair look awesome,</p>
         <p className="left-24 top-28 text-5xl text-blue-700 relative justify-center">without relying on a stylist.</p>

         <p className="left-24 top-36 text-2xl text-gray-500 relative justify-center">We are back with our salon and Now we are ready <br/> More then ever to style your gorgeous hair.</p>
         
         <p className="left-24 top-44 text-md text-gray-500 relative justify-center">Sign up for our newsletter to get <span className="text-black font-bold">two free magzine previews</ span> on <br/> new trendy post-pandemic hair trends to get started fresh.</p>

         <input className="input bg-white rounded-md w-96 h-14 shadow-xl pl-6 focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your email" type="text"/>
         <button class="button relative py-2 px-4 bg-green-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
         Click me
         </button>
         
        </div>

         <img className="image relative shadow-md" src={Logo} alt="poster"/>  
         
         </div>
        
        </div>
    )
}

export default Up
