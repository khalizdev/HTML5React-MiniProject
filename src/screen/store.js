import {createStore,compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from '../reducer/cartreducer';
import { productListReducer, productDetailsListReducer} from '../reducer/produkreducer';
import { userSigninReducer } from '../reducer/userreducer';

const initializestate = {
    userSignin : {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
};
const reducer = combineReducers({
    productList : productListReducer,
    productDetailsList : productDetailsListReducer,
    cart : cartReducer,
    userSignin: userSigninReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initializestate, composeEnhancer(applyMiddleware(thunk)))
export default store