/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FiltersContext = createContext()

export const FilterProvider = ({ children }) => {

    const [filters, setFilters] = useState({
        minPrice: 0,
        category: "all"
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}