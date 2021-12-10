import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import OrderItems from '../../components/Orders/OrderItems/OrderItems';
import OrderInvoiceSummary from '../../components/Orders/OrderInvoiceSummary/OrderInvoiceSummary';
import {NavLink} from "react-router-dom";
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = (props) => {
    useEffect(() => {
        console.log(props.cartItems, "orders componentDidMount");
        if (!props.cartItems) {
            props.history.push('/menu');
        }
    },[]);

    function updateOrderInvoiceSummary(items) {
        let orderInvoiceSummary = null;
        let subTotal = 0;
        if (items) {
            subTotal = Object.keys(items).map(orderItemKey => {
                return items[orderItemKey];
            })
                .reduce((sum, el) => {
                    let itemPrice = 0;
                    if (el) {
                        itemPrice = el.quantity * el.price;
                    }
                    return sum + itemPrice;
                }, 0);
        }
        const total = parseFloat(subTotal) + parseFloat(props.deliveryCharges);
        const euroTotal = total * 1.17;
        orderInvoiceSummary = {
            subtotal: subTotal.toFixed(2),
            deliveryCharges: props.deliveryCharges.toFixed(2),
            total: total.toFixed(2),
            euroTotal: euroTotal.toFixed(2)
        }
        return orderInvoiceSummary;
    }

    function orderContinueHandler() {
        props.history.push('/checkout');
    }

        return (
            <Auxiliary>
                <section>
                    <div className="container mb-5">
                        <div className="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                            <div className="col-md-7 heading-section text-center">
                                <h2 className="mb-4">Order</h2>
                                <p className="flip">
                                    <span className="deg1"></span><span className="deg2"></span><span
                                    className="deg3"></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center px-3">
                        <div className="col-md-4 col-sm-3 justify-content-center">
                            <div className=" d-flex pb-3"><h4> Cart Items</h4></div>
                            <OrderItems orderItems={props.cartItems}
                                        quantityIncreased={props.onQuantityIncrease}
                                        quantityDecreased={props.onQuantityDecrease}
                                        orderInvoiceSummary={props.cartItems}
                            ></OrderItems>

                        </div>
                        <div className="col-md-2">
                            <div className="text-center pb-3"><h4> Invoice Summary </h4></div>
                            <OrderInvoiceSummary
                                orderInvoiceSummary={updateOrderInvoiceSummary(props.cartItems)}>
                            </OrderInvoiceSummary>
                            <div className="d-flex justify-content-center p-5 mb-5">
                                <h5><Button btnType="main-btn-cls"
                                            clicked={orderContinueHandler}>CHECKOUT
                                </Button>
                                </h5>
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
        cartItems: state.items.cartItems,
        deliveryCharges: state.order.deliveryCharges,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onQuantityIncrease: (itemId) => dispatch(actions.quantityIncrease(itemId)),
        onQuantityDecrease: (itemId) => dispatch(actions.quantityDecrease(itemId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
