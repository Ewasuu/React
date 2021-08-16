import React, { useState } from 'react'
import './App.css'
import { ListOfGifs } from './components/list_of_gifs'
import {Route, Link, useLocation} from 'wouter'
import { home } from './components/home'




export default function App(){  
  const [keyword, setKeyword] = useState('')
  const [path, push] = useLocation()
  console.log(path)
  const handleSubmit = (e)=>{
    e.preventDefault()
    push(`/gif/${keyword} `)
  }
  const handleChange = (e)=>{
 setKeyword(e.target.value)
  }
  
  return (
    <div> 
      <div className='Header' >
        <Link to='/' ><h1 className='title'>Giffy</h1> </Link>
        <form onSubmit={handleSubmit}>
          <input placeholder='Search Giff' onChange={handleChange} type='search' />
        </form>
      </div>
      <Route path='/gif/:keyword' component={ListOfGifs} />
      <Route path='/' component={home} />
    </div>
  )
}

/* <ListOfGifs gif={gif} />  */