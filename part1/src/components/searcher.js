import React from "react"
import { useEffect, useState } from 'react'
import { getGifs } from "../actions/getGifs"
import { Spinner } from "./spinner"
import { ListOfGifs } from "./list_of_gifs"

export function Searcher({params}){
  const { keyword } = params
  const [loading, setloading] = useState(true)
  const [gif, setGif] = useState([])
    useEffect(function(){
        setloading(true)
        getGifs(setGif, {keyword})
        setloading(false)        
       }, [keyword]) 
    return<>
            {loading ? <Spinner/> : <ListOfGifs gif={gif} />}
          </>   
}