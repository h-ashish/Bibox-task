import React from 'react';
import Slider from "react-slick";
import productsData from '../assets/products.json';
import {Link} from 'react-router-dom';
function Products({select, setSelect}){
	 let settings = {
		    dots: false,
		    infinite: true,
		    speed: 500,
		    slidesToShow: 5,
		    slidesToScroll: 3,
  	};

  	const selectFunc = (indextoSelect) =>{
  		productsData.filter((val,index)=>{
  			if(index === indextoSelect){ 				
  				setSelect([...select, val]);
  			}
  		})
  	}
  localStorage.setItem("Selected", JSON.stringify(select));
  	const removeSelect = (indextoDelete) =>{
  		let res = select.filter((val, index)=>{
  			if(index === indextoDelete)
  				return false;
  			return true;
  		})
  		setSelect(res);
  	}
// console.log(select);
	return(
		<div  className="main-div">
      <div className="hearder-div ">
        <h1 className="header">Select Parts to Assemble</h1>
      </div>
      <Slider {...settings}>
            {productsData.map(function(product, index) {
          return (
          	<div className="card" key={product.id}>
			  <img src={product.thumbnailUrl} alt="" style={{width:"100px" , heigth:"100px"}}/>
			  <div className="container">
			    <h4><b>{product.id}.{product.productname}</b></h4> 
			   <button className="select-button" onClick={()=>selectFunc(index)}>select</button>
				<button className="remove-button" onClick={()=>removeSelect(index)}>remove</button>
			  </div>
			</div>	
          );
        })}
      </Slider>
      <Link className="start-assembly" to="/assembly">
      <button className="start-assembly"> start assembly </button>
      </Link>
    </div>
		)
}

export default Products;