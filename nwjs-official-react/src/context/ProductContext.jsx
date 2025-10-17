import { createContext, useState, useEffect } from "react"

export const ProductContext = createContext({})
/* will hold our product data and make it available to any component that wants to access it. export so other files can import it */

export function ProductProvider({children}) {
  {/* children prop:
  - Every component automatically receives a children prop
  - children represents whatever is between the opening and closing tags */}

  const [products, setProducts] = useState({}) /* useState used to manage actual product data */
  const [loading, setLoading] = useState(true) /* useState used to manage whether products are still being fetched */

  {/* useEffect lets us perform side effects after rendering which include fetching data from API (what we need here) */}
  useEffect(() => {
    fetch("/src/data/products.json") /* testing with JSON first, need to update to connect to AWS DB - still need to do */
      .then(response => response.json()) /* once fetched, response obj written in json format, which will turn into usable js materials */
      .then(data => {
        setProducts(data) /* updates products state, re-renders and changes from {} to product obj, so we'll see the data/products */
        setLoading(false) /* no longer loading, switch to false as we already fetched data here */
      })
      .catch(error => {
        console.error("Error loading products:", error)
        setLoading(false)
      })

  }, []) /* empty array = run once on mount */

  return (
    <ProductContext.Provider value={{products, loading}}>
      {children}
    </ProductContext.Provider>
  )
}

