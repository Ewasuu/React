import React from 'react'
import { Link } from 'wouter'
import { Form } from './Form'

export function Header(){
    
    return (
        <header className='Header' >
            <Link to='/' ><h1 className='title'>Giffy</h1> </Link>
            <Form/>
        </header>
    )
}