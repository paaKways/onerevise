import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    onInputChange, onFormStateChange
} from '../reducers/actions/'

import { LoginSignupForm, FormStatePicker } from '../components'
import './Admin.css'



class Admin extends Component {
    static propTypes = {
        email: PropTypes.string,
        password: PropTypes.string,
        formState: PropTypes.string,
        dispatch: PropTypes.func,
        onFormStateChange: PropTypes.func,
    }

    render() {
        const { onInputChange, onFormStateChange, formState, email, password, first_name, last_name } = this.props
        return (
        <div id="login-page">
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <FormStatePicker onFormStateChange={onFormStateChange} formState={formState} />
                    <LoginSignupForm 
                        formState={formState} 
                        first_name={first_name}
                        last_name={last_name}
                        email={email} 
                        password={password} 
                        onChange={onInputChange} />    
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = ({ admin }) => {
    const { email, password, first_name, last_name, formState } = admin
    console.log(admin)
    return { email, password, first_name, last_name, formState }
}

const mapDispatchToProps = dispatch => ({
    onInputChange: (event) => dispatch(onInputChange(event.target)),
    onFormStateChange: (event) => dispatch(onFormStateChange(event.target.id)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Admin)