import React  from 'react'
import  Searcher  from '../actions/searcher'


export function Home(){
    const newKeyword = localStorage.getItem('Last Keyword')
    const params = {
        keyword : newKeyword
    }
    return(
        <>
            {params.keyword !== 'undefined'? <h2 id='last-search' >-----Last Search-----</h2> : <h2 id='last-search' >-----GIFS-----</h2>}
            <h2 id='trends' >Trends</h2>   
            {Searcher({params})}
        </>
    )
}