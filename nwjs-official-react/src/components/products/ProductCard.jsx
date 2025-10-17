function ProductCard() {
  const priceFormat = `$${product.price.toFixed(2)}`;

  return (
    <div className="product">
      <img src={product.image} alt={product.alt} />
      <p className="productName">{product.name}</p>
      <p className="description">{product.description}</p>
      <h4 className="price">{priceFormat}</h4>

      <div>
        <button className="removeCartBtn">-</button>
        <button className="addCartBtn">+</button>
      </div>
    </div>
  )
}

export default ProductCard
