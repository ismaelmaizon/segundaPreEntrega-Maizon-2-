import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({data}) => {
  const {name} = useParams();
  console.log(name);

  const item = data.find((el) => el.strDrink === name)
  console.log(item);

  return (
    <div>
      <h1>Nombre: {item.strDrink}</h1>
      <h2>Ingredientes: {item.strIngredient1+", "+item.strIngredient2+",  "+item.strIngredient3+", "+item.strIngredient4}</h2>
      <h2>Instrucciones: {item.strInstructions}</h2>
      <img src={item.strDrinkThumb} alt="" />
    </div>
  )
}

export default ItemDetail
