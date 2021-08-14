import React from 'react'
import './App.css'
import { ListOfGifs } from './components/list_of_gifs'
import {Route, Link} from 'wouter'




export default function App(){  

  
  
  return (
    <div className='App-header'> 
      <h1>Giffy</h1>
      <form onSubmit={(e) => e.preventDefault()}> 
        <input type='search' />
      </form>
      <Route path='/gif/:keyword' component={ListOfGifs} />
      
    </div>
  )
}

/* <ListOfGifs gif={gif} />  */