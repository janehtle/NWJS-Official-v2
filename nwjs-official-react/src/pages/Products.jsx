import { ProductContext } from "../context/ProductContext"
import ProductList from "../components/products/ProductList"
import FilterBar from "../components/products/FilterBar"
import { useContext, useState } from "react"
import "./Products.css"

function Products() {
  const { products, loading } = useContext(ProductContext) 
  /* ^^^
    - call useContext and pass ProductContext
    - React looks up the component tree for the nearest ProductContext.Provider
    - finds ProductProvider (which wraps this component in App.jsx)
    - reads the value prop from that Provider
    - returns that value
    - destructure to get products and loading */

  const [priceSort, setPriceSort] = useState(null)
  const [selectedTypes, setSelectedTypes] = useState([])

  const handlePriceSort = (value) => {
    setPriceSort(value)
  }

  const handleTypeFilter = (value) => {
    /* Check if the value already in selectedTypes array */
    if (selectedTypes.includes(value)) {
      /* Value IS in array, user is UNCHECKING */
      setSelectedTypes(selectedTypes.filter(type => type !== value))
    } else {
      /* Value NOT in array, user is CHECKING */
      setSelectedTypes([...selectedTypes, value])
    }
  }

const sortProductsByPrice = (productsObj, sortDirection) => {
    if (!sortDirection) {
      return productsObj
    }

    const sortedProducts = Object.keys(productsObj).reduce((newObj, category) => {
      const productsArray = productsObj[category]
      const sortedArray = [...productsArray].sort((a, b) => {
        if (sortDirection === 'low-to-high') {
          return a.price - b.price
        } else if (sortDirection === 'high-to-low') {
          return b.price - a.price
        }
        return 0
      })

      newObj[category] = sortedArray

      return newObj
    }, {}) 

    return sortedProducts
  }

  const filterProductsByType = (productsObj, selectedCategories) => {
    if (selectedCategories.length === 0) {
      return productsObj
    }

    const filteredProducts = selectedCategories.reduce((newObj, category) => {

      const categoryKey = category.charAt(0).toUpperCase() + category.slice(1)

      newObj[categoryKey] = productsObj[categoryKey]

      return newObj
    }, {}) 

    return filteredProducts
  }

  let filteredProducts = filterProductsByType(products, selectedTypes)

  filteredProducts = sortProductsByPrice(filteredProducts, priceSort)

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="mainContent">
      <FilterBar
        priceSort={priceSort}
        onPriceChange={handlePriceSort}
        selectedTypes={selectedTypes}
        onTypeChange={handleTypeFilter}
      />

      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Products
