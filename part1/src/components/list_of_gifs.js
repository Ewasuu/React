import React from "react"
import { useEffect, useState } from 'react'
import { Gif } from "./Gif"
import { getGifs } from "../actions/getGifs"

export function ListOfGifs({params}){
    const { keyword } = params
  const [gif, setGif] = useState([])
    useEffect(function (){
        getGifs(setGif, {keyword})
        
       }, [keyword]) 
    return(
        <div className='gif-container'>
           {gif.map( ({id, url, title}) => <Gif key={id} id={id} url={url} title={title} /> )}
        </div>
    )
}