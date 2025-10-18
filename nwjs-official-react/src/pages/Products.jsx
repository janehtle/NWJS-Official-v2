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

/* LIFT STATE UP - need to revisit this concept */
  /* notes:
    - FilterBar needs to display current filter selections
    - ProductList needs to know which filters are active to filter products
    - Both components need access to the SAME state
    - The closest common ancestor that contains both is THIS component */

    /* [current value, function] */
  const [priceSort, setPriceSort] = useState(null) /* null default state - no selection */
  const [selectedTypes, setSelectedTypes] = useState([]) /* [] instead of null for no selection - will show all products */

  const handlePriceSort = (value) => { /* value = lowest-highest or highest-lowest, function will update state according to value */
    setPriceSort(value)
  }

  const handleTypeFilter = (value) => { /* value = category, function will update state according to value */
    /* Check if value already in selectedTypes array. Array because user can check more than 1 option */
    if (selectedTypes.includes(value)) {
      /* value IS in array, user is UNCHECKING */
      setSelectedTypes(selectedTypes.filter(type => type !== value))
    } else {
      /* value NOT in array, user is CHECKING */
      setSelectedTypes([...selectedTypes, value]) /* spread operator copies existing array and adds new value to it */
    }
  }

  const sortProductsByPrice = (productsObj, sortDirection) => { /* if user selected nothing, return products unchanged */
    if (!sortDirection) {
      return productsObj
    } 

    /* this function sorts the products by price within each category by taking products obj, direction and returns new obj (sorted)
      need to change somehow so its not within each category. may have to break code, still need to figure out */
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

    newObj[category] = sortedArray /* new sorted obj returned */
      return newObj
  }, {}) 

    return sortedProducts
  }

  const filterProductsByType = (productsObj, selectedCategories) => {
    /* if no categories selected, show all products */
    if (selectedCategories.length === 0) {
      return productsObj
    }

    /* create new filtered products obj, .reduce() to build obj with only selected categories */
    const filteredProducts = selectedCategories.reduce((newObj, category) => {
      const categoryKey = category.charAt(0).toUpperCase() + category.slice(1) /* name needs to match to access correct property */
      newObj[categoryKey] = productsObj[categoryKey]
      return newObj
    }, {}) 

    return filteredProducts /* should return new filtered objs by type */
  }


  /* WHERE WE APPLY THE FILTERS BEFORE PASSING TO PRODUCTLIST.
  filter by category first then sort by price, more efficient. think of it like a factory/assembly line */
  let filteredProducts = filterProductsByType(products, selectedTypes) /* apply category filter, "let" so we can reassign to sort by price */
  filteredProducts = sortProductsByPrice(filteredProducts, priceSort) /* then sort */

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div className="mainContent">
      {/* PROPS WE PASS */}
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
