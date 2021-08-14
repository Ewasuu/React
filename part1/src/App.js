import React, { useState } from 'react'
import { useEffect } from 'react'
import getGifs from './actions/getGifs'
import './App.css'


export default function App(props){
  const [gif, setGif] = useState([])
  
  useEffect(()=>
    getGifs(setGif)
  , []) 

  return (
    <div className='App-header'> 
      <h1>Demen sexo</h1>
     {gif.map( newgif => <img key={newgif} src={newgif} alt='jsjs'  />)}
    </div>
  )
}
