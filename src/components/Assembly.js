import React from 'react';
import Board from './Board';
import Cards from './Cards';
import {Link} from 'react-router-dom';
function Assembly({select, setSelect, result, setResult}){

	const removeSelect = (indextoDelete) =>{
  		let res = select.filter((val, index)=>{
  			if(index === indextoDelete)
  				return false;
  				localStorage.removeItem(val.id);
  			return true;
  		})
  		setSelect(res);
  	}

  	const selected = JSON.parse(localStorage.getItem('Selected'))

	return(
		<div>
		<h1 className="header"> Assembly Stage</h1>
		<div className="assembly-div">
		
		<Board id="board-1" className="board" >
		<Link to="/final-assembly">
	    	<button className="showfinal-assembly"> show final assembly </button>
	    </Link>
		<h2>Selected Parts</h2>
		{select.map((val, index)=>{
			return(
				<Cards id={val.id} value={index} className="card" draggable="true" >
				<div className="assembly-card" key={val.id}>
				  <img src={val.thumbnailUrl} alt="" style={{width:"100%"}}/>
				  <div className="assembly-container">
				    <h4><b>{val.id}. {val.productname}</b></h4> 
					<button className="remove-button" onClick={()=>removeSelect(index)}>remove</button>
				  </div>
				</div>	
				</Cards>
				)
		})}
		</Board>
		<Board id="board-2"  className="board" result = {result}
      setResult ={setResult}>
		<h2>Drop Selected parts here to assemble</h2>
		 	<Cards>
		 	</Cards>
		</Board>
		</div>
		
		</div>
		)
}
export default Assembly;