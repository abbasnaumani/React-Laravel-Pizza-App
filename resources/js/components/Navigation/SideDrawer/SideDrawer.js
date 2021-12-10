import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import {NavLink} from "react-router-dom";

const SideDrawer = (props) => {
    let attachedClasses = ["sidebar", "Close"];
    if (props.open) {
        attachedClasses = ["sidebar", "Open"];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className="sidebar-header">
                    <div>
                        <NavLink to='/' className="sidebar-logo"><Logo/></NavLink>
                    </div>
                </div>
                <div className="sidebar-body">
                    <NavigationItems/>
                </div>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;
