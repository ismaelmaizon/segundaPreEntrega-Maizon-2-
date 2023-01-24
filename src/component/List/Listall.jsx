import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListProducts from './listProducts';


const Listall = function ({data}) {

    return (
        <div>
            <ListProducts
             data={data} x={0}/> 
            <ListProducts
             data={data} x={1}/>
            <ListProducts
             data={data} x={2}/> 
        </div>
    )
        
  }


export default Listall;


// idDrink, strDrink, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5
// 
{/* <div className='card'>
            <div className='cardTitle'>
                <h1>{data[0][0].strDrink}</h1>
            </div>
            <div>
                <img className='cardImg' src={data[0][0].strDrinkThumb} alt="" />
            </div>
            <div className='cardInfo'>
                <h2>Ingredientes:</h2>
                <p>{data[0][0].strIngredient1+", "+data[0][0].strIngredient2+", "+data[0][0].strIngredient3+", "+data[0][0].strIngredient4+", "+data[0][0].strIngredient5}</p>
            </div>
            <Link to={`${data[0][0].strDrink}`} >
                <button className='btn'>mas info</button>
            </Link>
        </div>) */}