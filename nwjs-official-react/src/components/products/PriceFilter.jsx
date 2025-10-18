/* function PriceFilter(props) {
  const selectedSort = props.selectedSort
  const onSortChange = props.onSortChange
  } */

function PriceFilter({selectedSort, onSortChange}) {
  return (
    <>
      <h3>PRICE</h3>

      <label>
        <input type="radio" name="price" value="low-to-high" 
        checked={selectedSort === "low-to-high"} 
        onChange={() => onSortChange("low-to-high")} 
        />
        Lowest to Highest
      </label>

      <label>
        <input type="radio" name="price" value="high-to-low"
          checked={selectedSort === "high-to-low"}
          onChange={() => onSortChange("high-to-low")}
        />
        Highest to Lowest
      </label>
    </>
  )
}

export default PriceFilter