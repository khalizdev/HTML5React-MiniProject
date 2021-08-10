import {
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT_SUCCESS
} from '../constant/userconstant'
import Axios from 'axios'

export const singin =(email,password) => async (dispatch) => {
    // dispatch({type:USER_SIGNIN_SUCCESS, payload: {email, password}})
    try {
        const {data} = await Axios.post('/api/user/signin', {email, password})
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({payload: error.message})
    }

}

export const keluar = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    dispatch({type: USER_SIGNOUT_SUCCESS})
}
