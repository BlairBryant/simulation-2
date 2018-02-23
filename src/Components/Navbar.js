import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <div className='nav'>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}