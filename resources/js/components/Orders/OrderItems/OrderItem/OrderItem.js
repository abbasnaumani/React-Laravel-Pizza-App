import React from 'react';
import "./OrderItem.css";
const orderItem = (props) => (
    <tr>
        <td className="">
            <h5><span>{props.name}</span></h5>
        </td>
        <td className="">
            <span className="price">${props.price.toFixed(2)}</span>
        </td>
        <td className="">
            <span className="price">${props.totalPrice.toFixed(2)}</span>
        </td>
        <td className="">
            <div className="qty-btn d-flex ">
                <span>
                    <button onClick={props.decreased} disabled={props.quantity == 0}>
                        <i className="fa fa-minus-square" aria-hidden="true"></i>
                    </button>
                </span>
                <span className="quantity-cls">{props.quantity}</span>
                <span>
                    <button onClick={props.increased}>
                        <i className="fa fa-plus-square" aria-hidden="true"></i>
                    </button>
                 </span>
            </div>
        </td>
    </tr>
);
export default orderItem;
