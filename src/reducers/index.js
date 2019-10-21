import { combineReducers } from 'redux'

import AdminFormReducer from './AdminFormReducer'

const AppReducer = {
    admin: AdminFormReducer
}

export default combineReducers(AppReducer)