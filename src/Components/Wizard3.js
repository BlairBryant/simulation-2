import React, {Component} from 'react'
import WizHeader from './WizHeader'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {tImageurl} from '../ducks/reducer'


class WizardThree extends Component {
    render() {
        return (
            <div>
                <WizHeader />
                <div className='wiz'>
                    <div className='wiz3'>
                        <div className='imgPreview'>Preview</div>

                        <h4>Image URL</h4>
                        <input value={this.props.imageurl} onChange={e => this.props.tImageurl(e.target.value)}/>


                        <section className="prevNextHolder">     
                            <div className='previousStepButton' onClick={() => this.props.history.goBack()}>Previous Step</div>
                            <Link to='/wizard/4'><div className='nextStepButton'>Next Step</div></Link>
                        </section>   
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        imageurl: state.imageurl
    }
}

export default connect(mapStateToProps, {tImageurl})(WizardThree)