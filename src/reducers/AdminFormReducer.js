import {
    INPUT_VALUE_CHANGED,
} from './types'

const INITIAL_STATE = {
    email: '',
    password: '',
    isLoginForm: true
}

const AdminFormReducer = (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        case INPUT_VALUE_CHANGED:
            console.log(INPUT_VALUE_CHANGED)
            return {...state, [action.payload.name]: action.payload.value }
        
        default:
            return state
    }
}

export default AdminFormReducer