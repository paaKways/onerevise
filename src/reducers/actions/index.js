import { INPUT_VALUE_CHANGED, FORM_STATE_CHANGED, LOGIN, REGISTER } from './types'

export const onInputChange = ({name, value}) => ({
    type: INPUT_VALUE_CHANGED,
    payload: { name, value }
})

export const onFormStateChange = (formState) =>{
    let final = formState
    if (formState === LOGIN.toLowerCase()) {
        final = LOGIN
    } else final = REGISTER
   
    return {
        type: FORM_STATE_CHANGED,
        payload: final
    }
}