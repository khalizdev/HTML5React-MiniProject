import axios from 'axios'
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../constant/cartconstant'

export const addToCart = (productId, qty) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/produk/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            name : data.name,
            image: data.image,
            price: data.price,
            countInStock : data.countInStock,
            product : data._id,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// CART_REMOVE_ITEM

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}