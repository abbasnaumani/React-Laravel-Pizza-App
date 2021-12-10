import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import {NavLink} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
    useEffect(() => {
        console.log(props.cartItems, "orders useEffect");
        if (!props.cartItems) {
            props.history.push('/menu');
        }
    },[]);

    function loginHandler() {
        console.log('login');
        props.history.push('/login');
    }
    function logoutHandler() {
        console.log('logout');
        props.history.push('/logout');
    }

        return (
            <Auxiliary>
                <section>
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Checkout</h2>
                                <p className="flip">
                                    <span className="deg1"></span><span className="deg2"></span><span
                                    className="deg3"></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="d-flex checkout-form-cls">
                                    <ContactData></ContactData>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Auxiliary>
        );

}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        cartItems: state.items.cartItems
    };
};
const mapDispatchToProps = dispatch => {
    return {
        //onAuth: (email, password) => dispatch(actions.auth(email, password)),
        //onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/checkout'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
