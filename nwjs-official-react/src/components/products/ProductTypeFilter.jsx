function ProductTypeFilter({selectedTypes, onTypeChange}) {
  return (
    <>
      <h3>Product Type</h3>
      <label>
        <input type="checkbox" name="product-type" value="discography"
          checked={selectedTypes.includes("discography")}
          onChange={() => onTypeChange("discography")}
        />
        Discography
      </label>

      <label>
        <input type="checkbox" name="product-type" value="fashion"
          checked={selectedTypes.includes("fashion")}
          onChange={() => onTypeChange("fashion")}
        />
        Fashion
      </label>

      <label>
        <input type="checkbox" name="product-type" value="bunini"
          checked={selectedTypes.includes("bunini")}
          onChange={() => onTypeChange("bunini")}
        />
        Bunini
      </label>
    </>
  )
}

export default ProductTypeFilter