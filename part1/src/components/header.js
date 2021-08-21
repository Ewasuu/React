import React, { useState, useRef } from 'react'
import { Link, useLocation } from 'wouter'

export function Header(){
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
    return (
        <header className='Header' >
            <Link to='/' ><h1 className='title'>Giffy</h1> </Link>
            <form ref={form} onSubmit={handleSubmit}>
            <input id='searcher' onChange={handleChange} type='search' />
            <label onClick={handleSubmit} className='searcher-icon' htmlFor='searcher' > <i className="fas fa-search"></i> </label>
            </form>
        </header>
    )
}