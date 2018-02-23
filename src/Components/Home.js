import React, {Component} from 'react'
import {Redirect} from 'react-router'
import logo from '../images/logo.png'
import {connect} from 'react-redux'
import {typingUsername, typingPassword} from '../ducks/reducer'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            redirect: false
        }
    }

    registerClick() {
        axios.post('/registeruser', {username: this.props.username}).then(res => {
            console.log('posted to db')
            console.log(res.data)
            var setID = res.data[0].id
        
        axios.post('/api/auth/register', {username: this.props.username, id: setID}).then(res => {
            console.log(res.data)

            this.setState({redirect: true})
        })
    })

    

    }


    render() {
        if(this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
        return(
            <div className='home'>
                <img className="logo" src={logo} alt="logoImg"/>
                <h3>Username</h3>
                <input onChange={e => this.props.typingUsername(e.target.value)}/>
                <h3>Password</h3>
                <input onChange={e => this.props.typingPassword(e.target.value)} type='password'/>
                <section>
                    <button>Login</button>
                    <button onClick={() => this.registerClick()}>Register</button>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.username,
        password: state.password
    }
}

export default connect(mapStateToProps, {typingUsername, typingPassword})(Home)