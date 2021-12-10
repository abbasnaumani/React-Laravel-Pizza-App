import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Auth.css';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import { updateObject, checkValidity } from '../../shared/utility';

const Auth = (props) => {
    const [authFormInputs, setAuthFormInputs] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Enter you email address',
                label: 'Email address',
                autoFocus: 'autofocus'
            },
            label: 'Email Address',
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Enter your password',
                autoComplete: 'current-password'
            },
            label: <Auxiliary><span>Password</span></Auxiliary>,
            labelClassName: ['d-flex', 'justify-content-between'],
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        },
        checkbox: {
            elementType: 'checkbox',
            elementConfig: {
                type: 'checkbox',
                label: 'Remember Me',
            },
            value: '',
            valid: false,
            touched: false
        }
    });
    useEffect(() => {
        console.log(props.authRedirectPath, ' I am login page..... useEffect');
        if (props.authRedirectPath !== '/') {
            props.onSetAuthRedirectPath();
        }
    },[]);

    const inputChangedHandler = (event, inputName) => {
        const updatedAuthFormInputs = updateObject(authFormInputs, {
            [inputName]: updateObject(authFormInputs[inputName], {
                value: event.target.value,
                valid: checkValidity(
                    event.target.value,
                    authFormInputs[inputName].validation
                ),
                touched: true
            })
        });
        setAuthFormInputs(updatedAuthFormInputs);
    };

    function submitHandler(event) {
        event.preventDefault();
        props.onAuth(authFormInputs.email.value, authFormInputs.password.value);
    }

    const formElementsArray = [];
    for (let key in authFormInputs) {
        formElementsArray.push({
            id: key,
            config: authFormInputs[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            label={formElement.config.label}
            key={formElement.id}
            elementType={formElement.config.elementType}
            autoFocus={formElement.config.autofocus}
            labelClassName={formElement.config.labelClassName}
            autoComplete={formElement.config.autoComplete}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => inputChangedHandler(event, formElement.id)}/>

    ));
    if (props.loading) {
        form = <Spinner/>
    }
    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }
    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath}/>
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 container-fluid">
                    <div className="signin-panel">
                        <div className="signin-sidebar auth-sidebar">
                            {authRedirect}
                            {errorMessage}
                            <div className="container mb-5">
                                <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                                    <div className="col-md-7 heading-section text-center">
                                        <h2 className="mb-4">Login</h2>
                                        <p className="flip">
                                            <span className="deg1"></span><span className="deg2"></span><span
                                            className="deg3"></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="signin-sidebar-body">
                                <div className="signin-form">
                                    <form onSubmit={submitHandler}>
                                        {form}
                                        <div className="form-group mg-b-20 text-center">
                                            <h5>
                                                <button type="submit "
                                                        className="btn btn-brand-01 btn-uppercase flex-fill main-btn-cls"> SIGN
                                                    IN
                                                </button>
                                            </h5>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state.auth.authRedirectPath, "state.auth.authRedirectPath")
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
