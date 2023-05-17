import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const CART_ACTIONS_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
} 

const initialState = []

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case CART_ACTIONS_TYPES.ADD_TO_CART: {
            
            const productInCartIndex = state.findIndex(item => item.id === payload.id)

            if(productInCartIndex >= 0){
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [...state, {...payload, quantity: 1}]
        }

        case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
            return state.filter(item => item.id !== payload.id)
        }

        case CART_ACTIONS_TYPES.CLEAR_CART: {
            return initialState
        }
    }

    return state
}


export const CartProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = product => dispatch({ type: "ADD_TO_CART", payload: product })
    const removeFromCart = product => dispatch({ type: "REMOVE_FROM_CART", payload: product })
    const clearCart = () => dispatch({ type: "CLEAR_CART" })
    

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}