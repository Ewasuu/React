import {useState, useEffect} from 'react'
import { GetGifs } from '../actions/getGifs'


export default function useGif(keyword){
    const [gif, setGif] = useState([])
    const [ofset, setOfset] = useState(0)
    const [loader, setLoader] = useState(true)
    const [err, setErr] = useState(false)


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
            }})}).catch(res => {
              console.log(res)
              setLoader(false)
              setErr(true)
            })
       }, [keyword, ofset, setGif, setLoader])
       


    return {gif, setGif, ofset, setOfset, loader, err}
}


