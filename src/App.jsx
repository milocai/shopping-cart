import { products as productsData } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"

function App() {

  const { setFilters, filteredProducts } = useFilters()

  return (
    <>
      <Header changeFilters={ setFilters }/>
      <Products products={ filteredProducts(productsData) }/>
    </>
  )
}

export default App
