import PriceFilter from "./PriceFilter"
import ProductTypeFilter from "./ProductTypeFilter"
import CartButton from "./CartButton"

function FilterBar({priceSort, onPriceChange, selectedTypes, onTypeChange}) {
  return (
    <aside className="filterBar">
      <h2>FILTER</h2>
      
      <div className="filterSection" id="byPrice">
        <PriceFilter selectedSort={priceSort} onSortChange={onPriceChange} />
      </div>

      <div className="filterSection" id="byProduct">
        <ProductTypeFilter selectedTypes={selectedTypes} onTypeChange={onTypeChange} />
      </div>

      <CartButton />
    </aside>
  )
}

export default FilterBar
