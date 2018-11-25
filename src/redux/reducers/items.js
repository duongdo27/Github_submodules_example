import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from "../actionTypes"

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
        default:
            return state;
    }
}