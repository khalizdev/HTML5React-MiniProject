import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {detailsproduct} from '../action/produkaction'

export default function Produk(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetailsList = useSelector((state) => state.productDetailsList)
    const { product } = productDetailsList
    const [Qty, setQty] = useState(1)
    const addToCartHandler = () => {
        props.history.push(`/keranjang/${productId}?Qty=${Qty}`)
    }

    useEffect(() =>{
        dispatch(detailsproduct(productId))
    }, [dispatch, productId])
    return(
        <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>
            </div>
            <div className="col-1">
                <div className="card card-body">
                <h1>{product.name}</h1>
                <ul>
                    
                    <li>
                        <div className="row">
                            <h1>Harga</h1>
                            <div className="price">Rp. {product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            {product.countInStock > 0 ? (
                                <span className="success">Tersedia</span>
                            ): (
                                <span className="success">Tidak Tersedia</span>
                            )}
                        </div>
                    </li>
                    {
                        product.countInStock > 0 && 
                        (
                        <>
                            <li>
                                <div className="row">
                                    <div>
                                        Jumlah
                                    </div>
                                    <div>
                                        <select value={Qty} onChange={error => setQty(error.target.value)}>
                                            {[...Array(product.countInStock).keys()].map(
                                                (x) => (
                                                    <option key={x+1}value={x+1}>{x+1}</option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button onClick={addToCartHandler} className="primary block">Tambah di Keranjang</button>
                            </li>
                        </>
                        )
                    }
                    
                </ul>
                </div>
            </div>
        </div>
    )
}

Produk.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};