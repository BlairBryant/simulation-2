import React, {Component} from 'react'
import WizHeader from './WizHeader'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {tAddress, tCity, tStateOf, tZip} from '../ducks/reducer'


class WizardTwo extends Component {
    render() {
        return (
            <div>
                <WizHeader />
                <div className='wiz'>
                    <div className='wiz2'>
                        <h4>Address</h4>
                        <input value={this.props.address} onChange={e => this.props.tAddress(e.target.value)}/>
                        <h4>City</h4>
                        <input value={this.props.city} onChange={e => this.props.tCity(e.target.value)}/>
                        <h4>State</h4>
                        <input value={this.props.stateOf} onChange={e => this.props.tStateOf(e.target.value)}/>
                        <h4>Zip</h4>
                        <input value={this.props.zip} onChange={e => this.props.tZip(e.target.value)}/>                      
                        
                        <section className="prevNextHolder">     
                            <div className='previousStepButton' onClick={() => this.props.history.goBack()}>Previous Step</div>
                            <Link to='/wizard/3'><div className='nextStepButton'>Next Step</div></Link>
                        </section>   

                        </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {address, stateOf, city, zip} = state
    return {
        address,
        city,
        stateOf,
        zip
    }
}

export default connect(mapStateToProps, {tAddress,tCity,tStateOf,tZip})(WizardTwo)