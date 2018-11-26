import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM, ADD_ITEM } from "../actionTypes"

const initialState = [
    {"id": 1, "name": "Apple", "unitPrice": 2, "quantity": 1},
    {"id": 2, "name": "Orange", "unitPrice": 3, "quantity": 1},
    {"id": 3, "name": "Banana", "unitPrice": 1, "quantity": 1},
    {"id": 4, "name": "Grape", "unitPrice": 4, "quantity": 1},
]

export default function(state = initialState, action){
    switch (action.type){
        case INCREASE_QUANTITY: {
            const {id} = action.payload;
            return state.map((item, index) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                else{
                    return item;
                }
            });
        }
        case DECREASE_QUANTITY: {
            const {id} = action.payload;
            return state.map((item, index) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }
                else{
                    return item;
                }
            });
        }
        case REMOVE_ITEM: {
            const {id} = action.payload;
            return state.filter(item => item.id !== id);
        }
        case ADD_ITEM: {
            const {name, unitPrice} = action.payload;
            const id = (state && state.length ? state[state.length-1].id+1 : 1);
            return [
                ...state,
                {"id": id, "name": name, "unitPrice": unitPrice, "quantity": 1}
            ]
        }
        default:
            return state;
    }
}