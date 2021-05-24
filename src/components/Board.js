import React from 'react';
import productsData from '../assets/products.json';


function Board (props) {
	const drop = (e) =>{
		e.preventDefault();
		const card_id = e.dataTransfer.getData('card_id');

		const card = document.getElementById(card_id);
		card.style.display = "block";
		e.target.appendChild(card);

		productsData.filter((val,index)=>{
			if(props.id === 'board-2' && Number(val.id) === Number(card.id)){
				props.setResult([...props.result, val])
			}
			
		})
		
	}
	const dragOver = (e) =>{
		e.preventDefault();
	}
	localStorage.setItem('Result', JSON.stringify(props.result));

	return(
		<div id = {props.id}
		className = {props.className}
		onDrop={drop}
		onDragOver={dragOver}> 
		{props.children}
		</div>
		)
}
export default Board;