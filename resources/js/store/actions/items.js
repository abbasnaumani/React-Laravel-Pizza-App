import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';
import axios from '../../api/index';

export const addItemToCart = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        item: {
            id: item.id,
            name: item.name,
            price: item.price,
            totalPrice: item.price,
            quantity: 1,
        }
    };
};

export const removeItemFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_ITEM_FROM_CART,
        itemId: itemId
    };
};
export const quantityIncrease = (itemId) => {
    return {
        type: actionTypes.QUANTITY_INCREASE,
        itemId: itemId
    };
};
export const quantityDecrease = (itemId) => {
    return {
        type: actionTypes.QUANTITY_DECREASE,
        itemId: itemId
    };
};
export const setItems = (items) => {
    return {
        type: actionTypes.SET_ITEMS,
        items: items
    };
};

export const fetchItemsFailed = () => {
    return {
        type: actionTypes.FETCH_ITEMS_FAILED
    };
};

export const initItems = () => {
    return dispatch => {
        axios.get('products')
            .then(response => {
                console.log(response.data, "API Response");
                dispatch(setItems(response.data?.payload));
            })
            .catch(error => {
                dispatch(fetchItemsFailed());
            });
    };
};
