/* eslint-disable react/prop-types */
import { useId, useState } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export const Filters = () => {
  
  
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handlePriceChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleCategoryChange = (event) => {
        setFilters(prevState => ({
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
                    value={ filters.minPrice }
                />
                <span>{ filters.minPrice }</span>
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
