import React  from 'react'
import { Helmet } from 'react-helmet'
import useGif from '../customHooks/useGif'
import { ListOfGifs } from './list_of_gifs'
import { Spinner } from './spinner'

export function Home(){
    const newKeyword = localStorage.getItem('Last Keyword')
    
    const {gif, loader} = useGif(newKeyword)
    if (loader){ return( 
        <> 
            <Helmet> <title>Loading...</title> </Helmet> 
            <Spinner/>
        </>)
        }

    return(
        <>
            <Helmet> <title>Giffy | Search Awesome Gifs</title> </Helmet> 
            {newKeyword !== 'undefined' && newKeyword !== 'null' && newKeyword !== null ? <h2 id='last-search' >-----Last Search-----</h2> : <h2 id='last-search' >-----GIFS-----</h2>}
            <h2 id='trends' >Trends</h2>   
            <ListOfGifs gif={gif}/>
        </>
    )
}