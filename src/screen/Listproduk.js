import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Listproduk(props) {
    const {product} = props
    return(
        <div key={product._id} className="card">
            <Link to={`produk/${product._id}`}>
              <img className="medium" src={product.image} alt="product" />
            </Link>
            <div className="card-body">
              <Link to={`/produk/${product._id}`}>
                <h2>{product.name}</h2>
              </Link>
              <div className="price">Rp. {product.price}</div>
            </div>
          </div>
    )
}

Listproduk.propTypes = {
    product: PropTypes.any,
};
