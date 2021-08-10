import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart} from '../action/cartaction'
import PropTypes from 'prop-types';

export default function CartScreen(props){
    const productId = props.match.params.id;
    const Qty = props.location.search ? Number(props.location.search.split('=')[1]): 1;
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    const dispatch = useDispatch();

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, Qty))
        }
    }, [dispatch, productId, Qty])

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }



    return(
        <div className="row top">
            <div className="col-2">
                <h1>Keranjang Anda</h1>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img 
                                            src={item.image}
                                            alt={item.name}
                                            className='small'>
                                        </img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/produk/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                        value={item.qty}
                                        onChange={(e) =>
                                            dispatch(
                                            addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                        >
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                            </option>
                                        ))}
                                        </select>
                                    </div>
                                    <div>Rp. {item.price}</div>
                                    <div>
                                        <button type="button" onClick={() =>
                                            removeFromCartHandler(item.product)}>
                                                Hapus Dari Keranjang
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul>
                    <li>
                        <h2>
                        Total Pembayaran ({cartItems.reduce((a, c) => a + c.qty, 0)} Barang) : Rp. 
                        {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                        </h2>
                    </li>
                    <li>
                        <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>
                            Bayar Sekarang
                        </button>
                    </li>
                </ul> 
            </div>
        </div>
    )
}


CartScreen.propTypes = {
    match: PropTypes.any,
    location: PropTypes.any,
    history: PropTypes.any
};