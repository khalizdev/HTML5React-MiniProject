import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singin } from '../action/useraction'
import PropTypes from 'prop-types';

export default function SinginScreen (props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.prevenDefault()
        dispatch(singin(email, password))
    }

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/';
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo} = userSignin
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Silahkan Login</label>
                    <input type="email" id="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label>
                        <button className="primary" type="submit">
                            Masuk
                        </button>
                    </label>
                </div>
            </form>
        </div>
    )
}

SinginScreen.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any,
    location: PropTypes.any
};