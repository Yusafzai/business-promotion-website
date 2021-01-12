import React from 'react';
import './Stage.css';
import Popo from './popper.png';

function stage() {
    return (
        <div>
             
            <div className="background bg-white">

             <div className="flex justify-center">
              <img className="relative w-24 left-52 font-extrabold h-24 top-20" src={Popo} alt="poppers"/>
              <h1 className="top-56 right-10 text-5xl relative">What will you get ?</h1>
             </div>
             <div className="flex justify-center">
             <p className="text text-xl">vous obtiendrez une excellente coiffure et bien d'autres surprises <br/> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; avez-vous des doutes?</p>
             </div>

             <div className="flex justify-center">
             <p className="relative top-96 text-lg font-semibold left-8">Arcu risus quis varius quam quisque id diam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. <br/> Ultrices in iaculis nunc sed augue lacus viverra vitae. <a href="http://www.savewalterwhite.com/" className="text-purple-500 hover:text-purple-700 cursor-pointer">Nunc vel risus commodo viverra.</a> Vel quamelementum <br/>  pulvinar etiam non quam lacus suspendisse. Enim tortor at auctor urna. Euismod lacinia at quis risus sed <br/> vulputate. Eu mi bibendum neque egestas congue quisque.Nunc lobortis mattis aliquam faucibus purus <br/> in massa tempor nec. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Quisque sagittis <br/> purus sit amet volutpat consequat. Quam vulputate dignissim suspendisse in est. Nullam vehicula ipsum a <br/> arcu cursus. Et netus et malesuada fames ac. In hac habitasse platea dictumst quisque sagittis purus sit. <br/> Vivamus at augue eget arcu. Nisl vel pretium lectus quam id leo in.</p>
             </div>

            </div>

        </div>
    )
}

export default stage
