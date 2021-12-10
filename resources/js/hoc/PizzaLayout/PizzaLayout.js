import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect, NavLink} from 'react-router-dom';
import Auxiliary from '../Auxiliary/Auxiliary';
import './PizzaLayout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Button from "../../components/UI/Button/Button";

class PizzaLayout extends React.Component {
    state = {
        showSideDrawer: false,
        token: localStorage.getItem('token')
    }

    logoutHandler = () => {
        console.log('logout')
        //this.props.history.push('/dashboard');
        //this.props.history.goBack();
        this.props.history.push('/logout');
    }

    render() {
        return (
            <Auxiliary>
                <main>
                    <h1>Hello I am Here</h1>
                </main>
            </Auxiliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(PizzaLayout);
