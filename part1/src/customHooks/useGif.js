import {useState, useEffect} from 'react'
import { GetGifs } from '../actions/getGifs'


export function useGif(keyword){
    const [gif, setGif] = useState([])
    const [ofset, setOfset] = useState(0)
    const [loader, setLoader] = useState(true)

    useEffect( function(){
        ofset === 0 ? setLoader(true) : setLoader(false)
        GetGifs({keyword}, ofset).then(res => {
          setGif(prev =>{
            if (ofset === 0) {
              setGif(res)
              setLoader(false)
            }
            else{
              setGif(prev.concat(res))
              setLoader(false)
            }})}).catch(res => console.log(res))
       }, [keyword, ofset, setGif, setLoader])


    return {gif, setGif, ofset, setOfset, loader, setLoader}
}




