import {
    PRODUCT_LIST_SUCCESS,
    PRODUCTDETAILS_LIST_SUCCESS
} from '../constant/produkconstant'
import axios from 'axios'

export const listproduct = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/api/produk')
        dispatch({type:PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({payload: error.message})
    }
}

export const detailsproduct = (productId) => async (dispatch) => {
    try {
        const {data} = await axios.get(`/api/produk/${productId}`)
        dispatch({type:PRODUCTDETAILS_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({payload: error.message})
    }
}