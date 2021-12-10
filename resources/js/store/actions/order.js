import * as actionTypes from './actionTypes';
//import axios from '../../axios-orders';
import axios from '../../api/index';

export const orderInvoiceSummary = () => {
    return {
        type: actionTypes.ORDER_INVOICE_SUMMARY,
    };
};
export const purchaseSuccess = (  ) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        orderData: null
    };
};

export const purchaseFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error: error
    };
}

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_START
    };
};

export const createOrder = ( orderData ) => {
    return dispatch => {
        dispatch( purchaseStart() );
        axios.post( '/orders', orderData )
            .then( response => {
                console.log( response.data );
              //  window.location='/menu';
                dispatch( purchaseSuccess() );
            } )
            .catch( error => {
                dispatch( purchaseFail( error ) );
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get( '/orders.json' )
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};
