import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = []

const reducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case "ADD_TO_CART": {
            
            const productInCartIndex = state.findIndex(item => item.id === payload.id)

            if(productInCartIndex >= 0){
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [...state, {...payload, quantity: 1}]
        }

        case "REMOVE_FROM_CART": {
            return state.filter(item => item.id !== payload.id)
        }

        case "CLEAR_CART": {
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