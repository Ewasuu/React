import React from 'react'
import './styles/App.css'
import {Route} from 'wouter'
import { Home } from './components/home'
import  Searcher  from './actions/searcher'
import  ListOfTrends  from './components/List_of_trends'
import { Header } from './components/header'
import { SomethingHappend } from './components/Error'



export default function App(){  
 
  
  return (
    <div>
        <Header/>      
        <div className='content'>
          <Route path='/gif/:keyword' component={Searcher} />
          <Route path='/' component={Home} />
          <Route path='gif/404' component={SomethingHappend} />
           <ListOfTrends/>
        </div>      
    </div>
  )
}

