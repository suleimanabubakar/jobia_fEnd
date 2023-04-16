import {configureStore} from "@reduxjs/toolkit"
import authReducer from './features/auth_slice'
import userReducer from './features/user_slice'

export default configureStore({
    reducer: {
        auth:authReducer,
        user:userReducer,
    }
})