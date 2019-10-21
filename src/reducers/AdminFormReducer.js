import {
    INPUT_VALUE_CHANGED, FORM_STATE_CHANGED, LOGIN, REGISTER
} from './actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    formState: REGISTER
}

const AdminFormReducer = (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        case INPUT_VALUE_CHANGED:
            console.log(INPUT_VALUE_CHANGED)
            return {...state, [action.payload.name]: action.payload.value }
        
        case FORM_STATE_CHANGED:
            console.log(FORM_STATE_CHANGED)
            return {...state, formState: action.payload}

        default:
            return state
    }
}

export default AdminFormReducer