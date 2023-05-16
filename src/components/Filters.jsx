/* eslint-disable react/prop-types */
import { useId, useState } from "react"
import "./Filters.css"

export const Filters = ({ onChangeFilters }) => {
  
    const [minPrice, setMinPrice] = useState(0)
  
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (event) => {
        setMinPrice(event.target.value)
        onChangeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleCategoryChange = (event) => {
        onChangeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
    <>
        <section className="filters">
            <div>
                <label htmlFor={ minPriceFilterId }>Minimum Price</label>
                <input 
                    id={ minPriceFilterId }
                    type="range"
                    min="0"
                    max="1000"
                    onChange={ handlePriceChange }
                    value={ minPrice }
                />
                <span>{ minPrice }</span>
            </div>

            <div>
                <label htmlFor={ categoryFilterId }>Category</label>
                <select id={ categoryFilterId } onChange={ handleCategoryChange }>
                    <option value="all">all</option>
                    <option value="laptops">laptops</option>
                    <option value="smartphones">smartphones</option>
                </select>
            </div>
        </section>
            
            
        
    </>
  )
}
