import React from 'react';
import './Price.css';

function Price() {
    return (
        <div>
            
        <div className="this">
          <div className="flex justify-center">
           <h1 className='text-white top-20 left-72 relative text-6xl font-bold'>Get The Price</h1>
           <h2 className="top-44 text-3xl right-36 text-blue-400 relative">Choose the package that works for you.</h2>
          </div>
          
          <div className="flex justify-center">
            <div className="and w-20 h-56 relative top-56 shadow-2xl">
                <div className="gray font-bold text-2xl rounded-t-lg">The Must</div>
                <h1 className="font-extrabold left-24 top-20 text-5xl relative">$ 20</h1>
                <button className="butter bg-pink-500 relative w-20 h-10 rounded-md hover:bg-pink-600">Buy Now</button>
            </div>
          </div>


          <div className="flex justify-center">
                 <div className="then relative shadow-2xl">
                 <div className="gray font-bold text-2xl rounded-t-lg">All-In-One</div>
                 <h1 className="font-extrabold left-32 top-20 text-6xl relative">$ 75</h1>
                 <button className="butter2 bg-purple-700 relative w-20 h-10 rounded-md hover:bg-purple-800">Buy Now</button>
                 </div>
          </div>

        </div>

        </div>
    )
}

export default Price
