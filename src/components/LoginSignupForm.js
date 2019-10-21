import React from 'react'
import { LOGIN } from '../reducers/actions/types'


const LoginSignupForm = props => {
    const {email, password, first_name, last_name, onChange, formState} = props
    console.log(props)
    const toHide = formState === LOGIN 
    const buttonState = toHide ? 'Login' : 'Sign up'

    return (
        <div className="ui container">
            <form className="ui form">         
                <span className="ui horizontal divider">
                    <div className="circle"></div>
                </span>
                <div className={(toHide && 'hidden ') + " field"}>
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input  
                            onChange={onChange} 
                            value={first_name} 
                            name="first_name" 
                            placeholder="First name" 
                            type="text"/>
                    </div>
                </div>
                <div className={(toHide && 'hidden ') + " field"}>
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input onChange={onChange} value={last_name} name="last_name" placeholder="Last name" type="text"/>
                    </div>
                </div>
                <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input onChange={onChange} value={email} name="email" placeholder="E-mail address" type="email"/>
                    </div>
                </div>
                <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input onChange={onChange} value={password} name="password" placeholder="Your password" type="password"/>
                    </div>
                </div>       
                <div className="field">
                    <button className="ui fluid button block purple">{buttonState}</button>
                </div>                        
                <a className={(!toHide && 'hidden ') + " left aligned"} href="#">Forgot password?</a>  
            
            <div className={(!toHide && 'hidden ') + " ui fluid segment"}>
                <p>Don't have an account? <a href="#">Sign up.</a></p>
            </div>
            </form>
            
        </div>
    )
}


export default LoginSignupForm