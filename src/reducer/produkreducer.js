const {
    PRODUCT_LIST_SUCCESS,
    PRODUCTDETAILS_LIST_SUCCESS
} = require('../constant/produkconstant')

export const productListReducer = (state={products : []}, action)=>{
    switch(action.type){
        case PRODUCT_LIST_SUCCESS:
            return{loading:false, products: action.payload}
        default:
            return state
    }
}

export const productDetailsListReducer = (state={product :{}}, action)=>{
    switch(action.type){
        case PRODUCTDETAILS_LIST_SUCCESS:
            return{loading:false, product: action.payload}
        default:
            return state
    }
}
