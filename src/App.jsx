import { products as productsData } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {

  const { filteredProducts } = useFilters()

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={ filteredProducts(productsData) }/>
    </CartProvider>
  )
}

export default App
