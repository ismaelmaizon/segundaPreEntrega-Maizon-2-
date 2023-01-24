import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { useEffect } from 'react'
import List from './component/List/List'
import { Navigate, Route, Routes } from 'react-router-dom'
import { BsTypeH3 } from 'react-icons/bs'
import ItemDetail from './component/ItemDetail/ItemDetail'
import Listall from './component/List/Listall'


function App() {

  const [mojito, setMojito] = useState([])
  const [negroni, setNegroni] = useState([])
  const [gin, setGin] = useState([])
  const [todo, setTodo] = useState([])
  const x = 0;





  const getMojito = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
    .then(res => res.json()).then(data => setMojito(data.drinks))
  }
  const getNegroni = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni")
    .then(res => res.json()).then(data => setNegroni(data.drinks))
  }
  const getGin = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin%20Tonic")
    .then(res => res.json()).then(data => setGin(data.drinks))
  }

  useEffect(() => {

    getMojito();
    getNegroni();
    getGin();
  }, [])

  console.log(mojito);
  console.log(negroni);
  console.log(gin);



  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" 
          element={<h3>Bien venidos  a DrinksStation... Click en Productos </h3>} />
          <Route path="/Productos/Mojito"  element={<List data={mojito} />} />
          <Route path="/Productos/Mojito/:name"  element={<ItemDetail data={mojito} />} />
          <Route path="/Productos/Negroni"  element={<List data={negroni} />} />
          <Route path="/Productos/Negroni/:name"  element={<ItemDetail data={negroni} />} />
          <Route path="/Productos/Gin Tonic"  element={<List data={gin} />} />
          <Route path="/Productos/Gin Tonic/:name"  element={<ItemDetail data={gin} />} />
          <Route path="/Productos"  element= { <Listall data={[mojito, negroni, gin]} /> }  />
          <Route path="/Nosotros"  element={<p>N</p>} />
          <Route path="/Contactos"  element={<p>hola</p>} />
          <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
