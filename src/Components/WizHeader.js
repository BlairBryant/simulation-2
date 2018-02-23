import React from 'react'
import {Link} from 'react-router-dom'

function WizHeader(props) {
    return (
            <div className='wizHeader'>
                <header>
                        <h3>Add new listing</h3>
                        <Link to='/dashboard'><div className='cancelButton'>Cancel</div></Link>
                        
                </header>
             
            </div>
        )
    }

export default WizHeader