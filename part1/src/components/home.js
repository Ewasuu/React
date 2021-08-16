import React  from 'react'
import { Searcher } from './searcher'




export function Home(){
    return(
        <div className='Home-Link-section' >
            {Searcher({params: ''})}
        </div>
    )
}