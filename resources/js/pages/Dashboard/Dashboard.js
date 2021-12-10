import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const Dashboard = (props) => {
    function dashboardHandler() {
        console.log('dashboard')
        props.history.push('/dashboard');
    }
    function loginHandler() {
        console.log('login')
        props.history.push('/login');
    }
    function logoutHandler() {
        console.log('logout')
        props.history.push('/logout');
    }

        return (
            <Auxiliary>
                <h1>I am dashboard</h1>
                <Button btnType="Success" clicked={dashboardHandler}>Dashboard</Button>
                <Button btnType="Success" clicked={props.onUserOrders}>User Orders</Button>
                <Button btnType="Success" clicked={loginHandler}>Login</Button>
                <Button btnType="Success" clicked={logoutHandler}>Logout</Button>
            </Auxiliary>
        );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onUserOrders: () => dispatch(actions.fetchUserOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
