import React from 'react';

import SiteLogo from '../../assets/images/logo.png';
import './Logo.css';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import {NavLink} from "react-router-dom";

const Logo = (props) => (
    <Auxiliary>
        <span className="flaticon-pizza-1 mr-1"></span>
        Pizza<br/><small>Delicous</small>
    </Auxiliary>
);

export default Logo;
