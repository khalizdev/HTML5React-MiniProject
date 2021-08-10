import {
    USER_SIGNIN_SUCCESS,USER_SIGNOUT_SUCCESS
} from '../constant/userconstant'


export const userSigninReducer = (state={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_SUCCESS:
            return {loading: false , userInfo: action.payload}
        case USER_SIGNOUT_SUCCESS:
            return {}
        default:
            return state
    }
}