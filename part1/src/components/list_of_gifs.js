import React from "react"
import { Gif } from "./Gif"


export function ListOfGifs({gif}){
  
    return(
        <div className='gif-container'>
           {gif.map( ({id, url, title}) => <Gif key={id} url={url} title={title} />)}
        </div>
    )
}