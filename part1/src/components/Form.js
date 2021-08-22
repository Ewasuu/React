import React, {useState, useRef} from 'react'
import { useLocation } from 'wouter'

export function Form(){
    const [Search, setSearch] = useState('')
    const [ ,push] = useLocation() 
    const form = useRef()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        push(`/gif/${Search} `)
        form.current.reset()
    }
    const handleChange = (e)=>{
        setSearch(e.target.value)
        
    }

    return(
        <>
        <form ref={form} onSubmit={handleSubmit}>
            <input id='searcher' onChange={handleChange} type='search' />
            <label onClick={handleSubmit} className='searcher-icon' htmlFor='searcher' > <i className="fas fa-search"></i> </label>
        </form>
        </>
    )
}