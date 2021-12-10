import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    items: null,
    cartItems: null,
    totalPrice: 0,
    error: false
};

const addItemToCart = (state, action) => {
    const itemId = parseInt(action.item.id);
    let updatedItem = {[itemId]: action.item}
    const updatedItems = updateObject(state.cartItems, updatedItem);
    const updatedState = {
        cartItems: updatedItems,
        totalPrice: 0
    }
    return updateObject(state, updatedState);
};

const removeItemFromCart = (state, action) => {
    const itemId = parseInt(action.itemId);
    let updatedItem = {[itemId]: null}
    const updatedItems = updateObject(state.cartItems, updatedItem);
    const updatedState = {
        cartItems: updatedItems
    }
    console.log(updatedState, state)
    return updateObject(state, updatedState);
};
const quantityIncrease = (state, action) => {
    const cartItems = state.cartItems;
    let cartItem = cartItems[action.itemId];
    cartItem.quantity = cartItem.quantity + 1;
    cartItem.totalPrice = cartItem.price * cartItem.quantity;
    const updatedItem = {[action.itemId]: cartItem}
    const updatedItems = updateObject(state.cartItems, updatedItem);
    const updatedSt = {
        cartItems: updatedItems
    }
    return updateObject(state, updatedSt);
};
const quantityDecrease = (state, action) => {
    const cartItems = state.cartItems;
    let cartItem = cartItems[action.itemId];
    cartItem.quantity = cartItem.quantity - 1;
    cartItem.totalPrice = cartItem.price * cartItem.quantity;
    const updatedItem = {[action.itemId]: cartItem}
    const updatedItems = updateObject(state.cartItems, updatedItem);
    const updatedSt = {
        cartItems: updatedItems
    }
    return updateObject(state, updatedSt);
};

const setItems = (state, action) => {
    return updateObject(state, {
        items: action.items,
        totalPrice: 0,
        error: false
    });
};

const fetchItemsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            return addItemToCart(state, action);
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return removeItemFromCart(state, action);
        case actionTypes.SET_ITEMS:
            return setItems(state, action);
        case actionTypes.FETCH_ITEMS_FAILED:
            return fetchItemsFailed(state, action);
        case actionTypes.QUANTITY_INCREASE:
            return quantityIncrease(state, action);
        case actionTypes.QUANTITY_DECREASE:
            return quantityDecrease(state, action);
        default:
            return state;
    }
};

export default reducer;
