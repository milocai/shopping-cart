/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export const Products = ({ products }) => {
  
    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
    <main className="products">
        <ul>
            {
                products.slice(0,10).map( product => {

                    const isProductInCart = checkProductInCart(product)

                    return (
                    <li key={ product.id }>
                        <img src={ product.thumbnail } alt={ product.title } />
                        <div>
                            <strong>{ product.title }</strong> - { product.price }
                        </div>
                        <div>
                            <button
                                style={{ backgroundColor: isProductInCart ? 'red' : '#296f58' }}
                                onClick={ () => {
                                    isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)
                            }}
                            >
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon />
                                    : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                    )
                })
            }
        </ul>
    </main>
  )
}
