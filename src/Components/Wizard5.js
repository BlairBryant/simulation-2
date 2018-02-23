import React, {Component} from 'react'
import WizHeader from './WizHeader'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import {tDesiredRent} from '../ducks/reducer'
import axios from 'axios'

class WizardFive extends Component {
    constructor() {
        super()

        this.state = {
            redirect: false
        }
    }

    completeClick() {
        axios.post('/api/properties', this.props.state).then(res => {
            console.log('passed info to session')
            var sessionID = res.data.id
            console.log('this is the sessionID: ', sessionID)
            console.log(this.props.state)
            
            axios.post('/postProperties', {state: this.props.state, sessionID: sessionID}).then(res => {           
            console.log('posted property to db')
            this.setState({redirect: true})
            })
        })
        
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/dashboard' />}
        return (
            <div>
                <WizHeader />
                <div className='wiz'>
                    <div className='wiz5'>

                        <h4>Desired Rent</h4>
                        <input value={this.props.desiredRent} onChange={e => this.props.tDesiredRent(e.target.value)}/>

                        <section className="prevNextHolder">     
                            <div className='previousStepButton' onClick={() => this.props.history.goBack()}>Previous Step</div>
                            <div className='nextStepButton' id='completeButton' onClick={() => this.completeClick()}>Complete</div>
                        </section>   
                    </div>
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, {tDesiredRent})(WizardFive)