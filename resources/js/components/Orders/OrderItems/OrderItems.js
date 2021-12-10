import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const OrderItems = (props) => {
    let orderItemsHtml = null;
    let orderItems = props.orderItems;
    if (orderItems) {
         console.log(orderItems);
        orderItemsHtml = Object.keys(orderItems).map(orderItemKey => ((orderItems[orderItemKey] !== null) &&
            <OrderItem key={orderItems[orderItemKey].id}
                       name={orderItems[orderItemKey].name} price={orderItems[orderItemKey].price}
                       quantity={orderItems[orderItemKey].quantity}
                       totalPrice={orderItems[orderItemKey].totalPrice}
                       increased={() => props.quantityIncreased(orderItemKey)}
                       decreased={() => props.quantityDecreased(orderItemKey)}>
            </OrderItem>
        ));
    }
    return (
        <Auxiliary>
            <div className="row">
                <div className="d-flex">
                    <table className="table table-responsive">
                        <thead>
                        <tr>
                            <td><h5>Name</h5></td>
                            <td><h5>Price</h5></td>
                            <td><h5>Total Price</h5></td>
                            <td><h5>Quantity</h5></td>
                        </tr>
                        </thead>
                        <tbody>
                        {orderItemsHtml}
                        </tbody>
                    </table>
                </div>
            </div>
        </Auxiliary>
    );
};
export default OrderItems;
