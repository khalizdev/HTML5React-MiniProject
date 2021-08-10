import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './screen/DashboardScreen';
import CartScreen from './screen/KeranjangScreen';
import Produk from './screen/ProdukScreen';
import SinginScreen from './screen/SignInScreen';
import { keluar } from './action/userAction';

function App() {
  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin)
  const {userInfo} = userSignin;
  const dispatch = useDispatch()
  const keluarHandler = () => {
    dispatch(keluar())
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div></div>
        <div>
        <Link to="/keranjang">
            Keranjang
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
        </Link>
        {
            userInfo ? (
              <div className="dropdown">
               <Link to="#">{userInfo.email}
                  <i className="fa fa-caret-down"></i>{''}
               </Link>
               <ul className="drop-down-content">
                  <Link to="#keluar" onClick={keluarHandler}>Keluar</Link>
               </ul>
               </div>
            ) : (
              <Link to="/masuk">Sign In</Link>
            )
          }       
        </div>
      </header>
      <main>
        <Route path="/" component={Dashboard} exact></Route>
        <Route path="/produk/:id" component={Produk} ></Route>
        <Route path="/keranjang/:id?" component={CartScreen} ></Route>
        <Route path="/masuk" component={SinginScreen} ></Route>
      </main>
      {/* <footer className="row center">All right reserved</footer> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
