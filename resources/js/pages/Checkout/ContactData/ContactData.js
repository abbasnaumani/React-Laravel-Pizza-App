import React, {Component, useState} from 'react';
import {connect} from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const ContactData = (props) => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                name: 'name',
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        phone_number: {
            elementType: 'input_phone',
            elementConfig: {
                name: 'phone_number',
                type: 'text',
                placeholder: '(454) 545-4545',
            },
            value: '',
            validation: {
                required: true,
                isPhone: true
            },
            valid: false,
            touched: false
        },
        address: {
            elementType: 'textarea',
            elementConfig: {
                name: 'address',
                rows: "4",
                cols: "50",
                placeholder: 'Address'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        }
    });
    const [formIsValid, setFormIsValid] = useState(false);

    function orderHandler(event) {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in orderForm) {
            formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
        }
        const order = {
            orderData: formData,
            orderItems: props.cartItems
        }
        console.log(order, "Order submit data", formIsValid);
        if (formIsValid) {
            console.log("submit form");
            props.onCreateOrder(order);
        } else {
            console.log("form is not valid");
        }
    }

    function checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        if (rules.isPhone) {
            isValid = value.match(/\d/g).length === 10 && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    function inputChangedHandler(event, inputIdentifier) {
        const updatedOrderForm = {
            ...orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

        console.log(orderForm);
        const formElementsArray = [];
        for (let key in orderForm) {
            formElementsArray.push({
                id: key,
                config: orderForm[key]
            });
        }
        let form = (
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => inputChangedHandler(event, formElement.id)}/>

                ))}
                <h5 className="text-center">
                    <Button btnType="main-btn-cls"
                            clicked={orderHandler}>ORDER</Button>
                </h5>
            </form>
        );
        if (props.loading) {
            form = <Spinner/>;
        }
        if (props.purchased) {
            form = <h3>Thank You, Order Placed Successfully!</h3>;
        }
        return (
            <div className="text-center">
                {/*<h4>Enter your Contact Data</h4>*/}
                {form}
            </div>
        );
}

const mapStateToProps = state => {
    return {
        cartItems: state.items.cartItems,
        loading: state.order.loading,
        purchased: state.order.purchased
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateOrder: (orderData) => dispatch(actions.createOrder(orderData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
