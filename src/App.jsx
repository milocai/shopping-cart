import { products as productsData } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"

function App() {

  const { filteredProducts } = useFilters()

  return (
    <>
      <Header/>
      <Cart/>
      <Products products={ filteredProducts(productsData) }/>
    </>
  )
}

export default App
