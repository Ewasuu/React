import { useState, useEffect, useRef } from "react"

 export function useNearScreen({distance = '100px', externalRef} = {}){
    const [isNearScreen, setshow] = useState(false)
    const fromRef = useRef()
 
    useEffect( ()=>{
        let observer

        const element = externalRef ? externalRef.current : fromRef.current
        
        const Onchange = (entries, observer)=>{
            const el = entries[0];

            if (el.isIntersecting) {
              setshow(true)
              
            }
            else{
              setshow(false)
            }
         }
         Promise.resolve(
             typeof IntersectionObserver !== 'undefined'
             ? IntersectionObserver
             : import('intersection-observer')
         ).then(()=> {
               observer = new IntersectionObserver(Onchange, {
               rootMargin: distance
             })
            if (element) observer.observe(element)
                
         })
 
        return () => observer
    })
    return {isNearScreen, fromRef}
}
  
     
  
   