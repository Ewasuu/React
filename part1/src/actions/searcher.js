import React ,  {useRef, useEffect, useCallback} from "react"
import { Spinner } from "../components/spinner"
import { ListOfGifs } from "../components/list_of_gifs"
import { useGif } from "../customHooks/useGif"
import {useNearScreen} from "../customHooks/useObserver"
import debounce from "just-debounce-it"



export default function Searcher({params}){
  const { keyword } = params; 
  const {ofset, setOfset, gif, loader} = useGif(keyword)
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({externalRef: loader ? null: externalRef})
  localStorage.setItem('Last Keyword', keyword)

  
  const handleNextPage = useCallback(debounce(
    ()=> setOfset(ofset + 1), 500
  ), [ofset])
  
  useEffect( function(){
    if(isNearScreen) handleNextPage()

  }, [isNearScreen, handleNextPage])

    return<>
            {loader ? <Spinner/>  
             : (<>
             <ListOfGifs gif={gif}/> 
              <div  className='visor' ref={externalRef}/>
             </>)}
          </>   
}

