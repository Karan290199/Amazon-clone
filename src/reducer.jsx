export const initialState = {
    basket: [],
    user: null,
};

export const getbaskettotal = (basket) => {
    return basket?.reduce((amount,item)=> item.price + amount, 0);
} 

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_CART':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_FROM_CART':
            let newbasket = [...state.basket];
            const idx = state.basket.findIndex((basketItem)=>(basketItem.id === action.id));
            if(idx >= 0){
                newbasket.splice(idx, 1);
            }
            return {...state, basket: newbasket};
        default: 
            return state;
    }
}

export default reducer;