import React, { useState } from 'react'
import './styles/App.css'
import {Route, Link, useLocation} from 'wouter'
import { Home } from './components/home'
import { Searcher } from './components/searcher'




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
      <Route path='/gif/:keyword' component={Searcher} />
      <Route path='/' component={Home} />
    </div>
  )
}

/* <ListOfGifs gif={gif} />  */