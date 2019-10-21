import React, { Component } from 'react'

import './Admin.css'


class Login extends Component {
   
    render() {
        return (
        <div id="login-page">
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <div class="ui menu segment equal width internally celled grid">
                        <a href="/login" class="active item column">
                        Login
                        </a>
                        <a href="/register" class="item column">
                            Register
                        </a>
            
                    </div>
                    <div class="ui segment">
                        <form class="ui form">
                            
                            <span class="ui horizontal divider">
                                <div class="circle"></div>
                            </span>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input name="email" placeholder="E-mail address" type="email"/>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input name="password" placeholder="Your password" type="password"/>
                                </div>
                            </div>       
                            <div class="field">
                                <button class="ui fluid button block purple">Login</button>
                            </div>
                            
                            <a class="left aligned" href="#">Forgot password?</a>  
                        
                        </form>
                    </div>
                    <div class="ui segment">
                        <p>Don't have an account? <a href="#">Sign up.</a></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Login