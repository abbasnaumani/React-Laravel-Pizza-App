import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {NavLink} from "react-router-dom";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const navigationItems = (props) => {
    let navigation = <ul className="navbar-nav ml-auto">
        <li className="nav-item active"><NavLink to="/login" className="nav-link">Login</NavLink></li>
    </ul>;
    if (props.isAuthenticated) {
        navigation = <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><NavLink to="/menu" className="nav-link">Menu</NavLink></li>
            <li className="nav-item"><NavLink to="/cart" className="nav-link">Cart</NavLink></li>
            <li className="nav-item"><NavLink to="/checkout" className="nav-link">Checkout</NavLink></li>
            <li className="nav-item"><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
        </ul>;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <Auxiliary>
                        <span className="fas fa-pizza-slice mr-1"></span>
                        Pizza<br/><small>Delicous</small>
                    </Auxiliary>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                   {navigation}
                </div>
            </div>
        </nav>
    );
};

export default navigationItems;
