/* eslint-disable react/prop-types */
import { Filters } from "./Filters"

export const Header = ({ changeFilters }) => {
  return (
    <>
        <h1>React Shop</h1>
        <Filters onChangeFilters={ changeFilters }/>
    </>
  )
}
