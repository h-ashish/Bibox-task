import React from 'react';

function FinalAssembly({result, setResult}){

	const finalOutput = JSON.parse(localStorage.getItem("Result"))

	return(
		<div>
		<h1 className="final-header">The Final Assembly</h1>
		{
			finalOutput.map((val,index)=>{
				return(
					<img className="result-img" src={val.thumbnailUrl} 
					alt="" 
					style={{top:(val.top) , left:(val.left), zIndex:(val.zIndex)}}/>
					)
			})
		}
		</div>
		)
}
export default FinalAssembly;