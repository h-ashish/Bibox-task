import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
	return(
		<div className="app">
       		 <h1 className="home-heading">BiBox Cycles</h1>
            <div className="details" >

              <div className="big-img">
                <img  src="https://i.imgur.com/HjjdAU3.jpg" alt="" width="500" height="400" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>BiBox Model FX-Z10</h2>
                </div>
                <p>Welcome to Bibox Cycles. 
                Assemble and customize your first cycle. 
                We have various parts to choose from. Get started! </p>
                <Link to = '/products'>
                <button className="cart">Start Assembly</button>
                </Link>
              </div>
            </div>
      </div>
		)
}

export {Home};
