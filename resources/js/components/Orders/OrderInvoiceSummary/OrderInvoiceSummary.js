import React from 'react';

const orderInvoiceSummary = (props) => (

        <div className="row justify-content-center">
            <div className="">
                <table className="table table-responsive">
                    <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td><p><span>${props.orderInvoiceSummary.subtotal}</span></p></td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td><span className="">${props.orderInvoiceSummary.deliveryCharges}</span></td>
                    </tr>
                    <tr>
                        <td><h5> <i className="fa fa-dollar" aria-hidden="true"></i> Total</h5></td>
                        <td><h5><i className="fa fa-dollar" aria-hidden="true"></i> {props.orderInvoiceSummary.total}</h5></td>
                    </tr>
                    <tr>
                        <td><h5> <i className="fa fa-eur" aria-hidden="true"></i> Total</h5></td>
                        <td><h5><i className="fa fa-eur" aria-hidden="true"></i> {props.orderInvoiceSummary.euroTotal}</h5></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>


);

export default orderInvoiceSummary;
