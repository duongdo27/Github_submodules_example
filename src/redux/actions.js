import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM, ADD_ITEM } from "./actionTypes";

export const increaseQuantity = id => ({
    type: INCREASE_QUANTITY,
    payload: {id}
})

export const decreaseQuantity = id => ({
    type: DECREASE_QUANTITY,
    payload: {id}
})

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: {id}
})

export const addItem = (name, unitPrice) => ({
    type: ADD_ITEM,
    payload: {
        name,
        unitPrice
    }
})