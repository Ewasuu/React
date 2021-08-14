import React from "react"
import { Gif } from "./Gif"

export function ListOfGifs({gif}){
    return(
        gif.map( ({id, url, title}) => <Gif key={id} id={id} url={url} title={title} /> )
    )
}