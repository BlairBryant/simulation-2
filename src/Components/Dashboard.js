import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import axios from 'axios'

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard'>
                <Link to='/wizard/1'><div className='addNewProperty'>Add new property</div></Link>
            </div>
        )
    }
}

export default Dashboard