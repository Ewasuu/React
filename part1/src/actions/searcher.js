import React ,  {useRef, useEffect, useCallback} from "react"
import { Spinner } from "../components/spinner"
import { ListOfGifs } from "../components/list_of_gifs"
import  useGif  from "../customHooks/useGif"
import {useNearScreen} from "../customHooks/useObserver"
import debounce from "just-debounce-it"
import { Redirect } from "wouter"
import { Helmet } from "react-helmet"

export default function Searcher({params}){
  const { keyword } = params; 
  const {ofset, setOfset, gif, loader, err} = useGif(keyword)
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({externalRef: loader ? null: externalRef})
  localStorage.setItem('Last Keyword', keyword)
  
  // eslint-disable-next-line 
  const handleNextPage = useCallback(debounce(
    ()=> setOfset(ofset + 1), 500
  ), [ofset])
  
  useEffect( function(){
    if(isNearScreen) handleNextPage()

  }, [isNearScreen, handleNextPage])

    if (loader){ return( 
    <> 
        <Helmet> <title>Loading...</title> </Helmet> 
        <Spinner/>
    </>)
    }
    else if (err){ return <Redirect to='/404' /> }

    return<>
            <Helmet> <title> Giffy | {decodeURI(keyword)} </title> </Helmet> 
             <ListOfGifs gif={gif}/> 
              <div  className='visor' ref={externalRef}/>
             
          </>   
}

