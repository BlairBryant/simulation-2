import React, {Component} from 'react'
import WizHeader from './WizHeader'
import {Link} from 'react-router-dom'
import {typingPropertyName, typingPropertyDesc} from '../ducks/reducer'
import {connect} from 'react-redux'


class WizardOne extends Component {
    render() {
        return (
            <div>
                <WizHeader />
                <div className='wiz'>
                    <div className='wiz1'>
                        <h4>Property Name</h4>
                        <input value={this.props.propertyName} onChange={e => this.props.typingPropertyName(e.target.value)}/>
                        <h4>Property Description</h4>
                        <textarea value={this.props.propertyDesc} onChange={e => this.props.typingPropertyDesc(e.target.value)}/>
                        <Link to='/wizard/2'><div className='nextStepButton' id='nex'>Next Step</div></Link>
                        
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        propertyName: state.propertyName,
        propertyDesc: state.propertyDesc
    }
}

export default connect(mapStateToProps, {typingPropertyName, typingPropertyDesc})(WizardOne)