import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import WizardOne from './Components/Wizard1'
import WizardTwo from './Components/Wizard2'
import WizardThree from './Components/Wizard3'
import WizardFour from './Components/Wizard4'
import WizardFive from './Components/Wizard5'



export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/wizard/1' component={WizardOne} />    
        <Route path='/wizard/2' component={WizardTwo} />    
        <Route path='/wizard/3' component={WizardThree} />    
        <Route path='/wizard/4' component={WizardFour} />    
        <Route path='/wizard/5' component={WizardFive} />    
    </Switch>
)