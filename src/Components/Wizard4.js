import React, {Component} from 'react'
import WizHeader from './WizHeader'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {tMonthlyMortgage, tLoanAmount} from '../ducks/reducer'


class WizardFour extends Component {
    render() {
        return (
            <div>
                <WizHeader />
                <div className='wiz'>
                    <div className='wiz4'>

                        <h4>Loan Amount</h4>
                        <input value={this.props.loanAmount} onChange={e => this.props.tLoanAmount(e.target.value)}/>
                        <h4>Monthly Mortgage</h4>
                        <input value={this.props.monthlyMortgage} onChange={e => this.props.tMonthlyMortgage(e.target.value)}/>
                        
                        <section className="prevNextHolder">     
                            <div className='previousStepButton' onClick={() => this.props.history.goBack()}>Previous Step</div>
                            <Link to='/wizard/5'><div className='nextStepButton'>Next Step</div></Link>
                        </section>   
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {loanAmount, monthlyMortgage} = state
    return {
        loanAmount,
        monthlyMortgage
    }
}

export default connect(mapStateToProps, {tLoanAmount, tMonthlyMortgage})(WizardFour)