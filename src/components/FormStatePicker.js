import React from 'react'
import { LOGIN, REGISTER } from '../reducers/actions/types'


const FormStatePicker = props => {
    const { formState, onFormStateChange } = props
    const loginActive = formState === LOGIN ? "active ": ""
    const registerActive = formState === REGISTER ? "active ": ""
 
    return (
        <div className="ui menu segment equal width internally celled grid">
            <a id="login" onClick={onFormStateChange} className={loginActive + "item column"}>
            Login
            </a>
            <a id="register" onClick={onFormStateChange} className={registerActive + "item column"}>
                Register
            </a>
        </div>
    )
}

export default FormStatePicker