import ProductCard from "./ProductCard";

/* destructure products obj from props, cleaner way than using props.products
  parent is from the Products page */
function ProductList({products}) { 
  return (
    <main className="productList">

      {/* use Object.keys() to get array of categories: Discography, Fashion, Bunini from products obj,
        use map() to create sections for each category */}
      {Object.keys(products).map((categoryName) => (
        <section key={categoryName} className="container" id={categoryName.toLowerCase()}>
        {/* should match how I had it set up in first iteration: <section class="container" id="discography"> 
          key={categoryName}:
          - Required by React for list rendering
          - Uses category name as unique identifier */}

          <div className="productContainer" id={categoryName.toLowerCase() + "Products"}>
          {/* same as <div class="productContainer" id="discographyProducts"> */}

          {/* looping over each product in the products array and applying the ProductCard formating to each */}
            {products[categoryName] && products[categoryName].map((product, index) => (
                <ProductCard key={`${categoryName}-${index}`} product={product}/>
              ))}
          </div>

        </section>
      ))}

    </main>
  )
}

export default ProductList
