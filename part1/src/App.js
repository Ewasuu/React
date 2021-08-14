import React, { useState } from 'react'
import { useEffect } from 'react'
import {getGifs} from './actions/getGifs'
import './App.css'
import { ListOfGifs } from './components/list_of_gifs'





export default function App(props){
  const [gif, setGif] = useState([])
  
  useEffect(()=>
    getGifs(setGif, {keyword : 'sasuke'})
    
  , []) 
  
  return (
    <div className='App-header'> 
      <h1>Giffy</h1>
     {<ListOfGifs gif={gif} />}
    </div>
  )
}

